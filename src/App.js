import React,{useState} from "react";
import AddItem from './components/AddItem';
import ListItems from './components/ListItems'

function App() {


  const [items,setItems] = useState([
    {id:1,name:"Item1",price:1000},
    {id:2,name:"Item2",price:10123}
  ])


  return (
    <div className='container'>
      <div className='left-block'>
        
        <AddItem/>
      </div>
      <div className='center-block'>
        <ListItems items={items}/>
      </div>
      <div className='right-block'>
        Правый блок
      </div>
    </div>
  );
}

export default App;
