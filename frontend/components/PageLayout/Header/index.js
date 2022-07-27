import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Wrapper>
            <div className="logo">
                CodeRed
            </div>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 40px;
    background-color: white;
    position: sticky;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
    .logo {
        color: red;
        font-size: 24px;
        font-weight: 800;
    }
`;
