1. use `jest`
2. use `postcss`
3. enable `--experimental-vm-modules`
4. add sufficient tests so that `jest` will spawn workers
5. `throw` in a PostCSS `walk` callback during a `jest` test

```js
import postcss from 'postcss';
	
test('throw in walk', () => {
	const root = postcss.parse('.foo {}', { from: 'foo.css' });

	root.walk((x) => {
		throw new Error("Any error");
	});
});
```

```sh
npm install
npm run test
```
