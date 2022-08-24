import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import CreateProblem from './components/CreateProblem';
import UpdateProblem from './components/UpdateProblem';

function Problems({ active, setActive }) {

    const [problems, setProblems] = useState([]);
    const [editProblems, setEditProblems] = useState(null);

    const getProblems = async () => {
        const response = await axios.get(`${config.apiUrl}/problem/get-all-problems`);
        setProblems(response.data.data)
    }

    const handleCreate = () => {
        setActive('create');
    }

    const handleEdit = (item) => {
        setEditProblems(item);
        setActive('edit');
    }

    const deleteItem = () => {
        getProblems();
    }

    useEffect(() => {
        getProblems();
    }, [active])

    if(active == 'create') {
        return (
            <CreateProblem setActiveState={setActive} />
        )
    } else if (active == 'edit') {
        return (
            <UpdateProblem data={editProblems} setActiveState={setActive} />
        )
    }

    return (
        <Wrapper>

            <div className="create-problem" onClick={handleCreate}>
                Create
            </div>

            <div className="problem-wrapper">
                {
                    problems.map((item) => (
                        <div className="problem-item">
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="buttons">
                                <div className="button edit" onClick={() => handleEdit(item)}>
                                    Edit
                                </div>
                                <div className="button" onClick={deleteItem}>
                                    Delete
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Problems;

const Wrapper = styled.div`

    .create-problem {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.general.primaryColor};   
        width: 100px;
        color: white;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .problem-item {
        
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow:0 0 5px rgba(0,0,0,0.1);
        cursor: pointer;
        
        .title {
            color: ${({ theme }) => theme.general.primaryColor};   
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .buttons {
            display: flex;

            .edit {
                color: ${({ theme }) => theme.general.primaryColor} !important;   
                background: white !important;
            }

            .button {
                border: 2px solid ${({ theme }) => theme.general.primaryColor};
                border-radius: 2px;
                padding: 3px;
                margin-right: 15px;
                width: 70px;
                text-align: center;
                background-color: ${({ theme }) => theme.general.primaryColor};   
                color: white;
            }

        }

    }

`;
