import { paths } from "./_paths"

const getResolves = () => ({
  extensions: ['.js', 'jsx', '.ts', '.tsx'],
  alias: {
    '@': paths.src,
  }
})

export default getResolves;