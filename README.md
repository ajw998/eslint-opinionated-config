# Opinionated ESLint configurations

## Teardown analysis 

### Prefer single quotes `''` over `""` for strings

In JavaScript, it is acceptable to wrap ordinary string literals in single or
double quotes. However, many style guides would define their own preference for
consistency purposes. [Airbnb](https://github.com/airbnb/javascript#strings--quotes) and
[Google](https://google.github.io/styleguide/jsguide.html), for example,
advises developers to use single quotes for strings.

Single quotes is preferred over double quotes due to enforce similarity with
British English style rules, where one would enclose quoted matters in single
quotation marks. Special considerations must be made when using apostrophes.

```js
const unsafe = 'I'm an unsafe string' # Unsafe
const safe = 'I\'m a safe string' # Safe
```

The above problem may be adequately solved by using template literals. However,
template literal should not be applied as a style rule, as the use of template
literals generally infer the need for string interpolation, multiline literals,
or unescape quotes or apostrophes. Liberal use of template literal when
wrapping ordinary string literals would therefore impact on code comprehension.

