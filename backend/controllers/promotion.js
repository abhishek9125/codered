const { createSlug } = require('../helpers');
const Promotion = require('../models/promotion');

exports.createPromotion = async (req, res) => {

    const { name } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const slug = createSlug(name);

    const promotion = await Promotion.findOne({ slug }, '-_id').exec();

    if(promotion) {
        return res.status(400).json({
            status: false,
            message: 'Promotion is already present in Database.',
            data: promotion
        });
    }

    try {

        const newPromotion = await Promotion.create({ ...req.body, slug });

        return res.json({
            status: true,
            message: 'New Promotion Added Successfully',
            data: newPromotion
        });

    } catch (error) {
        console.log('Error Adding New Promotion : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Adding New Promotion',
        });
    }
}

exports.activePromotion = async (req, res) => {
    
    try {
        const promotion = await Promotion.findOne({ active: true }, '-_id').exec()

        if(!promotion) {
            return res.status(200).json({
                status: false,
                message: 'No Promotion is Currently Active',
                data: null
            });
        }

        return res.status(200).json({
            status: true,
            message: 'Promotion Fetched Successfully..!!',
            data: promotion
        });

    } catch(error) {
        console.log('Error Fetching Promotion : ', error);
        res.status(400).json({
            error: error.message
        })
    }
}

exports.enablePromotion = async (req, res) => {
    
    const { slug } = req.body;

    if(!slug) {
        return res.status(400).json({
            status: false,
            message: 'Slug is required.'
        });
    }

    try {

        await Promotion.findOneAndUpdate({ active: true }, { active: false }, { new: true }).exec();
        const enabledPromotion = await Promotion.findOneAndUpdate({ slug }, { active: true } , { new: true }).exec();

        return res.json({
            status: true,
            message: 'Promotion Disabled Successfully',
            data: enabledPromotion
        });

    } catch (error) {
        console.log('Error Disabling Promotion: ', error);
        res.status(400).json({
            status: false,
            error: error.message
        })
    }

}

exports.disablePromotion = async (req, res) => {
    
    const { slug } = req.body;

    if(!slug) {
        return res.status(400).json({
            status: false,
            message: 'Slug is required.'
        });
    }

    try {

        const disabledPromotion = await Promotion.findOneAndUpdate({ slug }, { active: false } , { new: true }).exec();

        return res.json({
            status: true,
            message: 'Promotion Disabled Successfully',
            data: disabledPromotion
        });

    } catch (error) {
        console.log('Error Disabling Promotion: ', error);
        res.status(400).json({
            status: false,
            error: error.message
        })
    }

}

exports.fetchAllPromotions = async (req, res) => {
    
    try {
        const promotions = await Promotion.find({}, 'name text slug banner active')
        .sort([['createdAt', 'asc']])
        .exec();

        return res.status(200).json({
            status: true,
            message: 'Promotions Fetched Successfully..!!',
            data: promotions
        });

    } catch(error) {
        console.log('Error Fetching Promotions : ', error);
        res.status(400).json({
            status: false,
            error: error.message
        })
    }
}