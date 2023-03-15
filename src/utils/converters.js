export function convertStringToNumber( value ) {
    return parseInt( value );
}

export function convertNumberToPx( value ) {
    return `${parseInt( value )}px`;
}

export function buildCssProps( value, space = '' ) {
    let ret = '';
    Object.keys( value ).forEach( ( key, index ) => {
        const cssProp = key.replace( /([a-z]|(?=[A-Z]))([A-Z])/g, '$1-$2' ).toLowerCase();
        const cssPropValue = value[key];

        if ( index > 0 ) {
            ret += space;
        }

        ret += `${cssProp}: ${cssPropValue}`;
        ret += index < Object.keys( value ).length - 1 ? ';' : '';
    
        if ( index < Object.keys( value ).length - 1 ) {
            ret += `\n`;
        }

        return ret;
    } );

    return ret;
}