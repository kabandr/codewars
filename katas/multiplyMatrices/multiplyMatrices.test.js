const multiplyMatrices = require("./multiplyMatrices").default

test("Multiply matrices a and b to equals c", () => {
    let a = [[1, 2, 3], [4, 5, 6]]
    let b = [[7, 8], [9, 10], [11, 12]]
    let c = [[58, 64], [139, 154]]
    expect(multiplyMatrices(a, b)).toStrictEqual(c)
});