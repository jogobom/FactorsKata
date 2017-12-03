import { expect } from 'chai';
import { factorsOf, primeFactorsOf } from '../src/factors';

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

describe("primeFactorsOf", () => {
    it('should return no factors when a = 0', function () {
        expect(primeFactorsOf(0)).to.be.empty;
    });
    it('should return no factors for 1', function () {
        expect(primeFactorsOf(1)).to.be.empty;
    });
    it('should return [2] for 2', function () {
        expect(primeFactorsOf(2)).to.deep.equal([2]);
    });
    it('should return [3] for 3', function () {
        expect(primeFactorsOf(3)).to.deep.equal([3]);
    });
    it('should return [2,2] for 4', function () {
        expect(primeFactorsOf(4)).to.deep.equal([2,2]);
    });
    it('should return [3,3] for 9', function () {
        expect(primeFactorsOf(9)).to.deep.equal([3,3]);
    });
    it('should return [2,3] for 6', function () {
        expect(primeFactorsOf(6)).to.deep.equal([2,3]);
    });
    it('should return [2,2,3] for 12', function () {
        expect(primeFactorsOf(12)).to.deep.equal([2,2,3]);
    });
    it('should return [2,2,2,3,3,5] for 360', function () {
        expect(primeFactorsOf(360)).to.deep.equal([2,2,2,3,3,5]);
    });
    it('should return [2,43] for 86', function () {
        expect(primeFactorsOf(86)).to.deep.equal([2,43]);
    });
});