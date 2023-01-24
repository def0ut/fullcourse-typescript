const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error",
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

function LogMsg(data: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}): string {
  if (data.isBirthdayData) {
    return `Congrats ${data.userNameData}, age: ${data.ageData + 1}`;
  } else {
    return createError("Error!");
  }
}

console.log(LogMsg(userData));

function LogMsg({
  isBirthdayData,
  ageData,
  userNameData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData}, age: ${ageData + 1}`;
  } else {
    return createError("Error!");
  }
}

console.log(LogMsg(userData));
