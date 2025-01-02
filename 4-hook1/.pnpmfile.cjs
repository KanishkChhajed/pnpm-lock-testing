
//// the hook ////
function readPackage(pkg, context) {
  // Override the manifest of foo@1.x after downloading it from the registry
  if (pkg.name.startsWith('testing-hook')) {
    pkg.dependencies = {
      ...pkg.dependencies,
      'date-fns': '4.1.0', // change version
    }
    context.log('change date-fns@4.0.0 => date-fns@4.1.0 in dependencies of testing-hook1')
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
};
