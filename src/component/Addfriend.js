import axios from 'axios'
import React, { useState } from 'react'

const Addfriend = () => {

    var [name,setName]=useState("")
    var [fname,setFName]=useState("")
    var [fnickname,setNName]=useState("")
    var [dyfriend,setDYFriend]=useState("")

    const subData=()=>{
        const data={"name":name,"friendName":fname,"friendNickName":fnickname,"DescribeYourFriend":dyfriend}
        console.log(data)

        axios.post("http://dummyapifriends.herokuapp.com/adddata",data).then((Response)=>{
            console.log(Response.data)

            if(Response.data.status=="success")
            {
                alert("Successfully Added")

            }
            else
            {
                alert("Failed to Added")



            }




        })



    }

    


     
  return (
    <div>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Friend Name</label>
                    <input onChange={(e)=>{setFName(e.target.value)}} placeholder="Enter FriendName" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Friend Nickname</label>
                    <input onChange={(e)=>{setNName(e.target.value)}} placeholder="Enter FriendNickname" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">DescribeYourFriend</label>
                    <textarea onChange={(e)=>{setDYFriend(e.target.value)}} placeholder="Enter Description" name="" id="" cols="30" rows="10" class="form-control"></textarea>
                    
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subData} class="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>





    </div>
  )
}

export default Addfriend