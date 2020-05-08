import React from 'react';
import {Popover} from 'antd';
import {getIntel} from '../../../utils/helper';
import Wechat from '@/assets/images/qr_code.jpeg';
import styles from './index.less';

export default function ContactInfo({className, style}) {
  return (<section style={style}
    data-aos="fade-up"
    className={[styles['contact-info'], className, 'content-container'].join(' ')}>
    <a id="contact-us" className="general-anchor" />
    <div>
      <h4>{getIntel('Work_Adress')}</h4>
      <div className={styles['adress-list']}>{
        [
          [getIntel('Work_Adress_1'), getIntel('Work_Adress_1_1')],
          [getIntel('Work_Adress_2'), getIntel('Work_Adress_2_1')],
        ].map((it, i) => <div key={'adress' + i}>
          <span />
          <div>
            <h5>{it[0]}</h5>
            <p>{it[1]}</p>
          </div>
        </div>)
      }</div>
    </div>
    <div className={styles['phone-detail']}>
      <h4>{getIntel('Contact_Phone')}</h4>
      <p>Phone</p>
      <p>+ 84 024 3207 9388</p>
      <ul>
        {
          [
            {name: 'Wechat', src: Wechat},
            {name: 'Facebook', url: 'https://www.facebook.com/visgov2020/?modal=admin_todo_tour'},
            {name: 'LinkedIn', url: 'https://www.linkedin.com/company/vietnam-inspection-and-testing-services-company-limited/?feedView=videos&viewAsMember=true'},
            {name: 'Instagram', url: 'https://www.instagram.com/visvietnam/?hl=en'},
            {name: 'Twitter', url: 'https://twitter.com/VisViet'},
          ].map(it => it.src ?
            <Popover key={it.name} content={<span className={styles['pop-img']} style={{backgroundImage: `url(${it.src})`}} />}>
              <li key={it.name} className={styles[it.name]}>
                <span/>
              </li>
            </Popover>
            :
            <li key={it.name} className={styles[it.name]} >
              <span/>
              <a href={it.url || '#'} target="_blank"/>
            </li>
          )}
      </ul>
    </div>
    <div className={styles['email-detail']}>
      <h4>{getIntel('Contact_Email')}</h4>
      <p>Email</p>
      <h5>Info@vis-gov.com</h5>
      <div>
        <p>{getIntel('Contact_Commit')}</p>
      </div>
    </div>
  </section>);
}
