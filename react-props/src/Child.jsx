function Child(props){
    const mark = 100
    return(
        // <div>
        //     <h2>Child Component</h2>
        //     <p>Name : {props.name}</p>
        //     <p>Age  : {props.age}</p>
        // </div>       
        // <div>
        //     <h2>Name={name}</h2>
        //     <p>Age={age}</p>
        //     <p>Mark={mark}</p>
            <p>{props.children}</p>
        // </div>
    )
}
export default Child