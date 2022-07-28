import React, { useState } from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import { PROBLEM_SET_LIST } from 'utils/constants';
import { Hamburger } from 'components/Icons';

function ProblemSets() {

    const title = "Top Problem Lists";
    const description = "Curated lists of code problems by top YouTubers and Companies";

    const [active, setActive] = useState(false);

    return (
        <Wrapper>
            <Title title={title} description={description} active={active} setActive={setActive} />
            <div className="box-wrapper">
                {
                    PROBLEM_SET_LIST.map((sheet, index) => {
                        if(sheet.show_in_explore || active) {
                            return (
                                <div className="box" key={index}> 
                                    <div className="icon"> 
                                        <Hamburger />
                                    </div>
                                    <div className="title">
                                        {sheet.name}
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </Wrapper>
    )
}

export default ProblemSets;

const Wrapper = styled.div`

    .box-wrapper {
        background: #fff;
        border: 1px solid #eee;
        box-sizing: border-box;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .box {
        display: flex;
        align-items: center;
        width: 48%;
        cursor: pointer;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;

        &:hover {
            box-shadow: 0 0 8px rgb(24 4 50 / 20%);
            transition: box-shadow .15s ease-in;
        }

        .title {
            margin-top: 1px;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            text-transform: capitalize;
            color: #424242;
        }
    }

    .icon {
        display: flex;
        align-content: center;
        margin-left: 10px;
    }

`;
