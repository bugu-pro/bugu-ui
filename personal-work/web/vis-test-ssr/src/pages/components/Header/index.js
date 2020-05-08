import React, {useState} from 'react'
import {Menu, Affix, Dropdown} from 'antd';
import {getIntel} from '../../../utils/helper';
import {getLocale, setLocale} from 'umi-plugin-react/locale';
import {CaretDownOutlined} from '@ant-design/icons';
import styles from './index.less';

const MenuItem = Menu.Item;
const {SubMenu} = Menu;

const languageMap = {'zh-CN': '繁体中文', 'en-US': 'English', 'vi-VN': 'Vietnamese'};

const scrollToTop = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  if(top !== 0) {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
}

export default function Header() {
  const [headerClass, setHeaderClass] = useState('header-static');
  const languageMenu = (<Menu selectedKeys={[getLocale()]}>
    {
      [
        ['English', 'en-US'],
        ['繁体中文', 'zh-CN'],
        ['Vietnamese', 'vi-VN'],
      ].map(it => <Menu.Item key={it[1]} onClick={() => setLocale(it[1])}>
        <span>{it[0]}</span>
      </Menu.Item>)
    }
  </Menu>);

  const isEnglish = getLocale() !== 'zh-CN';
  const isVietnamese = getLocale() === 'vi-VN';

  return (<Affix offsetTop={0} className={styles['header-wrapper']}
    onChange={(moved) => {
      if (moved) {
        setHeaderClass('header-moved')
      } else {
        setHeaderClass('header-static')
      }
    }}>
    <header className={[styles['header'], styles[headerClass], (isEnglish ? styles['english-header'] : null), isVietnamese ? styles['vietnamese-header'] : null].join(' ')}>
      <div className="content-container">
        <span onClick={scrollToTop}>{getIntel('COMPANY_NAME')}</span>
        <div>
          <Menu mode="horizontal">
            {
              [
                {
                  key: 'Our_Services',
                  title: (<a href="#test-service" className="submenu-title-wrapper">{getIntel('Our_Services')}</a>),
                  childrenItem: [
                    {
                      label: getIntel('Product_Inspection_Service'),
                      key: 'Product_Inspection_Service',
                      anchor: 'test-service'
                    },
                    {
                      label: getIntel('Certification_Service'),
                      key: 'Certification_Service',
                      anchor: 'certification-service'
                    },
                    {
                      label: getIntel('Supplier_Assessment_Service'),
                      key: 'Supplier_Assessment_Service',
                      anchor: 'supplier-Assessment'
                    },
                    {
                      label: getIntel('Factory_Audit_Assist_Service'),
                      key: 'Factory_Audit_Assist_Service',
                      anchor: 'factory-assist'
                    },
                  ]
                },
                {
                  key: 'Service_Lines',
                  title: (<a href="#Service_Lines-1" className="submenu-title-wrapper">{getIntel('Service_Lines')}</a>),
                  childrenItem: [
                    {
                      label: getIntel('Service_Lines_1'),
                      key: 'Service_Lines_1',
                      anchor: 'Service_Lines-1'
                    },
                    {
                      label: getIntel('Service_Lines_2'),
                      key: 'Service_Lines_2',
                      anchor: 'Service_Lines-2'
                    },
                    {
                      label: getIntel('Service_Lines_3'),
                      key: 'Service_Lines_3',
                      anchor: 'Service_Lines-3'
                    },
                    {
                      label: getIntel('Service_Lines_4'),
                      key: 'Service_Lines_4',
                      anchor: 'Service_Lines-4'
                    },
                    {
                      label: getIntel('Service_Lines_5'),
                      key: 'Service_Lines_5',
                      anchor: 'Service_Lines-5'
                    },
                    {
                      label: getIntel('Service_Lines_6'),
                      key: 'Service_Lines_6',
                      anchor: 'Service_Lines-6'
                    },
                    {
                      label: getIntel('Service_Lines_7'),
                      key: 'Service_Lines_7',
                      anchor: 'Service_Lines-7'
                    },
                  ]
                },
                {
                  key: 'AboutUs',
                  title: (<a href="#AboutUs_1" className="submenu-AboutUs-AboutUs">{getIntel('AboutUs')}</a>),
                  childrenItem: [
                    {
                      label: getIntel('AboutUs_1'),
                      key: 'AboutUs_1',
                      anchor: 'AboutUs_1'
                    },
                    {
                      label: getIntel('AboutUs_2'),
                      key: 'AboutUs_2',
                      anchor: 'AboutUs_2'
                    },
                  ]
                },
                {
                  key: 'ContactUs',
                  single: true,
                  anchor: 'contact-us',
                  title: (<span className="submenu-title-wrapper">{getIntel('ContactUs')}</span>),
                },
              ].map(sub => sub.single ? <MenuItem key={sub.key}><a href={'#'+sub.anchor}>{sub.title}</a></MenuItem> : (<SubMenu
                key={sub.key}
                title={sub.title}
              >
                {
                  sub.childrenItem.map(item => (
                    <Menu.Item key={item.key}><a href={'#' + item.anchor}>{item.label}</a></Menu.Item>
                  ))
                }
              </SubMenu>))
            }
          </Menu>
          <div className={styles['right-menu-box']}>
            <Dropdown overlay={languageMenu}>
              <div className={styles['language-selector']}>
                <label>{languageMap[getLocale()]}</label>
                <CaretDownOutlined />
              </div>
            </Dropdown>
            <a href="http://120.76.173.184" target="_blank">{getIntel('Login')}</a>
          </div>
        </div>
      </div>
    </header>
  </Affix>)
}
