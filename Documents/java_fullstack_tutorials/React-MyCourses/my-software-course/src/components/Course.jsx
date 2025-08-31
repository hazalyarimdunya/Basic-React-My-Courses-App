import React from 'react'

//Kurslarin listelenecegi componenet
function Course({course}) { //Kurslari Data dan cekmek icin bir props aliyoruz.Distructuring ile kulllanacagiz.
 
    const {id,title,price,description,image,url}=course; //course objesinden gerekli alanlari distructuring ile aliyoruz.
    return (
    <div className='course-list'>
        
            <h2>{title}</h2>
            <h3>{description}</h3>
             <img src={image} width={150} height={200}/>
            <p>{price} $</p>
            <a href={url}>Details...</a>
        
    </div>
  )
}

export default Course