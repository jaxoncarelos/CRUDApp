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

<script>
    let count = 0;

    function incrementCount() {
        count += 1
    }
</script>

<button on:click={incrementCount}>
    Clicked {count}
</button>