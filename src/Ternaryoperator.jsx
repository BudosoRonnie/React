function Ternary_Operator() {
  function forHI() {
    return <h1>Hi</h1>;
  }

  function forHello() {
    return <h1>Hello</h1>;
  }

  let authenticated = true;

  let content;
  if (authenticated) {
    content = forHI();
  } else {
    content = forHello();
  }

  return (
    <>
      {content}
      <p>Try to change the true into false</p>
    </>
  );
}

export default Ternary_Operator;
    