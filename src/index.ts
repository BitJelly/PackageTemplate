/**
 * A function used for generating greetings.
 * @param  {string} name
 * @param  {string='hello'} greeting
 * @returns string
 */
export const greeter:Function = (name:string, greeting:string = 'hello'):string => `${greeting} ${name}`;
