module.exports = {
  presets: ['@acot/axe'],
  extends: ['preset:@acot/axe/recommended'],
  connection: {
    command: 'npm run dev'
  },
  origin: 'http://localhost:3000',
  //  paths: ['/', '/about/'],
  reporter: '@acot/pretty',
  runner: {
    uses: '@acot/sitemap',
    with: {
      source: 'http://localhost:3000/sitemap.xml'
    }
  }
}
