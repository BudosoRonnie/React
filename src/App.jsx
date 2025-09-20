import Button from "./Button"

function App() {
  const myElement = <h5>Hello World</h5>
  const myElement2 = <h5>The Result of 5 + 5 is {5 + 5}</h5>

  const name = "Jester John Sales"
  const age = 25

  return (
    <>
      {myElement}
      {myElement2}
      <h5>Hello, {name}</h5>
      <h5>I am {age} Years Old</h5>
      <Button />
    </>
  )
}

export default App

