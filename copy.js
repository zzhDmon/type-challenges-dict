const fs = require('node:fs')
const path = require('node:path')
const inquirer = require('inquirer')

const questionsDir = path.join(__dirname, 'questions')
const solutionsDir = path.join(__dirname, 'solutions')
// 获取questions目录下的子文件夹
function getSubfolders(directory) {
  return fs.readdirSync(directory).filter((file) => {
    return fs.statSync(path.join(directory, file)).isDirectory()
  })
}
// 拷贝文件
function copyFiles(sourceDir, targetDir, filesToCopy) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir)
  }

  filesToCopy.forEach((file) => {
    const sourceFile = path.join(sourceDir, file)
    const targetFile = path.join(targetDir, file)
    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile)
      console.log(`Copied ${file} to ${targetDir}`)
    }
    else {
      console.log(`File ${file} does not exist in ${sourceDir}`)
    }
  })
}
// 选择questions目录下的子文件夹
async function selectSubfolder(folderName) {
  const subfolders = folderName ? getSubfolders(questionsDir).filter(subfolder => subfolder.includes(folderName)) : getSubfolders(questionsDir)

  if (subfolders.length === 0) {
    console.log('No subfolders found in questions directory.')
    return
  }
  const answer = await inquirer.default.prompt([
    {
      type: 'list',
      name: 'selectedFolder',
      message: 'Select a subfolder:',
      choices: subfolders,
    },
  ])
  const selectedFolder = answer.selectedFolder
  const sourceDir = path.join(questionsDir, selectedFolder)
  const targetDir = path.join(solutionsDir, selectedFolder)
  copyFiles(sourceDir, targetDir, ['test-cases.ts', 'template.ts'])
}
// 添加子文件夹并拷贝文件
function addAndCopyFolder(folderName) {
  let matchingFolders = getSubfolders(questionsDir).filter(subfolder => subfolder.includes(folderName))
  if (matchingFolders.length === 0) {
    console.log(`No matching subfolders found for "${folderName}"`)
    return
  }
  let selectedFolder = matchingFolders[0]
  if (matchingFolders.length > 1) {
    selectedFolder = matchingFolders.find(subfolder => subfolder === folderName) || matchingFolders[0]
  }
  const sourceDir = path.join(questionsDir, selectedFolder)
  const targetDir = path.join(solutionsDir, selectedFolder)
  copyFiles(sourceDir, targetDir, ['test-cases.ts', 'template.ts'])
}
// 主函数
async function main() {
  const args = process.argv.slice(2)
  await selectSubfolder(args)
  // if (args.length === 0) {
  // }
  // else {
  //   const folderName = args[0]
  //   addAndCopyFolder(folderName)
  // }
}
main().catch(err => console.error(err))
