import React from 'react';
import styled from 'styled-components';
import { ADMIN_LINKS } from 'utils/constants';

function Sidebar({ setActiveComponent, setActive }) {
    return (
        <Wrapper>
            <div className="title">
                Dashboard
            </div>

            <div className="list">
                {
                    ADMIN_LINKS.map((link, index) => (
                        <div key={index} className="list-item" onClick={() => {setActiveComponent(link); setActive(null)}}>
                            {link.title}
                        </div>
                    ))
                }
            </div>

        </Wrapper>
    )
}

export default Sidebar;

const Wrapper = styled.div`

    height: 100%;
    -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
    -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
    box-shadow:0 0 10px rgba(0,0,0,0.4);
    
    .title {
        color: ${({ theme }) => theme.general.primaryColor};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 26px;
        padding-top: 20px;
        padding-left: 30px;
    }

    .list {
        padding-top: 10px;
        font-size: 16px;
    }

    .list-item {
        
        cursor: pointer;
        padding-left: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-family: ${({ theme }) => theme.fonts.secondary};
        letter-spacing: 0.48px;

        &:hover {
            color: white;
            background: ${({ theme }) => theme.general.primaryColor};
        } 
    }

`;
