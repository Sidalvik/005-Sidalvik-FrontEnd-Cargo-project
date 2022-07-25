'use strict'

class TaskMessage {
    static KEY_LIST = ['id', 'typeMessage', 'statusMessage', 'titleMessage', 'bodyMessage', 'taskCriticality', 'taskDateTime', 'taskStatus', 'taskAwaitingDateTime', 'taskDeadline'];
    static TYPE_MESSAGE_ERROR = 0;
    static TYPE_MESSAGE_WARNING = 1;
    static TYPE_MESSAGE_INFO = 2;

    static CRITICALY_MAX = 0;
    static CRITICALY_MIDDLE = 1;
    static CRITICALY_LOW = 2;

    static TASK_NEW = 0;
    static TASK_IN_WORK = 1;
    static TASK_AWAYTING = 2;
    static TASK_FINISHED = 3;
    static TASK_CLOSED = 4

    static messageJSONParser = function (jsonString) {
        if (!jsonString) {
            throw(new Error('JSON string is not valid.'));
        };
    }

    constructor () {
        const {id, typeMessage, statusMessage, titleMessage, bodyMessage, taskCriticality, taskDateTime, taskStatus, taskAwaitingDateTime, taskDeadline} = message;
        this.id = id,
        this.typeMessage = typeMessage;
        this.statusMessage = statusMessage;
        this.titleMessage = titleMessage;
        this.bodyMessage = bodyMessage;
        this.taskCriticality = taskCriticality;
        this.taskDateTime = taskDateTime;
        this.taskStatus = taskStatus;
        this.taskAwaitingDateTime = taskAwaitingDateTime;
        this.taskDeadline = taskDeadline;
    }
}

function toggleElementClass(selector, className = 'd-none') {
    if (!className) return;
    document.querySelector(selector)?.classList.toggle(className);
}

document.querySelector('#btn-show-board').addEventListener('click', () => toggleElementClass('#message-board', 'message-board-hidden'));
document.querySelector('.suspend-task-toggle').addEventListener('click', () => toggleElementClass('.suspend-task-group'));
