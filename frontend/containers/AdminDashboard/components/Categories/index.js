import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import CreateCategory from './components/CreateCategory';
import UpdateCategory from './components/UpdateCategory';

function Categories({ active, setActive }) {

    const [category, setCategory] = useState([]);
    const [editCategory, setEditCategory] = useState(null);

    const getCategory = async () => {
        const response = await axios.get(`${config.apiUrl}/category/get-all-categories`);
        setCategory(response.data.data)
    }

    const handleCreate = () => {
        setActive('create');
    }

    const handleEdit = (item) => {
        setEditCategory(item);
        setActive('edit');
    }

    const deleteItem = () => {
        getCategory();
    }

    useEffect(() => {
        getCategory();
    }, [active])

    if(active == 'create') {
        return (
            <CreateCategory />
        )
    } else if (active == 'edit') {
        return (
            <UpdateCategory data={editCategory} setActiveState={setActive} />
        )
    }

    return (
        <Wrapper>

            <div className="create-category" onClick={handleCreate}>
                Create
            </div>

            <div className="category-wrapper">
                {
                    category.map((item) => (
                        <div className="category-item">
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

export default Categories;

const Wrapper = styled.div`

    .create-category {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.general.primaryColor};   
        width: 100px;
        color: white;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .category-item {
        
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
