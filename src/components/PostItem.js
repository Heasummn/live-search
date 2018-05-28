import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import styles from './styles/PostItem.css'

export default class PostItem extends PureComponent {

  render() {
    const {author, title, url} = this.props;
    let element = (
      <div>
        <h3><a className={styles.Link} href={url} target="_blank">{title}</a></h3>
        <h5 className={styles.Author}>{author}</h5>        
      </div>
    );

    return (<li>{element}</li>)
  }
}

PostItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
}