const {
  dump,
  validate,
  simplify,
} = require("./splitSquare");

describe("dump", function () {
  it("should return dump of square", function () {
    expect(dump([0, 1, 0, 1])).toEqual('0101');
    expect(dump([0, 0, 0, [1, 1, 1, 1]])).toEqual('0001111');
    expect(dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])).toEqual('0001110001111');
  });
});

describe("validate", function () {
  it("should return true valid square", function () {
    expect(validate(0)).toEqual(true);
    expect(validate([0, 1, 0, 1])).toEqual(true);
    expect(validate([0, 0, 0, [1, 1, 1, 1]])).toEqual(true);
    expect(validate([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])).toEqual(true);
  });

  it("should return false invalid square", function () {
    expect(validate([0, 1, 0])).toEqual(false);
    expect(validate(2)).toEqual(false);
    expect(validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])).toEqual(false);
    expect(validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])).toEqual(false);
  });
});

describe("simplify", function () {
  it("should return simplified square", function () {
    expect(simplify(0)).toEqual(0);
    expect(simplify([1, 1, 1, 1])).toEqual(1);
    expect(simplify([0, 0, 0, [1, 1, 1, 1]])).toEqual([0, 0, 0, 1]);
    expect(simplify([1, 0, 1, [1, 1, 1, 1]])).toEqual([1, 0, 1, 1]);
    expect(simplify([1, [1, 1, 1, 1], 1, [1, 1, 1, 1]]) ).toEqual(1);
    expect(simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1]) ).toEqual(1);
  });

  it("should return original square", function () {
    expect(simplify([0, 1, 0, 1])).toEqual([0, 1, 0, 1]);
  });
});