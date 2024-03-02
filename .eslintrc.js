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
                project: require("node:path").resolve(
                    __dirname,
                    "tsconfig.json",
                ),
            },
        },
    },
    plugins: ["react"],
    rules: {
        "react/self-closing-comp": "error",
        "no-undef": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
    },
};
