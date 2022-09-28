import React from 'react'

function Article({postData}) {
  return (
    <article>
       <h3>{postData.title}</h3>
       <small>{postData.date ? postData.date: "January 1, 1970"}</small> 
       <p>{postData.preview}</p>
    </article>
  )
}

export default Article