
import {Worker} from "./worker.js";

let personOne = new Worker('Антон', 'Лущай', '6-12-1993', 'Тестировщик');
let personTwo = new Worker('Алина', 'Лыга', '05-01-1993', 'Frontend-разработчик');
let personThree = new Worker('Юля', 'Лисюк', '10-05-2002', 'Дизайнер');
let personFour = new Worker('Саша', 'Якоб', '09-10-1995', 'Дизайнер');
let personFive = new Worker('Николай', 'Иванов ', '11-10-1992', 'Backend-разработчик');

// function log(text) {
//     return console.log(text);
// }
const log = (text) => console.log(text);


log(` 1. ${personOne.getFullName()}`);
log(personOne.getAge());
personOne.rate = 1800;
log(`Ставка за день работы: ${personOne.rate} руб`);
personOne.addDays(15);
personOne.addDays(5);
personOne.addDays(40);
log(`Количество рабочих дней: ${personOne.getTotalAddDays()}`);
log(`${personOne.getFullName()} - ${personOne.getSalary()} рублей`);

log(` 2. ${personTwo.getFullName()}`);
log(personTwo.getAge());
personTwo.rate = 2000;
log(`Ставка за день работы: ${personTwo.rate} руб`);
personTwo.addDays(2);
personTwo.addDays(10);
personTwo.addDays(0);
log(`Количество рабочих дней: ${personTwo.getTotalAddDays()}`);
log(`${personTwo.getFullName()} - ${personTwo.getSalary()} рублей`);

log(` 3. ${personThree.getFullName()}`);
log(personThree.getAge());
personThree.rate = 500;
log(`Ставка за день работы: ${personThree.rate} руб`);
personThree.addDays(25);
personThree.addDays(2);
personThree.addDays(8);
log(`Количество рабочих дней: ${personThree.getTotalAddDays()}`);
log(`${personThree.getFullName()} - ${personThree.getSalary()} рублей`);

log(` 4. ${personFour.getFullName()}`);
log(personFour.getAge());
personFour.rate = 1350;
log(`Ставка за день работы: ${personFour.rate} руб`);
personFour.addDays(2);
personFour.addDays(3);
personFour.addDays(11);
log(`Количество рабочих дней: ${personFour.getTotalAddDays()}`);
log(`${personFour.getFullName()} - ${personFour.getSalary()} рублей`);

log(` 5. ${personFive.getFullName()}`);
log(personFive.getAge());
personFive.rate = 2200;
log(`Ставка за день работы: ${personFive.rate} руб`);
personFive.addDays(8);
personFive.addDays(4);
personFive.addDays(13);
log(`Количество рабочих дней: ${personFive.getTotalAddDays()}`);
log(`${personFive.getFullName()} - ${personFive.getSalary()} рублей`);

log("- Информация о сотрудниках, отработавших наибольшее количество дней:");
Worker.whoWorkedMore(personOne, personTwo, personThree, personFour, personFive);

log("- Информация о самых младших сотрудниках:");
Worker.whoisYounger(personOne, personTwo, personThree, personFour, personFive);