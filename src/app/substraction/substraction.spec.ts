import { substraction } from "./substraction";

describe ('substraction unit tests', () => {

    it ('Should subs 9 - 3 = 6',() => {
        //Patern AAA (Arrange - Act - Assert)

        //Arrange
        let result = 0;
        //Act
        result = substraction(9, 3);
        //Assert
        expect(result).toBe(6);
    })
    
    it ('Should subs 2 - 0 = 2',() => {
        //Patern AAA (Arrange - Act - Assert)

        //Arrange
        let result = 0;
        //Act
        result = substraction(2, 0);
        //Assert
        expect(result).toBe(2);
    })
    
    it ('Should subs 2.7 - 0.7 = 2.0',() => {
        //Patern AAA (Arrange - Act - Assert)

        //Arrange
        let result = 0;
        //Act
        result = substraction(2.7, 0.7);
        //Assert
        expect(result).toBe(2.0);
    })

    it ('Should subs 3.1416 - 0.1416 = 3.0',() => {
        //Patern AAA (Arrange - Act - Assert)

        //Arrange
        let result = 0;
        //Act
        result = substraction(3.1416, 0.1416);
        //Assert
        expect(result).toBe(3.0);
    })
})