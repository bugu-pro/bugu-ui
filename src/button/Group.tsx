import * as React from 'react';
import cx from 'classnames';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonGroup = ({ className, ...props }:ButtonGroupProps) => {
    return <div className={cx('bugu-btn-group', className)} {...props} />
}

export default ButtonGroup
