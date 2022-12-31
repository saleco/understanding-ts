
// const person: { 
//     name: string, age: number
// } = {
// const person: {
//     name: string; 
//     age: number;
//     hobbies: string[];
//     role: [number, string] //tuple with exact two elements of informed types
// } = { 
//     name: "Sallo",
//     age: 36,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN,READ_ONLY,AUTHOR}; //ENUM
// enum Role { ADMIN=777,READ_ONLY=333,AUTHOR=555}; //ENUM WITH VALUE defined

const person = { 
    name: "Sallo",
    age: 36,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
};

// person.role.push('admin');
// person.role[1] = 10
// person.role = [0, 'admin']

let favoriteActivities: string[];
favoriteActivities = ['Sports']
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if(person.role == Role.AUTHOR) {
    console.log('is author');
}

switch (person.role) {
    case Role.ADMIN:
        console.log('Admin role')
        break;
    case Role.AUTHOR:
        console.log('Author role')
        break;
    case Role.READ_ONLY:
        console.log('Read only role')
        break;
    default: 
        console.log('Read only role')
        break;
   
}
