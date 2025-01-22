import { useState } from 'react';
import './App.css'
import ListGroup from '../components/ListGroup'
import Message from '../components/Message'
import AlertMessage from '../components/AlertMessage';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(selectedItem);
  };

  const alertMessageContent = selectedItem ? selectedItem : <>Choose <b>an item</b> from the list</>;

  return (
    <>
      {selectedItem && (
        <AlertMessage onClose={() => setSelectedItem(null)}>
          {alertMessageContent}
        </AlertMessage>
      )}
      <Message sayTo={"Alan Po"} />
      <ListGroup 
        heading="Hong Kong Districts2" 
        items={["Central and Western", "Eastern", "Southern", "Wan Chai", "Kowloon City"]} 
        onItemClick={handleItemClick}
      />
    </>
  )
}

export default App
