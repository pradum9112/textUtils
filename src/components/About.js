import React, { useState } from 'react'

export default function About(props) {
    // let myStyle={
    //     color:'white', 
    //     backgroundColor:'black'
    // }

    // const [myStyle ,setMyStyle] = useState({
    //     color:'black', 
    //     backgroundColor:'white'
    // })
    // const [btnText ,setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle =()=>{
    //     if(myStyle.color ==='black'){
    //        setMyStyle({
    //         color:'purple', 
    //         backgroundColor:'lavender',
    //         border:'1px solid white'
    //        })
    //      setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //          color:'black', 
    //          backgroundColor:'white'
    //         })
    //       setBtnText("Enable Dark Mode")
    //      }
    // }

    let myStyle ={
      color: props.mode ==='dark'?'purple':'black',
      backgroundColor : props.mode ==='dark'?'lavender':'white',
      // border:'1px solid',
      // borderColor: props.mode === 'dark'?'black':'Violet'
      
    }
    
  return (
    <div className="container my-5" style={myStyle}>
        <h1 className="my-3" >AboutUs</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <code>TextUtils</code> gives you a way to analyse your text quickly and efficiently.It have a multiple function.  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a <code>Free</code> tool that work clean and fast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body my-2" style={myStyle}>
      It work in any web browser like chrome,fireforx,Internet explorer,Safari,Opera.
      It suitable for count characters in <code> blog,books,excels document,pdf,essay </code>etc.
      </div>
    </div>
  </div>
</div>
 {/* <div className="container my-2"><button onClick={toggleStyle} type="button" className="btn btn-primary my-1 mx-1">{btnText}</button></div> */}
    </div>
    
  )
}
