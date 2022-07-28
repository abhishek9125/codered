import Title from 'components/Title';
import React from 'react';
import styled from 'styled-components';
import { INTERVIEW_TOPICS } from 'utils/constants';

function Categories() {

    const title = "Solve Interview Problem By Topic";
    const description = "Choose one of the topics to practice coding interview questions";

    return (
        <Wrapper>

            <Title title={title} description={description} /> 

            <div className="card-wrapper">
                {
                    INTERVIEW_TOPICS.map((topic, index) => (     
                        <Card gradient={topic.gradient} key={index}>
                                {topic.title}
                            </Card>
                    ))
                }
            </div>
            
        </Wrapper>
    )
}

export default Categories;

const Wrapper = styled.div`

    .card-wrapper {
        display: flex;
        justify-content: space-between;
    }
`;

const Card = styled.div`
    background: ${props => props.gradient};
    padding: 20px;
    box-shadow: 0 2px 4px rgb(24 4 50 / 24%);
    width: 180px;
    height: 86px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;
