'use strict'

function successSaving() {
    //  hide elements 
    document.querySelectorAll('.modal .in-process, .modal .failed-result').forEach((item) => item.classList.add('d-none'));

    //  show elements 
    document.querySelectorAll('.modal .success-result, .modal .modal-header .btn-close').forEach((item) => item.classList.remove('d-none'));
    document.querySelectorAll('.modal .modal-footer .btn[data-bs-dismiss="modal"]').forEach((item) => item.removeAttribute('disabled'));
    document.querySelectorAll('.modal .modal-footer .btn[data-bs-dismiss="modal"]').forEach((item) => item.setAttribute('type','reset'));
}

function failedSaving() {
    //  hide elements 
    document.querySelectorAll('.modal .in-process, .modal .success-result').forEach((item) => item.classList.add('d-none'));
    
    //  show elements 
    document.querySelectorAll('.modal .failed-result, .modal .modal-header .btn-close').forEach((item) => item.classList.remove('d-none'));
    document.querySelectorAll('.modal .modal-footer .btn[data-bs-dismiss="modal"]').forEach((item) => item.setAttribute('type','button'));
    document.querySelectorAll('.modal .modal-footer .btn[data-bs-dismiss="modal"]').forEach((item) => item.removeAttribute('disabled'));
}

function resetModal() {
    //  hide elements 
    document.querySelectorAll('.modal .failed-result, .modal .success-result, .modal .modal-header .btn-close').forEach((item) => item.classList.add('d-none'));
    document.querySelectorAll('.modal .modal-footer .btn[data-bs-dismiss="modal"]').forEach((item) => item.setAttribute('disabled', 'disabled'));
    
    //  show elements 
    document.querySelectorAll('.modal .in-process').forEach((item) => item.classList.remove('d-none'));
}

function resetForm(evt) {
    if (evt) {
        let form = evt.path.find((item) => item.tagName === 'FORM');
        evt.target.getAttribute('type') !== 'reset' || form && 'reset' in form && form.reset();
    }
}

function handleSaveRoute() {
    const maxWaitTime = 30 * 1000;
    let timeOut = setTimeout(() => failedSaving(), maxWaitTime);
    
    const promise = new Promise( (resolve, reject) => {
        // imitator
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('OK. status 200');
            } else {
                reject(new Error('not OK.'));
            }
        }, 3 * 1000);

    });

    promise.then(
        (result) => {
            clearTimeout(timeOut);
            successSaving();
        },
        (error) => {
            clearTimeout(timeOut);
            failedSaving();
        }
    )
}
//  modal close buttons
document.querySelectorAll('.modal .modal-header .btn-close, .modal .modal-footer .btn[data-bs-dismiss="modal"]').forEach((item) => item.addEventListener('click', (evt) => {
    resetModal(evt);
    resetForm(evt);
}));

//  form save/save-exit buttons
document.querySelectorAll('#btn-save-exit, #btn-save').forEach((item) => item.addEventListener('click', handleSaveRoute));
