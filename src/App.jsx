import './App.scss';
import Main from './components/main/Main.component';


const App = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
