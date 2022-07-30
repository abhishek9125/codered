import React, { useState } from 'react';
import styled from 'styled-components';
import Overlay from 'components/Overlay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideLoginCard,setUserData } from 'containers/Auth/redux/actions';
import axios from 'axios';
import config from 'config/env';

function LoginCard({ hideLoginCard, setUserData }) {

    const [email, setEmail] = useState("abcdsd@gmail.com");
    const [password, setPassword] = useState("abcdefgh");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.post(`${config.apiUrl}/auth/signin`, { email, password });
            const userDetails = response.data.data;            
            setUserData(userDetails);
            localStorage.setItem('user', JSON.stringify(userDetails));
            axios.defaults.headers.common["Authorization"] = `Bearer ${userDetails.token}`;
            hideLoginCard();
        } catch(error) {
            console.log('Error Logging User In : ', error);
        }

        setLoading(false);

    }

    return (
        <>
            <Overlay open={true} onClick={() => hideLoginCard()} />
            <Wrapper>

                <div className="close-button" onClick={() => hideLoginCard()}>
                    <div className="close-icon-1" />
                    <div className="close-icon-2" />
                </div>

                <div className="header">
                    CodeRed
                </div>

                <div className="content">
                    <div>
                        Get Access to More Personalised Features for Interview Preparation.
                    </div>
                </div>

                <form className="form-wrapper">
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
                            type="password" 
                            className="form-control" 
                            value={password}
                            placeholder="Your Password"
                            onChange={e => setPassword(e.target.value)}
                            autoFocus
                        />
                    </div>

                    <button 
                        className="button"
                        onClick={handleSubmit}
                        disabled={!email || password.length < 6 || loading}
                    >
                        Login with Email/Password
                    </button>
                </form>
                <div className="more-buttons">
                    <div className="forgot">
                        Forgot Password?
                    </div>
                    <div className="signup">
                        Sign Up
                    </div>
                </div>

                <div className="policy">
                    By Continuing, you agree to CodeRed's Terms and Conditions and Privacy Policy.
                </div>
            </Wrapper>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setUserData: bindActionCreators(setUserData, dispatch), 
    hideLoginCard: bindActionCreators(hideLoginCard, dispatch),
});
  
export default connect(null, mapDispatchToProps)(LoginCard);

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 380px;
    z-index: 1001;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden scroll;
    -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
    -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
    box-shadow:0 0 10px rgba(0,0,0,0.4);

    .header {
        color: ${({ theme }) => theme.general.primaryColor};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 32px;
        text-align: center;
        margin-top: 10px;
        font-weight: 600;
        text-shadow: 1px 1px 4px rgba(255, 55, 83, 0.6);
        letter-spacing: 0.8px;
    }

    .content {
        color: ${({ theme }) => theme.general.primaryColor};
        margin: 15px 30px;
        display: flex;
        width: 320px;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-bottom: 15px;
    }

    .form-control {
        width: 300px;
        margin: 10px 30px;
        padding: 10px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 2px;
    }

    .button {
        background-color: ${({ theme }) => theme.general.primaryColor};
        width: 320px;
        margin: 10px 30px;
        padding: 10px;
        border: 0;
        border-radius: 2px;
        color: white;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.16);
        cursor: pointer;
        margin-bottom: 5px;
    }

    .more-buttons {
        color: ${({ theme }) => theme.general.primaryColor};
        margin: 15px 30px;
        display: flex;
        width: 320px;
        justify-content: space-between;
        font-weight: 600;
    }

    .policy {
        margin: 15px 30px;
        display: flex;
        width: 320px;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-bottom: 30px;
    }

    .close-icon-1 {

        position: absolute;
        top: 10px;
        right: 20px;
        content: " ";
        height: 20px;
        width: 2px;
        background-color: #333;
        transform: rotate(45deg);
        cursor: pointer;

    }

    .close-icon-2 {
        position: absolute;
        top: 10px;
        right: 20px;
        content: " ";
        height: 20px;
        width: 2px;
        background-color: #333;
        transform: rotate(-45deg);
        cursor: pointer;
    }
`;