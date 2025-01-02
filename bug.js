```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: The effect runs on every render, causing an infinite loop
    setCount(count + 1);
  }, []); // Empty dependency array suggests it should only run once, but it's wrong here

  return <div>Count: {count}</div>;
}
```