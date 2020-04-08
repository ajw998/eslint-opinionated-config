# Opinionated ESLint configurations

## Installation

Run `npm install @ajw998/eslint-config`

In your `.eslintrc`, add the following:

```js
{ 
    extends: '@ajw998/eslint-config'
}
```

## Teardown analysis 

- [ES6](#ES6)

- [Style](#style)

- [Variables](#variables)

### ES6

#### No `super()` calls in non-derived classes (`constructor-super`)

Calling `super()` in non-derived classes constructor will raise runtime error.

#### Enforce consistent spacing when using spread operators (`rest-spread-spacing`)

Rest and spread operator should always be together. This improves code
readability. This style could be found consistently throughout examples
provided by the original [TC-39
proposal](https://github.com/tc39/proposal-object-rest-spread) and MDN
examples.

```js
// Error
const { x, y, ... z} = props;

// Correct
const { x, y, ...z } = props;
```

### Style 

#### Prefer single quotes `''` over `""` for strings (`quotes`)

In JavaScript, it is acceptable to wrap ordinary string literals in single or
double quotes. However, many style guides would define their own preference for
consistency purposes. [Airbnb](https://github.com/airbnb/javascript#strings--quotes) and
[Google](https://google.github.io/styleguide/jsguide.html), for example,
advises developers to use single quotes for strings.

Single quotes is preferred over double quotes due to enforce similarity with
British English style rules, where one would enclose quoted matters in single
quotation marks. Special considerations must be made when using apostrophes.

```js
const unsafe = 'I'm an unsafe string' // Unsafe
const safe = 'I\'m a safe string' // Safe
```

The above problem may be adequately solved by using template literals. However,
template literal should not be applied as a style rule, as the use of template
literals generally infer the need for string interpolation, multi-line literals,
or un-escape quotes or apostrophes. Liberal use of template literal when
wrapping ordinary string literals would therefore impact on code comprehension.

#### Reject Yoda conditions (`yoda`)

[Yoda conditions](https://en.wikipedia.org/wiki/Yoda_conditions) will throw an
error as it makes code unreadable. It is counterintuitive and does not
following traditional English syntax. Consider an average day-to-day
conversation between two person where one enquires whether the other is a
programmer. Unless you are the physical embodiment of the great Jedi
Grandmaster, you will generally not phrase the question in such way: 'A
programmer, he is?'. Instead, you will ask, 'Are you a programmer?'.

```js
if ( 'yoda' === jediMaster ) { teach() }; // Error 
if ( jediMaster === 'yoda' ) { teach() }; // Pass
```

#### Warn on unsorted Object keys (`sort-keys`)

Self-explanatory. It is preferable to sort object keys in alphabetical order to
help developers search for specific keys. This, however, rests on the
assumption that the developer is familiar with the content of the object, and
hence why the linter will only warn the developer instead of outright banning
it. Take the following example:

```js
// Mock object
// This would throw a warning
const obj = { 
    type: 'select',
    options: [ 'apples', 'pears', 'oranges' ],
    multiple: true,
    disabled: false,
}
```

The example above shows a generated object that would be used as a function
parameter for generating a `<select>` element completed with options.
For new developers, it may be intuitive to think about the HTML element
`type`, and think about the list of available `options`, followed by other
functional requirements. 

If we sort they keys:

```js
const obj = { 
    disabled: false,
    multiple: true,
    options: [ 'apples', 'pears', 'oranges' ],
    type: 'select',
}
```

This might potentially impede on new developer's comprehension of the object,
as it may be counter-intuitive to first consider whether a `select` element is
disabled. However, this is beneficial in the long run. Sorted keys are also
especially useful for large objects, enabling developers to do visual search
easily. 

### Variables

#### Disallow deleting variables (`no-delete-vars`)

Using `delete` on `var` leads to unexpected behaviour. Consider the following:

```js
var test = 1; // Declare a variable
delete test;
console.log(test) // 1
```
The variable is not deleted, even though the script's intention shows the
contrary. This is because variables are not normally deletable.  If you declare
`test` without `var`, however:

```js
test = 1; // Declare a property
delete test;
console.log(test) // test is undefined
```

The reason being that `test` is bound to the top level lexical environment,
which in this case is global environment. Assigning `1` to `test` without using
`var` would instead assign an object property to the global environment. Since
properties in objects are deletable, `test` will be undefined.

In strict mode, the parser will throw an error.

#### Disallow early uses (`no-use-before-define`)

Variables and functions declared using `var` are hoisted to the top of the
scope. This can be confusing to read and creates messy code. This problem is
indirectly covered by the `prefer-const` rule, which requires developers to use
`let` and `const`, and will cause a `ReferenceError` to be thrown if the
developer attempts to access a variable before it is declared.

```js
// Syntactically correct, but linter will throw an errors.
// due to `prefer-const` and `no-use-before-define`.
foo(); // Error
function foo() { };

// Syntactically incorrect. The interpretor will throw `ReferenceError`.
bar();
const bar = () => { };
```
