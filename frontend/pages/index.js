import styled from 'styled-components';
import config from 'config/env';

export default () => (
  <div>
    <Title>My First Next.js Page {config.domainName}</Title>
  </div>
);

const Title = styled.h1`
  color: red;
`;