describe("GET /companies with filters", function () {
    test("works with name filter", async function () {
        const response = await request(app).get("/companies?name=Test");
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ companies: [/* expected companies */] });
    });

    test("error if minEmployees > maxEmployees", async function () {
        const response = await request(app).get("/companies?minEmployees=10&maxEmployees=5");
        expect(response.statusCode).toBe(400);
    });

    // Add more tests as needed
});
