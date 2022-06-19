# convert markdown table to CSV format.

## usage
```bash
node mdTable2CSV.js {filePath|directoryPath}
```
### for example
```bash
node mdTable2CSV.js readme.md ./test/ ./test2/*.md
```
This command will convert with copy ``readme.md``\`s content to CSV format, and create a output file -- ``readme.csv`` at ``readme.md``\`s directory. 

And it will do same progress for all ``.md`` file with search in directory -- ``./test/``
recursively.

And it will also convert all markdown files located in directory -- ``./test2/`` but not recursively.