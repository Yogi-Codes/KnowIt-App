import { TextField } from "@mui/material";
import "./NewArticle.css"
import JoditEditor from 'jodit-react';
import { useState } from "react";
import { useRef } from "react";

import axios from "axios";
import { SignInWithGoogle } from "../../firebase";





const NewArticle = (props) => {
    
const editor = useRef(null)
const [content,setContent] = useState('')
const [title1,setTitle] = useState('')
const [thumbnail1,setThumbnail] = useState('')
const [cover1,setCover] = useState('')
const [auth,setauth] = useState(false)





const createArticle = () => {
  

    axios.post('https://knowit-backend.onrender.com/pages', {
      title: title1,
      description: content,
      date : Date.now(),
      thumbnail: thumbnail1,
      cover: cover1
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });



}

const SignIn = async () =>

{


  var authorized = await SignInWithGoogle()
  console.log(authorized)
  console.log("123");

  if(authorized){

   setauth(true)

  }


}


if(auth)
{




return ( 

  
    <div style={{border:"5px solid",display:"flex",justifyContent:"space-evenly",margin:"auto"}}>
<div style={{display: "flex",
alignItems: "center",
justifyContent:"space-evenly", height:"80vh", width:"80%", position:"absolute",background:"White", flexDirection:"column",top:"100px", color:"black"}}>
<div style={{overflowY: "scroll"}}>
<h1 style={{alignnItems:"center"}}>Write Your Heart Out ..!</h1>
<form action="/blogs" method="GET" onSubmit={ createArticle  } id="form1" >
<div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly",flexDirection:"colomn"}}>
<h1>Title </h1>
<TextField label=" Enter Title" size="small" variant="standard" value={title1} onChange={(event) => {
  setTitle(event.target.value)} }/>

<h1>Thumbnail Url</h1>
<TextField label="Thumbnail Url" size="small" variant="standard" value={thumbnail1} onChange={(event) => {
  setThumbnail(event.target.value)}} />
<h1>Cover Url</h1>
<TextField label="Cover Url" size="small" variant="standard" value={cover1} onChange={(event) => {
  setCover(event.target.value);
}}/>
</div>

<h1>Content:</h1>
<hr />

<JoditEditor 
ref={editor}
value={content}
onChange={newContent=>setContent(newContent)}



/>

<div>
<button className="butt" type="submit"> Create</button>
</div>


</form>
</div>


</div>

</div>


)

}
else
{

return(
<button className="butt2" style={{backgroundColor:"black",position:"absolute", top:"100px"}} onClick={SignIn} >Click Here To Sign In</button>

)

}



}

export default NewArticle;