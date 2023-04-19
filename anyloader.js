export const load = async (url, context, nextLoad) => {
  if (url.endsWith('anyfile.js')) {
    return {
      format: 'module',
      shortCircuit: true,
      responseURL: url,
      source: 'export default "fromloader"'
    }
  }
  return nextLoad(url, context)
}
