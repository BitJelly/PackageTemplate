/**
 * @param name The receiver of your greeting.
 * @param greeting The greeting to use.
 */
export const greeter:Function = (name:string, greeting:string = 'hello'):string => `${greeting} ${name}`;
