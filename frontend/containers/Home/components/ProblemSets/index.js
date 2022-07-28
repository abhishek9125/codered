import Title from 'components/Title';
import React from 'react';
import styled from 'styled-components';

function ProblemSets() {

    const title = "Top Problem Lists";
    const description = "Curated lists of code problems by top YouTubers and Companies";

    return (
        <Wrapper>
            <Title title={title} description={description} />
        </Wrapper>
    )
}

export default ProblemSets;

const Wrapper = styled.div`


`;
