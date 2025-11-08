interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Accra"
};

const student2: Student = {
  firstName: "Kwame",
  lastName: "Mensah",
  age: 22,
  location: "Kumasi"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
studentsList.forEach(student => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
