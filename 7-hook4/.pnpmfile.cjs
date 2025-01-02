
//// the hook ////
function readPackage(pkg, context) {
  // Override the manifest of foo@1.x after downloading it from the registry
  if (pkg.name.startsWith('testing-hook')) {
    pkg.dependencies = {
      ...pkg.dependencies,
      'nuxt': '3.15.0', // change version
    }
    context.log('change nuxt@3.12.2 => nuxt@3.15.0 in dependencies of testing-hook4')
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
};
