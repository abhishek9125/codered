import React from 'react';
import styled from 'styled-components';

function ProblemTable({ problems }) {
    
    return (
        <Wrapper>
            <div className="table-header">
                <div className="header-submitted" />
                <div className="header-title">Problem Title</div>
                <div className="header-difficulty">Difficulty</div>
                <div className="header-time">Average Time</div>
                <div className="header-attempted">Attempted</div>
            </div>
            <div className="table-body">
                {
                    problems.map((problem, index) => (
                        <div className="question-box" key={index}>
                            <div className="body-submitted" />
                            <div className="body-title">{problem.name}</div>
                            <div className="body-difficulty">{problem.difficulty}</div>
                            <div className="body-time">{problem.avg_time_to_solve} mins</div>
                            <div className="body-attempted">{problem.submission_count}</div>     
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default ProblemTable;

const Wrapper = styled.div`

    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: auto;
    background: #fff;
    box-shadow: 0 2px 4px rgb(24 4 50 / 24%);
    min-width: 600px;
    overflow-x: auto;

    .table-header {
        display: flex;
        background: #eceffa;
        padding: 16px 20px;
        font-weight: 400;
        letter-spacing: 0.8px;
        padding-bottom: 30px;

        .header-submitted {
            width: 5%;
            min-width: 20px;
            padding-right: 8px;
        }

        .header-title {
            width: 59%;
            min-width: 300px;
            font-size: 18px;
            color: #424242;
            line-height: 14px;
            padding-right: 16px;
            margin: auto;
            font-family: ${({ theme }) => theme.fonts.primary};
        }

        .header-difficulty {
            line-height: 18px;
            color: #424242;
            width: 13%;
            min-width: 86px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            font-size: 14px;
            font-weight: 600;
        }

        .header-time {
            line-height: 18px;
            color: #424242;
            width: 15%;
            min-width: 60px;
            padding-right: 8px;
            font-size: 14px;
            font-weight: 600;
        }

        .header-attempted {
            line-height: 18px;
            color: #424242;
            width: 11%;
            min-width: 54px;
            font-size: 14px;
            font-weight: 600;
        }
    }

    .question-box {

        min-height: 40px;
        display: flex;
        padding: 16px 20px;
        font-weight: 400;
        letter-spacing: 0.8px;
        cursor: pointer;

        &:hover {
            filter: drop-shadow(0 0 18px rgba(21,11,35,.15));
            transition: filter .15s ease-in;
        }


        .body-submitted {
            width: 5%;
            min-width: 20px;
            padding-right: 8px;
        }

        .body-title {
            font-family: ${({ theme }) => theme.fonts.secondary};
            font-weight: 600;
            line-height: 24px;
            font-size: 14px;
            color: #424242;
            padding-right: 16px;
            width: 59%;
            min-width: 300px;
            margin: auto;
        }

        .body-difficulty {
            width: 13%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            border-radius: 30px;
            padding: 2px 8px;
            color: #424242;
            font-size: 10px;
            font-weight: 600;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 17px;
        }

        .body-time {
            width: 15%;
            min-width: 60px;
            color: #757575;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
            padding-right: 8px;
        }

        .body-attempted {
            width: 11%;
            min-width: 54px;
            color: #757575;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
        }
    }

    .question-box:nth-of-type(even){
        background-color: #f9fafe;
    }

    .question-box:nth-of-type(odd){
        background-color: #fff;
    }

}


`;
