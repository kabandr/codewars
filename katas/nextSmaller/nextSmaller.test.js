const nextSmaller = require("./nextSmaller")

test('nextSmaller test case 1', () => {
    expect(nextSmaller(21)).toBe(12);
});

test('nextSmaller test case 2', () => {
    expect(nextSmaller(907)).toBe(790);
});

test('nextSmaller test case 3', () => {
    expect(nextSmaller(531)).toBe(513);
});

test('nextSmaller test case 4', () => {
    expect(nextSmaller(135)).toBe(-1);
});

test('nextSmaller test case 5', () => {
    expect(nextSmaller(2071)).toBe(2017);
});

test('nextSmaller test case 6', () => {
    expect(nextSmaller(414)).toBe(144);
});

test('nextSmaller test case 7', () => {
    expect(nextSmaller(135)).toBe(-1);
});

test('nextSmaller test case 8', () => {
    expect(nextSmaller(1027)).toBe(-1);
});

test('nextSmaller test case 9', () => {
    expect(nextSmaller(123456798)).toBe(123456789);
});

test('nextSmaller test case 10', () => {
    expect(nextSmaller(123456789)).toBe(-1);
});

test('nextSmaller test case 11', () => {
    expect(nextSmaller(1234567908)).toBe(1234567890);
});