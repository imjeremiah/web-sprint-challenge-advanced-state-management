# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API solves the problem of prop-drilling in components. It's great to use when prop drilling would be complex, and when the data doesn't need enough global state to justify using Redux.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are JS objects that contain data. They have a type field that describes "what" action to perform on the data.

Reducers are pure functions that take the current state and action of the data, and describe "how" to do it.

Store globally holds all the state needed for the applicaiton. It's called the single source of truth because all the state is stored in a single object- store.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allows us to write action-creators that return a function instead of an action, giving us access to the dispatch() funciton.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the capabilities and simplicity that redux gives us. The way we learned is a bit complex, but I bet learning redux hooks would make me like it even more!
