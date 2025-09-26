function Spreadoperator() {

    const combs1 = ['a', 'b', 'c'];
    const combs2 = ['d', 'e', 'f'];
    const Combined1and2 = [...combs1, ...combs2];

  return (
    <>
        <h1>Spread Operator Example</h1>
        <p> {Combined1and2}</p>
    </>
  )
}

export default Spreadoperator
