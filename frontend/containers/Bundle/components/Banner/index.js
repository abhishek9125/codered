import React from 'react';
import styled from 'styled-components';

function Banner() {
    return (
        <Wrapper>
            <div className="content-text">
                <div className="title">
                    Looking To Crack Technical Interviews at top Product-Based Companies? 
                </div>
                <div className="description">
                    Crack any Job Interview Like a Pro by finding company specific problem, guided path, resources, problem list and mock test all at one place 
                </div>
            </div>

            <div className="content-image">
                <img src="https://files.codingninjas.in/company-specific-image-13390.png" />
            </div>
        </Wrapper>
    )
}

export default Banner;

const Wrapper = styled.div`
    background-image: url('https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/images/company-specific-bg.svg');
    background-size: cover;
    /* position: absolute; */
    width: 100%;
    height: 458px;
    display: flex;
    justify-content: space-between;
    
    .content-text {
        width: 40%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 100px;
        margin-top: -80px;
        
        .title {
            font-fmaily: ${({ theme }) => theme.fonts.primary};
            font-weight: 600;
            font-size: 36px;
            color: #f5f5f5;
        }

        .description {
            margin-top: 24px;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #eee;
        }

    }

    .content-image {
        margin-top: 20px;
        margin-left: 150px;
        width: 50%;
    }
`;