describe("findAll with filters", function () {
    test("works with name filter", async function () {
        let companies = await Company.findAll({ name: "Test" });
        expect(companies).toEqual([/* expected companies */]);
    });

    // Add more tests for minEmployees, maxEmployees, and combinations
});
