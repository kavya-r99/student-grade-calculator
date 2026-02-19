function addSubject() {
    const container = document.getElementById("inputs-container");
    const count = container.querySelectorAll("input").length + 1;

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = `Enter Marks ${count}`;
    container.appendChild(input);
}

function removeSubject() {
    const container = document.getElementById("inputs-container");
    const inputs = container.querySelectorAll("input");
    if (inputs.length > 1) {
        container.removeChild(inputs[inputs.length - 1]);
    }
}

function calculateGrade() {
    const inputs = document.querySelectorAll("#inputs-container input");
    let totalMarks = 0;
    let subjectsCount = 0;

    inputs.forEach(input => {
        const value = Number(input.value);
        if (value || value === 0) { 
            totalMarks += value;
            subjectsCount++;
        }
    });

    if (subjectsCount === 0) {
        document.getElementById("result").innerText = "Please enter at least one mark!";
        document.getElementById("result").className = "";
        return;
    }
    const totalMaxMarks = Number(document.getElementById("totalMaxMarks").value);

if (!totalMaxMarks) {
    document.getElementById("result").innerText = "Please enter total maximum marks!";
    document.getElementById("result").className = "";
    return;
}

if (totalMarks > totalMaxMarks) {
    document.getElementById("result").innerText = "Scored marks cannot exceed total maximum marks!";
    document.getElementById("result").className = "";
    return;
}

const percentage = (totalMarks / totalMaxMarks) * 100;
    let grade = "";
    let gradeClass = "";

    if (percentage >= 90) { grade = "A+"; gradeClass = "grade-A+"; }
    else if (percentage >= 80) { grade = "A"; gradeClass = "grade-A"; }
    else if (percentage >= 70) { grade = "B"; gradeClass = "grade-B"; }
    else if (percentage >= 60) { grade = "C"; gradeClass = "grade-C"; }
    else if (percentage >= 50) { grade = "D"; gradeClass = "grade-D"; }
    else { grade = "F"; gradeClass = "grade-F"; }

    const resultElement = document.getElementById("result");
    resultElement.innerText =
        `Subjects Counted: ${subjectsCount}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`;
    resultElement.className = gradeClass;
}

function resetCalculator() {
    const container = document.getElementById("inputs-container");
    container.innerHTML = `
        <input type="number" placeholder="Enter Marks 1">
        <input type="number" placeholder="Enter Marks 2">
        <input type="number" placeholder="Enter Marks 3">
    `;
    document.getElementById("result").innerText = "";
    document.getElementById("result").className = "";
}
function calculateTotal() {
    const inputs = document.querySelectorAll("#inputs-container input");
    let totalMarks = 0;
    let subjectsCount = 0;

    inputs.forEach(input => {
        const value = Number(input.value);
        if (value || value === 0) {
            totalMarks += value;
            subjectsCount++;
        }
    });

    if (subjectsCount === 0) {
        document.getElementById("result").innerText = "Please enter at least one mark!";
        document.getElementById("result").className = "";
        return;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerText =
        `Subjects Counted: ${subjectsCount}\nTotal Marks: ${totalMarks}`;
    resultElement.className = "";
}

