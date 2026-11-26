import NoteCard from "./NoteCard";

function NotesList({ notes, onDeleteNote, onEditNote, searchTerm }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p className="empty-message">
                    {searchTerm
                        ? "No notes found matching your search!"
                        : "No notes created yet. Create your first note!"}
                </p>
            ) : (
                notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onDeleteNote={onDeleteNote}
                        onEditNote={onEditNote}
                    />
                ))
            )}
        </div>
    );
}

export default NotesList;
