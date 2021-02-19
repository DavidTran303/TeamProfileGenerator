const { expect, it } = require("@jest/globals");
const Employee = require("../employee");

describe("testEmployee function", () => {
  it("The name should exist", () => {
    var employee = new Employee("David", 33, "davtran303@gmail.com")
      expect(employee.name).toEqual("David")
  });

  it("The id should exist", () => {
    var employee = new Employee("David", 33, "davtran303@gmail.com")
      expect(employee.id).toEqual(33)
  });

  it("The email should exist", () => {
    var employee = new Employee("David", 33, "davtran303@gmail.com")
      expect(employee.email).toEqual("davtran303@gmail.com")
  });

  it("The function getName should work", () => {
    var employee = new Employee("David", 33, "davtran303@gmail.com")
      expect(employee.getName()).toEqual("David")
  });

});