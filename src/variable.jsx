function Variables() {
  var x = 10
  x = 20

  let y = 30
  y = 40

  const z = 50

  return (
    <>
      <h1>Variables</h1>
      <p><b>var x:</b> {x}</p>
      <p><b>let y:</b> {y}</p>
      <p><b>const z:</b> {z}</p>
    </>
  )
}

export default Variables
