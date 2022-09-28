import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  const postsObj = posts.map(post => <Article key={post.id} postData={post}/>)
  return (
    <main>
       {postsObj} 
    </main>
  )
}

export default ArticleList