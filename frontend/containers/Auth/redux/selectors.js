import { createSelector } from 'reselect';
import { path } from 'ramda';

const selectAuth = state => state.auth;

export const makeSelectShowCard = () => createSelector(
    selectAuth,
    authState => path(['data', 'showCard'], authState)
);

export const makeSelectLoggedIn = () => createSelector(
    selectAuth,
    authState => path(['data', 'isLoggedIn'], authState)
);
