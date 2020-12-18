import React, { FC } from 'react'
import { Button } from 'bugu-ui'
import 'bugu-ui/button/style'
import styles from './demo.module.less'

const LoadingBtn: FC = () => {
    return (
        <div className={styles['demoBox']}>
            <div>
                <Button loading={true} size="small">
                    Loading Button
                </Button>
                <Button loading={true} size="middle">
                    Loading Button
                </Button>
                <Button loading={true} size="large">
                    Loading Button
                </Button>
            </div>
            <div>
                <Button loading={true} type="primary">
                    Loading Button
                </Button>
                <Button loading={true} type="danger">
                    Loading Button
                </Button>
            </div>
        </div>
    )
}

export default LoadingBtn
