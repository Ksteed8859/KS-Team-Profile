const Intern = require('../lib/Intern-Class')

describe('intern', () => {
    describe('getSchool', () => {
        it ('Gives the school of the listed intern', () => {
            const testIntern = new Intern("Lydia", "03", "LydiaJ@yahoo.com", "UofU");

            expect(testIntern.getSchool()).toEqual("UofU")
        })
    })
})