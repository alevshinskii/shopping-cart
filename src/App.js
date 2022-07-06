import AddItem from './components/AddItem';

function App() {
  return (
    <div className='container'>
      <div className='left-block'>
        
        <AddItem/>
      </div>
      <div className='center-block'>
        Центральный блок
      </div>
      <div className='right-block'>
        Правый блок
      </div>
    </div>
  );
}

export default App;
