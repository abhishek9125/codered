import styled from 'styled-components';

export default styled.div`
    position: fixed;
    background-color: #403f3f;
    z-index: 5;
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    opacity: ${({ open }) => open ? 0.8 : 0};
    transition: opacity 0.2s ease;
`;
