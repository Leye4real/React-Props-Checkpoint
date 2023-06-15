import './App.css';
import Players from './Players';

const playersArray =  [
  {
    imgSrc:"https://th.bing.com/th/id/OIP.QbXq6dSKHcIwOoh08JpT-gHaH6?w=156&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Victor James Osimhen",
    foreignTeam: "SSC Napoli",
    nationality: "Nigerian",
    jerseyNumber: "9",
    age: "24yrs",
  },
  {
    imgSrc:"data:image/jpeg;base64,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",
    name: "Kylian Mbappé",
    foreignTeam: "Paris Saint-Germain F.C.",
    nationality: "France",
    jerseyNumber: "10",
    age: "24yrs",
  },
  {
    imgSrc:"data:image/jpeg;base64,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",
    name: "Neymar da Silva Santos Júnior",
    foreignTeam: "Paris Saint-Germain F.C.",
    nationality: "Brazilian",
    jerseyNumber: "10",
    age: "31yrs",
  },
  {
    imgSrc:"https://th.bing.com/th/id/OIP.-qBxge27DGxizFWrAuMq_wHaJ4?w=145&h=194&c=7&r=0&o=5&pid=1.7",
    name: "Lionel Andrés Messi",
    foreignTeam: "Barcelona",
    nationality: "Argentina",
    jerseyNumber: "10",
    age: "36yrs",
  }
   ];

function App() {
  return (
    <div className="App">
      <Players Playerprop = {playersArray}/>
    </div>
  );
}


export default App;