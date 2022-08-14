
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='card-body'>
      <div className='wrapper'>
        <form>
          <table>
            <thead>
              <tr>
            <th>
              <input type="checkbox"/>
            </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {[1,2,2,2].map(m=>
              
<tr className='box'>
  
  <td>
  <input type="checkbox"/>
  </td>
  <td>Aravind Mile</td>
  <td>albinsnit@gmal.com</td>
  <td>Mentor</td>
  <td>
    <div className=''>
      <a href='#'>
        <i className='fa fa-plus'>+</i>
      </a>
      <a href='#'>
        <i className='fa fa-pen'>+</i>
      </a>
      <a href='#'>
        <i className='fa fa-trash'>+</i>
      </a>
    </div>
  </td>
</tr>
            ) }
            </tbody>
          </table>
        </form>
      </div>
     </div>
    </div>
  );
}

export default App;
