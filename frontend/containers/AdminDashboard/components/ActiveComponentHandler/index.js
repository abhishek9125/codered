import React from 'react';
import styled from 'styled-components';

function ActiveComponentHandler({ activeComponent, active, setActive }) {

    const parsedComponent = React.cloneElement(activeComponent.component,{ active, setActive })

    return (
        <Wrapper>
            {parsedComponent}
        </Wrapper>
    )
}

export default ActiveComponentHandler;

const Wrapper = styled.div`

    height: 100vh;
    padding: 30px;
`;
