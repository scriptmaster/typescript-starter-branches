import { bind, memoize, debounce } from 'decko';

class Example {
	@bind()
	foo() {
		// the value of `this` is always the object from which foo() was referenced.
		return this;
	}

	@memoize
	cached(k: any) {
		return Math.random()
	}

	@debounce(1005)
	async fetchData(a: number) {
		await console.log('Fetching data ...', a);
		return 1;
	}
}

let e = new Example();
console.log(e.foo.call(null), e);

console.log(e.cached(2));
console.log(e.cached(2));
console.log(e.cached(3));
console.log(e.cached(3));
console.log(e.cached(3));

console.log(e.fetchData(1));
console.log(e.fetchData(2));
console.log(e.fetchData(3));
console.log(e.fetchData(4));
console.log(e.fetchData(5));

setImmediate( () => e.fetchData(6) )

setTimeout( () => e.fetchData(7), 1000 )

setTimeout( () => e.fetchData(8), 3000 )


