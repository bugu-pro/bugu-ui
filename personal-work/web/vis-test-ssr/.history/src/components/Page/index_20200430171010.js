import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

class Page extends Component {

  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const {title, className} = this.props;
    // if(title && title !== window.document.title) {
    //   window.document.title = title;
    // }

    return (<main className={className}>
    <DocumentTitle title={title} />
      { this.props.children }
      </main>);
  }
}

export default Page;
