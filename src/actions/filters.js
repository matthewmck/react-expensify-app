// Set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sort By Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Sort By Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Set start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// Set End date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});