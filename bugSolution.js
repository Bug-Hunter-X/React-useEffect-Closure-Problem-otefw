```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Access the latest count value using a ref
      console.log(countRef.current);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```