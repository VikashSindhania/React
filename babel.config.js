module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], //  @babel/preset-react Why we install this library. Why we are doing this?  the babel is a transpiler which is used to convert one form to another form. so here this commad of code will convert your JSX code to actual HTML code that why we are using this configuration.
  ],
};
//We are using this Babel Configuration
