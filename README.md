# File Checksum CLI
A CLI tool to calculate checksum of file's content using **md5** or **sha1** algorithms.

[![build-status](https://img.shields.io/travis/thatisuday/file-checksum?style=flat-square)](https://travis-ci.org/thatisuday/file-checksum)
[![npm-version](https://img.shields.io/npm/v/file-checksum?style=flat-square)](https://www.npmjs.com/package/file-checksum)
[![dependencies](https://img.shields.io/david/thatisuday/file-checksum?style=flat-square)](https://www.npmjs.com/package/file-checksum)
[![downloads](https://img.shields.io/npm/dt/file-checksum?style=flat-square)](https://www.npmjs.com/package/file-checksum)
[![license](https://img.shields.io/npm/l/file-checksum?style=flat-square)](https://www.npmjs.com/package/file-checksum)

![carbon](https://raw.githubusercontent.com/thatisuday/file-checksum/master/res/carbon.now.sh.png)

## Installation
```
$ npm install -g file-checksum
```

## Help and Version
```
$ file-checksum -v
1.0.4

$ file-checksum --help
Calculate checksum of a file.

Usage: file-checksum <filepath> [options]

Options:
  -v, --version                Print current CLI version.
  -a, --algorithm <algorithm>  Algorithm to be used for hashing (md5 or sha1) (default: "md5")
  -h, --help                   output usage information
```

## Calculate Checksum
Once this package is installed globally, you can use `file-checksum` command.
```
$ file-checksum <filepath>
$ file-checksum <filepath> -a sha1
$ file-checksum <filepath> --algorithm sha1
```
> If `-a` or `--algorithm` flag is missing, by default **md5** algorithm is used.

#### Example
```
$ file-checksum test/file.txt

5e7c683623bdabaeae97f8157e80f85c
```

---

To create your own CLI tool using node.js, follow my article on [**Medium**](https://itnext.io/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac).