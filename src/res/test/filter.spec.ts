import Person from "./person";

describe("filter", () => {
    test("filter long names", () => {
        // given
        const people = [new Person("John"), new Person("Sabine"), new Person("Jack")];

        // when
        const result = people.filter((person) => person.name.length > 5);

        // then
        expect(result.length).toBe(1);
    });

    test("filter by age", () => {
        // given
        const people = [new Person("John"), new Person("Sabine"), new Person("Jack", 25)];

        // when
        const result = people.filter((person) => person.age > 22);

        // then
        expect(result.length).toBe(1);
        expect(result[0].name).toBe("Jack");
    });

    test("filter array based on search criteria", () => {
        // given
        const people = [new Person("John"), new Person("Sabine"), new Person("Jack", 25), new Person("Jacob", 24)];
        const query = "jac";

        // when
        const result = people.filter((person) => person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);

        // then
        expect(result.length).toBe(2);
    });
});