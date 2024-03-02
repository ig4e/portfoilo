const path = require("node:path");
const project = path.resolve(__dirname, "tsconfig.json");

module.exports = {
    root: true,
    extends: [
        require.resolve("@vercel/style-guide/eslint/next"),
        require.resolve("@vercel/style-guide/eslint/typescript"),
    ],
    parserOptions: {
        project,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
        "react/self-closing-comp": "error",
        "no-undef": "off",
    },
};
