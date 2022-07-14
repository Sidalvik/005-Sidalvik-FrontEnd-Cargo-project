'use strict'

const tableId = '#table-candidates';

function createRowHTML(rowNumber = 1) {
    let result = `<tr>`;
        result += `<td><input type="date" class="form-table__input" name="form-table__person-${rowNumber}__security-date__input" id="form-table__person-${rowNumber}__security-date__input"></td>`;
        result += `<td><textarea class="form-table__input" name="form-table__person-${rowNumber}__name__input" id="form-table__person-${rowNumber}__name__input" rows="4"></textarea></td>`;
        result += `<td><input type="tel" class="form-table__input" name="form-table__person-${rowNumber}__tel__input" id="form-table__person-${rowNumber}__tel__input"></td>`;
        result += `<td><textarea class="form-table__input" name="form-table__person-${rowNumber}__about__input" id="form-table__person-${rowNumber}__about__input" rows="4"></textarea></td>`;
        result += `<td><textarea class="form-table__input" name="form-table__person-${rowNumber}__chief-column__input" id="form-table__person-${rowNumber}__chief-column__input" rows="4"></textarea></td>`;
        result += `<td><textarea class="form-table__input" name="form-table__person-${rowNumber}__comment__input" id="form-table__person-${rowNumber}__comment__input" rows="4"></textarea></td>`;
        result += `<td><textarea class="form-table__input" name="form-table__person-${rowNumber}__status__input" id="form-table__person-${rowNumber}__status__input" rows="4"></textarea></td>`;
        result += `<td><textarea class="form-table__input" name="form-table__person-${rowNumber}__start__input" id="form-table__person-${rowNumber}__start__input" rows="4"></textarea></td>`;
    return result + `</tr>`;
}

function getRowsCount() {
    if (document.querySelector(`${tableId} tbody`)) {
        return document.querySelector(`${tableId} tbody`).childElementCount;
    } else {
        throw  new Error(`Не существует ${tableId} <tbody>`);
    }
}

function addRow(rowNumber = 1) {
    document.querySelector(`${tableId} tbody`).insertAdjacentHTML('beforeend', createRowHTML(rowNumber));
}

document.querySelector('#add-row-button').addEventListener('click', () => addRow(getRowsCount() + 1));
