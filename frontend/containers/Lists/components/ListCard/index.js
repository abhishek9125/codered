import React from 'react';
import styled from 'styled-components';

function ListCard({ list }) {
    return (
        <Wrapper>
            <div className="list-header">
                <div className="list-logo">
                    <img src={list.logo} className="logo" />
                </div>
                <div className="list-content">
                    {list.name}
                </div>
            </div>

            <div className="card-body">
                {list.description}
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
                View Problem List
            </div>
        </Wrapper>
    )
}

export default ListCard;

const Wrapper = styled.div`

    background-color: #fff;
    box-shadow: -1px 9px 18px rgb(21 11 35 / 10%);
    border-radius: 6px;
    padding: 12px 20px;
    width: 380px;
    height: 365px;

    box-sizing: border-box;
    transition: transform .2s ease;

    &:hover {
        transform: scale(1.02);
    }

    .list-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .list-logo { 
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

    .list-content {
        color: #424242;
        margin-left: 12px;
        padding-right: 10px;
        .title {
            font-size: 20px;
            font-weight: 700;
        }

        .text {
            font-size: 14px;
        }
    }

    .card-body {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #616161;
        height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .stats {
        display: flex;
        gap: 48px;
        margin-top: 20px;
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
        margin-top: 30px;
        background-color: ${({ theme }) => theme.general.primaryColor};
        width: max-content;
        color: white;
        text-transform: capitalize;
        padding: 10px 36px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

`;
