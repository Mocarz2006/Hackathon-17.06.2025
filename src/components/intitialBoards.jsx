import boryImg from '../assets/bory.png';
import byczynaImg from '../assets/byczyna.jpg';
import cegielnianaImg from '../assets/cegielniana.jpg';
import cezarówkaImg from "../assets/cezarówka.jpg";
import ciezkowiceImg from '../assets/ciezkowice.jpg';
import dabrowanarodowaImg from '../assets/dabrowanarodowa.jpg';
import dlugoszynImg from '../assets/dlugoszyn.jpg';
import dobraImg from '../assets/dobra.jpg';
import gigantImg from '../assets/gigant.jpg';
import jeziorkiImg from '../assets/jeziorki.jpg';
import kozminImg from '../assets/kozmin.jpg';
import leopoldImg from '../assets/leopold.jpg';
import lubowiecImg from '../assets/lubowiec.jpg';
import niedzieliskaImg from '../assets/niedzieliska.jpg';
import osiedleawaryjneImg from '../assets/osiedleawaryjne.jpg';
import osiedlegorniczeImg from '../assets/osiedlegornicze.jpg';
import osiedlepechnikImg from '../assets/osiedlepechnik.jpg';
import osiedlestaleImg from '../assets/osiedlestale.jpg';
import osiedletadeuszakosciuszkiImg from '../assets/osiedletadeuszakosciuszki.jpg';
import pechnikImg from '../assets/pechnik.jpg';
import pieczyskaImg from '../assets/pieczyska.jpg';
import podlezeImg from '../assets/podleze.jpg';
import podwaleImg from '../assets/podwale.jpg';
import pszczelnikImg from '../assets/pszczelnik.jpg';
import skalkaImg from '../assets/skalka.jpg';
import starahutaImg from '../assets/starahuta.jpg';
import srodmiescieImg from '../assets/srodmiescie.jpg';
import warpieImg from '../assets/warpie.jpg';
import wesolemiasteczkoImg from '../assets/wesolemiasteczko.jpg';
import wilkoszynImg from '../assets/wilkoszyn.jpg';
import wysokibrzegImg from '../assets/wysokibrzeg.jpg';

