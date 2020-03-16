//jest + enzyme
const path = require("path");
module.exports = {
  rootDir: path.resolve(__dirname, "../"),
  collectCoverage: true, // 是否收集测试时的覆盖率信息
  collectCoverageFrom: ["src/util/**/*.{js,jsx,mjx}"], // 哪些文件需要收集覆盖率信息
  coverageDirectory: "<rootDir>/test/coverage", // 输出覆盖信息文件的目录
  coveragePathIgnorePatterns: ["/node_modules/"], // 统计覆盖信息时需要忽略的文件
  moduleNameMapper: {
    // 主要用于与webpack的resolve.alias匹配，注意正则写法
    "^src(.*)$": "<rootDir>/src$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1"
  },
  testMatch: [
    //匹配的测试文件
    "<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  testURL: "http://localhost/", // 运行环境下的url
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: [
    // 转换时需要忽略的文件
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ]
};
