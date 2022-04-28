const Intern = require('../lib/Intern');
const intern = new Intern('odney', '1234567', 'bleus.odney@yahoo.com', 'Florida');

test('this will test the intern object', () => {
    expect(intern.name).toBe('odney');
    expect(intern.id).toBe('1234567');
    expect(intern.email).toBe('bleus.odney@yahoo.com');
    expect(intern.school).toBe('Florida');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('odney');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('bleus.odney@yahoo.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Florida');
});


test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
}); 