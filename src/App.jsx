import './App.css';
import data from "./data/data";
import Scenarius from './scenarius/scenarius';

function App() {
    return (
        <>
            <Scenarius data={data} />
        </>
    );
}

export default App;