import logo from './logo.svg';
import Header from './components/Header'
import AddForm from './components/AddForm'
import Container from './components/Container'
import BookContainer from './components/Books/BookContainer'
import {useSelector} from 'react-redux'


function App() {
  
  return (
    <div className="App">
      
     <Header/> 
     <Container>
        <AddForm/>
        <BookContainer/>
     </Container>
    </div>
  );
}

export default App;
