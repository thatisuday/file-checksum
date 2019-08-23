#!/usr/bin/env node

const program = require( 'commander' );
const _ = require( 'lodash' );
const chalk = require( 'chalk' );

// import package.json
const package = require( './package.json' );

// import lib/checksum file
const checksum = require( './lib/checksum' );

// import valid algorithms
const { ALGORITHMS } =  require( './lib/constants' );

// intialize CLI interface
program
.version( package.version, '-v, --version', 'Print current CLI version.' )
.description( 'Calculate checksum of a file.' )
.arguments( '[filepath]' )
.option( '-a, --algorithm <algorithm>', `Algorithm to be used for hashing (${ _.join( ALGORITHMS, ' or ' ) })`, _.first( ALGORITHMS ) )
.action( ( filepath, options ) => {

    // extract required options
    const { algorithm } = options;
    
    // check for filepath
    if( _.isEmpty( filepath ) ) {
        return console.log( chalk.red( `Provide a file path with the command using command : ${ chalk.bold( 'file-checksum <filepath>' ) }` ) );
    }

    // check for valid algorithm
    if( ! _.includes( ALGORITHMS, algorithm ) ) {
        return console.log( chalk.red( `Provide a valid algorithm : use ${ chalk.bold( _.join( ALGORITHMS, ' or ' ) ) }` ) );
    }

    // calculate checksum
    checksum.calculate( { filepath, algorithm } );
} )
;

// parse command line argument vector
program.parse( process.argv );

// pick options from commander
// console.log( program );
