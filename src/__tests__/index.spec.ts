import { Greeter } from '../index';
test('My Greeter', () => {
	expect(Greeter('Dan')).toBe('Hello Dan');
});
