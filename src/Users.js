import React from 'react'
import "./Users.css"
import {Link}from "react-router-dom"
function Users({user}) {
  return (
    <div>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
  <div className="card p-4">
    <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" height={100} width={100} /></button> <span className="name mt-3">{user.name}</span> <span className="idd">{user.username}</span>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">{user.email}</span> <span><i className="fa fa-copy" /></span> </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">{user.phone}</span> </div>
      <div className=" d-flex mt-2">  <Link to={`/userprofile/${user.id}`}><button className="btn1 btn-dark">Edit Profile</button></Link> </div>
      <div className="text mt-3"> <span>{`${user.address.street } ${user.address.suite } ${user.address.city } ${user.address.zipcode }  `} </span> </div>
      <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter" /></span> <span><i className="fa fa-facebook-f" /></span> <span><i className="fa fa-instagram" /></span> <span><i className="fa fa-linkedin" /></span> </div>
      <div className=" px-2 rounded mt-4 date "> <span className="join">{`website: ${user.website}`}</span> </div>
    </div>
  </div>
</div>

   
    </div>
    
  )
}

export default Users
