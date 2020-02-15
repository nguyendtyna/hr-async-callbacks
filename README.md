# Using Asynchronous Callbacks

## Callback Review
What is a callback? 

In concept, a callback (sometimes called a "call-after") is a function passed as a parameter into another function. In practice, they are used to perform a variety of operations within HOFs (Higher Order Functions).  

For example, in the Underbar sprint you experienced callbacks being used as iterators or comparators, and any time since when you have used `.filter()` or `.sort()` you have likely created and passed in a callback for the method to use.  Also, on the Chatterbox Client sprint, you had your first encounters with jQuery's Ajax and the success and failure callbacks necessary for those to work correctly.

In this first section, we'll be reviewing how callbacks work synchronously, and then doing some excercising with setTimeout to lead us into talking about asynchronous operations.

#### Getting Started
 - [ ] In the terminal, `cd` into the `callback-prompts/client` section of the repository
 - [ ] Run `npm install`
 - [ ] Run `npm test` to launch your SpecRunner
 - [ ] Complete the Callback Review section of the prompts

___
## Moving to Async

>Async Event Loop: An Overview
*by Collin Snyder*
>
>An asynchronous function starts out just like any other function, in that it gets invoked in a program and placed on the call stack to run. Once it hits the call stack, however, Javascript treats async functions very differently from normal synchronous code.
>
>An async function, such as setTimeout or an AJAX request, is started by the call stack, but instead of sitting there and blocking the rest of the program from running while it waits for its own resolution, it is moved off the call stack and into the “heap” (an area of unstructured memory) to wait for its resolution.
>
>Once the async function is resolved (in the case of an AJAX request, this is when the response is received, or in the case of setTimeout, this is when the timer runs out), the /callback function/ attached to it is moved from the heap into the Task Queue, ready to be processed. It sits in the task queue until the call stack is empty - at that point, the Javascript Event Loop moves the first item in the Task Queue into the call stack to be processed.
>
>Let’s take setTimeout as an example. You run setTimeout and give it a callback function to console.log “Hi!” after 3 seconds. The setTimeout function moves on to the call stack, the timer is started, and the callback attached to it moves to the heap. The rest of the program continues as normal until the 3 seconds are up. At that time, the callback function that will console.log “Hi!” moves from the heap into the Task Queue, where it waits until the call stack empties. Once it does, the Event Loop moves the callback function into the Call Stack and it is run like normal - “Hi!” appears on your console.

**Next**
- [ ] Complete the Moving to Async section of the prompts
___
## Anonymous Callbacks

**A quick recap on anonymous functions:**
An anonymous function is one which was declared without any kind of identifier to refer to it by (also called "unnamed functions").  Due to this, they are in most cases not accessible other than within the context of where they are declared.  

For example, compare the way a callback is given to these two different sort invocations:
**A)**
```
const arr = [8, 1, 6];
const increasingSort = (a, b) => {
  return a - b;
};
const sortedAscending = arr.sort(increasingSort);
console.log(sortedAscending); // [1, 6, 8]
```
**B)**
```
const arr = [7, 2, 5];
const sortedAscending = arr.sort((a, b) => {
  return a - b;
});
console.log(sortedAscending); // [2, 5, 7]
```
As you can see, both blocks accomplish the same task in essentially the same way.  However, the function in example A was declared with an identifier, and therefore can be used again in other parts of the codebase.  Meanwhole, the function in part B is only used for that specific invocation, and is inaccessible in other pieces of the code.

Now, you might be asking yourself, isn't code reusability a goal we should always aim for?  In many cases, yes.  However, in the context of asynchronous calls - and especially to APIs - each individual Ajax request is generally the only place you'll need a function to process data with that exact behavior.  Due to this, an anonymous callback is exactly what we'll want to use for our success operations in our async calls.

**Time to Refactor**
Now that we've gone over what an anonymous callback is, it's time to do the final stage of the prompts!  For this section, refactor the Ajax calls and callbacks from the previous section so that the callbacks are anonymous functions within their Ajax calls.  Other than that, the functionality of the requests should remain essentially the same.

Also, this time you'll be sending your requests to the LRU message cache within the server.  Don't spend too much time trying to understand how the cache is working--knowing exactly what it does isn't essential for completing the prompts.

**Getting Started**
- [ ] Open a second terminal window
- [ ] `cd` into the `callback-prompts/server` folder
- [ ] `npm install`
- [ ] `npm start`
- [ ] Fill in the refactored Ajax calls in the Anonymous Refactor file
___
## Advanced Content
This exercise is intended for some extra practice, and shouldn't be considered part of the main minisprint.  If you don't have time left to get to it, that's okay.  However, if you want extra experience writing Ajax calls or attaching async operations to a React client, definitely come back and try it!  For this section, you will be thrown head-first into a complex file system, with an interesting combination of raw Node.js server and React front-end.

**Scenario:**
<p>
The evil Node Demon (not to be confused with nodemon, the helpful dev-tool/digimon) has stolen the state out of your word game, Dunk Tank!  To get the game working as intended again, you'll need to properly connect the client to the server by filling in the missing Ajax calls and passing them the correctly structured callbacks.

Carefully look through the server router to figure out what endpoints you'll need, and then work on making sure your client calls are processing the received data correctly.
<p>

**Getting Started**
- [ ] `cd` into the `bonus` section of the repo
- [ ] `npm install`
- [ ] Make sure you have nodemon installed
  - If you don't, run `npm install -g nodemon`
- [ ] Make sure you have live-server installed
  - If you don't, run `npm install -g live-server`
- [ ] Open three separate terminal windows and (in each) run:
  - [ ] `npm start` to turn on the server
  - [ ] `npm react-dev` to turn on webpack
  - [ ] `npm client` to launch the client

Most of the code you'll be writing for this piece will be in the async calls in App.jsx, or in the controllers.js section within the client.  As with the previous prompts, you shouldn't need to worry about modifying any of the server code--however you will need to have some level of understanding about what it is doing.

There are are no tests for this section--you'll know the code is working because you'll be able to play the game! Enjoy :)
___
#### Further Resources
[Understanding Javascript Callbacks](https://www.youtube.com/watch?v=Nau-iEEgEoM) (Video)
[Higher Order Functions](https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript/) (Article/Tutorial)
[More on HOFs](https://www.codingame.com/playgrounds/2980/practical-introduction-to-functional-programming-with-js/higher-order-functions) (Guide/Coding Sandbox)

#### Collaborators
Tom Chandler

Tye Macon

Kytra Murphree

Collin Snyder
