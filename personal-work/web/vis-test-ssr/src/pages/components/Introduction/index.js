import React from 'react';
import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function Introduction({className, style}) {

  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';

  return (<section style={style}
    data-aos="slide-up"
    className={[styles['Introduction'], className, isEnglish ? styles['introduction-en'] : null, isVietnamese ? styles['introduction-vi'] : null].join(' ')}>
    <a id="AboutUs_1" className="general-anchor"/>
    <div className="content-container">
      <h2>{getIntel('About_US_Detail')}</h2>
      <p>{getIntel('About_US_Detail_Detail')}</p>
      <ul>
        {
          [
            [
              getIntel('About_US_Detail_Type_1'),
              getIntel('About_US_Detail_Type_1_Detail'),
            ],
            [
              getIntel('About_US_Detail_Type_2'),
              getIntel('About_US_Detail_Type_2_Detail'),
            ],
            [
              getIntel('About_US_Detail_Type_3'),
              getIntel('About_US_Detail_Type_3_Detail'),
            ],
          ]
            .map((it, i) => <li key={it} className={styles['Introduction_List-' + (i + 1)]}>
              <h5><span>{it[0]}</span></h5>
              <div>
                <summary>{it[1]}</summary>
              </div>
            </li>)
        }
      </ul>
    </div>
  </section>);
}
