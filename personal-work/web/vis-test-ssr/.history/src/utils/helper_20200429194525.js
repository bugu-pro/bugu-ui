import { formatMessage } from 'umi-plugin-locale';

/**
 * 国际化text组件
 * @param {*}
 */
export function getIntel(...args) {
  let id = null, options = {};
  if(args.length) {
    id = args[0];
    options = args[1] || {};
  }
  return formatMessage({id},{...options});
}
