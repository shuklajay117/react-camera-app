import { ADD_TASK } from "../task.reducers"

export default function AddTask(task = {}) {
    return {
        type: MARK_AS,
        payload: task
    }
};