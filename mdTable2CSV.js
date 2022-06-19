let path = require('path');
let fsJetpack = require('fs-jetpack')
const { argv } = require('process');


let mdTable2CSV = function mdTable2CSV(arguments = ['']) {
  arguments.forEach((arg,i) => {
    if (fsJetpack.exists(arg) === 'dir') {mdTable2CSV(fsJetpack.list(arg).map(e => path.join(arg, e)))}
    else if (path.extname(arg) === '.md') {
      let outputPath = `${path.dirname(arg)}/${path.basename(arg, '.md')}.csv`;
      let fileContent = fsJetpack.read(arg);
      let CSVString = fileContent.replace(/^\||\|$/gm,'').replace(/\|/g, ',').replace(/(?<=(^.*$\n){1})^.*$\n/m, '');
      fsJetpack.write(outputPath, CSVString)
    }
  });
}

mdTable2CSV(argv)