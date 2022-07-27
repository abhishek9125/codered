import { createSelector } from 'reselect';
import { path } from 'ramda';

const selectHome = state => state.home;

export const makeSelectHomePageData = () => createSelector(
    selectHome,
    homeState => path(['data', 'trending'], homeState)
);
