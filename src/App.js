import { useState } from 'react';
import {AddUser} from './components/Users/AddUser';
import { UsersList } from './components/Users/UsersList';
function App() {
  const [users, setUsers] = useState([]);
  const addUserToUsers = (userName, userAge) => {
      setUsers(prev=>{
        console.log("prev",prev);
        return [...prev, {
          name:userName,
          age:userAge
      }]})
  }
  return (
    <div>
      <AddUser addUserToUsers={addUserToUsers}/>
      <UsersList users = {users}/>
    </div>
  );
}

export default App;
