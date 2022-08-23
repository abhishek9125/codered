const { createSlug } = require('../helpers');
const List = require('../models/list');

exports.createList = async (req, res) => {

    const { name, description } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const slug = createSlug(name);

    const list = await List.findOne({ slug }).exec();

    if(list) {
        return res.status(400).json({
            status: false,
            message: 'List is already present in Database.'
        });
    }

    try {
        let id;
        const count = await List.estimatedDocumentCount();
        if(count == 0) {
            id = 1;
        } else {
            let latestList = await List.find().sort({ createdAt: -1 }).limit(1);
            id = latestList[0].id + 1;
        }

        await List.create({ ...req.body, slug, id });

        return res.json({
            status: true,
            message: 'New List Added Successfully',
            data: { name, description, slug, id }
        });

    } catch (error) {
        console.log('Error Adding New List : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Adding New List',
        });
    }
    
}

exports.updateList = async (req, res) => {
    
    const { name, description, slug } = req.body;

    if(!slug) {
        return res.status(400).json({
            status: false,
            message: 'Slug is required.'
        });
    }

    const newSlug = name ? createSlug(name) : slug;

    try {

        const list = await List.findOne({ slug }).exec();

        if(!list) {
            return res.status(400).json({
                status: false,
                message: 'List is not present in Database.'
            });
        }

        const { name, description, showInExplore } = await List.findOneAndUpdate({ slug }, { ...req.body, newSlug } , { new: true }).exec();

        return res.json({
            status: true,
            message: 'List Updated Successfully',
            data: { name, description, slug, id : list.id, showInExplore }
        });

    } catch (error) {
        console.log('Error Updating List : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Updating List.',
        });
    }

}

exports.fetchAllLists = async (req, res) => {
    
    try {
        const lists = await List.find({}, 'name description slug id active showInExplore logo listType -_id')
        .sort([['createdAt', 'asc']])
        .exec();

        return res.status(200).json({
            status: true,
            message: 'Lists Fetched Successfully..!!',
            data: lists
        });

    } catch(error) {
        console.log('Error Fetching Lists : ', error);
        res.status(400).json({
            error: error.message
        })
    }
}