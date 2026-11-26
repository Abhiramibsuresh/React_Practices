
function Dictionary() {

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
                <li>
                    {students.student1.name} -
                    {students.student1.age} -
                    {students.student1.course}
                </li>

                <li>
                    {students.student2.name} -
                    {students.student2.age} -
                    {students.student2.course}
                </li>

                <li>
                    {students.student3.name} -
                    {students.student3.age} -
                    {students.student3.course}
                </li>

                <li>
                    {students.student4.name} -
                    {students.student4.age} -
                    {students.student4.course}
                </li>
            </ul>
        </div>
    )
}

export default Dictionary
