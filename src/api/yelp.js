import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer fz3w3AQFRGXVEiO9bUQclb5n54a9nzWFsqOVvWLVbrqZMKRdw0RFEGAU_rHXkl2MvQWSzI-fPmOF1kuimbjAH5iZ0Y48SLN5kjaceGKJroz-UapiHaDYu_PG_OPzXHYx'
    }
})  