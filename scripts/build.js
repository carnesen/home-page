'use strict'

const path = require('path')
const fs = require('fs-extra')

const topDir = path.resolve(__dirname, '..')
const distDir = path.join(topDir, 'dist')
const publicDir = path.join(topDir, 'public')

function copyToDist(sourcePath) {
  const fileName = path.basename(sourcePath)
  console.log(`  - ${fileName}`)
  const destinationPath = path.join(distDir, fileName)
  fs.copySync(sourcePath, destinationPath)
}

const sourcePaths = fs.readdirSync(publicDir)
  .map(fileName => path.join(publicDir, fileName))

console.log('Emptying dist/')
fs.emptyDirSync(distDir)

console.log('Copying files:')
copyToDist('package.json')
sourcePaths.forEach(copyToDist)
