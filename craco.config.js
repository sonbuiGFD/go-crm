// antd css vars https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'code-family': 'Poppins',
              'font-size-base': '16px',
              'font-size-sm': '14px',
              'primary-color': '#5669ff',
              'success-color': '#28c76f',
              'warning-color': '#f3a22c',
              'error-color': '#f65747',
              'text-color': '#373737',
              'body-background': '#f0f3f8',
              black: '#222222',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
