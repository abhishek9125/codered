import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { HEADER_CONSTANTS } from 'utils/constants';
import CustomButtons from './CustomButtons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectShowCard, makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import LoginCard from 'containers/Auth/components/LoginCard';
import Link from 'next/link';

function Header({ showCard, isLoggedIn }) {

    return (
        <Wrapper>
            
            <Link href="/">
                <div className="logo">
                    CodeRed
                </div>
            </Link>

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
            
            {showCard && !isLoggedIn && <LoginCard />}

        </Wrapper>
    )
}

const mapStateToProps = createStructuredSelector({
    showCard: makeSelectShowCard(),
    isLoggedIn: makeSelectLoggedIn(),
});

export default connect(mapStateToProps, null)(Header);

const Wrapper = styled.div`
    height: 45px;
    background-color: white;
    position: sticky;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
    display: flex;
    top: 0px;
    z-index: 200;
    
    .logo {
        color: ${({ theme }) => theme.general.primaryColor};
        font-size: 24px;
        font-weight: 600;
        padding: 0px 20px;
        letter-spacing: 1px;
        margin: auto 0px;
        cursor: pointer;
    }

    .tabs {
        display: flex;
        justify-content: space-between;
        margin: 0px 60px;
        /* width: 50%; */
    }
`;
