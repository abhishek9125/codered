import React, { useState } from 'react';
import styled from 'styled-components';

function Promotions() {

    const [showPromotion, setShowPromotion] = useState(true);

    if(!showPromotion) {
        return null;
    }

    return (
        <Wrapper>
            <div />
            <div className="middle-section">
                <div className="title">
                    Have you registered for CodeRed Monthly Contest 4 yet!
                </div>
                <div className="register-button">
                    Register Now
                </div>
            </div>
            <div className="close-button" onClick={() => {setShowPromotion(false)}}>
                <img src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/cross-icon.svg" />
            </div>
        </Wrapper>
    )
}

export default Promotions;

const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    background-image: url('https://files.codingninjas.in/new-contest-notification-16905.svg');
    background-size: cover;
    font-family: ${({ theme }) => theme.fonts.primary};
    height: 50px;
    
    .middle-section {
        display: flex;
    }

    .title {
        color: #fff;
        margin: auto;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        padding: 14px 0px;
        letter-spacing: 0.6px;
        margin-right: 14px;
    }

    .register-button {
        background: ${({ theme }) => theme.general.primaryColor};
        border-radius: 4px;
        color: #fff;
        font-weight: 600;
        padding: 4px 20px;
        font-size: 16px;
        cursor: pointer;
        height: max-content;
        margin: auto;
        margin-left: 10px;
        letter-spacing: 0.5px;
    }

    .close-button img {
        width: 20px;
        height: 20px;
        right: 6px;
        cursor: pointer;
        margin: auto 0px;
        margin-top: 16px;
        margin-right: 15px;
    }

`;