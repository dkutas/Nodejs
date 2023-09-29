// This and arrow fns

// this references the global object of the file. In a browser the Window, in Node.js an empty object.
const someOuterObject = {
  someObj: {
    name: "Misi",
    age: 29,
    greet: () => {
      console.log(this);
    },
    greet2() {
      console.log(this);
    },
    greet3: function () {
      console.log(this);
    },
  },
};

// someOuterObject.someObj.greet();
// someOuterObject.someObj.greet2();
// someOuterObject.someObj.greet3();

// Arrays

const hobbies = ["Sports", "Cooking"];

// console.log(hobbies.map((el) => el + "15"));

// It won't have any problem with the

hobbies.push("Programming");

const newHobbies = [...hobbies, "Eating"];

// console.log(newHobbies);

// console.log({ ...hobbies })

const { someObj } = someOuterObject;
const { name, age, greet, greet2, greet3 } = someObj;

greet();
greet2();
greet3();

// greet3()

const toArray = (...args) => args;

// console.log(toArray(1, 2, 3, 4, 5, 6))
