import { useEffect, useState } from 'react';
import './App.css';

//socket server connection methods
import { init, subscribe } from './socketApi'

//components
import UploadImage from './components/UploadImage'
import ReceivedImage from './components/ReceivedImage'
import SocketError from './components/SocketError'

const App = () => {
  const [defaultImage, setDefaultImage] = useState('');

  useEffect(() => {
    init(); //component yerleşmişse servere girebiliriz.
    //callback function yazma sebebimiz socket server'dan gönderilen default image datasını almak.
    subscribe((defaultImage: string) => {
      setDefaultImage(defaultImage);
    });
  }, [])

  return (
    <div className="App">
      <SocketError />
      <UploadImage path={defaultImage} />
      <ReceivedImage path={defaultImage} />
    </div>
  );
}
export default App;