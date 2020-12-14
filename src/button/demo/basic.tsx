import React, { FC } from 'react'
import { Button } from 'bugu-ui'
import "bugu-ui/button/style"
import styles from './demo.module.less'

const BasicDemo: FC = () => {
    return (
        <div className={styles['demoBox']}>
            <Button>Default Button</Button>
            <Button type="primary">Primary Button</Button>
            <Button type="danger">Danger Button</Button>
        </div>
    )
}

export default BasicDemo
