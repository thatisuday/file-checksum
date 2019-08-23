# File Checksum CLI
A CLI tool to calculate checksum of file's content using **md5** or **sha1** algorithms.

## Installation
```
$ npm install -g file-checksum
```

## Help and Version
```
$ file-checksum -v
1.0.0

$ file-checksum --help
Calculate checksum of a file.

Usage: file-checksum <filepath> [options]

Options:
  -v, --version                Print current CLI version.
  -a, --algorithm <algorithm>  Algorithm to be used for hashing (md5 or sha1) (default: "md5")
  -h, --help                   output usage information
```

## Calculate checksum
Once this package is installed globally, you can use `file-checksum` command.
```
$ file-checksum <filepath>
$ file-checksum <filepath> -a sha1
$ file-checksum <filepath> --algorithm sha1
```

#### Example
```
$ file-checksum test/file.txt

5e7c683623bdabaeae97f8157e80f85c
```

> If `-a` or `--algorithm` flag is missing, by default **md5** algorithm is used.

---

To create your own CLI tool using node.js, follow my article on [**Medium**](https://itnext.io/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac).