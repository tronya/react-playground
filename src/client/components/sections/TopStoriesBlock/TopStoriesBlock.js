import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { getTopStories } from "../../../reducers/topStorise";
import PropTypes from 'prop-types';
import './TopStories.css';
import { randomID } from "../../../utils/randomId";

const CreateMediaBlock = props => {
  const { url, type } = props;
  if (type === 'image') {
    return <img src={url} alt="" key={randomID()}/>
  }
}

const StoriesItem = props => {
  const { short_url, title, abstract, section, byline, multimedia } = props;
  const hugeImage = multimedia.filter(el => el.format === "superJumbo").pop();
  const hugeImageUrl = (hugeImage && hugeImage.hasOwnProperty("url")) ? hugeImage.url : null;
  return (
    <article className="top-stories__item" key={randomID()} style={{ backgroundImage: `url(${hugeImageUrl})` }}>
      <div className="top-stories__content">
        <h2 className="top-stories__title">{title}</h2>
        <h5>{section}</h5>
        <h4>{abstract}</h4>
        <h4>{byline}</h4>
        <a href={short_url} target="_blank">Link to this post</a>
      </div>
      {/*{multimedia.length && multimedia.map(CreateMediaBlock)}*/}
    </article>
  )
}

class TopStoriesBlock extends Component {

  state = {
    topStoriesSections: [],
    elements: [],
    activeSection: "all"
  }

  filterElementsBySection = (section = "all") => {
    this.setState({ activeSection: section })
    const { topStories: { results } } = this.props;
    if (section === "all") return this.setState({ elements: results });
    const newFilteredElements = this.props.topStories.results.filter(item => item.section === section);
    return this.setState({ elements: newFilteredElements });
  }

  filterItemButton = section => {
    const { activeSection } = this.state;
    return (
      <button onClick={() => this.filterElementsBySection(section)} key={section}
              className={`${activeSection === section ? 'btn-active' : ''} btn`}>{section}</button>
    )
  }

  static getDerivedStateFromProps(props, state) {
    const { topStories: { results } } = props;
    if (!results) return state;
    const topStoriesSections = [];
    results.forEach(item => {
      if (!topStoriesSections.includes(item.section)) topStoriesSections.push(item.section)
    });
    topStoriesSections.push('all');

    return ({ topStoriesSections: topStoriesSections })
  }

  componentDidMount() {
    this.props.getTopStories('home');
  }

  render() {
    const { topStoriesSections, elements } = this.state;
    return (
      <div className="top-stories">
        <div className="top-stories__filter">
          {topStoriesSections.map(this.filterItemButton)}
        </div>
        <div className="top-stories__items">
          {elements.map(StoriesItem)}
        </div>
      </div>
    )
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
