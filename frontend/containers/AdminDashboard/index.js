import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { showLoginCard, setUserData } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import Sidebar from './components/Sidebar';
import ActiveComponentHandler from './components/ActiveComponentHandler';
import { ADMIN_LINKS } from 'utils/constants';

function AdminDashboard() {
    
    const [activeComponent, setActiveComponent] = useState(ADMIN_LINKS[0]);

    return (
        <Wrapper>
            <div className="sidebar">
                <Sidebar setActiveComponent={setActiveComponent} />
            </div>
            <div className="active-component">
                <ActiveComponentHandler activeComponent={activeComponent} />
            </div>
        </Wrapper>
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

const Wrapper = styled.div`

    display: flex;

    .sidebar {
        width: 20%;
    }

    .active-component {
        width: 80%;
    }

`;