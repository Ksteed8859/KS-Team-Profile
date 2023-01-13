const Engineer = require("../lib/Engineer-Class")

describe('engineer', () => {
    describe('getGithub', () => {
        it ('Gives the github username of the listed engineer', () => {
            const testEngineer = new Engineer("Ethan", "02", "EthanB@yahoo.com", "Ethanis2cool");

            expect(testEngineer.getGithub()).toEqual("Ethanis2cool")
        })
    })
});