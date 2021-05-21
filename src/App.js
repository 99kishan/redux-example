import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions'
import temp from './temp.mp4'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vaccine Stock {counter} </h1>     
      <button className='button b1' onClick={()=> dispatch(increment(100))}><b>+</b></button>
      <button className='button b1' onClick={()=> dispatch(decrement())}><b>-</b></button><br/>
      {isLogged ? 
      <video autoPlay 
            loop 
            style ={
              {position:'relative', 
               objectFit:'cover', 
               top:"0%",
               left:"0%", 
               width:'900px', 
               height:'450px' }
            }>
      <source src={temp} type="video/mp4" />
      </video> : ''}
    </div>
  );
}

export default App;
