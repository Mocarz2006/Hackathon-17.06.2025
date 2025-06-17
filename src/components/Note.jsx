import { useState } from 'react';
import './Note.css'

function Note({ id, title, time, content, author, onDelete }) {
  const [isPinClicked, setIsPinClicked] = useState(false)

  const handleDelete = (e) => {
    e.stopPropagation();

    if (window.confirm("Na pewno usunąć notatkę?")) {
      setIsPinClicked(true);
      setTimeout(() => {
        onDelete(id);
      }, 900);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    if (!isPinClicked) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if(author=="") author="Anonimowy"

  return (
    <>
      <div className={isPinClicked ? "note-container removing" : "note-container"} onClick={handleModal}>
          <div className="button-div">
              <button className="delete-button" onClick={handleDelete}>&#10006;</button>
          </div>
          <h2 className="note-title">
              {title}
          </h2>
          <h3 className="note-content">
              {content}
          </h3>
      </div>

      {isModalOpen && (<div className="modal">
        <div className="modal-content">
          <span onClick={handleCloseModal} className='modal-close-button'>&#10006;</span>
          <h2 className="modal-note-title note-title">
              {title}
          </h2>
          <h3 className="modal-note-content note-content">
              {content}
          </h3>
          <h3 className="modal-note-author">
              ~ {author} @ {time}
          </h3>
        </div>
      </div>)}
    </>
  );
}

export default Note