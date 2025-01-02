# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incorrect understanding of how the dependency array affects the execution of the effect.  The provided code demonstrates the issue and its solution.

## Bug Description

The original code uses `useEffect` to increment a state variable on every render, creating an infinite loop because the component renders whenever the state changes, thus creating a chain reaction.  The empty dependency array might seem to imply the effect should only run once, but it doesn't work this way when the effect itself modifies a state that triggers the component re-render.

## Solution

The solution involves adjusting the dependency array to prevent infinite loops. The correct solution will only run the effect when the count has changed. 
