import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      
      {/* Feed */}
      <Feed />      

      {/* Widgets */}
    </div>
  );
}

export default App;