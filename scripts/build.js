'use strict'

const path = require('path')
const fs = require('fs-extra')

const topDir = path.resolve(__dirname, '..')
const distDir = path.join(topDir, 'dist')
const publicDir = path.join(topDir, 'public')

function copyToDist(sourcePath) {
  const destinationPath = path.join(distDir, path.basename(sourcePath))
  console.log(`Copying ${sourcePath}`)
  fs.copySync(sourcePath, destinationPath)
}

const sourcePaths = fs.readdirSync(publicDir)
  .map(fileName => path.join(publicDir, fileName))

fs.emptyDirSync(distDir)
sourcePaths.forEach(copyToDist)

