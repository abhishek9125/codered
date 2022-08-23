import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import config from 'config/env';
import Breadcrumbs from 'components/Breadcrumbs'
import Banner from './components/Banner'
import ListCard from './components/ListCard';

function ListContainer() {

    const [lists, setLists] = useState([]);

    const getLists = async () => {
        const response = await axios.get(`${config.apiUrl}/list/get-all-lists`);
        setLists(response.data.data)
    }

    useEffect(() => {
        getLists();
    }, [])

    return (
        <Wrapper>
            <Banner />
            <Breadcrumbs />
            <div className="content">
            {/* Search */}
                <div className="cards-wrapper">
                    {
                        lists.map((list) => (
                            <ListCard list={list} />
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default ListContainer;

const Wrapper = styled.div`

    .content {
        padding: 0 100px;
    }

    .cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 26px;
        gap: 30px;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-left: 22px;
    }
`;
