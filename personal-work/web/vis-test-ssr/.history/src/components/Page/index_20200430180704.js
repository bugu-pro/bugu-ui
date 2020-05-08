import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

class Page extends Component {

  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const {title, className} = this.props;

    return (
      <main className={className}>
        {this.props.children}
      </main>
    );
  }
}

export default Page;
