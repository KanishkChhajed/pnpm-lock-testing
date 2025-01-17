
//// the hook ////
function readPackage(pkg, context) {
  // Override the manifest of foo@1.x after downloading it from the registry
  if (pkg.name.startsWith('testing-mono2')) {
    pkg.dependencies = {
      ...pkg.dependencies,
      'date-fns': '4.1.0', // add version
    }
    context.log('add date-fns@4.1.0 to dependencies of ' + pkg.name)
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
};
