import Person from "./person";

describe("map", () => {

    test("convert array of integers", () => {
        // given
        const numbers = [1, 2, 3, 4];

        // when
        const result = numbers.map((number) => {
            return number * 2;
        });

        // then
        expect(result).toEqual([2, 4, 6, 8]);
    });

    test("update object property", () => {
        // given
        const people = [new Person("John"), new Person("Sabine"), new Person("Jack")];

        // when
        const result = people.map((person) => {
            person.name += "X";
            return person;
        });

        // then
        expect(result).toEqual([new Person("JohnX"), new Person("SabineX"), new Person("JackX")]);
    });

    test("conditionally update object property", () => {
        // given
        const people = [new Person("John"), new Person("Sabine"), new Person("Jack")];

        // when
        const result = people.map((person) => {
            if (person.name.startsWith("J")) person.name += "X";
            return person;
        });

        // then
        expect(result).toEqual([new Person("JohnX"), new Person("Sabine"), new Person("JackX")]);
    });

    test("convert array of objects to array of strings", () => {
        // given
        const people = [new Person("John"), new Person("Sabine"), new Person("Jack")];

        // when
        const result = people.map((person) => {
            return person.name;
        });

        // then
        expect(result).toEqual(["John", "Sabine", "Jack"]);
    });

})