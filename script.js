let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;

    if(name=="" || age=="" || department=="" || email==""){
        alert("Fill all fields");
        return;
    }

    let student={

        id: students.length+1,
        name:name,
        age:age,
        department:department,
        email:email

    };

    students.push(student);

    saveData();

    displayStudents();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("department").value="";
    document.getElementById("email").value="";
}

function displayStudents(){

let table=document.getElementById("studentTable");

table.innerHTML="";

students.forEach((student,index)=>{

table.innerHTML+=`

<tr>

<td>${student.id}</td>

<td>${student.name}</td>

<td>${student.age}</td>

<td>${student.department}</td>

<td>${student.email}</td>

<td>

<button class="edit" onclick="editStudent(${index})">Edit</button>

<button class="delete" onclick="deleteStudent(${index})">Delete</button>

</td>

</tr>

`;

});

}

function deleteStudent(index){

if(confirm("Delete Student?")){

students.splice(index,1);

saveData();

displayStudents();

}

}

function editStudent(index){

let student=students[index];

let name=prompt("Edit Name",student.name);

let age=prompt("Edit Age",student.age);

let department=prompt("Edit Department",student.department);

let email=prompt("Edit Email",student.email);

if(name && age && department && email){

students[index]={

id:student.id,
name:name,
age:age,
department:department,
email:email

};

saveData();

displayStudents();

}

}

function searchStudent(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#studentTable tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input)?"":"none";

});

}