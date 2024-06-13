import React from "react";
import image2 from "../../assets/images/file.jpg"
import './styles.css';


 export class Article extends React.Component{
    
    render(){
        return(
            <article id="article">
          
                <img src= {this.props.image} alt="nasa" />
                 <div className="article-infos">
                 
                <h2>{this.props.title}</h2>
                <h3>{this.props.provider}</h3>
                <p>{this.props.text}</p>
            </div>
            </article>
           
        )
    }
}
