import {Person} from "./person.js";

export class Worker extends Person {

    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName);
        this.birthday = birthday;
        this.position = position;
    }

    get rate() {
        return this.#rate;
    }

    set rate(rate) {
        if (rate >= 1000) {
            return this.#rate = rate;
        } else {
            console.error('Ошибка: ставка ' + this.#rate + ' рублей слишком низкая. Минимальное значение — 1000 рублей.');
        }
    }

    get days() {
        return this.#days;
    }

    dayCurrentMonth() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        return new Date(year, month, 0).getDate();
    }

    addDays(day) {
        if (day <= 0) {
            console.error("Ошибка: количество дней должно быть больше 0");
            return this.#days;
        }

        let totalDays = this.#days + day;

        if (totalDays > this.dayCurrentMonth()) {
            this.#days = this.dayCurrentMonth();
        } else {
            this.#days = totalDays;
        }

        return this.#days;
    }

    getTotalAddDays() {
        return this.#days;
    }

    getSalary() {
        let salary = this.#days * this.#rate;
        const today = new Date();

        if (today.getMonth() === this.birthday.getMonth()) {
            salary += salary * 0.10;
        }

        return salary;
    }

    static whoWorkedMore(...worker) {
        if (worker.length === 0) {
            console.log('Нет данных для сравнения');
            return 0;
        }

        let maxDays = Math.max(...worker.map(worker => worker.#days));

        let topWorkers = worker.filter(worker => worker.#days === maxDays);

        topWorkers.forEach(worker => {
            console.log(`Больше всех отработал ${worker.getFullName()}. Количество рабочих дней ${worker.#days}`);
        })

    }

    static whoisYounger(...worker) {
        if (worker.length === 0) {
            console.log('Нет данных для сравнения');
            return 0;
        }

        let maxDates = new Date(Math.max(...worker.map(worker => worker.birthday)));

        let youngestWorkers = worker.filter(worker => +worker.birthday === +maxDates);

        youngestWorkers.forEach(worker => {
            console.log(`${worker.getFullName()} ${worker.getAge()}`);
        });
    }
}