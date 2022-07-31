import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

function Tab({ data }) {    
    const isDropdown = data.children.length > 0;
    return (
        <Wrapper>
                <div className="dropdown">
                    <div className="title">
                        <span>
                            {data.name}
                            {
                                isDropdown ?
                                <img className="down-arrow-image" src="https://ninjasfilestest.s3.amazonaws.com/arrow-small-down-1698.svg" />
                                :
                                <img className="streak-image" src="https://ninjasfilestest.s3.amazonaws.com/flame-1700.png" />
                            }
                        </span>
                    </div>
                    {
                        isDropdown &&
                            <div className="dropdown-content">
                                {data.children.map((item, index) => (
                                    <Link href={item.value}>
                                        <div key={index}>
                                            {item.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                    }
                </div>

        </Wrapper>
    )
}

export default Tab;

const Wrapper = styled.div`

    cursor: pointer;
    height: 100%;
    padding-right: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.fonts.primary};
    
    .dropdown {
        position: relative;
        display: inline-block;
        height: 100%;
        padding: 0px 14px;
        padding-left: 0px;
        padding-right: 12px;

        &:hover {

            .down-arrow-image {
                transform: rotate(180deg);
            }

            background-color: #66666610;

            .dropdown-content {
                display: block;
            }
        }


    }

    .title {
        display: inline-block;
        height: 100%;

        span {
            display: flex;
            margin: 12px auto;
            padding-left: 14px;
        }
    }

    .down-arrow-image {
        margin-left: 2px;
    }

    .streak-image {
        height: 22px;
        margin-left: 4px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        width: 240px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-bottom: 2px solid #ff3753;
    }

    .dropdown-content div {
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        &:hover {
            box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
            background-color: #fff;

        }
    }

`;
