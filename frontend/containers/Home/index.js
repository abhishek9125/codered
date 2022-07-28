import Gap from 'components/Gap';
import React from 'react';
import styled from 'styled-components';
import Banners from './components/Banners'
import Categories from './components/Categories';
import ProblemSets from './components/ProblemSets';

function HomeContainer() {
    return (
        <Wrapper>
            <Banners />
            <div className="divider">
                <div className="main-section">
                    <Categories />
                    <Gap height="40px" />
                    <ProblemSets />
                </div>
                <div className="side-section">
                    Hello World
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeContainer;

const Wrapper = styled.div`

    .divider {
        display: flex;
        margin: auto 110px;
    }

    .main-section {
        width: 65%;
        margin-right: 5%;
    }

    .side-section {
        width: 25%;
    }

`;