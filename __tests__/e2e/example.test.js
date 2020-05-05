
const {emulatorDriver, emulatorConfiguration,assert} = require("./config/setup");

describe(`Sample"`, () => {
    before(async () => {
        await emulatorDriver.init(emulatorConfiguration);
        await emulatorDriver.setImplicitWaitTimeout(20000);
    });
    it("test text exists", async () => {
        let textElement = await emulatorDriver.elementByAccessibilityId("welcomeTestLabel");
        const textElementTxt = await textElement.text();
        assert.equal(textElementTxt,"Text to be tested");
    });
    after(async () => {
        await emulatorDriver.quit()
    })
});