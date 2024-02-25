
import './App.css';
import Player from './Components/Players';
import Playerslist from './Components/Playerslist';
function App() {
  return (
    <>
    <div><h1 style={{color:"green",textAlign:"center"}}>cartes des joueurs FIFA</h1></div>
    
    <div style={{display:"flex",justifyContent:"center",gap:"15px",flexWrap:"wrap", marginTop:"30px"}}>
      
      <Playerslist />
    </div>
    </>
  );
}
export default App;
