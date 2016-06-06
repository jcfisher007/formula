# functionfoundry

[![Circle CI](https://circleci.com/gh/FunctionFoundry/functionfoundry.svg?style=svg)](https://circleci.com/gh/FunctionFoundry)

FunctionFoundry is a JavaScript library with an interface similar to spreadsheet functions.

The code runs in Node.js and browsers. The library provides ~100 functions but it is small (~30kb minified).

For more information see the [docs](./Docs.org) or read the [annotated code](http://functionfoundry.github.io/functionfoundry/docs/).

## quickstart

```sh
npm install --save functionfoundry
```

```js
var { AND, EQ, LEN, GT, LT, ISNUMBER, ISTEXT, ISEMAIL, ISEMPTY, LOWER, PROPER, TEXT, DATE} = require('functionfoundry')
// Print `true`
console.log(
  AND(
    ISTEXT('This is'),
    ISNUMBER(1),
    ISEMAIL('me@gmail.com'),
    ISEMPTY(''),
    GT(2, 1),
    LT(1, 2),
    EQ(LEN('foo'), 3),
    EQ(LOWER('HAPPY'), 'happy'),
    EQ(PROPER('HAPPY'), 'Happy'),
    EQ(TEXT(4200.00, "$#,###.00"), '$4,200.00'),
    EQ(TEXT(DATE(2000, 2, 1), "m-d-yyyy"), '2-1-2000')
  )
)
```

## organization

| name | purpose |
| ------------- | ----------- |
|docs| Annotated source code generated by docco |
|src| Original source code written in modern JavaScript (JS2015) |
|test| Test code written for tape |
