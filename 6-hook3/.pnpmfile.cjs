
//// the hook ////
function readPackage(pkg, context) {
  // Override the manifest of foo@1.x after downloading it from the registry
  if (pkg.name.startsWith('testing-hook')) {
    delete pkg.dependencies['date-fns']
    context.log('delete date-fns in dependencies of testing-hook3')
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
};
