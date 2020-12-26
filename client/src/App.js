import { useEffect } from 'react';
import Body from './components/Body';
import Header from './components/Header';

function App() {

  useEffect(() => {
    console.log("Started...");
  }, [])

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
