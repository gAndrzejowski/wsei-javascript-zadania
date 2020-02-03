document.addEventListener('DOMContentLoaded', () => {

    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const goals1 = document.getElementById('points1');
    const goals2 = document.getElementById('points2');
    const tableBody = document.querySelector('table.table tbody');

    const validateTeams = () => team1.value !== team2.value;
    const validateGoals = () => Number(goals1.value) >= 0 && Number(goals2.value) >= 0;

    function createNewRow() {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${team1.value}</td>
            <td>${team2.value}</td>
            <td>${goals1.value} - ${goals2.value}</td>
        `
        tableBody.appendChild(tr);
    }

    function validate(event) {
        event.preventDefault();
        if (validateTeams() && validateGoals()) {
            createNewRow();
        }
    }

    document.forms[0].addEventListener('submit', validate);
})