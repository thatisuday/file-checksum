const fs = require( 'fs-extra' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const _ = require( 'lodash' );

// import valid algorithms
const { ALGORITHMS } =  require( './constants' );

// create a map of hash calculators based on algorith names
// HASHERS = { <algorithm>: require(<algorithm-hash-calculator-file>) }
const HASHERS = _.fromPairs( _.map( ALGORITHMS, ( ALGORITHM ) => {
    return [ ALGORITHM, require( `./calculate-${ ALGORITHM }` ) ];
} ) );

// current working directory (where terminal is opened)
const CWD = process.cwd();

// export a common function to calculate checksum
exports.calculate = ( { filepath, algorithm } ) => {

    // get absolue file path
    const file = path.resolve( CWD, filepath );

    // check if file exists
    if( ! fs.existsSync( file ) ) {
        return console.log( chalk.red( `File at location ${ chalk.bold( file ) } does not exist.` ) );
    }

    // get file contents in buffer
    const fileBuffer = fs.readFileSync( file );

    // calculate hash of the buffer
    const hash = HASHERS[ algorithm ]( fileBuffer );

    // print hash
    console.log( chalk.green.bold( hash ) );

};
