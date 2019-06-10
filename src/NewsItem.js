import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getNews } from './actions/newsActions'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}
class NewsItem extends Component {
  constructor(props) {
    super(props)
    this.props.getNews()
  }

  // componentDidMount() {
  //   this.props.getNews()
  // }

  render() {
    if (this.props.data.loading) return <h1>Loading...</h1>
    else if (this.props.data.news) {
      return (
        // <h1>dtaa</h1>
        <article style={articleStyle} >
          <div>
            <h1>{this.props.data.news.title}</h1>
            <img style={imgStyle} src={this.props.data.news.urlToImage} alt="" />
            <h4>{this.props.data.news.description}</h4>
            <a href={this.props.data.news.url} target="_blank">READ MORE</a>
          </div>
        </article>
      )
    } else return null
  }
}

const mapStateToProps = (state) => ({
  data: state.newsReducer
})

// const mapDispatchToProps = {
//   getNews: getNews,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => {
      dispatch(getNews());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem)