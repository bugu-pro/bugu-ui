import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {

  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const {title, className} = this.props;
    if(title && title !== window.document.title) {
      window.document.title = title;
    }

    return (<main className={className}>{ this.props.children }</main>);
  }
}

export default Page;
