/* Importing named exports and default export
 * Modules
 * Modules are imported in two different ways:
 */

/*
 * Import from named exports
 * Import named exports from the file person.js
 */

import { name, age } from "./person.js";

/*
 * Import from default exports
 * import a default export from the file message.js;
 */

import defaultMessage from "./message.js";


// Using the imported values
console.log("Name:", name);
console.log("Age:", age);
console.log("Default Message:", defaultMessage);
