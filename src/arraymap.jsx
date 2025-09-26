function Arraymap() {
  const numbers = [1, 2, 3, 4]
  const doubled = numbers.map(x => x * 3)

  return (
    <>
      <h1>Array Map Example</h1>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Doubled: {doubled.join(", ")}</p>
    </>
  )
}

export default Arraymap
