const Manager = require('../lib/Manager-Class')

describe('manager', () => {
    describe('getOfficeNumber', () => {
        it ('Gives the office number of the listed manager', () => {   
            const testManager = new Manager("Jim", "01", "JimQ@yahoo.com", "1324")
            
            expect (testManager.getOfficeNumber()).toEqual("1324")
        })
    })
})