console.log('hello');

$(document).ready(onReady)

// The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.
let employeeInfo = []

function onReady() {
    console.log('in jQuery');
    $('#submitInfo').on('click', inputInfo)
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
    
employeeInfo.push(employeeJobInfo)
}