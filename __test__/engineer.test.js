const { expect, it } = require("@jest/globals");
const Employee = require("../employee");
const Engineer = require("../engineer");

describe("testEngineer function", () => {
  it("The name should exist", () => {
    var employee = new Engineer("Leo", 23, "leo@gmail.com", "Leo303")
      expect(employee.name).toEqual("Leo")
  });

  it("The engineer id should exist", () => {
    var employee = new Engineer("Leo", 23, "leo@gmail.com", "Leo303")
      expect(employee.id).toEqual(23)
  });

  it("The engineer email should exist", () => {
    var employee = new Engineer("Leo", 23, "leo@gmail.com" , "Leo303")
      expect(employee.email).toEqual("leo@gmail.com")
  });

   it("The Github should exist", () => {
    var employee = new Engineer("Leo", 23, "leo@gmail.com", "Leo303" )
      expect(employee.github).toEqual("Leo303")
  });


});