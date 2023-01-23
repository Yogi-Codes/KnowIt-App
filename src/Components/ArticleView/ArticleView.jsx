import "./ArticleView.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import parse from 'html-react-parser';



const ArticleView= (props) => {
  const params =useParams();
  const {id}  = params;



  const [blog, setBlog] = useState([]);
    const getBlog = async () => {
        await axios.get(`http://localhost:3000/pages/${id}`).then((res) => {
            console.log(res.data);
            setBlog(res.data);
        })
    }
    useEffect(() => {
        getBlog();
    },[]);

    

return (<div style={{backgroundColor:"#0F0F0F", width:"100vw", height:"100vh",zIndex:"0", position:"fixed", display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}}>

<h1 className="head"  >{blog.title}</h1>
<div style={{height:"80vh", width:"80vw", zIndex:"2",overflowY: "scroll"}} > 
{blog.length !== 0 ? <p className="para" >{parse(blog.description)}</p> : null}
</div>

   



    
</div>)

}



export default ArticleView ;