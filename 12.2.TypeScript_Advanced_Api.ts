//==========================================================================================
// Intersection --> Combine multiple types into a single type
interface User {
	name: string;
	age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
};

// Example usage
const result = sumOfAge({
	name: "harkirat",
	age: 20
}, {
	name: "raman",
	age: 21
});
console.log(result); // Output: 9



//==========================================================================================
// Pick --> Pick only a specific properties from an object
interface User {
    id : number;
    name : string;
    age : number;
    email : string;
    password : string
}

type UpdatedProps = Pick<User, 'name' | 'age' | 'password'>

function updateUser(updatedProps : UpdatedProps) {
    console.log(`Name : ${updatedProps.name}, Password : ${updatedProps.password}`)
}

const propsToPass : UpdatedProps = {
    name : "Harcharanpreet Singh",
    age : 24,
    password : "Amritsar"
} 

updateUser(propsToPass)




//==========================================================================================
// Readonly - > Make all properties of an object readonly
// This is just to prevent the object from being modified like 
// if someone is creating wrapper of ChatGPT and he has defined 
// endpoint and apiKey as readonly then no one can modify it
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};





// ==========================================================================================
// Record --> Create an object type with a set of properties
interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }




// ==========================================================================================
// Maps --> Create a map of a set of properties
interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }



// ==========================================================================================
// Exclude --> Exclude a set of properties from an object
interface User {
  id: string;
  name: string;
  age: number;
}

type UserWithoutAge = Exclude<User, 'age'>;

const user: UserWithoutAge = {
  id: 'abc123',
  name: 'John Doe',
};

console.log(user); // Output: { id: 'abc123', name: 'John Doe' }




//==========================================================================================
// Type inference in zod 
// Zod is a runtime type checking library for TypeScript
// It is used to validate the data at runtime
import z from 'zod'


const userSchema1 = z.string()

const userSchema = z.object({
    name: z.string().min(1),
    age: z.number().min(18).optional
})                                              // RunTime Object
type userType = z.infer<typeof userSchema>;     // Compile Time Object


