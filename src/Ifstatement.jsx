function Ifstatement() {
    const x = 10;
    let y;

    if (x <= 10) {
       y = <p>Hi</p>
    }
    else {
        y = <p>Hello</p>
    }
    return (
        <>
        <p>{y}</p>
        </>
    )
}

export default Ifstatement