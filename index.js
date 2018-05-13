const js = import("./wasm_hgc");

js.then(js => {
  js.greet("abinitio!");
});