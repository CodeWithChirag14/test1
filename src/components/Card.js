import React from 'react'

const Card = ({apis}) => {

    return (
        <>
        <section className="main-card--cointainer">
        {
         apis.map((curElem)=>{
             return (
                 <>
                 <div className="card-container" key={curElem.id}>
                 <div className="card">
                     <div className="card-body">
                     <img src={curElem.ImageUrl} alt="images" className="card-media"/>
                       
                         <h2 className="card-title">{curElem.name}</h2>
                         <span className="card-description subtle">
                          {curElem.ShortDesc}
                         </span>
                         <div className="card-read">View</div>
                         </div>
                        
                    
         
                     </div>
         
         
                 </div>
                 </>
             )
         })
        }
           </section>   
             
        </>
       )
     }





export default Card;
