import React from 'react';
import styled from 'styled-components';

function Gap({ height }) {
    return (
        <Wrapper height={height} />            
    )
}

export default Gap;

const Wrapper = styled.div`
    min-height: ${props => props.height ? props.height: '10px'};
`;