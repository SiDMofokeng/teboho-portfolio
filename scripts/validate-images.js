// scripts/validate-images.js
const fs = require('fs')
const path = require('path')
const projects = require('../src/data/projects').projects || require('../src/data/projects').default || null

if (!projects) {
  console.error('Could not load projects. Ensure src/data/projects.ts exports "projects".')
  process.exit(2)
}

const publicDir = path.join(__dirname, '..', 'public')
let missing = []

projects.forEach((p) => {
  if (p.images && Array.isArray(p.images)) {
    p.images.forEach((img) => {
      const file = path.join(publicDir, img.replace(/^\//, ''))
      if (!fs.existsSync(file)) missing.push({ slug: p.slug, type: 'image', path: img })
    })
  }
  if (p.logo) {
    const file = path.join(publicDir, p.logo.replace(/^\//, ''))
    if (!fs.existsSync(file)) missing.push({ slug: p.slug, type: 'logo', path: p.logo })
  }
})

if (missing.length === 0) {
  console.log('✅ All referenced images exist.')
  process.exit(0)
} else {
  console.log('⚠️ Missing image files:')
  missing.forEach((m) => console.log(`- [${m.slug}] ${m.type}: ${m.path}`))
  process.exit(1)
}
