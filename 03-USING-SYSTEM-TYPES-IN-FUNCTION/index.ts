const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

function LogMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName}, age: ${age + 1}`;
  } else {
    return "Error!";
  }
}

LogMsg(isBirthdayData, userNameData, 40);

// Congrats John, age: 41

const LogMsgConst = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName}, age: ${age + 1}`;
  } else {
    return "Error!";
  }
};

LogMsgConst(isBirthdayData, userNameData, 40);

// Будет тоже самое, что и с вызовом предыдущей функции!
