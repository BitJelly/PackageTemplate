/**
 * @param name The name of what you're greeting.
 * @param greeting The greeting to use.
 */
export const greeter: Function = (name: string, greeting: string = 'hello'): string => `${greeting} ${name}`;
