import './Note.css'

function Note(props){
    const handleDelete = () =>{
        
    }

    return(
        <div className="note-container">
            <div className="button-div">
                <button className='delete-button' onClick={handleDelete}>&#10006;</button>
            </div>
            <h2 className="note-title">
                {props.title}
            </h2>
            <h3 className="note-content">
                {props.content}
            </h3>
        </div>
    )
}

export default Note