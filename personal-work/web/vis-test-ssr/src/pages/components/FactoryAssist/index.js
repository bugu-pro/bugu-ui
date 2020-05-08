import {Fragment} from 'react';
import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function FactoryAssist({style, className}) {

  const isEnglish = getLocale() !== 'zh-CN';

  return (<section className={[styles['Factory-Assist'], className, isEnglish ? styles['Factory-Assist-en'] : null].join(' ')}
    data-aos="slide-up"
    style={style}>
    <a id="factory-assist" className="general-anchor" />
    <div className="content-container">
      <h2>{getIntel('Factory_Audit_Assist_Service_')}</h2>
      {/* {
        isEnglish ? */}
          <p>{getIntel('Factory_Audit_Assist_Service_Detail')}</p>
          {/* :
          <Fragment>
            <p>{getIntel('Factory_Audit_Assist_Service_Detail_1')}</p>
            <p>{getIntel('Factory_Audit_Assist_Service_Detail_2')}</p>
          </Fragment>
      } */}
      <div className={styles['progress']} />
      <div>
        {
          [
            getIntel('Factory_Audit_Assist_Service_Step_1'),
            getIntel('Factory_Audit_Assist_Service_Step_2'),
            getIntel('Factory_Audit_Assist_Service_Step_3'),
            getIntel('Factory_Audit_Assist_Service_Step_4'),
            getIntel('Factory_Audit_Assist_Service_Step_5'),
            getIntel('Factory_Audit_Assist_Service_Step_6'),
            getIntel('Factory_Audit_Assist_Service_Step_7'),
            getIntel('Factory_Audit_Assist_Service_Step_8'),
          ].map((it, i) => <span key={'Factory_Audit' + i}>{it}</span>)
        }
      </div>
    </div>
  </section>)
}
