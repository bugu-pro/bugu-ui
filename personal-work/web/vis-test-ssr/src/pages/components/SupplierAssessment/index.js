import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function SupplierAssessment({style, className}) {

  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';

  return (<section className={[styles['Supplier-Assessment'], className, isEnglish ? styles['Supplier-Assessment-en'] : null, isVietnamese ? styles['Supplier-Assessment-vi'] : null].join(' ')} style={style}>
    <a id="supplier-Assessment" className="general-anchor" />
    <div className="content-container">
      <h2 data-aos="fade-up">{getIntel('Supplier_Assessment_Service_')}</h2>
      <div className={styles['detail']}>
        <p data-aos="fade-up-up">{getIntel('Supplier_Assessment_Service_Detail')}</p>
        <ul data-aos="fade-up-up">
          {
            [
              getIntel('Supplier_Assessment_Service_Type_1'),
              getIntel('Supplier_Assessment_Service_Type_2'),
              getIntel('Supplier_Assessment_Service_Type_3'),
              getIntel('Supplier_Assessment_Service_Type_4'),
            ].map((l, i) => <li key={'Supplier-Assessment' + i}>{l}</li>)
          }
        </ul>
      </div>
      <ul data-aos="slide-up">
        {
          [
            {
              title: getIntel('Supplier_Assessment_Service_List_1_Title'),
              content: getIntel('Supplier_Assessment_Service_List_1_Detail')
            },
            {
              title: getIntel('Supplier_Assessment_Service_List_2_Title'),
              content: getIntel('Supplier_Assessment_Service_List_2_Detail')
            },
            {
              title: getIntel('Supplier_Assessment_Service_List_3_Title'),
              content: getIntel('Supplier_Assessment_Service_List_3_Detail')
            },
            {
              title: getIntel('Supplier_Assessment_Service_List_4_Title'),
              content: getIntel('Supplier_Assessment_Service_List_4_Detail')
            },
            {
              title: getIntel('Supplier_Assessment_Service_List_5_Title'),
              content: getIntel('Supplier_Assessment_Service_List_5_Detail')
            },
          ].map((l, i) => <li key={'Supplier_Assessment-' + i} className={styles['Supplier-Assessment-' + (i + 1)]}>
            <div className={styles['Supplier-Assessment-icon-' + (i + 1)]} />
            <h4>{l.title}</h4>
            <p>{l.content}</p>
          </li>)
        }
      </ul>
    </div>
  </section>)
}
