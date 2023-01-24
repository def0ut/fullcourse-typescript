// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";

// const userData = {
//   isBirthdayData: true,
//   ageData: 40,
//   userNameData: "John",
//   messages: {
//     error: "Error",
//   },
// };

// const createError = (msg: string) => {
//   throw new Error(msg);
// };

// function LogMsg({
//   isBirthdayData,
//   ageData,
//   userNameData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
//   messages: { error: string };
// }): string {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData}, age: ${ageData + 1}`;
//   } else {
//     return createError(error);
//   }
// }

// console.log(LogMsg(userData));

// const departaments: string[] = ["dev", "design", "marketing"];
// const nums: number[] = [40, 56, 34];
// const different: any[] = [40, "string", true];

// const matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// departaments.push("lead"); // Added new string elements.

// const report = departaments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);

// const [first] = report;
// console.log(first); => design - done
