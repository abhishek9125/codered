import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Separator from 'components/Separator';

function BestExperiences() {

    const [experiences, setExperiences] = useState([]);

    const getExperiences = async () => {
        const response = await axios.get("https://api.codingninjas.com/api/v3/public_section/top_interview_experiences");
        setExperiences(response.data.data.top_interview_experiences)
    }

    useEffect(() => {
        getExperiences();
    }, [])

    return (
        <Wrapper>
            
            <div className="header">
                <img src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/puzzle.svg" />
                <div className="title"> Popular Interview Experiences </div>
            </div>

            <div className="card-wrapper">
                {
                    experiences.map((experience, index) => (
                        <div className="card" key={index}>
                            <div className="upper-section">
                                <div className="title">
                                    {experience.company_name} | Fresher
                                </div>
                                <div className="user-content">
                                    <div className="avatar">
                                        <img src={experience.contributor.image} className="user-image" />
                                        <img src={experience.contributor.current_level_image} className="level-image" />
                                    </div>
                                    <div className="content">
                                        <div className="name">
                                            {experience.contributor.name}
                                        </div>
                                        <div className="details">
                                            <div className="detail">
                                                3 Months Ago
                                            </div>
                                            <div className="detail">
                                                Software Analyst
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="separator" />
                            <div className="lower-section">
                                <div className="activity activity-first">
                                    <img className="activity-image" src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/upvote-active.svg" />
                                    <div className="activity-text">{experience.upvote_count} upvotes</div>
                                </div>                
                                <div className="activity">
                                    <img className="activity-image" src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/views.svg" />
                                    <div className="activity-text">{experience.views_count} views</div>
                                </div>
                                <div className="activity">
                                    <img className="activity-image" src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/comments.svg" />
                                    <div className="activity-text">{experience.views_count} comments</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </Wrapper>
    )
}

export default BestExperiences;

const Wrapper = styled.div`

    .header {

        display: flex;
        margin-bottom: 20px;

        .title {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            text-transform: capitalize;
            color: #424242;
        }


        img {
            margin-right: 6px;
            height: 24px;
            width: 24px;

        }
    }

    .card {
        background: #fff;
        box-shadow: 0 2px 4px rgb(24 4 50 / 24%);
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 20px;

        &:hover {
            box-shadow: 0 4px 6px rgb(24 4 50 / 24%);
        }

        .upper-section {
            padding: 15px 14px 10px;
            -webkit-tap-highlight-color: transparent;

            .user-content {

                display: flex;

                .avatar {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-right: 12px;

                    .user-image {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        border: 1px solid #fff;
                    }

                    .level-image {
                        width: 20px;
                        height: 20px;
                        margin-top: -10px;
                    }
                }

                .content {

                    margin-top: 5px;

                    .name {
                        font-size: 14px;
                        color: #424242;
                        font-weight: 600;
                        line-height: 14px;
                    }

                    .details {
                        display: flex;
                        margin-top: 4px;
                        flex-wrap: wrap;

                        .detail {
                            font-weight: 600;
                            font-size: 13px;
                            line-height: 15px;
                            color: #757575;
                            flex: none;
                            order: 0;
                            align-self: center;
                            margin: 2px 20px 0 0;
                        }
                    }
                }
            }
        }

        .separator {
            height: 1px;
            width: 100%;
            background-color: #e0e0e0;
        }

        .lower-section {
            display: flex;
            padding: 10px 14px;
            overflow: hidden;

            .activity {

                display: flex;
                margin-left: 20px;
                
                .activity-image {
                    filter: grayscale(1);
                    margin-right: 5px;
                    width: 16px;
                }

                .activity-text {
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 14px;
                    display: flex;
                    align-items: center;
                    color: #9e9e9e;
                    white-space: nowrap;
                }
            }

            .activity-first {
                margin-left: 0px;
            }
        }
    }

`;