import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import CreateLevel from './components/CreateLevel';
import UpdateLevel from './components/UpdateLevel';

function Levels() {

    const [levels, setLevels] = useState([]);
    const [active, setActive] = useState(false);
    const [editLevels, setEditLevels] = useState(null);

    const getLevels = async () => {
        const response = await axios.get(`${config.apiUrl}/level/get-all-levels`);
        setLevels(response.data.data)
    }

    const handleCreate = () => {
        setActive('create');
    }

    const handleEdit = (item) => {
        setEditLevels(item);
        setActive('edit');
    }

    const deleteItem = () => {
        getLevels();
    }

    useEffect(() => {
        getLevels();
    }, [active])

    if(active == 'create') {
        return (
            <CreateLevel />
        )
    } else if (active == 'edit') {
        return (
            <UpdateLevel data={editLevels} setActiveState={setActive} />
        )
    }

    return (
        <Wrapper>

            <div className="create-level" onClick={handleCreate}>
                Create
            </div>

            <div className="level-wrapper">
                {
                    levels.map((item) => (
                        <div className="level-item">
                            <div className="title">
                                {item.name}
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

export default Levels;

const Wrapper = styled.div`

    .create-level {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.general.primaryColor};   
        width: 100px;
        color: white;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .level-item {
        
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
