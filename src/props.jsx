import Person from './Person';
function Props(props) {

    return(
        <>
        <Person name={props.name} />
        <p> I am {props.name}</p>    
        </>
    )
}

export default Props