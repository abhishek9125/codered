import React from 'react';
import styled from 'styled-components';

function BundleCard({ bundle }) {
    return (
        <Wrapper>
            <div className="company">
                <div className="company-logo">
                    <img src={bundle.logo} className="logo" />
                </div>
                <div className="company-content">
                    <div className="title">
                        {bundle.name}
                    </div>
                    <div className="text">
                        Interview Preparation
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="text">
                    Includes
                </div>
                <div className="list">
                    <li>Interview Experiences</li>
                    <li>Problem Listing</li>
                    <li>Guided Paths</li>
                    <li>Mock Test</li>
                </div>
            </div>

            <div className="stats">
                <div className="stat">
                    <div className="stat-number">
                        455
                    </div>
                    <div className="stat-text">
                        Total Problems  
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-number">
                        43680
                    </div>
                    <div className="stat-text">
                        Total Score
                    </div>
                </div>
            </div>

            <div className="button">
                View
            </div>
        </Wrapper>
    )
}

export default BundleCard;

const Wrapper = styled.div`

    background-color: #fff;
    box-shadow: -1px 9px 18px rgb(21 11 35 / 10%);
    border-radius: 6px;
    padding: 12px 20px;
    width: 100%;
    box-sizing: border-box;
    transition: transform .2s ease;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }

    .company {
        display: flex;
        align-items: center;
    }

    .company-logo { 
        display: flex;
        align-items: center;
        border: 0.622222px solid #e0e0e0;
        border-radius: 56px;
        overflow: hidden;
        height: 56px;
        width: 56px;
        min-height: 56px;
        min-width: 56px;

        .logo { 
            width: 56px;
            max-height: 56px;
        }
    }

    .company-content {
        color: #424242;
        margin-left: 12px;

        .title {
            font-size: 20px;
            font-weight: 700;
        }

        .text {
            font-size: 14px;
        }
    }

    .card-body {

        margin-top: 12px;
        color: #424242;

        .list {
            font-size: 14px;
            margin-left: 20px;
            margin-bottom: 4px;
        }
    }

    .stats {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        .stat {
            display: flex;
            flex-direction: column;

            .stat-number {
                font-weight: 700;
                font-size: 32px;
                line-height: 42px;
                color: #616161;
            }

            .stat-text {
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: #9e9e9e;
            }
        }
    }

    .button {
        margin-top: 16px;
        background-color: ${({ theme }) => theme.general.primaryColor};
        width: max-content;
        color: white;
        text-transform: capitalize;
        padding: 6px 36px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;
