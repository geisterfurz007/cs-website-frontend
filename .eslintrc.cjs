module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"react",
		"@typescript-eslint/eslint-plugin",
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			modules: true,
			jsx: true
		}
	},
	rules: {
		"no-unused-vars": "off",
		"no-invalid-this": "off",
		"multiline-ternary": "off",
		"no-extra-parens": [
			"error",
			"functions"
		],
		"curly": ["error", "multi-line"],
		"lines-between-class-members": "off",
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"template-curly-spacing": "off",
		"indent": ["error", "tab", {
			"ignoredNodes": ["TemplateLiteral"]
		}]
	},
	extends: [
		"eslint-config-codesupport",
		"plugin:@next/next/recommended"
	]
};
