export class Person {
    #birthday;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get birthday() {
        return this.#birthday;
    }

    set birthday(dateBirthday) {
        return this.#birthday = new Date(dateBirthday);
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getAge() {
        const now = new Date();
        const birthDate = this.#birthday;
        let age = now.getFullYear() - birthDate.getFullYear();

        if (now.getMonth() < birthDate.getMonth() || ( now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate()) ) {
            age--;
        }

        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;
        let yearsWrite;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            yearsWrite = 'лет';
        } else if (lastDigit === 1) {
            yearsWrite = 'год';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            yearsWrite = 'года';
        } else {
            yearsWrite = 'лет';
        }

        return `${age} ${yearsWrite}`;
    }
}