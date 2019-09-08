/**
 * A function used for generating greetings.
 * @param  {String} name
 * @param  {String='hello'} greeting
 * @returns String
 */
export const greeter:Function =
 (name:string, greeting:string = 'hello'):string => `${greeting} ${name}`;
