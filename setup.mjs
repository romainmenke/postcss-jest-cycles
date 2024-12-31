import fs from 'node:fs/promises';

await fs.rm('tests', { force: true, recursive: true });
await fs.mkdir('tests', { force: true });

for (let i = 0; i < 20; i++) {
	await fs.writeFile(`tests/a-test-${i}.test.mjs`, `import postcss from 'postcss';
	
test('throw in walk', () => {
	const root = postcss.parse('.foo {}', { from: 'foo.css' });

	root.walk((x) => {
		throw new Error("Any error");
	});
});
`);
}
