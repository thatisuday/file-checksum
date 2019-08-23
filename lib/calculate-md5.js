const md5 = require( 'md5' );

// export function that returns `md5` hash
module.exports = ( buffer ) => {
    return md5( buffer );
};
