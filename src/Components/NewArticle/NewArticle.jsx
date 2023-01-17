import { TextField } from "@mui/material";
import "./NewArticle.css"
import JoditEditor from 'jodit-react';
import { useState } from "react";
import { useRef } from "react";
import NewButton from "../NewButton/NewButton";
import axios from "axios";





const NewArticle = (props) => {
    
const editor = useRef(null)
const [content,setContent] = useState('')



// const createArticle = () => {

//     axios.post('http://localhost:3000', {
//         // title : req.body.title,
//         //     description: req.body.desc,
//         //     date : req.body.date,
//         //     thumbnail: req.body.thumbnail,
//         //     cover: req.body.cover
//         console.log(content)}
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


// }






return (
    <div style={{border:"5px solid",display:"flex",justifyContent:"space-evenly",margin:"auto"}}>
<div style={{display: "flex",
alignItems: "center",
justifyContent:"space-evenly", height:"80vh", width:"80%", position:"absolute",background:"White", flexDirection:"column",top:"100px", color:"black"}}>

<h1 style={{alignnItems:"center"}}>Write Your Heart Out ..!</h1>
<form action="http://localhost:3000/pages/new" method="POST">
<div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly",flexDirection:"colomn"}}>
<h1>Title</h1>
<TextField label="Title" size="small" variant="standard"/>

<h1>Thumbnail Url</h1>
<TextField label="Thumbnail" size="small" variant="standard"/>
<h1>Cover Url</h1>
<TextField label="Cover" size="small" variant="standard"/>
</div>

<h1>Description</h1>
<hr />

<JoditEditor 
ref={editor}
value={content}
onChange={newContent=>setContent(newContent)}
tabIndex={5}



/>
</form>
<div onClick={console.log(content)}>
<NewButton name="Create Article"/>
</div>
</div>
</div>

)

}



export default NewArticle;