const Employee = require('../lib/Employee');
const employee = new Employee('odney', '1234567', 'bleus.odney@yahoo.com');

test('this is a test for the employee object', () => {
    expect(employee.name).toBe('odney');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('bleus.odney@yahoo.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('odney');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('bleus.odney@yahoo.com');
});