# Keyword - Definition & JavaScript Reserved Keywords

## What is a Keyword?

A **keyword** is a reserved word in a programming language that has a special, predefined meaning. Keywords cannot be used as identifiers (variable names, function names, etc.) because the compiler/interpreter treats them as language constructs.

---

## JavaScript Reserved Keywords (ES6+)

### Control Flow
- `if` — conditional execution
- `else` — alternate branch for `if`
- `switch` — multi-way branch
- `case` — branch label in `switch`
- `break` — exit a loop or `switch`
- `continue` — skip to next iteration of a loop
- `default` — default case in `switch`

### Looping & Iteration
- `for` — loop with initialization, condition, increment
- `while` — loop while condition is true
- `do` — execute loop body once before checking condition
- `in` — iterate over object properties (`for...in`)
- `of` — iterate over iterable values (`for...of`)

### Function & Class Declaration
- `function` — declare a function
- `return` — return a value from a function
- `class` — declare a class
- `extends` — create a subclass
- `super` — call parent class constructor/method
- `new` — instantiate an object
- `this` — reference to the current execution context
- `constructor` — class constructor method
- `static` — declare static class members
- `get` — define a getter
- `set` — define a setter
- `async` — declare an asynchronous function
- `await` — pause execution until a Promise settles
- `yield` — pause/resume a generator function
- `function*` — generator function syntax

### Variable Declaration
- `var` — function-scoped variable declaration
- `let` — block-scoped variable declaration
- `const` — block-scoped constant declaration

### Error Handling
- `try` — block to test for errors
- `catch` — block to handle errors
- `throw` — throw a user-defined exception
- `finally` — block that executes after `try`/`catch` regardless of outcome

### Module System
- `import` — import modules
- `export` — export modules
- `from` — specify module path in `import`
- `as` — alias in imports/exports

### Type & Value Keywords
- `typeof` — returns the type of a value
- `instanceof` — tests if an object is an instance of a class
- `void` — evaluates an expression and returns `undefined`
- `delete` — deletes an object property
- `undefined` — represents an undefined value (global property)

### Boolean & Null Literals
- `true` — boolean true literal
- `false` — boolean false literal
- `null` — null literal (no object value)

### Debugging
- `debugger` — invokes debugger breakpoint

### Other
- `with` — extends scope chain (deprecated, strict-mode illegal)

---

## Future Reserved Keywords (Strict Mode Only)

These are reserved for potential future use in strict mode:
- `implements`
- `interface`
- `let` (already a full keyword in ES6+)
- `package`
- `private`
- `protected`
- `public`
- `static`

---

## Contextual Keywords

Some words act like keywords only in specific contexts and can still be used as identifiers elsewhere:
- `get`, `set` — only keywords inside object literals and classes
- `async`, `await` — only keywords inside async functions
- `of` — only a keyword in `for...of` and `import` statements
- `target` — only used in object destructuring pattern

---

## Quick Note: Java vs JavaScript Keywords

In the Source Code vs Bytecode vs Binary Code comparison, `Source Code` is written in human-readable form. Both **Java** and **JavaScript** have keywords, but:
- Java keywords: `public`, `static`, `void`, `class`, `int`, `double`, `boolean`, etc.
- JavaScript keywords: `let`, `const`, `var`, `function`, `class`, `async`, `await`, etc.

The `.js` file stores JavaScript source code using JavaScript keywords.
The `.java` file stores Java source code using Java keywords — which the Java compiler turns into **bytecode** (`.class` files).
