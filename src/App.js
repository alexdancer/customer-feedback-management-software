import './App.css';

function App() {
  return (
    
    <div className="App-header">
      <div className="Links">
        <a href="App.js">Dashboard</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
      </div>
      <div className='Dashboard'>
        <table className='Table'>
          <thead>
            <tr>
              <th>Ideas</th>
              <th>Votes</th>
              <th>Importance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Idea 1</td>
            <td>10</td>
            <td>High</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>Idea 1</td>
            <td>10</td>
            <td>High</td>
            <td><button>Edit</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    


  );
}


export default App;
