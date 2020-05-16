
import { apiCall } from './api/api'

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_COUNTRIES_FAILED,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_CHARTS_FAILED,
    REQUEST_CHARTS_PENDING,
    REQUEST_CHARTS_SUCCESS
}
    from './constants'


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestCity = () => (dispatch) => {

    dispatch({ type: REQUEST_COUNTRIES_PENDING })
    apiCall(`https://api.covid19api.com/summary`)
        .then(data => dispatch({ type: REQUEST_COUNTRIES_SUCCESS, payload: data }))
        .then(data => console.log(data))
        .catch(error => dispatch({ type: REQUEST_COUNTRIES_FAILED, payload: error }))
}


export const requestChart = (name) => (dispatch) => {
    
    const url =`https://api.covid19api.com/country/${name}`
    dispatch({ type: REQUEST_CHARTS_PENDING })
    apiCall(url)
        .then(data => dispatch({ type: REQUEST_CHARTS_SUCCESS, payload: data }))
        .then(data => console.log(data))
        .catch(error => dispatch({ type: REQUEST_CHARTS_FAILED, payload: error }))
}

			