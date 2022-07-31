const { createSlug } = require('../helpers');
const Company = require('../models/company');

exports.createCompany = async (req, res) => {

    const { name, description, logo } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const slug = createSlug(name);

    const company = await Company.findOne({ slug }).exec();

    if(company) {
        return res.status(400).json({
            status: false,
            message: 'Company is already present in Database.'
        });
    }

    try {
        let id;
        const count = await Company.estimatedDocumentCount();
        if(count == 0) {
            id = 1;
        } else {
            let latestCompany = await Company.find().sort({ createdAt: -1 }).limit(1);
            id = latestCompany[0].id + 1;
        }

        await Company.create({ name, description, logo, slug, id });

        return res.json({
            status: true,
            message: 'New Company Added Successfully',
            data: { name, description, logo, slug, id }
        });

    } catch (error) {
        console.log('Error Adding New Company : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Adding New Company',
        });
    }
    
}

exports.updateCompany = async (req, res) => {
    
    const { name, description, logo, slug } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const newSlug = createSlug(name);

    try {

        const company = await Company.findOne({ slug }).exec();

        if(!company) {
            return res.status(400).json({
                status: false,
                message: 'Company is not present in Database.'
            });
        }

        await Company.findOneAndUpdate({ slug }, { ...req.body, newSlug } , { new: true }).exec();

        return res.json({
            status: true,
            message: 'Company Updated Successfully',
            data: { name, description, logo, slug, id : company.id }
        });

    } catch (error) {
        console.log('Error Updating Company. : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Updating Company.',
        });
    }

}

exports.fetchAllCompanies = async (req, res) => {
    
    try {
        const companies = await Company.find({}, 'name description logo slug id active -_id')
        .sort([['createdAt', 'asc']])
        .exec();

        return res.status(200).json({
            status: true,
            message: 'Companies Fetched Successfully..!!',
            data: companies
        });

    } catch(error) {
        console.log('Error Fetching Companies List: ', error);
        res.status(400).json({
            error: error.message
        })
    }
}