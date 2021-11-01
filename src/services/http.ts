import axios from 'axios';

export default axios.create({
    // https://api.worldoftanks.eu/wot/encyclopedia/vehicleprofile/?application_id=6d5967371a2623fe2cedbc7f0e0963bd
    baseURL: 'https://api.worldoftanks.eu/wot/',
    params: {
        // API params go here
    }
});