import React, { FC } from 'react'
import { Button } from 'bugu-ui'
import "bugu-ui/button/style"
import styles from './demo.module.less'

const LoadingBtn: FC = () => {
    return (
        <div className={styles['demoBox']}>
            <Button loading={true}>Loading Button</Button>
            <Button loading={true} type="primary">Loading Button</Button>
            <Button loading={true} type="danger">Loading Button</Button>
        </div>
    )
}

export default LoadingBtn
