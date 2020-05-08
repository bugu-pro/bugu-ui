import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function SocialResponsibility({style, className}) {

  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';

  return (<section
  className={[styles['Social-Responsibility'], className, isEnglish ? styles['Social-Responsibility-en'] : null, isVietnamese ? styles['Social-Responsibility-vi'] : null].join(' ')} style={style}>
    <div className="content-container">
      <div>
        <div className={styles['detail']}>
          <h2 data-aos="fade-up">{getIntel('Social_Responsibility_Assessment')}</h2>
          <p data-aos="fade-up">{getIntel('Social_Responsibility_Assessment_Detail_1')}</p>
          <p data-aos="fade-up">{getIntel('Social_Responsibility_Assessment_Detail_2')}</p>
        </div>
        <ul data-aos="fade-up">
          {
            [
              getIntel('S_R_A_List_1'),
              getIntel('S_R_A_List_7'),
              getIntel('S_R_A_List_8'),
              getIntel('S_R_A_List_3'),
              getIntel('S_R_A_List_9'),
              getIntel('S_R_A_List_4'),
              getIntel('S_R_A_List_10'),
              getIntel('S_R_A_List_5'),
              getIntel('S_R_A_List_11'),
              getIntel('S_R_A_List_6'),
              getIntel('S_R_A_List_12'),
            ].map((l, i) => <li key={'Social_Responsibility' + i}>{l}</li>)
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            [
              getIntel('S_R_A_Type_1'),
              getIntel('S_R_A_Type_2'),
              getIntel('S_R_A_Type_3'),
              getIntel('S_R_A_Type_4'),
            ].map((l, i) => <li data-aos="zoom-in-up" key={'Social_Responsibility_' + i} className={styles['SocialResponsibility-' + (i + 1)]}>{l}</li>)
          }
        </ul>
      </div>
    </div>
  </section>)
}
