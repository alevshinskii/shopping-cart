import React,{useState} from "react";
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import Stats from './components/Stats';
import Discount from './components/Discount';

function App() {


  const [items,setItems] = useState([
    {id:"1",name:"Item1",price:1000},
    {id:"2",name:"Item2",price:2000},
    {id:"3",name:"Item3",price:3000}
  ])

  
  const [discount,setDiscount]=useState(0);

  function applyDiscount(discountToSet){
    setDiscount(discountToSet);
    setItems(items.map((i)=> {return {...i,newPrice: (i.price*(100-discountToSet)/100)}}));
  }

  function addItem(item){
    item = {...item,newPrice: (item.price*(100-discount)/100)};
    setItems([...items,item]);

  }

  function removeItem(item){
    setItems(items.filter(i=>(i.id!==item.id || i.name!==item.name)));
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
        <Stats items={items} discount={discount}/>
        <Discount current={discount} set={applyDiscount}/>
      </div>
    </div>
  );
}

export default App;
