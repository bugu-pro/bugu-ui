import * as React from 'react'
import cx from 'classnames'
import ReactLoading from 'react-loading';

type ButtonProps = {
    children?: any
    loading?: boolean
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
    size: 'sm' | 'md' | 'lg'
    type?: 'primary' | 'default' | 'danger'
}

const prefixCls = 'bugu-btn'

const ButtonSizeMap = new Map([
    ['small', 'sm'],
    ['middle', 'md'],
    ['large', 'lg'],
])

const Button = (props: ButtonProps) => {
    const { children, disabled, size = 'middle', type = 'default', className, loading, ...restProps } = props
    const classNames = cx(prefixCls, className, `${prefixCls}-${type}`, {
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-disabled`]: !!disabled,
        [`${prefixCls}-${ButtonSizeMap.get(size)}`]: ButtonSizeMap.has(size),
    })

    return (
        <button {...restProps} className={classNames}>
            {loading ? (
                <span className={`${prefixCls}-loading-icon`}>
                    <ReactLoading type={"spin"} color={"#d9d9d9"} height={'100%'} width={'100%'} />
                </span>
            ) : null}
            <span>{children}</span>
        </button>
    )
}

export default Button
