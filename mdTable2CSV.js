let path = require('path');
let fsJetpack = require('fs-jetpack')
const { argv } = require('process');


let mdTable2CSV = function mdTable2CSV(arguments = ['']) {
  arguments.forEach((arg, i) => {
    if (path.extname(arg) === '.md') {
      let fileBasename = path.basename(arg, '.md');
      let dirname = path.dirname(arg);
      if (fileBasename === '*') {
        mdTable2CSV(fsJetpack.list(dirname).filter(filename => path.extname(filename) === '.md').map(e => path.join(dirname, e)))
      } else {
        if (fsJetpack.exists(arg) === false) { console.warn(`${arg} does not exists.`); return }
        let outputPath = `${dirname}/${fileBasename}.csv`;
        let fileContent = fsJetpack.read(arg);
        let CSVString = fileContent.replace(/^\||\|$/gm, '').replace(/\|/g, ',').replace(/(?<=(^.*$\n){1})^.*$\n/m, '');
        fsJetpack.write(outputPath, CSVString)
      }
    } 
    else if (fsJetpack.exists(arg) === 'dir') { mdTable2CSV(fsJetpack.list(arg).map(e => path.join(arg, e))) }
  });
}

mdTable2CSV(argv)
