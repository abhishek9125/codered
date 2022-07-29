import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { HEADER_CONSTANTS } from 'utils/constants';
import CustomButtons from './CustomButtons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectShowCard } from 'containers/Auth/redux/selectors';
import LoginCard from 'containers/Auth/components/LoginCard';

function Header({ showCard }) {

    return (
        <Wrapper>
            
            <div className="logo">
                CodeRed
            </div>

            <div className="tabs">
                {
                    HEADER_CONSTANTS.map((data, index) => (
                        <div className="tab-wrapper">
                            <Tab data={data} key={index} />
                        </div>
                    ))
                }
            </div>

            <CustomButtons />
            
            {showCard && <LoginCard />}

        </Wrapper>
    )
}

const mapStateToProps = createStructuredSelector({
    showCard: makeSelectShowCard(),
});

export default connect(mapStateToProps, null)(Header);

const Wrapper = styled.div`
    height: 45px;
    background-color: white;
    position: sticky;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
    display: flex;

    .logo {
        color: ${({ theme }) => theme.general.primaryColor};
        font-size: 24px;
        font-weight: 600;
        padding: 0px 20px;
        letter-spacing: 1px;
        margin: auto 0px;
    }

    .tabs {
        display: flex;
        justify-content: space-between;
        margin: 0px 60px;
        /* width: 50%; */
    }
`;
