# Introduction to callbacks

This document introduces the notion of a *callback*, with a focus on its implementation in JavaScript. This document does not provide a comprehensive introduction to JavaScript (for one, please refer to [w3schools][JavaScript_tutorial], for example).

The notion of a callback is particularly important to understand for programming in JavaScript. JavaScript is often used to write web applications, which commonly contain numerous callbacks. I wrote this document for people who are already familiar with one programming language, but are only beginning to learn Javascript. 

Three concepts are essential to understand callbacks:

* A *function* is a section of code that can be called.
* An *argument* can be passed to a function as input.
* *Asynchronous* code is code that is executed with a delay after being called.

A callback is a function that is passed as an argument to another function. You may want to use callbacks:

* as part of your programming style, or
* to write asynchronous code.

Next, you will learn about these uses in more detail.

[JavaScript_tutorial]: https://www.w3schools.com/js/DEFAULT.asp

## Callbacks as part of your programming style

You can use callbacks to make your code appear more *functional*. *Functional programming* is a style of programming where your code relies on functions. Functional programming is often contrasted with *imperative programming*, where code relies on instructions.

Imagine that you would like to write some JavaScript code that creates an array of numbers and multiplies each number by two to update the array. First, you  would declare and initialise a `#!JS my_array` variable like so:
``` JavaScript
var my_array = [2, 4, 8, 16];
```
Then, you could decide to write the rest of the code in an imperative style. It would look like this:
``` JavaScript
for (var index = 0; index < my_array.length; index++)
{
  my_array[index] = my_array[index] * 2;
}
```
Notice that the array is updated by iterating through its elements with a `#!JS for` loop. Within the loop, each element of the array is reassigned to a new value equal to twice of its previous value.

Now envisage that you would like to rewrite the previous code in a more functional style. The rewritten code would look like this:
``` JavaScript
const multiply_by_two = (x => x * 2);

var my_array = my_array.map(multiply_by_two);
```
Note that this code uses the callback `#!JS multiply_by_two` that is passed as an argument to the function `#!JS map`. Here, the callback is defined using [arrow notation][arrow_notation].

??? note "Note on the merits of the imperative and functional styles"
    The imperative and functional styles both have their respective merits. The imperative style is more straightforward to understand, while the functional style can allow for more conciseness.

[arrow_notation]: https://www.w3schools.com/js/js_arrow_function.asp

## Callbacks to write asynchronous code

You can also use callbacks to write asynchronous code. Suppose that you would like to execute a function after a delay of three seconds. This is how you would program this in JavaScript:
```JavaScript
function SayHello() {
    console.log('Hello!');
}

setTimeout(SayHello, 3000);
```
First, you defined the function `#!JS SayHello` by using [standard syntax][function_definition]. This function displays the string `#!JS 'Hello!'` in the console. Then, you called the function `#!JS setTimeout`. This function executes a callback after a set amount of time. The function takes in two arguments:

1. `#!JS SayHello` as a callback, and
2. `3000` as the set amount of time before the callback is executed. Note that this amount of time is expressed in milliseconds.

As 3000 milliseconds is equal to three seconds, `#!JS setTimeout` executes `#!JS SayHello` after three seconds. You have written asynchronous code, congratulations!

[function_definition]: https://www.w3schools.com/js/js_functions.asp


