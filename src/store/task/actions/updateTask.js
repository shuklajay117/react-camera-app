import { ADD_TASK } from "../task.reducers"

export default function AddTask(task = {}) {
    return {
        type: ADD_TASK,
        payload: task
    }
};