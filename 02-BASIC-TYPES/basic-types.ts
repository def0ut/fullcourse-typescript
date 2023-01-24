// let userName: string = "Name";
// userName = "ksdlfsk";

//                          - string
//   BASIC TYPES            - number (int, float, complex)
//                          - boolean

const isBirthday: boolean = true;
const age: number = 40;
const userName: string = "John";

if (isBirthday) {
  console.log(`Congrats ${userName}, age: ${age + 1}`);
}

// Congrats John, age: 41

const isBirthday_ERROR = 1;
const age_ERROR = "40";
const userName_ERROR = "John";

if (isBirthday_ERROR) {
  console.log(`Congrats ${userName_ERROR}, age: ${age_ERROR + 1}`);
}

// Congrats John, age: 401
