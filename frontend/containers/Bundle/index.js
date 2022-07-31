import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import config from 'config/env';
import Breadcrumbs from 'components/Breadcrumbs'
import Banner from './components/Banner'
import BundleCard from './components/BundleCard';

function BundleContainer() {

    const [bundles, setBundles] = useState([]);

    const getBundles = async () => {
        const response = await axios.get(`${config.apiUrl}/company/get-all-companies`);
        setBundles(response.data.data)
    }

    useEffect(() => {
        getBundles();
    }, [])

    console.log(`bundles`, bundles)

    return (
        <Wrapper>
            <Banner />
            <Breadcrumbs />
            <div className="content">
            {/* Search */}
                <div className="cards-wrapper">
                    {
                        bundles.map((bundle) => (
                            <BundleCard bundle={bundle} />
                            ))
                        }
                </div>
            </div>
        </Wrapper>
    )
}

export default BundleContainer;

const Wrapper = styled.div`

    .content {
        padding: 0 100px;
    }

    .cards-wrapper {
        display: grid;
        grid-template-columns: calc(100% / 4 - 60px / 4) calc(100% / 4 - 60px / 4) calc(100% / 4 - 60px / 4) calc(100% / 4 - 60px / 4);
        gap: 20px;
        margin-top: 36px;
        box-sizing: border-box;
    }
`;
