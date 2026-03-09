# JavaScript Concepts

---

## 1. What is the difference between `var`, `let`, and `const`?

`var` is function scoped and can be redeclared. `let` is block scoped and can be reassigned but not redeclared. `const` is block scoped and cannot be reassigned or redeclared.

```js
var x = 1;
var x = 2; // allowed

let y = 1;
y = 2;     // allowed
// let y = 3; not allowed

const z = 1;
// z = 2; not allowed
```

`var` leaks out of blocks like `if` and `for`, while `let` and `const` stay inside them.

---

## 2. What is the spread operator (`...`)?

The spread operator spreads the elements of an array or object into another array, object, or function call.

```js
// arrays
const a = [1, 2, 3];
const b = [...a, 4, 5]; // [1, 2, 3, 4, 5]

// objects
const user = { name: "Alice", age: 20 };
const updated = { ...user, age: 21 }; // { name: "Alice", age: 21 }

// function call
Math.max(...a); // same as Math.max(1, 2, 3)
```

---

## 3. What is the difference between `map()`, `filter()`, and `forEach()`?

- `forEach()` loops through each item and runs a function. It does **not** return anything.
- `map()` loops through each item, transforms it, and returns a **new array**.
- `filter()` loops through each item and returns a **new array** with only items that pass a condition.

```js
const nums = [1, 2, 3, 4];

nums.forEach(n => console.log(n));         // just logs, returns nothing

const doubled = nums.map(n => n * 2);      // [2, 4, 6, 8]

const evens = nums.filter(n => n % 2 === 0); // [2, 4]
```

| Method | Returns |
|--------|---------|
| `forEach` | nothing (`undefined`) |
| `map` | new transformed array |
| `filter` | new filtered array |

---

## 4. What is an arrow function?

An arrow function is a shorter syntax for writing functions using `=>`.

```js
// regular function
function add(a, b) {
    return a + b;
}

// arrow function
const add = (a, b) => a + b;
```

If there is only one expression, the `return` keyword and `{}` can be left out. If there is only one parameter, the parentheses can also be left out.

```js
const double = n => n * 2;
```

Arrow functions also do not have their own `this` — they inherit it from the surrounding scope.

---

## 5. What are template literals?

Template literals are strings written with backticks (`` ` ``) instead of quotes. They allow embedding variables or expressions directly inside the string using `${}`, and support multi-line strings without `\n`.

```js
const name = "Alice";
const age = 20;

// without template literals
console.log("My name is " + name + " and I am " + age);

// with template literals
console.log(`My name is ${name} and I am ${age}`);
```

Any expression can go inside `${}`:

```js
console.log(`2 + 2 = ${2 + 2}`);
console.log(`Status: ${isOpen ? "Open" : "Closed"}`);
```

Multi-line example:
```js
const html = `
    <div>
        <h3>${title}</h3>
    </div>
`;
```
