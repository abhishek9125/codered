import Gap from 'components/Gap';
import React from 'react';
import styled from 'styled-components';
import Banners from './components/Banners'
import Categories from './components/Categories';
import ProblemSets from './components/ProblemSets';
import ProblemSection from './components/ProblemSection';
import Trending from './components/Trending';
import BestExperiences from 'components/BestExperiences';
import Separator from 'components/Separator';

function HomeContainer() {

    return (
        <Wrapper>
            <Banners />
            <div className="divider">
                <div className="main-section">
                    <Categories />
                    <Gap height="40px" />
                    <ProblemSets />
                    <Gap height="40px" />
                    <ProblemSection />
                </div>
                <div className="side-section">
                    <Trending />
                    <Separator />
                    <BestExperiences />
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
        width: 30%;
    }

`;