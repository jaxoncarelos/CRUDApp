let [count, setCount] = useState(0)

function incrementCount()
{
  setCount(count + 1)
}
return (
  <div className='App'>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Click</button>
  </div>
);