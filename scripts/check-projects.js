// scripts/check-projects.js
const path = require('path')
try {
  const projects = require(path.join(__dirname, '..', 'src', 'data', 'projects.ts'))
  // if transpile is an issue, try reading file as text:
  console.log('require succeeded — keys:', Object.keys(projects))
  console.log('projects length:', (projects.projects || []).length)
} catch (err) {
  console.error('require error:', err)
}
