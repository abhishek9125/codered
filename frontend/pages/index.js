import styled from 'styled-components';
import React from 'react'

function index() {
  return (
    <div>
      <Title>My First Next.js Page</Title>
    </div>
  )
}

export default index;

const Title = styled.h1`
  color: red;
`;