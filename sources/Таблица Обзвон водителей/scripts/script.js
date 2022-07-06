'use strict'

function createRowHTML (rowNumber = 1, colDaysCount = 31) {
    let result = '<tr>';
    result += `<th class="col-sticky col-fio table-primary" scope="row"><p><output class="person__output" name="person-${rowNumber}__fio" id="person-${rowNumber}__fio">Person ${rowNumber}</output></p></th>`
    result += `<td class="col__auto-number"><p><output class="auto__output" name="person-${rowNumber}__auto-number" id="person-${rowNumber}__auto-number">гос.номер ${rowNumber}</output></p></td>`;

    for (let i = 1; i <= colDaysCount; i++) {
        result += `<td class="col-days">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-1" value="status1">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-2" value="status2">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-3" value="status3">
    <input class="visually-hidden person__day__radio" type="radio" name="person-${rowNumber}__day-${i}__radio" id="person-${rowNumber}__day-${i}__radio-0" value="null" checked>
    <button type="button" class="btn btn-outline-secondary person__day__modal-button" data-bs-toggle="modal" data-bs-target="#person-${rowNumber}__day-${i}__modal" name="person-${rowNumber}__day-${i}__button" id="person-${rowNumber}__day-${i}__button" value="${i}">${i}</button>
    <div class="modal fade" id="person-${rowNumber}__day-${i}__modal" tabindex="-1"
        aria-labelledby="person-${rowNumber}__day-${i}__modal__title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header align-items-baseline">
                    <div class="modal-title">
                        <h2 class="h5 person__day__modal__title d-none" id="person-${rowNumber}__day-${i}__modal__title">Водитель</h2>
                        <p class="person__day__modal__auto-number d-none">Автомобиль: <output name="person-${rowNumber}__day-${i}__modal__output-auto" id="person-${rowNumber}__day-${i}__modal__output-auto">-</output></p>
                        <p class="mb-0 person__day__modal__day d-none">День: <output name="person-${rowNumber}__day-${i}__modal__output-day" id="person-${rowNumber}__day-${i}__modal__output-day">-</output></p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body container">
                    <textarea class="form-control" name="person-${rowNumber}__day-${i}__text" id="person-${rowNumber}__day-${i}__text" cols="30" rows="4"></textarea>
                    <div class="btn-group mt-2" role="group" aria-label="status">
                        <label class="w-25 btn btn-sm btn-outline-success person__day__radio-1__label" for="person-${rowNumber}__day-${i}__radio-1">По вождению</label>
                        <label class="w-25 btn btn-sm btn-outline-warning person__day__radio-2__label" for="person-${rowNumber}__day-${i}__radio-2">По техн. причинам</label>
                        <label class="w-25 btn btn-sm btn-outline-danger person__day__radio-3__label" for="person-${rowNumber}__day-${i}__radio-3">Не идет на&nbsp;контакт</label>
                        <label class="w-25 btn btn-sm btn-outline-secondary person__day__radio-0__label" for="person-${rowNumber}__day-${i}__radio-0">Не в&nbsp;работе</label>
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

function setPersonInfoInModal() {
    //  onclick in <tr>
    function getPersonInfo(objectTr) {
        if (objectTr) {     
            return {
                personUID: null,
                personeName: objectTr.querySelector('.col-fio .person__output') ? objectTr.querySelector('.col-fio .person__output').value: '',
                autoUID: null,
                autoNumber: objectTr.querySelector('.col__auto-number .auto__output') ? objectTr.querySelector('.col__auto-number .auto__output').value: '',
            }
        }
    }


    if (!event.target.classList.contains('person__day__modal-button')) {
        return;
    }

    let person = getPersonInfo(event.currentTarget);
    let modalPersonName = event.target.parentElement.querySelector('.modal .person__day__modal__title');
    let modalAutoNumber = event.target.parentElement.querySelector('.modal .person__day__modal__auto-number');
    let modalDay = event.target.parentElement.querySelector('.modal .person__day__modal__day');

    modalPersonName.textContent = person.personeName;
    modalAutoNumber.querySelector('output').value = person.autoNumber;
    modalDay.querySelector('output').value = event.target.value + ' ' + document.querySelector('#form-table__current-month').value;
    modalPersonName.classList.remove('d-none');
    modalAutoNumber.classList.remove('d-none');
    modalDay.classList.remove('d-none');
}

// create table
for (let i=1; i <= 30; i++) {
    document.querySelector('#main-table tbody').insertAdjacentHTML('beforeend', createRowHTML(i,31));
}

document.querySelectorAll('#main-table tbody tr').forEach((element) => element.addEventListener('click', setPersonInfoInModal));
