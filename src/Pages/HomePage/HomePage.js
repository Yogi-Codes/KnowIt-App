
import ResponsiveAppBar from "../../Components/AppBar/ResponsiveAppBar"
import audio_final_blog from "./../../assets/audio_final_blog.mp3"
import pic from "./../../assets/pic.jpg"
import skill from "./../../assets/Skills.png"


import "./HomePage.css"




const HomePage = () => {

    var toggle=true;
    var aud = new Audio(audio_final_blog);

    function play() {
        if (toggle) {
            aud.play();
            toggle=false
        } else {
            aud.pause();
            toggle=true
        }
    }

    


   
return (<div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >

    <ResponsiveAppBar>KnowIt</ResponsiveAppBar>
   
<div style={{display:"flex",justifyContent:"flex-start" , width:"100vw"}}>
 <i  className="butto" style={{backgroundColor:"black",position:"absolute", top:"100px"}}  onClick={play}>&#x266B;</i> 
 </div>
   
<div id="container" style={{backgroundColor:"#0F0F0F", width:"60vw", height:"60vh",zIndex:"0",top:"200px", position:"fixed", overflowY: "scroll",overflowX:"hidden"}}>
<div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center", flexWrap:"wrap",height:"60vh",width:"60vw"}} >
<div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center", flexWrap:"wrap",height:"60vh",width:"60vw"}} >
    <div style={{alignItems:"center",width:"30vw",height:"30vh",
  border: "3px solid beige",display:"flex",justifyContent:"left"}}>
    <h1 style={{color:"green"}} className="text1 ">root@kali:/#</h1>
<h1 className="text1 t2" >Hi!  I'm Anik Ghosh</h1>
<br /><br />

<h1 className="text1 blinking-cursor2">_</h1>

</div >

<div >
<img src={`${pic}`} alt="pic" className="cropped1" />
</div>
<div style={{alignItems:"center", display:"flex",justifyContent:"space-evenly",width:"60vw"}}>
<h1 className="text2 blinking-cursor curs "  >^</h1>


</div>
</div>
<div className="grid" style={{height:"60vh",width:"60vw"}} >
    
<img id="skillz" src={`${skill}`} alt="pic" style={{width:"60vw",height:"60vh"}} />

</div>
<div className="grid" style={{height:"60vh",width:"60vw",display:"flex"}} >
    
<div className="grid" style={{height:"60vh",width:"20.3vw",borderRight: "0.3vw solid beige",display:"flex",justifyContent:"center",alignItems:"center"}} >
    <h1 id="proj" className="text1">Projects</h1>
</div>
<div className="grid" style={{height:"60vh",width:"39.7vw",borderRight: "0.3vw solid beige",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}} >
<div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://tryhackme-images.s3.amazonaws.com/user-avatars/6ba0d49c3dd47aeb901c29d701c8d426.jpg" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>
        <a href="https://github.com/Yogi-Codes/KnowIt-App" target="blank" >
        <h1 className="text3">KnowIt</h1>
        </a>
    <p className="desc">A Mern based webapp which is a portfolio and personal blog at once</p>
    </div>
    </div>
    <div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://cdn.pixabay.com/photo/2013/07/12/15/40/bookmark-150295_960_720.png" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>
    <a href="https://github.com/Yogi-Codes/BookmarkApp" target="blank" rel="noreferrer">
        <h1 className="text3">Bookmark App</h1>
        </a>
    <p className="desc">A Bookmark app which stores data in localStorage with Beautiful  UI</p>
    </div>
    </div>
    <div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://i.pcmag.com/imagery/articles/06tEDmMDOrnG8e7ofwgHpKE-1.fit_lim.size_1600x900.v1609839482.jpg" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>
        <a href="https://github.com/Yogi-Codes/python-web-scanner" target="_blank" rel="noreferrer">
        <h1 className="text3">Python WebScanner</h1>
        </a>
    <p className="desc">A python script to scan list of website to check whether they are live </p>
    </div>
    </div>
    <div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://cdn.pixabay.com/photo/2017/01/31/13/08/dragon-2023884_960_720.png" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>
        <a href="https://github.com/Yogi-Codes/Python-Projects/tree/main/SOCKET_PYTHON" target="_blank" rel="noreferrer">
        <h1 className="text3">Python Malware</h1>
        </a>
    <p className="desc">A simple malware which allows  remote command execution on client</p>
    </div>
    </div>
    <div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://cdn.pixabay.com/photo/2020/02/22/17/53/communication-4871245_960_720.jpg" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>
        <a href="https://github.com/Yogi-Codes/Kalyani-VANET" target="_blank" rel="noreferrer">
        <h1 className="text3">Kalyani  Vanet</h1>
        </a>
    <p className="desc">A vehicular ad-hoc network simulation based on real map  of kalyani </p>
    </div>
    </div>
    <div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://f4.bcbits.com/img/0016428485_10.jpg" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>
        <a href="https://github.com/Yogi-Codes/Cipher_decoder" target="_blank" rel="noreferrer">
        <h1 className="text3">Base64 Decoder</h1>
    <p className="desc">A Simple online tool to decode Base64 encoded string or vice-versa</p>
    </a>
    </div>
    </div>
    <div style={{width:"40vw",height:"8.57vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <img src="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg" alt="1" className="proimg" />
    <div style={{display:"flex",flexDirection:"column"}}>

        <a href="https://github.com/Yogi-Codes/Automatic-Balance-Sheet-" target="_blank" rel="noreferrer">
        <h1 className="text3">Auto Balance Sheet</h1>
        </a>
    <p className="desc">Python script which fetches data from api to create balance sheet </p>
    </div>
    </div>  
</div>

</div>
</div>







</div>



    </div>)

}



export default HomePage;
