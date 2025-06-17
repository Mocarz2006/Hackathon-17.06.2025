import './Board.css'
import stickynotes from '../assets/add-note-bg-ai.png'
import jawsign from '../assets/jaworzno-sign.png'
import Note from './Note.jsx'
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import initialBoards from './intitialBoards.jsx';

function Board(){
    const location = useLocation();
    const item = location.state?.item;

    const [boards, setBoards] = useState([])

    useEffect(() => {
        const savedBoards = localStorage.getItem('boards');
        if (savedBoards) {
            setBoards(JSON.parse(savedBoards));
        } else {
            setBoards(initialBoards);
            localStorage.setItem('boards', JSON.stringify(initialBoards));
        }
    }, []);

    const currentBoard = boards.find(board => board.id === item.id);

    const handleDeleteNote = (noteId) => {
        const updatedBoards = boards.map(board => {
            if (board.id === item.id) {
                return {
                    ...board,
                    notes: board.notes.filter(note => note.id !== noteId)
                };
            }
            return board;
        });

    setBoards(updatedBoards);
    localStorage.setItem('boards', JSON.stringify(updatedBoards));
    };

    return(
        <>
            <div className="bg-image"></div>

            <div className="return-button">
                <Link to="/" className='return-sign'><img src={jawsign}/></Link>
            </div>
            <div className="board">
                <div className='title'>{item.title}</div>
                <div className="notes">
                    {currentBoard?.notes?.map(note => (
                    <Note 
                        key={note.id} 
                        id={note.id}
                        title={note.title}
                        time={note.time}
                        content={note.content} 
                        author={note.author}
                        boardId={item.id}
                        onDelete={handleDeleteNote}
                    />
                    ))}
                </div>
                <div className="add-note">
                        <Link 
                            to={`/board/${item.id}/createnote`}
                            state={{item}}
                            >
                                <img src={stickynotes}/>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Board