import { useState } from 'react';

function Student_List() {


    const students = [
        { id: 1, name: 'Anu' },
        { id: 2, name: 'Rahul' },
        { id: 3, name: 'Meera' },
        { id: 4, name: 'Arun' },
        { id: 5, name: 'Abhirami' }
    ];


    const [search, setSearch] = useState('');


    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Student List</h1>
            <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredStudents.map((student) => (
                    <li key={student.id}>
                        {student.name}
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default Student_List