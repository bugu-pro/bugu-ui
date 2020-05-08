import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function Certification({style, className}) {

  const isEnglish = getLocale() !== 'zh-CN';
  const isGeneralEnglish = getLocale() === 'en-US';

  return (<section className={[styles['certification-servicce'], className, isEnglish ? styles['certification-servicce-en'] : null, isGeneralEnglish ? styles['certification-service-general'] : null].join(' ')} style={style}>
    <a id="certification-service" className="general-anchor"/>
    <div className="content-container">
      <div data-aos="zoom-in-up"/>
      <div data-aos="zoom-in-up">
        <h2>{getIntel('Certification_Services')}</h2>
        <p className={styles['detail']}>{getIntel('Certification_Services_Intro')}</p>
        <ul>
          {
            [
              getIntel('Certification_Services_1'),
              getIntel('Certification_Services_2'),
              getIntel('Certification_Services_3'),
              getIntel('Certification_Services_4'),
            ].map((it, i) => <li key={'Certification' + i}>
              {it}
            </li>)
          }
        </ul>
      </div>
    </div>
  </section>)
}
