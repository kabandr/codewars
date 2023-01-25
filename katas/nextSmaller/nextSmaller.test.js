const nextSmaller = require("./nextSmaller")

describe("Fixed tests", function() {
	it("Smaller numbers", function() {
        expect(nextSmaller(21)).toBe(12);
        expect(nextSmaller(907)).toBe(790)
		expect(nextSmaller(531)).toBe(513)
		expect(nextSmaller(135)).toBe(-1)
		expect(nextSmaller(2071)).toBe(2017)
		expect(nextSmaller(1027)).toBe(-1)
		expect(nextSmaller(414)).toBe(144)
	})
  
	it("Bigger numbers", function() {
		expect(nextSmaller(123456798)).toBe(123456789)
		expect(nextSmaller(123456789)).toBe(-1)
		expect(nextSmaller(1234567908)).toBe(1234567890)
	})
})