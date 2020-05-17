import CONFIG from '../../config';
import xhr from '../xhr';

export const doGetTasksCall = (param) => {
    const options = {
        method: 'GET'
    }

    return xhr(`${CONFIG.API_URL}${CONFIG.TASKS}`, options).then((response) =>
        Promise.resolve(response)
    ).catch(e =>
        Promise.reject(
            e || { msg: 'Invalid Request' }
        )
    )
};

export const doAddTaskCall = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    }

    return xhr(`${CONFIG.API_URL}${CONFIG.TASKS}`, options).then((response) =>
        Promise.resolve(response)
    ).catch(e =>
        Promise.reject(
            e || { msg: 'Invalid Request' }
        )
    )
};

export const doUpdateTasksCall = (param) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(param)
    }

    return xhr(`${CONFIG.API_URL}${CONFIG.TASKS}/${param._id}`, options).then((response) =>
        Promise.resolve(response)
    ).catch(e =>
        Promise.reject(
            e || { msg: 'Invalid Request' }
        )
    )
};



