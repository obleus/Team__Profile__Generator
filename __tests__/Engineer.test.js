const Engineer = require('../lib/Engineer');
const engineer = new Engineer('odney', '1234567', 'bleus.odney@yahoo.com', 'obleus');

test('this will test the engineer object', () => {
    expect(engineer.name).toBe('odney');
    expect(engineer.id).toBe('1234567');
    expect(engineer.email).toBe('bleus.odney@yahoo.com');
    expect(engineer.githubUsername).toBe('obleus');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('odney');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('bleus.odney@yahoo.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('obleus');
}); 

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
}); 