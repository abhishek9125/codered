const { createSlug } = require('../helpers');
const Problem = require('../models/problem');

exports.createProblem = async (req, res) => {

    const { title, description, averageTime, category, company, list, difficulty } = req.body;

    if(!title) {
        return res.status(400).json({
            status: false,
            message: 'Title is required.'
        });
    }

    if(!description) {
        return res.status(400).json({
            status: false,
            message: 'Description is required.'
        });
    }

    const slug = createSlug(title);

    const problem = await Problem.findOne({ slug }, '-_id').exec();

    if(problem) {
        return res.status(400).json({
            status: false,
            message: 'Problem is already present in Database.',
            data: problem
        });
    }

    try {
        let id;
        const count = await Problem.estimatedDocumentCount();

        if(count == 0) {
            id = 1;
        } else {
            let latestProblem = await Problem.find().sort({ createdAt: -1 }).limit(1);
            id = latestProblem[0].id + 1;
        }

        const newProblem = await Problem.create({ ...req.body, slug, id });
        const { attempted, upvote } = newProblem;
        return res.json({
            status: true,
            message: 'New Category Added Successfully',
            data: { title, slug, id, description, averageTime, category, company, list, difficulty, attempted, upvote }
        });

    } catch (error) {
        console.log('Error Adding New Problem : ', error);
        return res.status(400).json({
            status: false,
            message: 'Error Adding New Problem',
            error
        });
    }

}

exports.updateProblem = async (req, res) => {

    const { title, slug } = req.body;

    if(!title) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    const newSlug = createSlug(title);

    try {

        const problem = await Problem.findOne({ slug }).exec();

        if(!problem) {
            return res.status(400).json({
                status: false,
                message: 'Problem is not present in Database.'
            });
        }

        const updatedProblem = await Problem.findOneAndUpdate({ slug }, { ...req.body, newSlug } , { new: true }).exec();

        const { id, description, averageTime, category, company, list, difficulty, attempted, upvote } = updatedProblem;

        return res.json({
            status: true,
            message: 'Problem Updated Successfully',
            data: { 
                title, newSlug, id, description, averageTime, category, company, list, difficulty, attempted, upvote
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

exports.fetchAllProblems = async (req, res) => {
    

}