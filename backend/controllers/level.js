const Level = require('../models/level');

exports.createLevel = async (req, res) => {

    const { name, threshold, level, color_badge, shadow_badge } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    if(!threshold && threshold != 0) {
        return res.status(400).json({
            status: false,
            message: 'Threshold is required.'
        });
    }

    if(!level) {
        return res.status(400).json({
            status: false,
            message: 'Level is required.'
        });
    }

    if(!color_badge) {
        return res.status(400).json({
            status: false,
            message: 'Color Badge is required.'
        });
    }

    if(!shadow_badge) {
        return res.status(400).json({
            status: false,
            message: 'Shadow Badge is required.'
        });
    }

    try {

        await Level.create(req.body);

        return res.json({
            status: true,
            message: 'New Level Created Successfully',
            data: { name, threshold, level, color_badge, shadow_badge }
        });

    } catch (error) {
        console.log('Error Creating New Level : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Creating New Level',
        });
    }
    
}

exports.updateLevel = async (req, res) => {
    
    const { name, threshold, level, color_badge, shadow_badge } = req.body;


    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    if(!threshold && threshold != 0) {
        return res.status(400).json({
            status: false,
            message: 'Threshold is required.'
        });
    }

    if(!level) {
        return res.status(400).json({
            status: false,
            message: 'Level is required.'
        });
    }

    if(!color_badge) {
        return res.status(400).json({
            status: false,
            message: 'Color Badge is required.'
        });
    }

    if(!shadow_badge) {
        return res.status(400).json({
            status: false,
            message: 'Shadow Badge is required.'
        });
    }

    try {

        await Level.findOneAndUpdate({ level }, req.body, { new: true }).exec();

        return res.json({
            status: true,
            message: 'Level Updated Successfully',
            data: { name, threshold, level, color_badge, shadow_badge }
        });

    } catch (error) {
        console.log('Error Updating Level : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Updating Level',
        });
    }

}

exports.fetchAllLevels = async (req, res) => {
    
    try {
        const levels = await Level.find({}, 'name threshold level color_badge shadow_badge -_id')
        .sort([['createdAt', 'asc']])
        .exec();

        return res.status(200).json({
            status: true,
            message: 'Levels Fetched Successfully..!!',
            data: levels
        });

    } catch(error) {
        console.log('Error Fetching Levels List: ', error);
        res.status(400).json({
            error: error.message
        })
    }
    
}