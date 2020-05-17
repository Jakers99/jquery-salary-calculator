console.log('hello');

$(document).ready(onReady)

// The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.
let employeeInfo = []

function onReady() {
    console.log('in jQuery');
    $('#submitInfo').on('click', inputInfo)
    $('#submitInfo').on('click', addSalary)
    $('.showInfo').on('click', displayPeople)
    $('#showInfo').on('click', '.deleteButton', deleteItem)
}

function deleteItem() {
  $(this).parent().remove();
  
}

function inputInfo() {
    let employeeJobInfo= {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        salary: $('#empSalary').val()
    }
    console.log(employeeInfo);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#empSalary').val('');
    
employeeInfo.push(employeeJobInfo)
    
addSalary()
displayPeople(employeeInfo)
}

function addSalary() {
    console.log('in add salary');
  let salaryCounter = 0;
  for (let i = 0; i < employeeInfo.length; i++) {
  
    salaryCounter += parseInt(employeeInfo[i].salary)

  }
  console.log(salaryCounter);
    
    }
    function displayPeople(arrayParam){
      $('#showInfo').empty();
      for (let i = 0; i < arrayParam.length; i++) {
        let showingInfo = arrayParam[i];
      $('#showInfo').append(`<li>
        ${arrayParam[i].firstName}
        ${arrayParam[i].lastName}
        ${arrayParam[i].idNumber}
        ${arrayParam[i].jobTitle}
        ${arrayParam[i].salary}
        <button class="deleteButton">Delete</button>
        </li>`);
      }
      
    }
    
