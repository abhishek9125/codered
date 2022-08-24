import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import CreateList from './components/CreateList';
import UpdateList from './components/UpdateList';

function Lists({ active, setActive }) {

    const [list, setList] = useState([]);
    const [editList, setEditList] = useState(null);

    const getList = async () => {
        const response = await axios.get(`${config.apiUrl}/list/get-all-lists`);
        setList(response.data.data)
    }

    const handleCreate = () => {
        setActive('create');
    }

    const handleEdit = (item) => {
        setEditList(item);
        setActive('edit');
    }

    const deleteListItem = () => {
        getList();
    }

    useEffect(() => {
        getList();
    }, [active])

    if(active == 'create') {
        return (
            <CreateList />
        )
    } else if (active == 'edit') {
        return (
            <UpdateList data={editList} setActiveState={setActive} />
        )
    }

    return (
        <Wrapper>

            <div className="create-list" onClick={handleCreate}>
                Create
            </div>

            <div className="list-wrapper">
                {
                    list.map((item) => (
                        <div className="list-item">
                            <div className="title">
                                {item.name}
                            </div>
                            <div className="buttons">
                                <div className="button edit" onClick={() => handleEdit(item)}>
                                    Edit
                                </div>
                                <div className="button" onClick={deleteListItem}>
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

export default Lists;

const Wrapper = styled.div`

    .create-list {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.general.primaryColor};   
        width: 100px;
        color: white;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .list-item {
        
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
