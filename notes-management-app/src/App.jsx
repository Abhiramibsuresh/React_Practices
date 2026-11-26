import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

function App() {
    // Load notes from Local Storage
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    // Form title
    const [title, setTitle] = useState("");

    // Form description
    const [description, setDescription] = useState("");

    // Search text
    const [searchTerm, setSearchTerm] = useState("");

    // ID of the note being edited
    const [editingNoteId, setEditingNoteId] = useState(null);

    // Save notes to Local Storage whenever notes change
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    // Create or update a note
    function handleCreateNote(event) {
        event.preventDefault();

        // Validate the form
        if (title.trim() === "" || description.trim() === "") {
            alert("Please enter both title and description");
            return;
        }

        // Update an existing note
        if (editingNoteId !== null) {
            const updatedNotes = notes.map((note) => {
                if (note.id === editingNoteId) {
                    return {
                        ...note,
                        title: title,
                        description: description
                    };
                }

                return note;
            });

            setNotes(updatedNotes);
        }

        // Create a new note
        else {
            const newNote = {
                id: Date.now(),
                title: title,
                description: description,
                createdAt: new Date().toLocaleDateString()
            };

            setNotes([...notes, newNote]);
        }

        // Clear the form after creating or updating
        handleClearForm();
    }

    // Edit a note
    function handleEditNote(note) {
        setTitle(note.title);
        setDescription(note.description);
        setEditingNoteId(note.id);
    }

    // Delete a note
    function handleDeleteNote(id) {
        setNotes(notes.filter((note) => note.id !== id));

        // Clear the form if the deleted note is being edited
        if (editingNoteId === id) {
            handleClearForm();
        }
    }

    // Clear the form
    function handleClearForm() {
        setTitle("");
        setDescription("");
        setEditingNoteId(null);
    }

    // Search notes by title or description
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">

            {/* Navbar */}
            <Navbar />

            {/* Create Note Form */}
            <NoteForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                onCreateNote={handleCreateNote}
                onClearForm={handleClearForm}
                isEditing={editingNoteId !== null}
            />

            {/* My Notes Heading and Count */}
            <div className="notes-heading">
                <h2 className="my-notes-title">My Notes</h2>
                <span className="notes-count">
                    {notes.length} {notes.length === 1 ? "note" : "notes"}
                </span>
            </div>

            {/* Search */}
            <input
                type="text"
                className="search-input"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Notes List */}
            <NotesList
                notes={filteredNotes}
                onDeleteNote={handleDeleteNote}
                onEditNote={handleEditNote}
                searchTerm={searchTerm}
            />

        </div>
    );
}

export default App;