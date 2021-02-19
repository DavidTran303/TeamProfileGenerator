const { expect, it } = require("@jest/globals");
const Employee = require("../employee");
const Intern = require("../intern");

describe("testIntern function", () => {
  it("The intern name should exist", () => {
    var employee = new Intern("Juan", 10, "Juan@gmail.com", "Harvard" )
      expect(employee.name).toEqual("Juan")
  });

  it("The intern id should exist", () => {
    var employee = new Intern("Juan", 10, "Juan@gmail.com", "Harvard")
      expect(employee.id).toEqual(10)
  });

  it("The intern email should exist", () => {
    var employee = new Intern("Juan", 10, "Juan@gmail.com" , "Harvard")
      expect(employee.email).toEqual("Juan@gmail.com")
  });

   it("The intern school information should be presented", () => {
    var employee = new Intern("Juan", 10, "leo@gmail.com", "Harvard" )
      expect(employee.school).toEqual("Harvard")
  });


});