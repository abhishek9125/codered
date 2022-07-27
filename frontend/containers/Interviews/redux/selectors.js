import { createSelector } from 'reselect';
import { path } from 'ramda';

const selectInterviews = state => state.interviews;

export const makeSelectInterviewList = () => createSelector(
    selectInterviews,
    interviewState => path(['data', 'interviews'], interviewState)
);
