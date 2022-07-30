import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showLoginCard, setUserData } from 'containers/Auth/redux/actions';
import { customToast } from 'config/toast';

function RegisterContainer({ showLoginCard, setUserData }) {

    const [firstName, setFirstName] = useState("Abhishek");
    const [lastName, setLastName] = useState("Agarwal");
    const [email, setEmail] = useState("abhishek@gmail.com");
    const [password, setPassword] = useState("abhishek");
    const [college, setCollege] = useState("Thapar Institute of Engineering & Technology");
    const [linkedIn, setLinkedIn] = useState("someRandomId");
    const [github, setGithub] = useState("someGithubRepos");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    
    const handleLogin = () => {
        showLoginCard();
        router.push('/');
    }
    
    const handleGuest = () => {
        router.push('/');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            setLoading(true);
            const payload = { firstName, lastName, name: firstName, email, password, college, linkedIn, github };
            const response = await axios.post(`${config.apiUrl}/auth/signup`, payload);
            const userDetails = response.data.data;         
            setUserData(userDetails);
            localStorage.setItem('user', JSON.stringify(userDetails));
            axios.defaults.headers.common["Authorization"] = `Bearer ${userDetails.token}`;
            customToast('Registration Successful', true);
            router.push('/');


        } catch(error) {
            customToast(error.response.data.message, false, '0px');
            console.log('Error Logging User In : ', error.response.data.message);
        }

        setLoading(false);
    }

    return (
        <Wrapper>

            <div className="box">
                <div className="form-wrapper">
  
                    <form className="form-box">
                        <div className="input-fields">
                            <div className="header">
                                CodeRed
                            </div>
                            <div className="names">
                                <div className="form-group">
                                    <input 
                                        type="name" 
                                        className="form-control half-input" 
                                        value={firstName}
                                        placeholder="Your First Name"
                                        onChange={e => setFirstName(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="name" 
                                        className="form-control half-input" 
                                        value={lastName}
                                        placeholder="Your Last Name"
                                        onChange={e => setLastName(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    value={email}
                                    placeholder="Your Email"
                                    onChange={e => setEmail(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={linkedIn}
                                    placeholder="Your LinkedIn Profile"
                                    onChange={e => setLinkedIn(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={github}
                                    placeholder="Your Github Profile"
                                    onChange={e => setGithub(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={college}
                                    placeholder="Your College"
                                    onChange={e => setCollege(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    value={password}
                                    placeholder="Your Password"
                                    onChange={e => setPassword(e.target.value)}
                                    autoFocus
                                />
                            </div>

                        </div>
                        <div className="right-box">
                            <div className="buttons">
                                <button 
                                    className="button"
                                    onClick={handleSubmit}
                                    disabled={!firstName || !firstName || !email || password.length < 6 || loading}
                                >
                                    Sign Up
                                </button>

                                <div className="login-btn" onClick={handleLogin}>
                                   Login
                                </div>
                                <div className="guest-btn" onClick={handleGuest}>
                                   Continue as Guest
                                </div>

                                <div className="policy">
                                    By Continuing, you agree to CodeRed's Terms and Conditions and Privacy Policy.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    setUserData: bindActionCreators(setUserData, dispatch), 
    showLoginCard: bindActionCreators(showLoginCard, dispatch), 
});
  
export default connect(null, mapDispatchToProps)(RegisterContainer);


const Wrapper = styled.div`

    height: 100vh;
    background: #454545;

    background: -webkit-linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1));

    .header {
        margin-left: 11px;
        color: ${({ theme }) => theme.general.primaryColor};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 32px;
        font-weight: 600;
        letter-spacing: 0.8px;
    }

    .box {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 1100px;
        min-height: 500px;
        z-index: 11;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        overflow: hidden scroll;
        -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
        -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
        box-shadow:0 0 10px rgba(0,0,0,0.4);
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    .form-wrapper {
        margin-left: 20px;
    }

    .form-control {
        width: 600px;
        margin: 10px;
        padding: 10px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 2px;
        margin-bottom: 20px;
    }

    .half-input {
        width: 280px;
    }

    .names {
        display: flex;
    }

    .form-box {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    .input-fields {
        margin-top: 20px;
        margin-right: 20px;
    }

    .right-box {
        
        background-color: #202020;
        height: 500px;

        .buttons {
            margin: 150px 30px;
            letter-spacing: 0.8px;
            font-weight: 600;
        }

        .button {
            background-color: ${({ theme }) => theme.general.primaryColor};
            color: white;
            width: 320px;
            margin: auto 30px;
            padding: 10px;
            border: 0;
            border-radius: 2px;
            box-shadow:0 0 15px 4px rgba(0,0,0,0.16);
            cursor: pointer;
        }

        .login-btn {
            background-color: ${({ theme }) => theme.general.primaryColor};
            color: white;
            width: 320px;
            margin: 20px 30px;
            border: 0;
            border-radius: 2px;
            box-shadow:0 0 15px 4px rgba(0,0,0,0.16);
            cursor: pointer;
            margin-bottom: 0px;
            padding: 5px 0px;
            font-size: 14px;
            text-align: center;
        }

        .guest-btn {
            color: ${({ theme }) => theme.general.primaryColor};
            background-color: white;
            width: 320px;
            margin: 20px 30px;
            border: 0;
            border-radius: 2px;
            box-shadow:0 0 15px 4px rgba(0,0,0,0.16);
            cursor: pointer;
            margin-bottom: 0px;
            padding: 5px 0px;
            font-size: 14px;
            text-align: center;
        }

        .policy {
            margin: 20px 32px;
            display: flex;
            width: 320px;
            font-size: 12px;
            letter-spacing: 1px;
            margin-bottom: 30px;
            color: white;
        }

    }

`;