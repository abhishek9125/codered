import React from 'react';
import styled from 'styled-components';

function Title({ title, description, setActive = null, active = null }) {

    const text = active ? 'See Less' : 'See More';

    return (
        <Wrapper>
            <div className="title">
                {title}
            </div>

            <div className="content-wrapper">
                <div className="subtitle">
                    {description}
                </div>
                <div className="see-more" onClick={() => { setActive ? setActive(!active) : null }}>
                    {text}
                </div>
            </div>
        </Wrapper>
    )
}

export default Title;

const Wrapper = styled.div`

    .title {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
        color: #424242;
        font-family: ${({ theme }) => theme.fonts.secondary};
        letter-spacing: 0.8px;
    }

    .content-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        .subtitle {
            font-family: ${({ theme }) => theme.fonts.primary};
            font-style: normal;
            font-weight: 200;
            font-size: 14px;
            line-height: 20px;
            color: #424242;
            padding-top: 5px;
        }

        .see-more {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-transform: capitalize;
            color: ${({ theme }) => theme.general.primaryColor};
            white-space: nowrap;
            cursor: pointer;
        }
    }
`;
