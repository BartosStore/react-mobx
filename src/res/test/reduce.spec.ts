import Person from "./person";

describe("reduce", () => {
    test("add numbers", () => {
        // given
        const numbers = [1, 2, 3, 4];

        // when
        const result = numbers.reduce((accum, current) => {
            return accum + current;
        });

        // then
        expect(result).toBe(10);
    });

    test("subtract numbers", () => {
        // given
        const numbers = [100, 2, 3, 4];

        // when
        const result = numbers.reduce((accum, current) => {
            return accum - current;
        });

        // then
        expect(result).toBe(91);
    });

    test("subtract numbers with initial value", () => {
        // given
        const numbers = [2, 3, 4];

        // when
        const result = numbers.reduce((accum, current) => accum - current, 100);

        // then
        expect(result).toBe(91);
    });

    test("add numbers in objects", () => {
        // given
        const numbers = [{ age: 1 }, { age: 2 }, { age: 3 }, { age: 4 }];

        // when
        const result = numbers.reduce((accum, current) => {
            return accum + current.age;
        }, 0);

        // then
        expect(result).toBe(10);
    });

    test("flattened array", () => {
        // given
        const numbers = [[1, 2], [3, 4], [5, 6]];

        // when
        const result = numbers.reduce((accum, current) => accum.concat(current));

        // then
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("group by a property", () => {
        // given
        const people = [new Person("Alice", 20), new Person("John", 22), new Person("Walter", 20), new Person("Rick", 20)];

        // when
        const result = people.reduce((accum, current: Person) => {
            let key: number = current.age;

            if (accum.get(key) === undefined) {
                accum.set(key, [current.name]);
            } else {
                const items: string[] = accum.get(key) || [];
                items.push(current.name);
                accum.set(key, items);
            }

            return accum;
        }, new Map<number, string[]>());

        // then
        expect(result).toEqual(new Map([[20, ["Alice", "Walter", "Rick"]], [22, ["John"]]]));
    });

    test("remove duplicates in array", () => {
        // given
        const numbers: number[] = [1, 2, 3, 4, 1, 2, 5, 6, 5, 7, 8, 4, 5, 6, 9, 10];

        // when
        const result = numbers.reduce((accum, current: number) => {
            if (accum.indexOf(current) < 0) accum.push(current);
            return accum;
        }, [] as number[]);

        // then
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    // alternative for duplicates
    test("remove duplicates in array with Set", () => {
        // given
        const numbers = [1, 2, 3, 4, 1, 2, 5, 6, 5, 7, 8, 4, 5, 6, 9, 10];

        // when
        const result = Array.from(new Set(numbers));

        // then
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    class Pilot {
        id: number;
        name: string;
        years: number;

        constructor(id?: number, name?: string, years?: number) {
            this.id = id || 0;
            this.name = name || "";
            this.years = years || 0;
        }
    }

    test("find oldest pilot", () => {
        // given
        const pilots: Pilot[] = [
            {
                id: 10,
                name: "Poe Dameron",
                years: 14,
            },
            {
                id: 2,
                name: "Temmin 'Snap' Wexley",
                years: 30,
            },
            {
                id: 41,
                name: "Tallissan Lintra",
                years: 16,
            },
            {
                id: 99,
                name: "Ello Asty",
                years: 22,
            }
        ];

        // when
        const mostExpPilot = pilots.reduce(function (oldest: Pilot, pilot: Pilot) {
            return (oldest.years || 0) > pilot.years ? oldest : pilot;
        }, new Pilot());

        // then
        expect(mostExpPilot).toEqual({
            id: 2,
            name: "Temmin 'Snap' Wexley",
            years: 30,
        });
    });
});