const child_process = require( 'child_process' );
const path = require( 'path' );
const assert = require( 'assert' );

// binary-link file of this CLI tool
const CLI_BIN_PATH = path.resolve( __dirname, '../index.js' );

// test file path
const TEST_FILE = path.resolve( __dirname, 'file.txt' );

// checksum for comparison of `file.txt`
const MD5_CHECKSUM = '3a49f1f119f5824ffffa77eadf2162c7';
const SHA1_CHECKSUM = 'cb23d3e3beee63e6772db318ca7798fc65576002';

// function to execute binary file with command line options
// this mimics actual CLI command
const execCommand = ( commandLineOptions = '' ) => {
    
    // this executes binary-link file file and return checksum has code
    const output = child_process.execSync( `node ${ CLI_BIN_PATH } ${ TEST_FILE } ${ commandLineOptions }`, {
        encoding: 'utf-8', // return `UTF-8` encoded text output instead of `buffer` output
    } );

    // return hash by stripping all non word characters (including new lines)
    return output.replace( /\W+/mig, '' );
};

// Mocha.JS test suit
describe( 'TEST_SUIT: CLI INTERFACE', () => {
    
    // it should return `MD5_CHECKSUM` value with CLI no flags
    it( 'it should return `MD5_CHECKSUM` value with CLI no flags', () => {
        const checksum = execCommand();
        assert.strictEqual( checksum, MD5_CHECKSUM );
    } );

    // it should return `MD5_CHECKSUM` value with -a set to md5
    it( 'it should return `MD5_CHECKSUM` value with -a set to md5', () => {
        const checksum = execCommand( '-a md5' );
        assert.strictEqual( checksum, MD5_CHECKSUM );
    } );

    // it should return `SHA1_CHECKSUM` value with -a set to sha1
    it( 'it should return `SHA1_CHECKSUM` value with -a set to sha1', () => {
        const checksum = execCommand( '-a sha1' );
        assert.strictEqual( checksum, SHA1_CHECKSUM );
    } );

    // it should return `SHA1_CHECKSUM` value with --algorithm set to sha1
    it( 'it should return `SHA1_CHECKSUM` value with --algorithm set to sha1', () => {
        const checksum = execCommand( '--algorithm sha1' );
        assert.strictEqual( checksum, SHA1_CHECKSUM );
    } );

} );

