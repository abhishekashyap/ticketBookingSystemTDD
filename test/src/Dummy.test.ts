import { dummyOutput } from '../../src/Dummy'

describe("Dummy Test", () => {
    it("should assert on the dummy output", () => {
        const dummyOutputReturned = dummyOutput("hello")
        expect(dummyOutputReturned).toBe("hellohello")
    })
})