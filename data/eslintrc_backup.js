const OFF = 0;

  
const ERROR = 2;

export default {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "extends": [
    "plugin:require-path-exists/recommended",
    "eslint:recommended",
    "google"
  ],
  "plugins": [
    "require-path-exists",
    "mocha"
  ],
  "globals": {
    "expect": true,
    "assert": true,
    "lodash": true,
    "moment": true,
  },
  "rules": {
    "no-extra-parens": ERROR,
    "no-unexpected-multiline": ERROR,
    "require-path-exists/notEmpty": 2,
    "require-path-exists/tooManyArguments": 2,
    "require-path-exists/exists": [1, {
      "extensions": [
        "",
        ".jsx",
        ".es.js",
        ".jsx",
        ".json5",
        ".es",
        ".es6",
        ".coffee",
        ".js",
        ".jsm",
        ".xml",
        ".html",
        ".xhtml",
      ],
    }],
    "no-tabs": 0,
    "no-invalid-this": 0,
    "no-inner-declarations": [0, "both"],
    "camelcase": 0,
    "indent": [2, 4],
    "no-console": 0,
    "no-restricted-syntax": [0, "ArrowFunctionExpression"],
    "semi": ["error", "always"],    
    "curly": "error",
    "quotes": ["error", "double"],    
    "arrowFunctions": 0,
    "valid-jsdoc": 0,
    "linebreak-style": [
      0,
      "unix"
    ],
    "max-len": 0,
    "new-cap": 0,
    "no-undef": 0,
    "no-underscore-dangle": 0, // default: 2
    "no-unreachable": 2,
    "operator-assignment": [0, "both"],
    "no-undef-init": 0,
    "no-undefined": 0,
    "no-unused-expressions": 0,
    "require-jsdoc": [ERROR, {
      "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
      }
    }],
    "no-unused-vars": 0,
    "no-warning-comments": [OFF, {
      "terms": ["TODO", "FIXME"],
      "location": "start"
    }],
  },
};