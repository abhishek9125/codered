import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { showLoginCard } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';

function CustomButtons({ showLoginCard, isLoggedIn }) {

    return (
        <Wrapper>
            <div className="daily-problem">
                Problem of the Day
            </div>

            <div className="login-button" onClick={() => showLoginCard()}>
                {!isLoggedIn ? 'Login' : 'Log Out'}
            </div>
        </Wrapper>
    )

}

const mapDispatchToProps = dispatch => ({
    showLoginCard: bindActionCreators(showLoginCard, dispatch),
});

const mapStateToProps = createStructuredSelector({
    isLoggedIn: makeSelectLoggedIn(),
});

  
export default connect(mapStateToProps, mapDispatchToProps)(CustomButtons);
  
const Wrapper = styled.div`

    display: flex;
    margin: auto 0px;
    color: white;
    font-size: 14px;

    .daily-problem {
        padding: 2px 16px;
        background: #6249c5;
        border: 2px solid #9882f3;
        border-radius: 44px;
        position: relative;
        cursor: pointer;
        height: max-content;
        margin: auto;
        margin-right: 16px;
        cursor: pointer;
    }

    .login-button {
        background: ${({ theme }) => theme.general.primaryColor};
        border-radius: 4px;
        color: #fff;
        font-weight: 700;
        padding: 4px 20px;
        font-size: 16px;
        cursor: pointer;
    }

`;