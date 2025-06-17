import { Link } from 'react-router-dom'
import "./MainPage.css"
import initialBoards from './components/intitialBoards'


function MainPage(){

    const items = initialBoards;

    return(
        <>
            <div className="bg"></div> 
            <div className="container">
                <h1 className="title">Wybierz Dowolne Osiedle</h1>
                {items.map((item) => (  
                    <Link className='item' 
                        to={`/board/${item.id}`}
                        state={{item}}
                        key={item.id}
                        style={{
                        backgroundImage: `url(${item.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                        >
                        <div>
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default MainPage