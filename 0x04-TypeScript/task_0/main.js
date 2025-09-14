var student1 = {
    firstName: "Joshua",
    lastName: "Kyalo",
    age: 24,
    location: "Nairobi"
};
var student2 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Mombasa"
};
var studentsList = [student1, student2];
// Create table
var table = document.createElement("table");
table.border = "1";
// Create table header
var headerRow = document.createElement("tr");
var nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Append student rows
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Render in body
document.body.appendChild(table);
