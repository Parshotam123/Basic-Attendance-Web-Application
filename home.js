let inputName = document.getElementById("input-name");
let inputRoll = document.getElementById("input-roll");

let presentBtn = document.getElementById("btn-present");
let absentBtn = document.getElementById("btn-absent");

let presentTable = document.getElementById("present-table");
let absentTable = document.getElementById("absent-table");

function getDate() {
    let d = new Date();
    return d.toLocaleString();
}

function showAlert(name, roll, status) {
    Swal.fire({
        title: status + " Marked",
        html: `
            <strong>Name:</strong> ${name}<br>
            <strong>Roll:</strong> ${roll}<br>
            <strong>Status:</strong> ${status}<br>
            <strong>Date:</strong> ${getDate()}
        `,
        icon: "success",
        confirmButtonText: "OK"
    });
}

function addRow(table, name, roll) {
    let row = `
        <tr>
            <td>${name}</td>
            <td>${roll}</td>
            <td>${getDate()}</td>
        </tr>
    `;
    table.innerHTML += row;
}

// PRESENT BUTTON
presentBtn.addEventListener("click", function () {
    let name = inputName.value;
    let roll = inputRoll.value;

    if (!name || !roll) {
        Swal.fire("Error", "Please enter name and roll number", "error");
        return;
    }

    showAlert(name, roll, "Present");
    addRow(presentTable, name, roll);
    inputName.value = '';
    inputRoll.value = '';
});

// ABSENT BUTTON
absentBtn.addEventListener("click", function () {
    let name = inputName.value;
    let roll = inputRoll.value;

    if (!name || !roll) {
        Swal.fire("Error", "Please enter name and roll number", "error");
        return;
    }

    showAlert(name, roll, "Absent");
    addRow(absentTable, name, roll);
    input.value = '';
    inputRoll.value = '';
});