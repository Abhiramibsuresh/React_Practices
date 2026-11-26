function NoteCard({ note, onDeleteNote, onEditNote }) {
    function handleDelete() {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (confirmDelete) {
            onDeleteNote(note.id);
        }
    }
    return (
        <div className="note-card">
            <h3>{note.title}</h3>

            <p>{note.description}</p>

            <small>Created on: {note.createdAt}</small>

            <div className="note-buttons">
                <button
                    className="edit-button"
                    onClick={() => onEditNote(note)}
                >
                    Edit
                </button>

                <button
                    className="delete-button"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default NoteCard;