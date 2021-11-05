import './App.css';

//components
import UploadImage from './components/UploadImage'
import ReceivedImage from './components/ReceivedImage'

const App = () => {
  return (
    <div className="App">
      <UploadImage />
      <ReceivedImage />
    </div>
  );
}
export default App;