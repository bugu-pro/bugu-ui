import { IConfig } from 'umi-types';

const DocumentTitle = require('react-document-title');
// ref: https://umijs.org/config/
const config: IConfig =  {
  ssr: true,
  treeShaking: true,
  publicPath: '/dist/',
  hash: process.env.NODE_ENV === 'production',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  // chainWebpack(config, { webpack }) {
  //   if (process.env.NODE_ENV === 'development') {
  //     config.output.publicPath('http://localhost:8000/');
  //   }
  // },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'vis-test',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
