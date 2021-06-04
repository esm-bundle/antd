describe("@esm-bundle/autopublish-template", () => {
  it("can load the System.register bundle", () => {
    return System.import("/base/system/index.js");
  });
});
