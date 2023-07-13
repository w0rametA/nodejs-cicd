import { findMax } from ".";

describe("max", () => {

    it("it should return a positive maximum integer", () => {
        expect(findMax([1,2,3,4,5,6,7])).toEqual(7)
        expect(findMax([5555,999999,1000000])).toEqual(1000000)
    })

    it('it should return return 0 when you compare with an array that contain negative integer', () => {
        expect(findMax([-1,-2,-3,-4,-5,0])).toEqual(0)
    })
})

