import React from 'react'
import Article from './Article'
import blogData from '../data/blog'

export default function ArticleList() {
    const articleList = blogData.posts.map(article => {
        return <Article key={article.id} title={article.title} preview={article.preview} date={article.date} />
    })
  return (
    <main>
        {articleList}
    </main>
    
  )
}
