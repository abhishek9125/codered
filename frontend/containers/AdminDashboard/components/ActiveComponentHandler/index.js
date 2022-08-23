import React from 'react';
import styled from 'styled-components';

function ActiveComponentHandler({ activeComponent }) {
    return (
        <Wrapper>
            {activeComponent.component}
        </Wrapper>
    )
}

export default ActiveComponentHandler

const Wrapper = styled.div`

    height: 100vh;
    padding: 30px;
`;
