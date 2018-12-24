import { greeter } from '../src/';
test('My Greeter', () => {
	expect(greeter('Dan','Hello'))
	.toBe('Hello Dan');
});
