const getUserName = require("./user");
// jest.mock("./__mocks__/request");

// test("Getting URLs", async () => {
//   // var data = await request("/url");
//   expect(data).resolves.toEqual(expect.arrayContaining(data));
// });
jest.mock("./__mocks__/request");

// The assertion for a promise must be returned.
it("works with promises", () => {
  // expect.assertions(1);
  return getUserName(4).then((data) => expect(data).toEqual("Mark"));
});
