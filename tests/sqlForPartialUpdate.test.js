const { sqlForPartialUpdate } = require('../helpers/sql');

describe("sqlForPartialUpdate", function () {
    // tests with a single item to update
    // checks if correctly formats the SQL part and the values array
    test("works: 1 item", function () {
        const result = sqlForPartialUpdate(
            { firstName: "Test" },
            { firstName: "first_name" }
        );
        expect(result).toEqual({
            setCols: "\"first_name\"=$1",
            values: ["Test"]
        });
    });
    // tests the function with multiple items to update
    // it verifies that the function can handle multiple fields and properly format the SQL and values
    test("works: multiple items", function () {
        const result = sqlForPartialUpdate(
            { firstName: "Test", age: 30 },
            { firstName: "first_name", age: "age" }
        );
        expect(result).toEqual({
            setCols: "\"first_name\"=$1, \"age\"=$2",
            values: ["Test", 30]
        });
    });
    // throws error without data
    // tests behavior when no data is provided
    test("throws error without data", function () {
        expect(() => {
            sqlForPartialUpdate({}, {});
        }).toThrow("No data");
    });
});
