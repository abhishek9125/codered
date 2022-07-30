import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { showLoginCard, setUserData } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import { customToast } from 'config/toast';
import Link from 'next/link';

function AdminDashboard() {
    return (
        <div>
            Hello World
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setUserData: bindActionCreators(setUserData, dispatch),
    showLoginCard: bindActionCreators(showLoginCard, dispatch),
});

const mapStateToProps = createStructuredSelector({
    isLoggedIn: makeSelectLoggedIn(),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
