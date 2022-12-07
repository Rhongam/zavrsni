import instance from './axiosEnv';

const getAllLocations = () => {
    return instance.get('/locations');
}

const locationsAPI = {
    getAllLocations
}

export default locationsAPI;