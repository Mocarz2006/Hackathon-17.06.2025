import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import './CreateNote.css'

function CreateNote() {
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const location = useLocation();
  const item = location.state?.item;

  function getFormattedDate() {
    const now = new Date(Date.now());

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const handleClick = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;

    if (!title || !content) return alert("Tytuł i treść są wymagane");
    const savedBoards = JSON.parse(localStorage.getItem('boards')) || [];
    const boardIndex = savedBoards.findIndex(b => b.id === item.id);
    if (boardIndex === -1) return alert("Plansza nie znaleziona");

    const newNote = {
      id: Date.now(),
      title,
      time: getFormattedDate(),
      content,
      author,
    };

    savedBoards[boardIndex].notes.push(newNote);
    localStorage.setItem('boards', JSON.stringify(savedBoards));
};

return (
    <>
      <div className="bg-image"></div>

      <div className="create-note-form">
        <input type="text" className="input input-title" placeholder="Tytuł notatki" ref={titleRef} />
        <textarea className="input input-content" placeholder="Treść notatki" ref={contentRef}></textarea>
        <input type="text" className="input-author" placeholder="Podpis" ref={authorRef} />
        <Link 
            to={`/board/${item.id}`}
            state={{item}}>
            <input type="button" className="input-button" value="Dodaj notatkę" onClick={handleClick} />
        </Link>
      </div>
    </>
  );
}

export default CreateNote;
