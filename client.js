console.log('hello');

$(document).ready(onReady)

// The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.
let employeeInfo = []

function onReady() {
    console.log('in jQuery');
    $('#submitInfo').on('click', inputInfo)
    $('#submitInfo').on('click', addSalary)
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
}

function addSalary() {
    console.log('in add salary');
  for (let i = 0; i < employeeInfo.length; i++) {
      let salaryCounter = employeeInfo[i].salary;
    console.log(salaryCounter);
    return salaryCounter;
    ;
    
      
  }
    
        
        
    }
    
