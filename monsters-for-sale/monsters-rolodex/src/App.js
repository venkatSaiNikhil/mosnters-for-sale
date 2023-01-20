import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setsearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSelectionChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  };

  return (
    <div className="App">
      <div className="app-title">Monsters For Sale</div>
      <SearchBox
        onChangeHandeler={onSelectionChange}
        className="search-box"
        placeholder="Search for Monistor"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSelectionChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     console.log("Search field :::::::::>",searchField)
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("rendering app component");
//     const { monsters, searchField } = this.state;
//     const { onSelectionChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <div className="app-title">Monsters For Rent</div>
//         <SearchBox onChangeHandeler={onSelectionChange} className='search-box' placeholder="Search for Monistor"/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
