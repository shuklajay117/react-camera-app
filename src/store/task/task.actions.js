
import { SET_TASKS, IS_LOADING, NAVIGATE_TO, ADD_TASK, UPDATE_TASK } from './task.reducers';
import { doGetTasksCall, doAddTaskCall, doUpdateTasksCall } from './task.services';
import { toastr } from 'react-redux-toastr'
import { navigate } from 'hookrouter';
import { useStore } from 'react-redux';

export const _isLoadingInProgress = (isInprogress = false) => ({
  type: IS_LOADING,
  payload: isInprogress
});

export const _setTasks = (task) => ({
  type: SET_TASKS,
  payload: task
});

export const _addTask = (tasks) => ({
  type: ADD_TASK,
  payload: tasks
});

export const _updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task
});

export const _doNavigate = (url = '/') => {
  console.log('Navigate to ', url);
  navigate(url, true);
  return {
    type: NAVIGATE_TO,
    payload: url
  }
};

export const doNavigate = (param) => (dispatch) => {
  dispatch(_doNavigate(param));
};

/* Async Action Creators */
export const addTask = (param) => (dispatch) => {
  dispatch(_isLoadingInProgress(true));
  doAddTaskCall(param).then((response) => {
    dispatch(_isLoadingInProgress(false));
    dispatch(_addTask(response));
    toastr.success(response.msg);
  }).catch((e) => {
    toastr.error('Auth Error', e && e._error && e._error.msg || 'Invalid Request')
    dispatch(_isLoadingInProgress(false))
  })
};

export const getAllTasks = (param) => (dispatch) => {
  dispatch(_isLoadingInProgress(true));
  return doGetTasksCall(param).then((response) => {
    console.log(response);
    dispatch(_setTasks(response.tasks));
    dispatch(_isLoadingInProgress(false));
    toastr.success(response.msg);
    return Promise.resolve(response)
  }).catch((e) => {
    dispatch(_isLoadingInProgress(false));
    toastr.error('Something went wrong');
    return Promise.reject(
      e || { msg: 'Invalid Request' }
    )
  });
};

export const updateTask = (param) => (dispatch) => {
  dispatch(_isLoadingInProgress(true));
  return doUpdateTasksCall(param).then((response) => {
    console.log(response);
    dispatch(_updateTask(response.task));
    dispatch(_isLoadingInProgress(false));
    toastr.success(response.msg);
    return Promise.resolve(response)
  }).catch((e) => {
    dispatch(_isLoadingInProgress(false));
    toastr.error('Something went wrong');
    return Promise.reject(
      e || { msg: 'Invalid Request' }
    )
  });
};
