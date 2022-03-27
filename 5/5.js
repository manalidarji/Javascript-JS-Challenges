// Symbol generates unique values
// there is no short cut for creating Symbol
// let sym1 = Symbol('cat');
// let sym2 = Symbol('cat');
// sym1 === sym2 will always return false coz they generate unique values each time

// let sym1 = Symbol.for('cat');
// let sym2 = Symbol.for('cat');
// sym1 === sym2 will be true, coz it creates globally


// only purpose => identifier for objcet properties
// when you check properties by 'Object.getOwnPropertyNames', you won't be able to see the property key which was generated using Symbol
// however you can access it by 'Object.getOwnPropertySymbols'

// normal way
const user1 = {
    username: 'manali_darji',
    password: '98421560',
    age: 25
}

console.log('user1 username:', user1.username);
console.log('user1 password:', user1.password);

// using Symbol to make username and password field private
const username = Symbol('username');
const password = Symbol('password');

const user2 = {
    [username]: 'manali_darji_2',
    [password]: '78421560',
    age: 68
}

console.log('user2 username:', user2.username);
console.log('user2 password:', user2.password);