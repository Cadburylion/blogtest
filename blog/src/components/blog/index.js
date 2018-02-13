import React from 'react'

class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state={}
    this.postData = this.postData.bind(this)
  }
  componentDidMount(){
    // rss_url: 'https://medium.jasonmdesign.com/feed',
    // rss_url: 'https://medium.com/feed/matthewparker_44839',
    // api_key: 'splntegknn4wmc7f6wc1el2ry4eoj55tdyexwjhv',
    let url = 'https://api.rss2json.com/v1/api.json'
    let feed = '?rss_url=https://medium.jasonmdesign.com/feed'
    this.postData(url + feed)
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
    console.log('state: ', this.state)
    return(
      <div>
      {this.state.articles ?
        this.state.articles.items.map((article, index) =>
          <div key={index} className='blog-wrapper' style={{width: '380px'}}>
            <div className='blog-image' >
              <img src={article.thumbnail} style={{width: '100%'}}/>
            </div>
            <a href={article.link} target='_#' className='blog-title'>{article.title}</a>
          </div>
        )
        : undefined
      }
      </div>
    )
  }
}

export default Blog
