# React useEffect Closure Problem

This repository demonstrates a common issue related to closures within React's `useEffect` hook.  The problem arises when a variable from the component's scope is used within a function created inside `useEffect`, but the `useEffect` hook's dependency array is not updated properly. This leads to the variable's value being 'captured' from its initial state, even as its value updates later. 

The `bug.js` file shows the incorrect implementation, and `bugSolution.js` provides the corrected version.