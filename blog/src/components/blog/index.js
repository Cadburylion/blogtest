import React from 'react'
import Article from './article.js'
import BlogField from './blog-field.js'
import TimeFormat from './time-format.js'
// import Timestamp from 'react-timestamp'

class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state={}
    this.postData = this.postData.bind(this)
  }
  componentDidMount(){
    // let feed = '?rss_url=https://medium.com/feed/@message2america'
    let url = 'https://api.rss2json.com/v1/api.json'
    let feed = '?rss_url=https://medium.jasonmdesign.com/feed'
    let key = '&api_key=splntegknn4wmc7f6wc1el2ry4eoj55tdyexwjhv'
    this.postData(url + feed + key)
}
  postData(url){
    fetch(url)
    .then(response => response.json())
    .then(feed => {
      this.setState({
        articles: feed,
      })
    })
  }
  render(){
    const title = this.state.articles ? this.state.articles.feed.title : ''
    return(
        <BlogField title={title}>
          {this.state.articles ?
            this.state.articles.items.map((article, index) =>
              <Article
                key={article.pubDate + '-' + index}
                article={article}
                time={
                  <TimeFormat time={article.pubDate}/>
                }/>
            )
            : null
          }
        </BlogField>
    )
  }
}

export default Blog
