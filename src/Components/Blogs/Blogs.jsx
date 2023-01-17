import MultiActionAreaCard from "./../cards/cards.jsx"
import "./Blogs.css"
import NewButton from "../NewButton/NewButton.jsx"


const blogmaker = (props) => {
    
return (<div >
      
  
  
  <NewButton name="New Article" />
<div className="cards-container"  >
  

  { props.data.map((prop,index) => {
     return(<MultiActionAreaCard cardDetail={prop} key={index} />)
   })}

    

    </div>
    </div>)

}



export default blogmaker;