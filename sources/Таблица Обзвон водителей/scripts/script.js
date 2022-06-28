'use strict'

function createRowHTML (rowNumber = 1, colDaysCount = 31) {
    let result = '<tr>';
    result += `<th class="col-sticky col-fio table-primary" scope="row">
    <p><output class="person__input" name="person-${rowNumber}__fio" id="person-${rowNumber}__fio"></output></p>
</th>
<td>
    <p><output class="person__input col__auto-number" name="person-${rowNumber}__auto-number" id="person-${rowNumber}__auto-number"></output></p>
</td>`;
    for (let i = 1; i <= colDaysCount; i++) {
        result += `<td class="col-days">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-1" value="status1">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-2" value="status2">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-3" value="status3">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-0" value="null" checked>
    <button type="button" class="btn btn-outline-secondary person__day__modal-button" data-bs-toggle="modal" data-bs-target="#person-${rowNumber}__day-${i}__modal" name="person-${rowNumber}__day-${i}__button" id="person-${rowNumber}__day-${i}__button">${i}</button>
    <div class="modal fade" id="person-${rowNumber}__day-${i}__modal" tabindex="-1"
        aria-labelledby="person-${rowNumber}__day-${i}__modal__title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header align-items-baseline">
                    <div class="modal-title">
                        <h2 class="h5 person__day__modal__title d-none" id="person-${rowNumber}__day-${i}__modal__title">Водитель</h2>
                        <p class="person__day__modal__auto-number d-none">Автомобиль:
                            <output name="person-${rowNumber}__day-${i}__modal__output-auto"
                                id="person-${rowNumber}__day-${i}__modal__output-auto">-</output>
                        </p>
                        <p class="mb-0 person__day__modal__day d-none">День:
                            <output name="person-${rowNumber}__day-${i}__modal__output-day"
                                id="person-${rowNumber}__day-${i}__modal__output-day">-</output>
                        </p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <textarea class="form-control" name="person-${rowNumber}__day-${i}__text" id="person-${rowNumber}__day-${i}__text" cols="30" rows="4"></textarea>
                    <div class="btn-group mt-2" role="group" aria-label="status">
                        <label class="btn btn-sm btn-outline-success person__day__radio-1__label" for="person-${rowNumber}__day-${i}__radio-1">По вождению</label>
                        <label class="btn btn-sm btn-outline-warning person__day__radio-2__label" for="person-${rowNumber}__day-${i}__radio-2">По техн. причинам</label>
                        <label class="btn btn-sm btn-outline-danger person__day__radio-3__label" for="person-${rowNumber}__day-${i}__radio-3">Не идет на&nbsp;контакт</label>
                        <label class="btn btn-sm btn-outline-secondary person__day__radio-0__label" for="person-${rowNumber}__day-${i}__radio-0">не в&nbsp;работе</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">ОК</button>
                </div>
            </div>
        </div>
    </div>
</td>`
}
    return result + '</tr>';
}

function unchecked() {
    if (event.currentTarget === event.target) {
        event.currentTarget.querySelectorAll('.status-bar .form-check-input').forEach(element => element.checked = false);
    }
}

for (let i=2; i <= 10; i++) {
    table__body.insertAdjacentHTML('beforeend', createRowHTML(i));
}


// document.querySelectorAll('.status-bar').forEach((element) => element.addEventListener('click', unchecked));
// document.querySelectorAll('#main-table tbody tr button[data-bs-toggle="modal"]').forEach((element) => element.addEventListener('click', changeColor));

