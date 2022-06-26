'use strict'

function createRowHTML (rowNumber = 1, colDaysCount = 31) {
    let result = '<tr>';
    result += `<th class="col-sticky col-fio table-primary" scope="row"><p><output class="person__input" name="person-${rowNumber}__fio" id="person-${rowNumber}__fio"></output></p></th>`;
    result += `<td><p><output class="person__input col__auto-number" name="person-${rowNumber}__auto-number" id="person-${rowNumber}__auto-number"></output></p></td>`;
    for (let i = 1; i <= colDaysCount; i++) {
        result += `<td><div class="d-flex"><textarea name="person-${rowNumber}__day-${i}__text" id="person-${rowNumber}__day-${i}__text" cols="30" rows="3" class="form-control border-0"></textarea>`;
        result += `<div class="d-flex flex-column status-bar p-2 justify-content-evenly">`;
        result += `<input class="form-check-input m-1 bg-danger" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-1" value="status1" aria-label="person-${rowNumber}__day-${i}__radio-1" data-bs-toggle="tooltip" data-bs-placement="top" title="не идет на контакт">`;
        result += `<input class="form-check-input m-1 bg-warning" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-2" value="status2" aria-label="person-${rowNumber}__day-${i}__radio-2"  data-bs-toggle="tooltip" data-bs-placement="top" title="по техн. причинам">`;
        result += `<input class="form-check-input m-1 bg-success" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-3" value="status3" aria-label="person-${rowNumber}__day-${i}__radio-3"  data-bs-toggle="tooltip" data-bs-placement="top" title="по вождению">`;
        result += `</div></div></td>`;
    }
    return result + '</tr>';
}

function unchecked() {
    if (event.currentTarget === event.target) {
        event.currentTarget.querySelectorAll('.status-bar .form-check-input').forEach(element => element.checked = false);
    }
}


for (let i=1; i <= 20; i++) {
    table__body.insertAdjacentHTML('beforeend', createRowHTML(i));
}

document.querySelectorAll('.status-bar').forEach((element) => element.addEventListener('click', unchecked));
