import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";

// Components 
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateUser from './components/create-user.component'; 
import CreateExercise from './components/create-exercise.component';
import Nav from './components/nav.component';
function App() {
  return (


    <Router>
      <div className='container'>
      <Nav/>
      <br/>
      <Routes>
      <Route path="/" exact Component={ExerciseList} />
      <Route path="/edit/:id" exact Component={EditExercise} />
      <Route path="/create" exact Component={CreateExercise} />
      <Route path="/user" exact Component={CreateUser} />
      </Routes>
      </div>
    </Router>
 
  );
}

export default App;
