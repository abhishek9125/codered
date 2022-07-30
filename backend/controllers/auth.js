const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/auth');
const User = require('../models/user');

exports.signup = async (req, res) => {

    const { name, email, password } = req.body;

    if(!name) {
        return res.status(400).json({
            status: false,
            message: 'Name is required.'
        });
    }

    if(!email) {
        return res.status(400).json({
            status: false,
            message: 'Email is required.'
        });
    }

    if(!password || password.length < 6) {
        return res.status(400).json({
            status: false,
            message: 'Password is required and should be atleast 6 characters long.'
        });
    }
    
    const userExists = await User.findOne({ email });

    if(userExists) {
        return res.json({
            error: 'Email is already taken.'
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await User.create({ name, email, password: hashedPassword });
        return res.json({
            status: true,
            message: 'User Registered Successfully',
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            }
        });
    } catch(error) {
        console.log('Error Registering User : ', error);
        return res.status(400).json({
            status: false,
            message: 'User Registration Failed. Please Try Again..!!'
        });
    }
}


exports.signin = async (req, res) => {

    try {
        
        const { email, password } = req.body
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({
                status: false,
                message: 'No User Found for these Credentials. Please Register to Continue.'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(isPasswordValid) {
            return res.status(200).json({
                status: true,
                message: 'Login Successful',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id),
                }
            });
        }

    } catch (error) {

        console.log('Error Logging In User : ', error);
        return res.status(400).json({
            status: false,
            message: 'User Login Failed. Please Try Again..!!'
        });

    }

}


exports.fetchUserDetails = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'User Details Fetched Successfully',
        data: req.user
    });

}
