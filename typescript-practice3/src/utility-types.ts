// Utility Types


// Partial

interface User {
    id: string;
    name: string;
    email: string;
}

const updateProfile = (id: string, date: Partial<User>) => {
    // some backend logic
};

updateProfile("ascd", {name: "Asif"});

// Required 

interface Config {
    apiKey?: string;
    timeOut?: number;
}

const initialize = (config: Required<Config>) => {
    // some logic
}

initialize({apiKey: "abcd", timeOut: 30000});


// Pick

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
    name: "ABCD",
    description: "ASIF"

};


// Omit

interface Employee {
    id: number;
    name: string;
    Salary: number;
    nid: string;

}

type PublicEmployee = Omit<Employee, "Salary" | "nid">

const directoryEntry: PublicEmployee = {
    id: 42,
    name: "Bisal",
    
};


// Record

type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
    development: "http://localhost:3000",
    staging: "https://staging.api.com",
    production: "https://api.com",
}
