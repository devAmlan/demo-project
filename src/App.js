import './App.css';
import Character from './component/character/Character';
import {useQuery} from "@apollo/react-hooks"
import gql from "graphql-tag"

const ALL_CHARACTERS = gql`
  query allcharacters{
  characters{
    results{
      name,
      id
    }
  }
}
`

function App() {

  // const names = useQuery(ALL_CHARACTERS)
  // if(loading){
  //   return <p>Loading...</p>
  // }
  // if(error){
  //   return <p>Error</p>
  // }
  return (
    <div className="App">
      <Character />
    </div>
  );
}

export default App;
