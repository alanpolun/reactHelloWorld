import './App.css'
import ListGroup from '../components/ListGroup'
import Message from '../components/Message'

function App() {
  return (
    <>
      <Message sayTo={"Alan Po"} />
      <ListGroup 
        heading="Hong Kong Districts" 
        items={["Central and Western", "Eastern", "Southern", "Wan Chai", "Kowloon City"]} 
      />
    </>
  )
}

export default App
