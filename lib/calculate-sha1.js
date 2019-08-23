const sha1 = require( 'node-sha1' );

// export function that returns `sha1` hash
module.exports = ( buffer ) => {
    return sha1( buffer );
};
