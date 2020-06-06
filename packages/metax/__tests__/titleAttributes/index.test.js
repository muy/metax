import titleAttributes from "../../lib/titleAttributes";

describe("Title attributes", () => {
    describe("itemProp", () => {
        it("should be `name` by default", () => {
            expect(titleAttributes.defaultProps.itemProp).toBe("name")
        })
        it("should have a defined type", () => {
            expect(titleAttributes.propTypes.itemProp).toBeDefined()
        })
    })
    describe("lang", () => {
        it("should not have a default type", () => {
            expect(titleAttributes.defaultProps).not.toHaveProperty("lang")
        })
        it("should have a defined type", () => {
            expect(titleAttributes.propTypes.lang).toBeDefined()
        })
    })
})
