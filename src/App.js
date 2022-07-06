import React,{useState} from "react";
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import Stats from './components/Stats';
import Discount from './components/Discount';

function App() {


  const [items,setItems] = useState([
    {id:1,name:"Item1",price:1000},
    {id:2,name:"Item2",price:10123}
  ])


  function addItem(item){
    setItems([...items,item]);
  }

  function removeItem(item){
    setItems(items.filter(i=>i.id!=item.id));
  }

  return (
    <div className='container'>
      <div className='left-block'>
        
        <AddItem add={addItem}/>
      </div>
      <div className='center-block'>
        <ListItems items={items} remove={removeItem}/>
      </div>
      <div className='right-block'>
        <Stats/>
        <Discount/>
      </div>
    </div>
  );
}

export default App;
