const { createSlug } = require('../helpers');
const Category = require('../models/category');

exports.createCategory = async (req, res) => {

    const { name, description } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const slug = createSlug(name);

    const category = await Category.findOne({ slug }).exec();

    if(category) {
        return res.status(400).json({
            status: false,
            message: 'Category is already present in Database.',
            data: category
        });
    }

    try {
        let id;
        const count = await Category.estimatedDocumentCount();
        if(count == 0) {
            id = 1;
        } else {
            let latestCategory = await Category.find().sort({ createdAt: -1 }).limit(1);
            id = latestCategory[0].id + 1;
        }

        await Category.create({ ...req.body, id });

        return res.json({
            status: true,
            message: 'New Category Added Successfully',
            data: { name, description, slug, id, isParent, active, categories }
        });

    } catch (error) {
        console.log('Error Adding New Category : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Adding New Category',
        });
    }
    
}

exports.updateCategory = async (req, res) => {
    
    const { name, description, slug } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const newSlug = createSlug(name);

    try {

        const category = await Category.findOne({ slug }).exec();

        if(!category) {
            return res.status(400).json({
                status: false,
                message: 'Category is not present in Database.'
            });
        }

        await Category.findOneAndUpdate({ slug }, { ...req.body, newSlug } , { new: true }).exec();

        return res.json({
            status: true,
            message: 'Category Updated Successfully',
            data: { 
                name, description, slug, id: category.id, isParent: category.isParent, 
                active: category.active , categories: category.categories 
            }
        });

    } catch (error) {
        console.log('Error Updating Category : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Updating Category',
        });
    }

}

exports.fetchAllCategories = async (req, res) => {
    
    try {
        const categories = await Category.find({}, 'name description slug id active isParent categories -_id')
        .sort([['createdAt', 'asc']])
        .exec();

        return res.status(200).json({
            status: true,
            message: 'Categories Fetched Successfully..!!',
            data: categories
        });

    } catch(error) {
        console.log('Error Fetching Categories : ', error);
        res.status(400).json({
            error: error.message
        })
    }
}