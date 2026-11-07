
// let myString : string = "Programming Hero"
// let myNumber : number = 4536
// let myBoolean : boolean = false
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n



// Type Safe Function
const addTow = (a : number, b : number) => {
    return a + b
}


console.log(addTow(20, 20))

// Array and Tuple an readonly modifier

const arr : Array<string> = ["programming", "Hero"]
const numArr : number[] = [1, 2, 3] 

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];


// Optional, Default and rest  parameters (...args)

const contactName = (firstName: string, lastName?: string ) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
}
const greetings = (fullName: string, greeting= "Hello") =>{
    console.log(greeting + " " + fullName);
}

greetings("Asif");


// rest parameters (...args)

const sum = (...number: number[]) => {
    return number.reduce((total, sum) => total + sum, 0);
}

sum(1, 2, 3, 4, 5, 6,);

const logUserAction = (
    ...args: [name: string, age: number, isActive: boolean]
) => {
    const [name, age] = args;
    console.log(name + " is " + age);
};

logUserAction("Asif", 192, false);


// Object type, type alias and interface


type Address = {
    streetName: string;
    holdingNumber: number;
};



type  TUser = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address: Address;
};

interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address: Address;
};

const user: IUser = {
    name: "Asif",
    age: 123,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["abc", "dev"],
    address: {
        holdingNumber: 123,
        streetName: "ABCD"
    },
};
