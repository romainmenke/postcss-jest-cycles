import postcss from 'postcss';

const root = postcss.parse('.foo {}', { from: 'foo.css' });

root.walk((x) => {
	throw new Error("Any error");
});
