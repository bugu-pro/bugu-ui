import React, { FC } from 'react'
import { Button } from 'bugu-ui'
import "bugu-ui/button/style"
import styles from './demo.module.less'

const LoadingBtn: FC = () => {
    return (
        <div className={styles['demoBox']}>
            <Button size="small">small Button</Button>
            <Button size="middle">Middle Button(default)</Button>
            <Button size="large">large Button</Button>
        </div>
    )
}

export default LoadingBtn
