module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
