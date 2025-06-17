import { Link } from 'react-router-dom'

function MainPage(){

    const items = [
        {id: 1, title: "Bory",},
        {id: 2, title: "Byczyna",},
        {id: 3, title: "Cegielniana"},
        {id: 4, title: "Cezarówka"},
        {id: 5, title: "Ciężkowice"},
        {id: 6, title: "Dąbrowa Narodowa"},
        {id: 7, title: "Długoszyn",},
        {id: 8, title: "Dobra",},
        {id: 9, title: "Gigant",},
        {id: 10, title: "Jeziorki",},
        {id: 11, title: "Koźmin",},
        {id: 12, title: "Leopold",},
        {id: 13, title: "Łubowiec",},
        {id: 14, title: "Niedzieliska",},
        {id: 15, title: "Osiedle Awaryjne",},
        {id: 16, title: "Osiedle Górnicze",},
        {id: 17, title: "Osiedle Pechnik",},
        {id: 18, title: "Osiedle Stałe",},
        {id: 19, title: "Osiedle Tadeusza Kościuszki",},
        {id: 20, title: "Pechnik",},
        {id: 21, title: "Pieczyska",},
        {id: 22, title: "Podłęże",},
        {id: 23, title: "Podwale",},
        {id: 24, title: "Pszczelnik",},
        {id: 25, title: "Skałka",},
        {id: 26, title: "Stara Huta",},
        {id: 27, title: "Śródmieście",},
        {id: 28, title: "Warpie",},
        {id: 29, title: "Wesołe Miasteczko",},
        {id: 30, title: "Wilkoszyn",},
        {id: 31, title: "Wysoki Brzeg",},
    ]

    return(
        <div className="container">
            <h1 className="title">Wybierz Dowolne Osiedle</h1>
            {items.map((item) => (  
                <p className="item" key={item.id}>
                    <Link 
                    to={`/board/${item.id}`}
                    state={{item}}
                    >
                        {item.title}
                    </Link>
                </p>
            ))}
        </div>
    )
}

export default MainPage