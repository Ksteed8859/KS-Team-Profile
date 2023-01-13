const Employee = require("../lib/Employee-Class")

describe('employee-class', () => {
    describe ('getName', () => {
        it ("Gives the name of the entered employee", () => {
            const testEmployee = new Employee("Kate", "13", "KateS@yahoo.com");

            expect(testEmployee.getName()).toEqual("Kate")
        })
    });
    describe('getId', () => {
        it ("Gives the ID number of the listed employee", () => {
            const testEmployee = new Employee("Kate", "13", "KateS@yahoo.com");

            expect(testEmployee.getId()).toEqual("13")
        })
    });
    describe('getEmail', () => {
        it ("Gives the email address of the listed employee" , () => {
            const testEmployee = new Employee("Kate", "13", "KateS@yahoo.com");

            expect(testEmployee.getEmail()).toEqual("KateS@yahoo.com")
        })
    });
    describe('getRole', () => {
        it ("Gives the role of the listed employee", () => {
            const testEmployee = new Employee("Kate", "13", "KateS@yahoo.com");

            expect (testEmployee.getRole()).toEqual("Employee")
        })
    });
})