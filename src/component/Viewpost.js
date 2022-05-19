import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewpost = () => {

    var [viewlist,setViewlist]=useState([])
    var [loadstatus,setloadstatus]=useState(true)

    axios.get("https://dummyapifriends.herokuapp.com/view").then((Response)=>{
        console.log(Response.data)
        setViewlist(Response.data)
        setloadstatus(false)





    })


  return (
    <div>
        <Navbar/>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">FriendName</th>
      <th scope="col">FriendNickName</th>
      <th scope="col">DescribeYourFriend</th>
    </tr>
  </thead>

  {loadstatus ?<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :<tbody>
      {viewlist.map((value,key)=>{
          return <tr>
          <td>{value.name}</td>
          <td>{value.friendName}</td>
          <td>{value.friendNickName}</td>
          <td>{value.DescribeYourFriend}</td>
        </tr>


      })}
    

  </tbody>


  
  }
</table>









                </div>
            </div>
        </div>
    </div>
</div>






    </div>
  )
}

export default Viewpost