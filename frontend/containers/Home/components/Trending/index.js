import React from 'react';
import styled from 'styled-components';

function Trending() {
    return (
        <Wrapper>

            <div className="header">
                What's New
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="type">
                        Top Problem Lists
                    </div>
                    <div className="title">
                        Top Salesforce Coding Interview Questions
                    </div>
                </div>

                <div className="card">
                    <div className="type">
                        Top Problem Lists
                    </div>
                    <div className="title">
                        Top Salesforce Coding Interview Questions
                    </div>
                </div>

                <div className="card">
                    <div className="type">
                        Top Problem Lists
                    </div>
                    <div className="title">
                        Top Salesforce Coding Interview Questions
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default Trending;

const Wrapper = styled.div`

    width: 100%;
    background: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #424242;
    box-shadow: 0 2px 4px rgb(90 91 106 / 24%), 0 1px 2px rgb(58 58 68 / 24%);
    display: flex;
    flex-direction: column;

    .header {
        background-color: ${({ theme }) => theme.general.primaryColor};
        color: #f5f5f5;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        font-family: ${({ theme }) => theme.fonts.primary};
        padding: 12px;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
    }

    .card-wrapper {
        .card {

            background: hsla(0,0%,100%,.1);
            border: 1px solid #e0e0e0;
            box-sizing: border-box;
            border-radius: 8px;
            margin: 20px;
            padding: 10px 16px;
            display: flex;
            flex-direction: column;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.general.primaryColor};

                .type {
                    background-color: #33006F10;
                    color: #f5f5f5;
                }

                .title {
                    color: #f5f5f5;
                }
                
            }

            .type {
                background: ${({ theme }) => theme.general.primaryColor}20;
                border-radius: 100px;
                padding: 3px 8px;
                font-weight: 700;
                font-size: 10px;
                line-height: 13px;
                text-transform: uppercase;
                color: ${({ theme }) => theme.general.primaryColor};
                width: max-content;
                margin-bottom: 7px;
                margin-left: -3px; 
            }
            
            .title {
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: 48px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

        }
    }
}
`;