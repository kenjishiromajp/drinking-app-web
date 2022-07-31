export default {
  webpack: {
    configure: (webpackConfig: any) => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            fs: false,
          },
        },
      };
    },
  },
};
