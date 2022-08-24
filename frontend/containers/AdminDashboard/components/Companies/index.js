import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from 'config/env';
import CreateCompany from './components/CreateCompany';
import UpdateCompany from './components/UpdateCompany';

function Companies() {

    const [companies, setCompanies] = useState([]);
    const [active, setActive] = useState(false);
    const [editCompanies, setEditCompanies] = useState(null);

    const getCompanies = async () => {
        const response = await axios.get(`${config.apiUrl}/company/get-all-companies`);
        setCompanies(response.data.data)
    }

    const handleCreate = () => {
        setActive('create');
    }

    const handleEdit = (item) => {
        setEditCompanies(item);
        setActive('edit');
    }

    const deleteItem = () => {
        getCompanies();
    }

    useEffect(() => {
        getCompanies();
    }, [active])

    if(active == 'create') {
        return (
            <CreateCompany />
        )
    } else if (active == 'edit') {
        return (
            <UpdateCompany data={editCompanies} setActiveState={setActive} />
        )
    }

    return (
        <Wrapper>

            <div className="create-company" onClick={handleCreate}>
                Create
            </div>

            <div className="company-wrapper">
                {
                    companies.map((item) => (
                        <div className="company-item">
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

export default Companies;

const Wrapper = styled.div`

    .create-company {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.general.primaryColor};   
        width: 100px;
        color: white;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .company-item {
        
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
