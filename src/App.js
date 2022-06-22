import logo from './logo.svg';
import './App.css';
import Axios from 'axios';



function App() {

  async function login() {
    await  Axios.post('http://localhost:5000/login', {
          "email": "sk@gmail.com",
          "password": "pass"
      }).then((res) => {
          console.log('res', res.data.toekn);
          alert('token set')
          localStorage.setItem('token', res.data.toekn);
      })
  }

  async function fetchuser(){
      let token =  localStorage.getItem('token');
      if (!token) return
      let header = {
          "Authorization": token
      }
      await Axios.get('http://localhost:5000/userslist', {
          headers: header
      }).then((res) => {
          console.log('res', res);

      })
  }
  return (
    <div className="App">
 <h1>LOGIN PAGE</h1>
 <button onClick={login}>Login</button>
 <button onClick={fetchuser}>Fetch user</button>

    </div>
  );
}

export default App;
