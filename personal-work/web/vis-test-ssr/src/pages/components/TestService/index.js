import {getIntel} from '../../../utils/helper';
import {getLocale} from 'umi-plugin-react/locale';
import styles from './index.less';

const NumverMap = {0: '①', 1: '②', 2: '③'};

export default function TestService({style, className}) {

  const isEnglish = getLocale() !== 'zh-CN';
  const isGeneralEnglish = getLocale() === 'en-US';

  return (<section
    data-aos="fade-up"
    className={[styles['test-servicce'], className, isEnglish ? styles['en-test-service'] : null, isGeneralEnglish ? styles['g-en-test-service'] : null].join(' ')}
    style={style}>
    <a id="test-service" className="general-anchor" />
    <div>
      <div className="content-container">
        <h2 data-aos="slide-up">{getIntel('Product_Inspection_Services')}</h2>
        <p data-aos="slide-up" className={styles['detail']}>{getIntel('Product_Inspection_Services_Detail')}</p>
        <ul data-aos="slide-up">
          {
            [
              {
                key: 'Product_Inspection_Services_1',
                className: 'Product_Inspection_Services_1',
                title: getIntel('Product_Inspection_Services_1'),
                progress: [getIntel('Product_Inspection_Services_1_')],
                content: [
                  getIntel('Product_Inspection_Services_1_1'),
                  getIntel('Product_Inspection_Services_1_2'),
                  isGeneralEnglish ? null : getIntel('Product_Inspection_Services_1_3'),
                ]
              },
              {
                key: 'Product_Inspection_Services_2',
                className: 'Product_Inspection_Services_2',
                title: getIntel('Product_Inspection_Services_2'),
                progress: [getIntel('Product_Inspection_Services_2_')],
                content: [
                  getIntel('Product_Inspection_Services_2_1'),
                  getIntel('Product_Inspection_Services_2_2'),
                  getIntel('Product_Inspection_Services_2_3'),
                ]
              },
              {
                key: 'Product_Inspection_Services_3',
                className: 'Product_Inspection_Services_3',
                title: getIntel('Product_Inspection_Services_3'),
                progress: [getIntel('Product_Inspection_Services_3_'), getIntel('Product_Inspection_Services_3__')],
                content: [
                  getIntel('Product_Inspection_Services_3_1'),
                  getIntel('Product_Inspection_Services_3_2'),
                  isGeneralEnglish ? null : getIntel('Product_Inspection_Services_3_3'),
                ]
              },
              {
                key: 'Product_Inspection_Services_4',
                className: 'Product_Inspection_Services_4',
                title: getIntel('Product_Inspection_Services_4'),
                progress: [getIntel('Product_Inspection_Services_4_')],
                content: [
                  getIntel('Product_Inspection_Services_4_1'),
                  getIntel('Product_Inspection_Services_4_2'),
                  getIntel('Product_Inspection_Services_4_3'),
                ]
              },
              {
                key: 'Product_Inspection_Services_5',
                className: 'Product_Inspection_Services_5',
                title: getIntel('Product_Inspection_Services_5'),
                progress: [getIntel('Product_Inspection_Services_5_')],
                content: [
                  getIntel('Product_Inspection_Services_5_1'),
                  getIntel('Product_Inspection_Services_5_2'),
                  // getIntel('Product_Inspection_Services_5_3'),
                ]
              },
            ].map(it => <li key={it.key}
              // data-aos="slide-left"
              className={styles[it.className]}>
              <span />
              <h3>{it.title}</h3>
              {
                it.progress.map((p, i) =>
                  <p key={i + 'progress'} className={styles['progress']}>{p}</p>)
              }
              <div style={{height: 6}} />
              {
                it.content.map((c, i) => c ?
                  (<p key={i + 'service-content'} className={styles['detail-list']}>
                    <label>{NumverMap[i]}</label>
                    <span>{c}</span>
                  </p>)
                  :
                  null
                )
              }
            </li>)
          }
        </ul>
      </div>
    </div>
  </section>)
}
