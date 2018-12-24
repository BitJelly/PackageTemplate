import { Greeter } from '../src/';
test('My Greeter', () => {
	expect(Greeter('Dan')).toBe('Hello Dan');
});
