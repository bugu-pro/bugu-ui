import React from 'react';
import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function ISOCertification({className, style}) {

  const isEnglish = getLocale() !== 'zh-CN';

  return (<section style={style} className={[styles['ISO-Certification'], className, isEnglish ? styles['ISO-Certification-en'] : null].join(' ')}>
    <div className="content-container">
      <h2>{getIntel('ISO_Certification')}</h2>
      <p>{getIntel('ISO_Certification_Detail')}</p>
      <ul>
        {
          [
            [
              getIntel('ISO_Certification_List_1'),
              getIntel('ISO_Certification_List_1_1'),
              getIntel('ISO_Certification_List_1_2'),
            ],
            [
              getIntel('ISO_Certification_List_2'),
              getIntel('ISO_Certification_List_2_1'),
              getIntel('ISO_Certification_List_2_2'),
            ],
            [
              getIntel('ISO_Certification_List_3'),
              getIntel('ISO_Certification_List_3_1'),
              getIntel('ISO_Certification_List_3_2'),
            ],
            [
              getIntel('ISO_Certification_List_4'),
              getIntel('ISO_Certification_List_4_1'),
              getIntel('ISO_Certification_List_4_2'),
            ],
            [
              getIntel('ISO_Certification_List_5'),
              getIntel('ISO_Certification_List_5_1'),
              getIntel('ISO_Certification_List_5_2'),
            ],
            [
              getIntel('ISO_Certification_List_6'),
              getIntel('ISO_Certification_List_6_1'),
              getIntel('ISO_Certification_List_6_2'),
            ],
            [
              getIntel('ISO_Certification_List_7'),
              getIntel('ISO_Certification_List_7_1'),
              getIntel('ISO_Certification_List_7_2'),
            ],
            [
              getIntel('ISO_Certification_List_8'),
            ],
          ]
            .map((it, i) => <li key={it}
              data-aos={i < 4 ? "flip-right" : 'flip-left'}
              className={styles['ISO_Certification_List-' + (i + 1)]}>
              <div />
              <div className={styles['mask']} />
              <div>
                <h5>{it[0]}</h5>
                <summary>{it[1]}</summary>
                <p>{it[2]}</p>
              </div>
            </li>)
        }
      </ul>
    </div>
  </section>);
}
