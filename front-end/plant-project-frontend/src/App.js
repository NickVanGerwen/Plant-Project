import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const onClick = () => {
    console.log('button clicked')
  }

  return (
    <Button onClick={onClick} text='hello' />
  );
}

export default App;
