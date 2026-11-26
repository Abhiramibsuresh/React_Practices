function DictionaryMap() {

    const students = {
        student1: {
            name: 'Abhirami',
            age: 22,
            course: 'React'
        },

        student2: {
            name: 'Anu',
            age: 21,
            course: 'Python'
        },

        student3: {
            name: 'Rahul',
            age: 23,
            course: 'Java'
        },

        student4: {
            name: 'Meera',
            age: 22,
            course: 'JavaScript'
        }
    }

    return (
        <div>
            <h1>Students List</h1>

            <ul>
                {Object.values(students).map((student, index) => (
                    <li key={index}>
                        Name: {student.name}
                        Age: {student.age} 
                        Course: {student.course}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DictionaryMap