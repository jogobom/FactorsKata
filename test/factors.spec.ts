import { expect } from 'chai';
import factorsOf from '../src/factors';

describe("factorsOf", () => {
 it("Should return no factors when a = 0", () => {
        const result = factorsOf(0);
        expect(result).to.be.empty;
    });
    it("Should return [1] when a = 1", () => {
        const result = factorsOf(1);
        expect(result).to.deep.equal([1]);
    });
    it("Should return [1,2] when a = 2", () => {
        const result = factorsOf(2);
        expect(result).to.deep.equal([1,2]);
    });
    it("Should return [1,2,4] when a = 4", () => {
        const result = factorsOf(2);
        expect(result).to.deep.equal([1,2]);
    });
    it("Should return [1,2,3,6] when a = 6", () => {
        const result = factorsOf(6);
        expect(result).to.deep.equal([1,2,3,6]);
    });
    it("Should return [1,3,9] when a = 9", () => {
        const result = factorsOf(9);
        expect(result).to.deep.equal([1,3,9]);
    });
    it("Should return [1,61] when a = 61", () => {
        const result = factorsOf(61);
        expect(result).to.deep.equal([1,61]);
    });
    it("Should return factors of 48", () => {
        const result = factorsOf(48);
        expect(result).to.deep.equal([1,2,3,4,6,8,12,16,24,48]);
    });
});