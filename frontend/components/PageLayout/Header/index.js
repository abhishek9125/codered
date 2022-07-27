import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { HEADER_CONSTANTS } from 'utils/constants';

function Header() {
    return (
        <Wrapper>
            
            <div className="logo">
                CodeRed
            </div>

            <div className="tabs">
                {
                    HEADER_CONSTANTS.map((data, index) => (
                        <div className="tab-wrapper">
                            <Tab data={data} key={index} />
                        </div>
                    ))
                }
            </div>

        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 45px;
    background-color: white;
    position: sticky;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
    display: flex;

    .logo {
        color: red;
        font-size: 24px;
        font-weight: 600;
        padding: 0px 20px;
        letter-spacing: 1px;
        margin: auto 0px;
    }

    .tabs {
        display: flex;
        justify-content: space-between;
        margin: 0px 60px;
        /* width: 50%; */
    }
`;
