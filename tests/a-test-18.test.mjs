import postcss from 'postcss';
	
test('throw in walk', () => {
	const root = postcss.parse('.foo {}', { from: 'foo.css' });

	root.walk((x) => {
		throw new Error("Any error");
	});
});
