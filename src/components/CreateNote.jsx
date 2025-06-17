import { useRef, useState } from "react";
import "./CreateNote.css";

function CreateNote() {
    const titleRef = useRef()
    const contentRef = useRef()
    const authorRef = useRef()

    const handleClick = () =>{
        const title = titleRef.current.value
        const content = contentRef.current.value
        const author = authorRef.current.value
    }

    return(
        <>
            <div className="bg-image"></div>

            <div className="create-note-form">
                <input type="text" className="input input-title" placeholder="Tytuł notatki" ref={titleRef}/>
                <textarea className="input input-content" placeholder="Treść notatki" ref={contentRef}></textarea>
                <input type="text" className="input-author" placeholder="Podpis"  ref={authorRef}/>
                <input type="button" value="Dodaj notatkę" onClick={handleClick} className="input-button"/>
            </div>
        </>
    );
}

export default CreateNote;