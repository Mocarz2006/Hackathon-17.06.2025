import './Board.css'
import stickynotes from '../assets/add-note-bg-ai.png'
import jawsign from '../assets/jaworzno-sign.png'
import Note from './Note.jsx'
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from 'react';

function Board(){

    const location = useLocation();
    const item = location.state?.item;

    const [boards, setBoards] = useState([])

    useEffect(() => {
        fetch('/notes.json')
            .then((response) => response.json())
            .then((data) => setBoards(data.boards))
            .catch((error) => console.error('Błąd ładowania danych: ', error));
    }, []);

    const currentBoard = boards.find(board => board.id === item.id);

    return(
        <>
            <div className="return-button">
                <Link to="/" className='return-sign'><img src={jawsign}/></Link>
            </div>
            <div className="board">
                <div className='title'>{item.title}</div>
                <div className="notes">
                    {currentBoard?.notes?.map(note =>(
                        <Note key={note.id} title={note.title} content={note.content}/>
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