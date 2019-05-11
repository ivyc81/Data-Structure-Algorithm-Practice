const {pivot, quickSort} = require("./quick")

describe('pivot', function () {
  function strLength(a, b) {
    return a.length - b.length
  }

  it('should exist', function () {
    expect(typeof pivot).toBe('function', "did you remember to define the 'pivot' function?");
  });

  it('should return the pivot index', function () {
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
    expect(pivot(arr1)).toBe(3, "pivot(arr1) should be 3");
    expect(pivot(arr2)).toBe(4, "pivot(arr2) should be 4");
    expect(pivot(arr3, strLength)).toBe(1, "pivot(arr3, strLength) should be 1");
  });

  it('should mutate the array by placing values on either side of the pivot', function () {
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
    pivot(arr1);
    pivot(arr2);
    pivot(arr3, strLength);

    expect(arr1.slice(0, 3).sort((a, b) => a - b)).toEqual(
      [2, 3, 4],
      "After calling pivot, 2, 3, and 4 should be to the left of 5 in arr1."
    );
    expect(arr1.slice(3).sort((a, b) => a - b)).toEqual(
      [5, 7, 8, 9, 10, 20],
      "After calling pivot, 6, 7, 9, 10, and 20 should be to the right of 5 in arr1."
    );
    expect(arr2.slice(0, 4).sort((a, b) => a - b)).toEqual(
      [0, 2, 4, 5],
      "After calling pivot, 0, 2, 4, and 5 should be to the left of 8 in arr2."
    );
    expect(arr2.slice(4).sort((a, b) => a - b)).toEqual(
      [8, 10, 11, 12, 13, 16],
      "After calling pivot, 10, 11, 12, 13, and 16 should be to the right of 8 in arr2."
    );
  });
});

describe('quickSort', function () {
  it('should exist', function () {
    expect(typeof quickSort).toBe('function', "did you remember to define the 'quickSort' function?");
  });

  it('should sort arrays', function () {
    expect(quickSort([4, 20, 12, 10, 7, 9])).toEqual(
      [4, 7, 9, 10, 12, 20]);

    expect(quickSort([0, -10])).toEqual(
      [-10, 0]);

    expect(quickSort([0, -10, 7, 4])).toEqual(
      [-10, 0, 4, 7]);

    expect(quickSort([2, 1, 3])).toEqual(
      [1, 2, 3]);
  });

});
