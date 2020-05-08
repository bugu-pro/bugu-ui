import React, {Component} from 'react';
import {Carousel, Menu} from 'antd';
import AOS from 'aos';
import {getLocale} from 'umi-plugin-react/locale';
import Page from '../components/Page';
import {getIntel} from '../utils/helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Advantage from './components/Advantage';
import TestService from './components/TestService';
import ContactInfo from './components/ContactInfo';
import FactoryAssist from './components/FactoryAssist';
import Certification from './components/Certification';
import Introduction from './components/Introduction';
import ServiceLines from './components/ServiceLines';
import ISOCertification from './components/ISOCertification';
import SupplierAssessment from './components/SupplierAssessment';
import SocialResponsibility from './components/SocialResponsibility';
import 'aos/dist/aos.css';
import styles from './index.less';


class Home extends Component {

  componentDidMount() {
    AOS.init({
      offset: 100,
      duration: 600,
      once: true
    });
  }

  render() {
    return (<Page title={getIntel('COMPANY_NAME')} className={styles['home-page']}>
      <Header />
      <AdAndMenu />
      <TestService className={styles['test-service']} />
      <Certification />
      <SocialResponsibility />
      <ISOCertification />
      <SupplierAssessment />
      <FactoryAssist />
      <ServiceLines />
      <Introduction />
      <Advantage />
      <Footer />
    </Page>)
  }
}

export default Home;


function AdAndMenu() {

  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';
  const isGeneralEnglish = getLocale() === 'en-US';

  return (<section className={[styles['ad-menu'], isEnglish ? styles['en-ad-menu'] : null, isVietnamese ? styles['vi-ad-menu'] : null].join(' ')}>
    <div>
      <div>
        <ContactInfo className={styles['contact-info']} />
      </div>
      <div className={styles['company-basic']}>
        <div>
          <h1 style={{marginBottom: isGeneralEnglish ? 0 : 16}}>{getIntel('Company_Title')}</h1>
          {
            isGeneralEnglish ? <h1>{getIntel('Company_Title_')}</h1> : null
          }
          <p>{getIntel('Company_Title_1')}</p>
          <p>{getIntel('Company_Target')}</p>
        </div>
      </div>
      <div>
        <Carousel autoplay>
          {
            [
              require('../assets/images/banner_01.jpg'),
              require('../assets/images/banner_02.jpg'),
              require('../assets/images/banner_03.jpg'),
            ].map((url, i) =>
              <div key={`banner-${i}`}>
                <div style={{background: `url(${url}) no-repeat center/cover`}} />
              </div>)
          }
        </Carousel>
      </div>
    </div>
  </section>);
}
