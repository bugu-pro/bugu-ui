import {Fragment, useState, useEffect} from 'react';
import {getLocale} from 'umi-plugin-react/locale';
import {Tabs} from 'antd';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

const {TabPane} = Tabs;

const renderTab = (title, i) => (<div className={styles['tab-title']}>
  <div className={[styles['line-tab-' + (i + 1)], `service-line-tab-${i+1}`].join(' ')} />
  <p>{title}</p>
</div>)

export default function ServiceLines({style, className, location}) {
  const hash = location && location.hash;
  const defaultActiveKey = hash.includes('Service_Lines') ? hash.replace('#', '') : 'Service_Lines-1';
  const [activeKey, setActiveKey] = useState(undefined);
  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';
  const isGeneralEnglish = getLocale() === 'en-US';

  useEffect(() => {
    setActiveKey(defaultActiveKey);
  }, [defaultActiveKey]);

  return (<section className={[styles['Service-Lines'], className, isEnglish ? styles['Service-Lines-en'] : null, isVietnamese ? styles['Service-Lines-vi'] : null, isGeneralEnglish ? styles['Service-Lines-en-general'] : null].join(' ')}
  data-aos="slide-up"
  style={style}>
    {
      new Array(7).fill('').map((it, i) =>
      <a key={'Service-Lines-anchor' + i} id={'Service_Lines-' + (i+1)} className="general-anchor"/>)
    }
    <div className="content-container">
      <h2>{getIntel('Service_Lines_Detail')}</h2>
      <p>{getIntel('Service_Lines_Detail_Title')}</p>
      <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
        {
          [
            {
              title: getIntel('Service_Lines_Detail_Type_1'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_1_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_1_1'),
                    getIntel('Service_Lines_Detail_1_1_2'),
                    getIntel('Service_Lines_Detail_1_1_3'),
                    getIntel('Service_Lines_Detail_1_1_4'),
                    getIntel('Service_Lines_Detail_1_1_5'),
                    getIntel('Service_Lines_Detail_1_1_6'),
                    getIntel('Service_Lines_Detail_1_1_7'),
                    getIntel('Service_Lines_Detail_1_1_8'),
                    getIntel('Service_Lines_Detail_1_1_9'),
                    getIntel('Service_Lines_Detail_1_1_10'),
                    getIntel('Service_Lines_Detail_1_1_11'),
                    getIntel('Service_Lines_Detail_1_1_12'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_2_1'),
                    getIntel('Service_Lines_Detail_1_2_2'),
                    getIntel('Service_Lines_Detail_1_2_3'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_3_1'),
                    getIntel('Service_Lines_Detail_1_3_2'),
                    getIntel('Service_Lines_Detail_1_3_3'),
                    getIntel('Service_Lines_Detail_1_3_4'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_4_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_4_1'),
                    getIntel('Service_Lines_Detail_1_4_2'),
                    getIntel('Service_Lines_Detail_1_4_3'),
                    getIntel('Service_Lines_Detail_1_4_4'),
                    getIntel('Service_Lines_Detail_1_4_5'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_5_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_5_1'),
                    getIntel('Service_Lines_Detail_1_5_2'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_6_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_6_1'),
                    getIntel('Service_Lines_Detail_1_6_2'),
                    getIntel('Service_Lines_Detail_1_6_3'),
                    getIntel('Service_Lines_Detail_1_6_4'),
                    getIntel('Service_Lines_Detail_1_6_5'),
                    getIntel('Service_Lines_Detail_1_6_6'),
                    getIntel('Service_Lines_Detail_1_6_7'),
                    getIntel('Service_Lines_Detail_1_6_8'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_7_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_7_1'),
                    getIntel('Service_Lines_Detail_1_7_2'),
                    getIntel('Service_Lines_Detail_1_7_3'),
                    getIntel('Service_Lines_Detail_1_7_4'),
                    getIntel('Service_Lines_Detail_1_7_5'),
                    getIntel('Service_Lines_Detail_1_7_6'),
                    getIntel('Service_Lines_Detail_1_7_7'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_1_8_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_1_8_1'),
                    getIntel('Service_Lines_Detail_1_8_2'),
                    getIntel('Service_Lines_Detail_1_8_3'),
                    getIntel('Service_Lines_Detail_1_8_4'),
                    getIntel('Service_Lines_Detail_1_8_5'),
                    getIntel('Service_Lines_Detail_1_8_6'),
                    getIntel('Service_Lines_Detail_1_8_7'),
                  ]
                }
              ]
            },
            {
              title: getIntel('Service_Lines_Detail_Type_2'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_2_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_1_1'),
                    getIntel('Service_Lines_Detail_2_1_2'),
                    getIntel('Service_Lines_Detail_2_1_3'),
                    getIntel('Service_Lines_Detail_2_1_4'),
                    getIntel('Service_Lines_Detail_2_1_5'),
                    getIntel('Service_Lines_Detail_2_1_6'),
                    getIntel('Service_Lines_Detail_2_1_7'),
                    getIntel('Service_Lines_Detail_2_1_8'),
                    getIntel('Service_Lines_Detail_2_1_9'),
                    getIntel('Service_Lines_Detail_2_1_10'),
                    getIntel('Service_Lines_Detail_2_1_11'),
                    getIntel('Service_Lines_Detail_2_1_12'),
                    getIntel('Service_Lines_Detail_2_1_13'),
                    getIntel('Service_Lines_Detail_2_1_14'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_2_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_2_1'),
                    getIntel('Service_Lines_Detail_2_2_2'),
                    getIntel('Service_Lines_Detail_2_2_3'),
                    getIntel('Service_Lines_Detail_2_2_4'),
                    getIntel('Service_Lines_Detail_2_2_5'),
                    getIntel('Service_Lines_Detail_2_2_6'),
                    getIntel('Service_Lines_Detail_2_2_7'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_2_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_3_1'),
                    getIntel('Service_Lines_Detail_2_3_2'),
                    getIntel('Service_Lines_Detail_2_3_3'),
                    getIntel('Service_Lines_Detail_2_3_4'),
                    getIntel('Service_Lines_Detail_2_3_5'),
                    getIntel('Service_Lines_Detail_2_3_6'),
                    getIntel('Service_Lines_Detail_2_3_7'),
                    getIntel('Service_Lines_Detail_2_3_8'),
                    getIntel('Service_Lines_Detail_2_3_9'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_2_4_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_4_1'),
                    getIntel('Service_Lines_Detail_2_4_2'),
                    getIntel('Service_Lines_Detail_2_4_3'),
                    getIntel('Service_Lines_Detail_2_4_4'),
                    getIntel('Service_Lines_Detail_2_4_5'),
                    getIntel('Service_Lines_Detail_2_4_6'),
                    getIntel('Service_Lines_Detail_2_4_7'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_2_5_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_5_1'),
                    getIntel('Service_Lines_Detail_2_5_2'),
                    getIntel('Service_Lines_Detail_2_5_3'),
                    getIntel('Service_Lines_Detail_2_5_4'),
                    getIntel('Service_Lines_Detail_2_5_5'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_2_6_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_6_1'),
                    getIntel('Service_Lines_Detail_2_6_2'),
                    getIntel('Service_Lines_Detail_2_6_3'),
                    getIntel('Service_Lines_Detail_2_6_4'),
                    getIntel('Service_Lines_Detail_2_6_5'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_2_7_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_2_7_1'),
                    getIntel('Service_Lines_Detail_2_7_2'),
                  ]
                },
              ]
            },
            {
              title: getIntel('Service_Lines_Detail_Type_3'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_3_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_1_1'),
                    getIntel('Service_Lines_Detail_3_1_2'),
                    getIntel('Service_Lines_Detail_3_1_3'),
                    getIntel('Service_Lines_Detail_3_1_4'),
                    getIntel('Service_Lines_Detail_3_1_5'),
                    getIntel('Service_Lines_Detail_3_1_6'),
                    getIntel('Service_Lines_Detail_3_1_7'),
                    getIntel('Service_Lines_Detail_3_1_8'),
                    getIntel('Service_Lines_Detail_3_1_9'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_2_1'),
                    getIntel('Service_Lines_Detail_3_2_2'),
                    getIntel('Service_Lines_Detail_3_2_3'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_3_1'),
                    getIntel('Service_Lines_Detail_3_3_2'),
                    getIntel('Service_Lines_Detail_3_3_3'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_4_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_4_1'),
                    getIntel('Service_Lines_Detail_3_4_2'),
                    getIntel('Service_Lines_Detail_3_4_3'),
                    getIntel('Service_Lines_Detail_3_4_4'),
                    getIntel('Service_Lines_Detail_3_4_5'),
                    getIntel('Service_Lines_Detail_3_4_6'),
                    getIntel('Service_Lines_Detail_3_4_7'),
                    getIntel('Service_Lines_Detail_3_4_8'),
                    getIntel('Service_Lines_Detail_3_4_9'),
                    getIntel('Service_Lines_Detail_3_4_10'),
                    getIntel('Service_Lines_Detail_3_4_11'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_5_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_5_1'),
                    getIntel('Service_Lines_Detail_3_5_2'),
                    getIntel('Service_Lines_Detail_3_5_3'),
                    getIntel('Service_Lines_Detail_3_5_4'),
                    getIntel('Service_Lines_Detail_3_5_5'),
                    getIntel('Service_Lines_Detail_3_5_6'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_6_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_6_1'),
                    getIntel('Service_Lines_Detail_3_6_2'),
                    getIntel('Service_Lines_Detail_3_6_3'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_7_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_7_1'),
                    getIntel('Service_Lines_Detail_3_7_2'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_8_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_8_1'),
                    getIntel('Service_Lines_Detail_3_8_2'),
                    getIntel('Service_Lines_Detail_3_8_3'),
                    getIntel('Service_Lines_Detail_3_8_4'),
                    getIntel('Service_Lines_Detail_3_8_5'),
                    getIntel('Service_Lines_Detail_3_8_6'),
                    getIntel('Service_Lines_Detail_3_8_7'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_3_9_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_3_9_1'),
                    getIntel('Service_Lines_Detail_3_9_2'),
                    getIntel('Service_Lines_Detail_3_9_3'),
                  ]
                },
              ]
            },
            {
              title: getIntel('Service_Lines_Detail_Type_4'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_4_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_4_1_1'),
                    getIntel('Service_Lines_Detail_4_1_2'),
                    getIntel('Service_Lines_Detail_4_1_3'),
                    getIntel('Service_Lines_Detail_4_1_4'),
                    getIntel('Service_Lines_Detail_4_1_5'),
                    getIntel('Service_Lines_Detail_4_1_6'),
                    getIntel('Service_Lines_Detail_4_1_7'),
                    getIntel('Service_Lines_Detail_4_1_8'),
                    getIntel('Service_Lines_Detail_4_1_9'),
                    getIntel('Service_Lines_Detail_4_1_10'),
                    getIntel('Service_Lines_Detail_4_1_11'),
                    getIntel('Service_Lines_Detail_4_1_12'),
                    getIntel('Service_Lines_Detail_4_1_13'),
                    getIntel('Service_Lines_Detail_4_1_14'),
                    getIntel('Service_Lines_Detail_4_1_15'),
                    getIntel('Service_Lines_Detail_4_1_16'),
                    getIntel('Service_Lines_Detail_4_1_17'),
                    getIntel('Service_Lines_Detail_4_1_18'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_4_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_4_2_1'),
                    getIntel('Service_Lines_Detail_4_2_2'),
                    getIntel('Service_Lines_Detail_4_2_3'),
                    getIntel('Service_Lines_Detail_4_2_4'),
                    getIntel('Service_Lines_Detail_4_2_5'),
                    getIntel('Service_Lines_Detail_4_2_6'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_4_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_4_3_1'),
                    getIntel('Service_Lines_Detail_4_3_2'),
                    getIntel('Service_Lines_Detail_4_3_3'),
                    getIntel('Service_Lines_Detail_4_3_4'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_4_4_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_4_4_1'),
                    getIntel('Service_Lines_Detail_4_4_2'),
                    getIntel('Service_Lines_Detail_4_4_3'),
                    getIntel('Service_Lines_Detail_4_4_4'),
                  ]
                }
              ]
            },
            {
              title: getIntel('Service_Lines_Detail_Type_5'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_5_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_1_1'),
                    getIntel('Service_Lines_Detail_5_1_2'),
                    getIntel('Service_Lines_Detail_5_1_3'),
                    getIntel('Service_Lines_Detail_5_1_4'),
                    getIntel('Service_Lines_Detail_5_1_5'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_2_1'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_3_1'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_4_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_4_1'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_5_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_5_1'),
                    getIntel('Service_Lines_Detail_5_5_2'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_6_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_6_1'),
                    getIntel('Service_Lines_Detail_5_6_2'),
                    getIntel('Service_Lines_Detail_5_6_3'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_7_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_7_1'),
                    getIntel('Service_Lines_Detail_5_7_2'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_8_Title'),
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_9_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_9_1'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_10_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_10_1'),
                    getIntel('Service_Lines_Detail_5_10_2'),
                    getIntel('Service_Lines_Detail_5_10_3'),
                    getIntel('Service_Lines_Detail_5_10_4'),
                    getIntel('Service_Lines_Detail_5_10_5'),
                    getIntel('Service_Lines_Detail_5_10_6'),
                    getIntel('Service_Lines_Detail_5_10_7'),
                    getIntel('Service_Lines_Detail_5_10_8'),
                    getIntel('Service_Lines_Detail_5_10_9'),
                    getIntel('Service_Lines_Detail_5_10_10'),
                    getIntel('Service_Lines_Detail_5_10_11'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_11_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_11_1'),
                    getIntel('Service_Lines_Detail_5_11_2'),
                    getIntel('Service_Lines_Detail_5_11_3'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_12_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_12_1'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_13_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_13_1'),
                    getIntel('Service_Lines_Detail_5_13_2'),
                    getIntel('Service_Lines_Detail_5_13_3'),
                    getIntel('Service_Lines_Detail_5_13_4'),
                    getIntel('Service_Lines_Detail_5_13_5'),
                    getIntel('Service_Lines_Detail_5_13_6'),
                    getIntel('Service_Lines_Detail_5_13_7'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_5_14_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_5_14_1'),
                    getIntel('Service_Lines_Detail_5_14_2'),
                    getIntel('Service_Lines_Detail_5_14_3'),
                    getIntel('Service_Lines_Detail_5_14_4'),
                  ]
                }
              ]
            },
            {
              title: getIntel('Service_Lines_Detail_Type_6'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_6_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_6_1_1'),
                    getIntel('Service_Lines_Detail_6_1_2'),
                    getIntel('Service_Lines_Detail_6_1_3'),
                    getIntel('Service_Lines_Detail_6_1_4'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_6_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_6_2_1'),
                    getIntel('Service_Lines_Detail_6_2_2'),
                    getIntel('Service_Lines_Detail_6_2_3'),
                    getIntel('Service_Lines_Detail_6_2_4'),
                    getIntel('Service_Lines_Detail_6_2_5'),
                    getIntel('Service_Lines_Detail_6_2_6'),
                    getIntel('Service_Lines_Detail_6_2_7'),
                    getIntel('Service_Lines_Detail_6_2_8'),
                    getIntel('Service_Lines_Detail_6_2_9'),
                    getIntel('Service_Lines_Detail_6_2_10'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_6_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_6_3_1'),
                    getIntel('Service_Lines_Detail_6_3_2'),
                    getIntel('Service_Lines_Detail_6_3_3'),
                    getIntel('Service_Lines_Detail_6_3_4'),
                    getIntel('Service_Lines_Detail_6_3_5'),
                    getIntel('Service_Lines_Detail_6_3_6'),
                    getIntel('Service_Lines_Detail_6_3_7'),
                    getIntel('Service_Lines_Detail_6_3_8'),
                    getIntel('Service_Lines_Detail_6_3_9'),
                    getIntel('Service_Lines_Detail_6_3_10'),
                    getIntel('Service_Lines_Detail_6_3_11'),
                    getIntel('Service_Lines_Detail_6_3_12'),
                    getIntel('Service_Lines_Detail_6_3_13'),
                    getIntel('Service_Lines_Detail_6_3_14'),
                    getIntel('Service_Lines_Detail_6_3_15'),
                  ]
                },
              ]
            },
            {
              title: getIntel('Service_Lines_Detail_Type_7'),
              content: [
                {
                  subTitle: getIntel('Service_Lines_Detail_7_1_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_7_1_1'),
                    getIntel('Service_Lines_Detail_7_1_2'),
                    getIntel('Service_Lines_Detail_7_1_3'),
                    getIntel('Service_Lines_Detail_7_1_4'),
                    getIntel('Service_Lines_Detail_7_1_5'),
                    getIntel('Service_Lines_Detail_7_1_6'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_7_2_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_7_2_1'),
                    getIntel('Service_Lines_Detail_7_2_2'),
                    getIntel('Service_Lines_Detail_7_2_3'),
                    getIntel('Service_Lines_Detail_7_2_4'),
                    getIntel('Service_Lines_Detail_7_2_5'),
                    getIntel('Service_Lines_Detail_7_2_6'),
                    getIntel('Service_Lines_Detail_7_2_7'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_7_3_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_7_3_1'),
                    getIntel('Service_Lines_Detail_7_3_2'),
                    getIntel('Service_Lines_Detail_7_3_3'),
                    getIntel('Service_Lines_Detail_7_3_4'),
                    getIntel('Service_Lines_Detail_7_3_5'),
                    getIntel('Service_Lines_Detail_7_3_6'),
                    getIntel('Service_Lines_Detail_7_3_7'),
                    getIntel('Service_Lines_Detail_7_3_8'),
                    getIntel('Service_Lines_Detail_7_3_9'),
                    getIntel('Service_Lines_Detail_7_3_10'),
                    getIntel('Service_Lines_Detail_7_3_11'),
                    getIntel('Service_Lines_Detail_7_3_12'),
                    getIntel('Service_Lines_Detail_7_3_13'),
                  ]
                },
                {
                  subTitle: getIntel('Service_Lines_Detail_7_4_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_7_4_1'),
                    getIntel('Service_Lines_Detail_7_4_2'),
                    getIntel('Service_Lines_Detail_7_4_3'),
                    getIntel('Service_Lines_Detail_7_4_4'),
                    getIntel('Service_Lines_Detail_7_4_5'),
                    getIntel('Service_Lines_Detail_7_4_6'),
                    getIntel('Service_Lines_Detail_7_4_7'),
                    getIntel('Service_Lines_Detail_7_4_8'),
                    getIntel('Service_Lines_Detail_7_4_9'),
                    getIntel('Service_Lines_Detail_7_4_10'),
                    getIntel('Service_Lines_Detail_7_4_11'),
                    getIntel('Service_Lines_Detail_7_4_12'),
                    getIntel('Service_Lines_Detail_7_4_13'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_7_5_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_7_5_1'),
                    getIntel('Service_Lines_Detail_7_5_2'),
                  ]
                }, {
                  subTitle: getIntel('Service_Lines_Detail_7_6_Title'),
                  list: [
                    getIntel('Service_Lines_Detail_7_6_1'),
                    getIntel('Service_Lines_Detail_7_6_2'),
                    getIntel('Service_Lines_Detail_7_6_3'),
                    getIntel('Service_Lines_Detail_7_6_4'),
                    getIntel('Service_Lines_Detail_7_6_5'),
                    getIntel('Service_Lines_Detail_7_6_6'),
                    getIntel('Service_Lines_Detail_7_6_7'),
                    getIntel('Service_Lines_Detail_7_6_8'),
                    getIntel('Service_Lines_Detail_7_6_9'),
                  ]
                },
              ]
            },
          ].map((item, i) => <TabPane tab={renderTab(item.title, i)} key={'Service_Lines-' + (i + 1)}>
            <ul className={styles['tab-content']}>
              {
                item.content && item.content.map((sub, sidx) => <Fragment key={sidx}>
                  <h4>{sub.subTitle}</h4>
                  {
                    sub.list ?
                      sub.list.map((l, i) => <li key={'Service_Lines_Detail-' + i}>{l}</li>)
                      :
                      null
                  }
                </Fragment>)
              }
            </ul>
          </TabPane>)
        }
      </Tabs>
    </div>
  </section>)
}
