import React from 'react';
import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function Advantage({className, style}) {

  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';

  return (<section style={style}
    className={[styles['Advantage'], className, isEnglish ? styles['Advantage-en'] : null, isVietnamese ? styles['Advantage-vi'] : null].join(' ')}>
    <a id="AboutUs_2" className="general-anchor" />
    <div className="content-container">
      <h2 data-aos="slide-up">{getIntel('Advantage')}</h2>
      <p data-aos="slide-up">{getIntel('Advantage_Title')}</p>
      <div className={styles['content-grid']}>
        <div data-aos="slide-up">
          <div>
            <p>{getIntel('Advantage_Detail_1')}</p>
          </div>
        </div>
        <div data-aos="slide-up">
          <div>
            <p>{getIntel('Advantage_Detail_2')}</p>
          </div>
          <div />
        </div>
        <div data-aos="slide-up">
          <p>{getIntel('Advantage_Detail_3')}</p>
        </div>
      </div>
    </div>
  </section>);
}
