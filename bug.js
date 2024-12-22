```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using count in the callback function
    const intervalId = setInterval(() => {
      console.log(count); // This will always log 0
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```