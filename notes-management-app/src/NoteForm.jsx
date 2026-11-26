
function NoteForm({
    title,
    setTitle,
    description,
    setDescription,
    onCreateNote,
    onClearForm,
    isEditing
}) {
    return (
        <div className="note-form-container">
            <h2>{isEditing ? "Edit Note" : "Create a New Note"}</h2>

            <form className="note-form" onSubmit={onCreateNote}>

                <div className="form-group">
                    <label>Note Title</label>
                    <input
                        type="text"
                        placeholder="Enter note title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        placeholder="Enter note description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="create-button">
                        {isEditing ? "Update Note" : "Create Note"}
                    </button>

                    <button
                        type="button"
                        className="clear-button"
                        onClick={onClearForm}
                    >
                        Clear Form
                    </button>
                </div>

            </form>
        </div>
    );
}

export default NoteForm;
