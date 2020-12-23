# Introduction to callbacks

This document introduces the notion of a *callback*, focusing on its use in Javascript. I wrote this document for people who are already familiar with one programming language, but new to Javascript.

Three concepts are essential to understand callbacks:

* A *function* is a section of code that can be called.
* An *argument* can be passed to a function as input.
* An *asynchronous* code is one that is executed with a delay after being called. Web servers often contain asynchronous code.

A callback is a function that is passed as an argument to another function. You may want to use callbacks:

* as part of your programming style, or
* to write asynchronous programs.

Callbacks are essential to JavaScript as Javascript is often used to write asynchronous programs.

## Callbacks as part of your programming style

You can use callbacks to make your code appear more *functional*. *Functional programming* is a style of programming where your code relies on functions. Functional programming is often contrasted with *imperative programming*, where code relies on instructions.

Imagine that you would like to write some code that creates an array of numbers, multiplies each number by two to update the array, and displays the updated array. If you decided to write this code in an imperative style, your code would look like this:
``` JavaScript
var my_array = [2, 4, 8, 16];

for (var index = 0; index < my_array.length; index++)
{
  my_array[index] = my_array[index] * 2;
}

console.log(my_array);
```
Notice that the array is updated by iterating through its elements with a `#!JS for` loop. Within the loop, each element of the array is reassigned to a new value equal to twice of its previous value.

Now envisage that you would like to rewrite the previous code in a more functional style. The rewritten code would look like this:
``` JavaScript
var my_array = [2, 4, 8, 16];

const multiply_by_two = (x => x * 2);

var my_updated_array = my_array.map(multiply_by_two);

console.log(my_updated_array);
```
Note that this code uses the callback `#!JS multiply_by_two` that is passed as an argument to the function `#!JS map`.

[//]: # (Next indicate that the callback is defined with arrow notation (link to w3s), and describe what a map is (array method) using another link to w3s.)

[//]: # (Add a note that both ways have their merits and they are not superior. Use a special kind of (i) information bubble for this.)

