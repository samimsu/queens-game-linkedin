const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Configure assetExts to include additional file types
const assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');
const sourceExts = [...defaultConfig.resolver.sourceExts, 'svg', 'json', 'ts', 'tsx', 'jsx'];

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts,
    sourceExts,
    extraNodeModules: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'assets': path.resolve(__dirname, 'src/assets'),
    },
    resolverMainFields: ['browser', 'main', 'react-native'],
  },
  watchFolders: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules')
  ],
  server: {
    port: 8081,
  },
};
