module.exports = {
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "es6":     true,
    "browser": true,
    "node":    true,
    "mocha":   true
  },
  "parser": "babel-eslint",
  "extends": ["standard", "standard-react", "eslint:recommended", "plugin:react/recommended"],
}
