import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import Users from './Users'
import "./Users.css"

function UsersList() {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setListUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUsers()
    }, [])
  return (
    <div className='users'>
      {listUsers.map((el,i)=><Users user={el}/>)}
    </div>
  )
}

export default UsersList
