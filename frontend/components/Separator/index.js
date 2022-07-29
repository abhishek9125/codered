import React from 'react';
import styled from 'styled-components';

function Separator() {
    return (
        <Wrapper />            
    )
}

export default Separator;

const Wrapper = styled.div`
    height: 1px;
    width: 100%;
    margin: 30px 0;
    background-color: #e0e0e0;
`;
