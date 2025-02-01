import react from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Message from './Components/Message/Message';
import {originalMovieUrl,actionMovieUrl} from './Constatnce/Constance'
import MovieList from './Components/MovieList/MovieList';



function App() {
 
  return (
    <div>
      
      <NavBar/>
      <Message/>
     <Banner>
     
     </Banner>
     
     <MovieList url= {originalMovieUrl} title='Netflix Originals'/>
     <MovieList url={actionMovieUrl}title='Action' isSmall/>
      
    </div>
  );
}

export default App;
