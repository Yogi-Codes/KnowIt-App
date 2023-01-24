import axios from "axios"
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { useState } from "react"
import { useEffect } from "react"
import { Route,Routes } from "react-router-dom";
import Blogmaker from "./Components/Blogs/Blogs"
import ResponsiveAppBar from "./Components/AppBar/ResponsiveAppBar";
import NewArticle from "./Components/NewArticle/NewArticle"
import ArticleView from "./Components/ArticleView/ArticleView";


function App() {

const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        await axios.get('https://knowit-backend.onrender.com/pages').then((res) => {
            console.log(res.data);
            setBlogs(res.data);
        })
    }
    useEffect(() => {
        getBlogs();
    }, []);










  return (

    
    <div className="App"  >
      <ResponsiveAppBar >KnowIt</ResponsiveAppBar>
<div style={{backgroundImage: `url(https://media.idownloadblog.com/wp-content/uploads/2021/09/Apple-September-Event-California-Streaming-BasicAppleGuy-iDownloadBlog-6K-No-Logo-2048x1206.png)`, width:"100vw" ,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',position:"fixed",top:"0"}} ></div>
    <Routes>
   <Route path="/" element={<HomePage />}/>
   <Route path="/blogs" element={<Blogmaker data={blogs} />} />
   <Route path="/blogs/new" element={<NewArticle/>} />
   <Route path="/blogs/:id" element={<ArticleView/>} />

    </Routes>


     




    </div>
  );
}

export default App;
