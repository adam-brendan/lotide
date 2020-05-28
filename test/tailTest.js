const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
    it("returns 0 for tail([2]).length", () => {
        assert.strictEqual(tail([2]).length, 0)
    });
});