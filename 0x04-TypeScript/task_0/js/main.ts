interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student: Student = {
  firstName: "Joshua",
  lastName: "Kyalo",
  age: 24,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Mombasa"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
table.border = "1";

// Create table header
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Append student rows
studentsList.forEach(student => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Render in body
document.body.appendChild(table);
