import React from 'react';
import {Row, Col} from 'antd';
import {getLocale} from 'umi-plugin-react/locale';
import {getIntel} from '../../../utils/helper';
import styles from './index.less';

export default function Footer() {

  const isEnglish = getLocale() !== 'zh-CN';

  return (<footer className={[styles['footer'], isEnglish ? styles['footer-en'] : null].join(' ')}>
    <div className="content-container" data-aos="slide-up">
      <Row className={styles['footer-content']}>
        {
          [
            {
              title: getIntel('Our_Services_Detail'),
              list: [
                {
                  txt: getIntel('Our_Services_List_1'),
                  anchor: 'test-service'
                },
                {
                  txt: getIntel('Our_Services_List_2'),
                  anchor: 'certification-service'
                },
                {
                  txt: getIntel('Our_Services_List_3'),
                  anchor: 'supplier-Assessment'
                },
                {
                  txt: getIntel('Our_Services_List_4'),
                  anchor: 'factory-assist'
                },
              ]
            },
            {
              title: getIntel('Service_Lines_Menu'),
              list: [
                {
                  txt: getIntel('Service_Lines_Menu_1'),
                  anchor: 'Service_Lines-1'
                },
                {
                  txt: getIntel('Service_Lines_Menu_2'),
                  anchor: 'Service_Lines-2'
                },
                {
                  txt: getIntel('Service_Lines_Menu_3'),
                  anchor: 'Service_Lines-3'
                },
                {
                  txt: getIntel('Service_Lines_Menu_4'),
                  anchor: 'Service_Lines-4'
                },
                {
                  txt: getIntel('Service_Lines_Menu_5'),
                  anchor: 'Service_Lines-5'
                },
                {
                  txt: getIntel('Service_Lines_Menu_6'),
                  anchor: 'Service_Lines-6'
                },
                {
                  txt: getIntel('Service_Lines_Menu_7'),
                  anchor: 'Service_Lines-7'
                },
              ]
            },
            {
              title: getIntel('About_US_Menu'),
              list: [
                {
                  txt: getIntel('About_US_Menu_1'),
                  anchor: 'AboutUs_1'
                },
                {
                  txt: getIntel('About_US_Menu_2'),
                  anchor: 'AboutUs_2'
                },
              ]
            },
            {
              title: getIntel('Contact_Us_Menu'),
              list: [
                {
                  txt: 'Info@vis-gov.com'
                },
                {
                  txt: '+ 84 024 3207 9388'
                },
                {
                  a: 'Facebook',
                  href: 'https://www.facebook.com/visgov2020/?modal=admin_todo_tour'
                },
                {
                  a: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/vietnam-inspection-and-testing-services-company-limited/?feedView=videos&viewAsMember=true'
                },
                {
                  a: 'Instagram',
                  href: 'https://www.instagram.com/visvietnam/?hl=en'
                },
                {
                  a: 'Twitter',
                  href: 'https://twitter.com/VisViet'
                },
              ]
            },
          ].map((it, i) => <Col key={'footer' + i} span={6}>
            <h4>{it.title}</h4>
            <ul>
              {
                it.list && it.list.map((sub, idx) => <li key={'footer-' + idx}>
                  {
                    sub.txt ?
                      sub.anchor ?
                        <a href={'#' + sub.anchor}>{sub.txt}</a>
                        :
                        <span>{sub.txt}</span>
                      :
                      sub.a ?
                        <a href={sub.href || '#'} target="_blank" className={styles['contacts']}>{sub.a}</a>
                        :
                        null
                  }
                </li>)
              }
            </ul>
          </Col>)
        }
      </Row>
    </div>
    {/* <div className={styles['record-info']}>
      <p>© 2020 XXX公司 XXX公司 隐私政策 京ICP证080268号 京ICP备10005211号</p>
    </div> */}
  </footer>)
}
