import Child from './Child.jsx'


function Parent() {
    return (
        <div>
            <h1>Parent Component</h1>
            <Child name="Alice" age={22}/>

            <Child name = "Markey" age = {20}>
                <p>Hai</p>
            </Child>
        </div>
            )
}
export default Parent