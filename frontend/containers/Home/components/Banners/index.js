import React from 'react';
import styled from 'styled-components';

function Banners() {
    return (
        <Wrapper>
            <div className="left-box">
                <div className="title">One-stop destination to crack</div>
                <div className="subtitle">Your Next Big Tech <br />Interview</div>
                <div className="buttons">
                    <div className="button1">
                        Follow Guided Paths
                    </div>
                    <div className="button2">
                        Solve Problem Sets
                    </div>
                </div>
            </div>
            <div className="right-box">
                <img src="https://files.codingninjas.in/ps-explore-home-address-11258.svg" />
            </div>
        </Wrapper>
    )
}

export default Banners;

const Wrapper = styled.div`
    
    background-image: url('https://files.codingninjas.in/home-explore-gradient-17415.png');
    display: flex;
    justify-content: space-around;
    height: 400px;
    background-size: cover;
    margin: 50px 110px;
    padding-bottom: 30px;

    .left-box {
        color: white;
        font-family: ${({ theme }) => theme.fonts.primary};
        align-self: center;

        .title {
            font-weight: 600;
            font-size: 32px;
            line-height: 42px;
        }

        .subtitle {
            margin-top: 4px;
            font-weight: 600;
            font-size: 40px;
            line-height: 52px;
        }

        .buttons {

            display: flex;
            font-family: ${({ theme }) => theme.fonts.secondary};
            margin-top: 10px;

            .button1 {
                background-color: ${({ theme }) => theme.general.primaryColor};
                color: white;
                padding: 7px 10px;
                height: max-content;
                border-radius: 4px;
                margin-right: 15px;
                cursor: pointer;
                border: 1px solid ${({ theme }) => theme.general.primaryColor};
            }

            .button2 {
                color: ${({ theme }) => theme.general.primaryColor};
                background-color: #feeee5;   
                border-radius: 4px;
                padding: 7px 10px;
                height: max-content;
                font-weight: 600;
                border: 1px solid ${({ theme }) => theme.general.primaryColor};
                cursor: pointer;
            }
        }
    }

    .right-box {
        align-self: center;
    }
    

`;