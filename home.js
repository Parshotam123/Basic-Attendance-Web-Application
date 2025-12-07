let inputName = document.getElementById("input-name");
let inputRoll = document.getElementById("input-roll");

let presentBtn = document.getElementById("btn-present");
let absentBtn = document.getElementById("btn-absent");

let presentTable = document.getElementById("present-table");
let absentTable = document.getElementById("absent-table");

function getDate() {
    const now = new Date();
    return now.toLocaleString();
}

function rowExists(table, name, roll) {
    const rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].getElementsByTagName("td");
        const existingName = cols[0].innerText.trim();
        const existingRoll = cols[1].innerText.trim();
        if (existingName === name && existingRoll === roll) {
            return true;
        }
    }
    return false;
}

function addRow(table, name, roll) {
    const date = getDate();
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerText = name;
    tr.appendChild(tdName);

    const tdRoll = document.createElement("td");
    tdRoll.innerText = roll;
    tr.appendChild(tdRoll);

    const tdDate = document.createElement("td");
    tdDate.innerText = date;
    tr.appendChild(tdDate);

    table.appendChild(tr);
}

function handleMark(table, status) {
    const name = inputName.value.trim();
    const roll = inputRoll.value.trim();
    if (!name || !roll) {
        alert("Please enter both Name and Roll number.");
        return;
    }

    if (rowExists(table, name, roll)) {
        alert(`${status} already marked for ${name} (Roll: ${roll}).`);
        return;
    }

    addRow(table, name, roll);

    inputName.value = "";
    inputRoll.value = "";
}

presentBtn.addEventListener("click", function () {
    handleMark(presentTable, "Present");
});

absentBtn.addEventListener("click", function () {
    handleMark(absentTable, "Absent");
});