const initialBoards = [
      {
        "id": 1,
        "title": "Bory",
        "thumbnail": boryImg,
        "notes": [
          { "id": 1, "title": "Notatka 1", "time": "", "author": "", "content": "Treść notatki 1" },
          { "id": 2, "title": "Notatka 2", "time": "", "author": "", "content": "Treść notatki 2" },
        ]
      },
      {
        "id": 2,
        "title": "Byczyna",
        "thumbnail": byczynaImg,
        "notes": [
          { "id": 1, "title": "Notatka 3", "time": "", "author": "", "content": "Treść notatki 3"}
        ]
      },
      {
        "id": 3,
        "title": "Cegielniana",
        "thumbnail": cegielnianaImg,
        "notes": [
          { "id": 1, "title": "Notatka 4", "time": "", "author": "", "content": "Treść notatki 4" }
        ]
      },
      {
        "id": 4,
        "title": "Cezarówka",
        "thumbnail": cezarówkaImg,
        "notes": [
          { "id": 1, "title": "Notatka 5", "time": "", "author": "", "content": "Treść notatki 5" }
        ]
      },
      {
        "id": 5,
        "title": "Ciężkowice",
        "thumbnail": ciezkowiceImg,
        "notes": [
          { "id": 1, "title": "Notatka 6", "time": "", "author": "", "content": "Treść notatki 6" }
        ]
      },
      {
        "id": 6,
        "title": "Dąbrowa Narodowa",
        "thumbnail": dabrowanarodowaImg,
        "notes": [
          { "id": 1, "title": "Notatka 7", "time": "", "author": "", "content": "Treść notatki 7" }
        ]
      },
      {
        "id": 7,
        "title": "Długoszyn",
        "thumbnail": dlugoszynImg,
        "notes": [
          { "id": 1, "title": "Notatka 8", "time": "", "author": "", "content": "Treść notatki 8" }
        ]
      },
      {
        "id": 8,
        "title": "Dobra",
        "thumbnail": dobraImg,
        "notes": [
          { "id": 1, "title": "Notatka 9", "time": "", "author": "", "content": "Treść notatki 9" }
        ]
      },
      {
        "id": 9,
        "title": "Gigant",
        "thumbnail": gigantImg,
        "notes": [
          { "id": 1, "title": "Notatka 10", "time": "", "author": "", "content": "Treść notatki 10" }
        ]
      },
      {
        "id": 10,
        "title": "Jeziorki",
        "thumbnail": jeziorkiImg,
        "notes": [
          { "id": 1, "title": "Notatka 11", "time": "", "author": "", "content": "Treść notatki 11" }
        ]
      },
      {
        "id": 11,
        "title": "Koźmin",
        "thumbnail": kozminImg,
        "notes": [
          { "id": 1, "title": "Notatka 12", "time": "", "author": "", "content": "Treść notatki 12" }
        ]
      },
      {
        "id": 12,
        "title": "Leopold",
        "thumbnail": leopoldImg,
        "notes": [
          { "id": 1, "title": "Notatka 13", "time": "", "author": "", "content": "Treść notatki 13" }
        ]
      },
      {
        "id": 13,
        "title": "Łubowiec",
        "thumbnail": lubowiecImg,
        "notes": [
          { "id": 1, "title": "Notatka 14", "time": "", "author": "", "content": "Treść notatki 14" }
        ]
      },
      {
        "id": 14,
        "title": "Niedzieliska",
        "thumbnail": niedzieliskaImg,
        "notes": [
          { "id": 1, "title": "Notatka 15", "time": "", "author": "", "content": "Treść notatki 15" }
        ]
      },
      {
        "id": 15,
        "title": "Osiedle Awaryjne",
        "thumbnail": osiedleawaryjneImg,
        "notes": [
          { "id": 1, "title": "Notatka 16", "time": "", "author": "", "content": "Treść notatki 16" }
        ]
      },
      {
        "id": 16,
        "title": "Osiedle Górnicze",
        "thumbnail": osiedlegorniczeImg,
        "notes": [
          { "id": 1, "title": "Notatka 17", "time": "", "author": "", "content": "Treść notatki 17" }
        ]
      },
      {
        "id": 17,
        "title": "Osiedle Pechnik",
        "thumbnail": osiedlepechnikImg,
        "notes": [
          { "id": 1, "title": "Notatka 18", "time": "", "author": "", "content": "Treść notatki 18" }
        ]
      },
      {
        "id": 18,
        "title": "Osiedle Stałe",
        "thumbnail": osiedlestaleImg,
        "notes": [
          { "id": 1, "title": "Notatka 19", "time": "", "author": "", "content": "Treść notatki 19" }
        ]
      },
      {
        "id": 19,
        "title": "Osiedle Tadeusza Kościuszki",
        "thumbnail": osiedletadeuszakosciuszkiImg,
        "notes": [
          { "id": 1, "title": "Notatka 20", "time": "", "author": "", "content": "Treść notatki 20" }
        ]
      },
      {
        "id": 20,
        "title": "Pechnik",
        "thumbnail": pechnikImg,
        "notes": [
          { "id": 1, "title": "Notatka 21", "time": "", "author": "", "content": "Treść notatki 21" }
        ]
      },
      {
        "id": 21,
        "title": "Pieczyska",
        "thumbnail": pieczyskaImg,
        "notes": [
          { "id": 1, "title": "Notatka 22", "time": "", "author": "", "content": "Treść notatki 22" }
        ]
      },
      {
        "id": 22,
        "title": "Podłęże",
        "thumbnail": podlezeImg,
        "notes": [
          { "id": 1, "title": "Notatka 23", "time": "", "author": "", "content": "Treść notatki 23" }
        ]
      },
      {
        "id": 23,
        "title": "Podwale",
        "thumbnail": podwaleImg,
        "notes": [
          { "id": 1, "title": "Notatka 24", "time": "", "author": "", "content": "Treść notatki 24" }
        ]
      },
      {
        "id": 24,
        "title": "Pszczelnik",
        "thumbnail": pszczelnikImg,
        "notes": [
          { "id": 1, "title": "Notatka 25", "time": "", "author": "", "content": "Treść notatki 25" }
        ]
      },
      {
        "id": 25,
        "title": "Skałka",
        "thumbnail": skalkaImg,
        "notes": [
          { "id": 1, "title": "Notatka 26", "time": "", "author": "", "content": "Treść notatki 26" }
        ]
      },
      {
        "id": 26,
        "title": "Stara Huta",
        "thumbnail": starahutaImg,
        "notes": [
          { "id": 1, "title": "Notatka 27", "time": "", "author": "", "content": "Treść notatki 27" }
        ]
      },
      {
        "id": 27,
        "title": "Śródmieście",
        "thumbnail": srodmiescieImg,
        "notes": [
          { "id": 1, "title": "Notatka 28", "time": "", "author": "", "content": "Treść notatki 28" }
        ]
      },
      {
        "id": 28,
        "title": "Warpie",
        "thumbnail": warpieImg,
        "notes": [
          { "id": 1, "title": "Notatka 29", "time": "", "author": "", "content": "Treść notatki 29" }
        ]
      },
      {
        "id": 29,
        "title": "Wesołe Miasteczko",
        "thumbnail": wesolemiasteczkoImg,
        "notes": [
          { "id": 1, "title": "Notatka 30", "time": "", "author": "", "content": "Treść notatki 30" }
        ]
      },
      {
        "id": 30,
        "title": "Wilkoszyn",
        "thumbnail": wilkoszynImg,
        "notes": [
          { "id": 1, "title": "Notatka 31", "time": "", "author": "", "content": "Treść notatki 31" }
        ]
      },
      {
        "id": 31,
        "title": "Wysoki Brzeg",
        "thumbnail": wysokibrzegImg,
        "notes": [
          { "id": 1, "title": "Notatka 32", "time": "", "author": "", "content": "Treść notatki 32" }
        ]
      }
    ]

export default initialBoards;
