import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://169.51.7.198:31090/api/' :
    env === 'production' ?
    'http://169.51.7.198:31090/api/' :
    'http://169.51.7.198:31090/api/';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;