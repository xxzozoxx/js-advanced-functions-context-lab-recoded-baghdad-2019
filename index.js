function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

function createEmployees(arr) {
    return arr.map(r => createEmployeeRecord(r));
}

function createTimeInEvent(dateStamp) {
    let [date, time] = dateStamp.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', hour: parseInt(time), date: date });
    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, time] = dateStamp.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', hour: parseInt(time), date: date });
    return this;
}

function hoursWorkedOnDate(givenDate) {
    let timeIn = this.timeInEvents.find(t => t.date === givenDate);
    let timeOut = this.timeOutEvents.find(t => t.date === givenDate)
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(givenDate) {
    let wages = hoursWorkedOnDate.call(this, givenDate) * this.payPerHour;
    return parseFloat(wages);
}
let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(e => e.date)
    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecords(arr){
let records = this.map(r => createEmployeeRecord.call(this,r));
return records;
}

function findEmployeebyFirstName(firstName) {
    this.find(name => name.firstName === firstName)
    return this;
}

function calculatePayroll(records) {
    let payroll = records.reduce(function(init, record) {
        return init + allWagesFor(record);
    }, 0)
    return payroll;
}