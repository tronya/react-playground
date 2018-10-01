import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { getTopStories } from "../../reducers/topStorise";
import PropTypes from 'prop-types';
import './TopStories.css';

const CreateMediaBlock = props => {
  const { url, type } = props;
  if (type === 'image') {
    return <img src={url} alt="" key={url}/>
  }
}

const StoriesItem = props => {
  const { short_url, title, abstract, section, byline, multimedia } = props;
  const hugeImage = multimedia.filter(el => el.format === "superJumbo").pop();
  const hugeImageUrl = (hugeImage && hugeImage.hasOwnProperty("url")) ? hugeImage.url : null;
  return (
    <article className="top-stories" key={short_url} style={{ backgroundImage: `url(${hugeImageUrl})` }}>
      <h2>{title}</h2>
      <h5>{section}</h5>
      <h4>{abstract}</h4>
      <h2>{byline}</h2>
      {multimedia.length && multimedia.map(CreateMediaBlock)}
    </article>
  )
}

class TopStoriesBlock extends Component {
  componentDidMount() {
    this.props.getTopStories('home');
  }

  render() {
    const { topStories } = this.props;
    if (!topStories.results) return null;
    const { results } = topStories;
    return results.length && results.map(StoriesItem);
  }
}

StoriesItem.propTypes = {
  abstract: PropTypes.string,
  title: PropTypes.string,
  byline: PropTypes.string,
  created_date: PropTypes.string,
  des_facet: PropTypes.array,
  item_type: PropTypes.string,
  kicker: PropTypes.string,
  material_type_facet: PropTypes.string,
  published_date: PropTypes.string,
  updated_date: PropTypes.string,
  subsection: PropTypes.string,
  short_url: PropTypes.string,
  url: PropTypes.string,
  section: PropTypes.string,
  multimedia: PropTypes.array,
}

CreateMediaBlock.propTypes = {
  caption: PropTypes.string,
  copyright: PropTypes.string,
  format: PropTypes.string,
  height: PropTypes.number,
  subtype: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number,
}

export default connect(state => ({
    topStories: state.topStories
  }),
  dispatch => ({
    getTopStories: category => dispatch(getTopStories(category))
  })
)(TopStoriesBlock);
