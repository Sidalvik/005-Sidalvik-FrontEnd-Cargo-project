'use strict'

function enabledButtons() {
    document.querySelectorAll('.modal-warrant-disabled button[disabled]').forEach((item) => item.removeAttribute('disabled'));
}

document.querySelector('#form__3-5__button__modal-warrant-write').addEventListener('click', enabledButtons);