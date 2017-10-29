exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['my-component', 'collapsible-panel'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
