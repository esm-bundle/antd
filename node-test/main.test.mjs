describe("@esm-bundle/autopublish-template", () => {
  it("can load the esm bundle without dying", () => {
    Promise.all([
      import(
        "https://cdn.jsdelivr.net/npm/@esm-bundle/react/esm/react.development.js"
      ),
      import(
        "https://cdn.jsdelivr.net/npm/@esm-bundle/react-dom/esm/react-dom.resolved.development.js"
      ),
    ])
      .then(([library1, library2]) => {
        if (!!library1 && !!library2) {
          return import("../esm/index.js");
        }
      })
      .catch((error) => {
        throw Error("Loading Library Error", error);
      });
  });
});
