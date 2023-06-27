module.exports = {
  root: true,
  extends: "react-native-wcandillon",
  rules: {
    quotes: ["error", "double"],
    "import/prefer-default-export": ["warn", {target: "single"}],
    "no-default-export": "off",
  },
};
