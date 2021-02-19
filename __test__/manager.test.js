const { expect, it } = require("@jest/globals");
const Employee = require("../employee");
const Manager = require("../manager");

describe("testManager function", () => {
  it("The manager name should exist", () => {
    var employee = new Manager("Ben", 69, "Ben@gmail.com", 33 )
      expect(employee.name).toEqual("Ben")
  });

  it("The manager id should exist", () => {
    var employee = new Manager("Ben", 69, "Ben@gmail.com", 33)
      expect(employee.id).toEqual(69)
  });

  it("The manager email should exist", () => {
    var employee = new Manager("Ben", 69, "Ben@gmail.com" , 33)
      expect(employee.email).toEqual("Ben@gmail.com")
  });

   it("The office  number should exist", () => {
    var employee = new Manager("Ben", 69, "leo@gmail.com", 33 )
      expect(employee.officeNumber).toEqual(33)
  });


});