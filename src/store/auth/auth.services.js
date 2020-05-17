import CONFIG from '../../config';
import xhr from '../xhr';

export const doLoginCall = (param) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(param)
    }

    return xhr(`${CONFIG.API_URL}${CONFIG.LOGIN}`, options).then((response) => 
        Promise.resolve(response)
    ).catch(e => 
        Promise.reject(
            e || { msg: 'Invalid Request'}
        )
    )
};

