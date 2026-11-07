// type alias vs interface

// interface is generally connected to objects
// type alias is more connected to literals, unions, tuples, primitives


type ID = number;

// interface id  = number 
type Role = "admin" | "member";

// interface "admin" " "member


interface User {
    name: string;
    id: ID;
    role: "admin" | "member" ;
}

const user : User = {
    id: 123,
    name: "abc",
    role: "admin"
};

// ToDo : interface

interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "felix  Catus",
    breed: "Persian"
};



type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const car: Car = {
    model: "Corolla",
    brand: "toyota"
};



interface IEmployee {
    name: string;
}
interface IEmployee {
    id:number;
}

// type TEmployee = {
//     name: string
// };

// type TEmployee = {}




const employee : IEmployee= {
    id:123,
    name: "ABC"
}