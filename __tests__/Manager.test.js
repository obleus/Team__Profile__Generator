const Manager = require('../lib/Manager');
const manager = new Manager('odney', '1234567', 'bleus.odney@yahoo.com', '123');

test('this will test the manager object', () => {
    expect(manager.name).toBe('odney');
    expect(manager.id).toBe('1234567');
    expect(manager.email).toBe('bleus.odney@yahoo.com');
    expect(manager.officeNumber).toBe('123');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('odney');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('bleus.odney@yahoo.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});