export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};


export const locale = {
  default: 'en-US', //默认语言 zh-CN，如果 baseSeparator 设置为 _，则默认为 zh_CN
};
