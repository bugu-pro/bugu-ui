import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import withSideEffect from 'react-side-effect';
import PropTypes from 'prop-types';

class Page extends Component {

  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const {title, className} = this.props;

    return (<DocumentTitle title={title}>
      <main className={className}>
        {this.props.children}
      </main>
    </DocumentTitle>);
  }
}

export default withSideEffect()(Page);
