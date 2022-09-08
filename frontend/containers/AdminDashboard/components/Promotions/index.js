import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import CreatePromotion from './components/CreatePromotion';
import UpdatePromotion from './components/UpdatePromotion';

function Promotion({ active, setActive }) {

    const [promotions, setPromotions] = useState([]);
    const [editPromotions, setEditPromotions] = useState(null);

    const getPromotions = async () => {
        const response = await axios.get(`${config.apiUrl}/promotion/get-all-promotions`);
        setPromotions(response.data.data)
    }

    const handleCreate = () => {
        setActive('create');
    }

    const handleEdit = (item) => {
        setEditPromotions(item);
        setActive('edit');
    }

    const deleteItem = () => {
        getPromotions();
    }

    useEffect(() => {
        getPromotions();
    }, [active])

    if(active == 'create') {
        return (
            <CreatePromotion setActiveState={setActive} />
        )
    } else if (active == 'edit') {
        return (
            <UpdatePromotion data={editPromotions} setActiveState={setActive} />
        )
    }

    console.log(`promotions`, promotions)

    return (
        <Wrapper>

            <div className="create-promotion" onClick={handleCreate}>
                Create
            </div>

            <div className="promotion-wrapper">
                {
                    promotions.map((item) => (
                        <div className="promotion-item">
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

export default Promotion;

const Wrapper = styled.div`

    .create-promotion {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.general.primaryColor};   
        width: 100px;
        color: white;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .promotion-item {
        
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
