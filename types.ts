let isLoading: boolean = true;

const x: number = 1;

const msg: string = "Hello World";
const arr2: number[] = [1, 2, 3];

console.log(arr2)

const tuple: [string, number] = ["hello", 10];
type Tuple = [string, number, boolean] // criar tipo que se restringe a este tipo de dados

type TypeUser = {
    name: string;
    age: number;
  };
  
  const user: TypeUser = {
    name: "Marcus",
    age: 29
  };
  
  type TypeAddress = {
    street: string;
    city: string;
    country: string;
  };
  
  let addr: TypeAddress = {
    street: "Rua 1",
    city: "São Paulo",
    country: "Brasil"
  };
  
  let common: TypeUser & TypeAddress; // junta tipos, ou seja junto tipos de dados
  
  common = {
    ...user,
    ...addr
  } // aqui os dados podem ser muitos daí o sprea operator
  
  common = {
    name: "Igor",
    age: 29,
    street: "Rua 1",
    city: "Porto",
    country: "Portugal"
  };
  
  console.log(common);

  // Exercicio
  /*Create a interface called IPerson with the following properties:
name (string): representing the person's name
age (number): representing the person's age
address (string): representing the person's address
Write a function called updatePersonName that takes in a person object (of type Person) and a newName string. The function should create a new object with the same properties as the original person object, except the name property should be updated with the newName value. The original person object should remain unchanged. */

  interface iPerson {
    name: string;
    age: number;
    address: string;
  }

  const person: iPerson = {
    name: "Ivan",
    age: 23,
    address: "Rua Alferes",
  }

  function updateName(person: iPerson, newName: string,): iPerson {
    return {
        ...person,
        name: newName,
    }
  }

  const updatedPerson = updateName(person, "Marcus")

  console.log(updatedPerson)
/*
Write a function called calculateArea that takes in two parameters: shape (string) and dimensions (number[]). The shape parameter represents the shape type, which can be either "rectangle" or "circle". The dimensions parameter represents the dimensions of the shape. For a rectangle, the dimensions array should contain two numbers representing the length and width. For a circle, the dimensions array should contain one number representing the radius. The function should calculate and return the area of the shape based on the provided dimensions. */

type Shape = "rectangle" | "circle";

interface rectangle {
    with: number,
    height: number,
}

interface circle {
    area: number,
}