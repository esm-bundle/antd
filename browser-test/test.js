describe("@esm-bundle/autopublish-template", () => {
  it("can load the System.register bundle", () => {
    Promise.all([
      import(
        "https://cdn.jsdelivr.net/npm/@esm-bundle/react/system/react.development.js"
      ),
      import(
        "https://cdn.jsdelivr.net/npm/@esm-bundle/react-dom/system/react-dom.development.js"
      ),
    ])
      .then(([library1, library2]) => {
        if (!!library1 && !!library2) {
          return System.import("/base/system/index.js");
        }
      })
      .catch((error) => {
        throw Error("Loading Library Error", error);
      });
  });
});
