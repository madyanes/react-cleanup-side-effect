import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  // menggantikan componentDidMount dan componenDidUpdate
  React.useEffect(() => {
    console.count('di dalam useEffect')
    document.title = `You've clicked ${count}x`
  })

  const increase = () => setCount((prevCount) => prevCount + 1)
  const decrease = () => setCount((prevCount) => prevCount - 1)

  console.count('rendering')

  return (
    <>
      <button onClick={increase}>increase</button>
      <p>Count: {count}</p>
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default Counter
