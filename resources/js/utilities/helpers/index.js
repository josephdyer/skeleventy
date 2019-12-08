import $$ from '@utilities/selectors'

/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */

const page = function(name) {

    if (!name) {
        return $$.body.getAttribute('id')
    }

    return ($$.body.getAttribute('id') == name)

}


/**
 * @description Check if element exists the page
 * @param  		{string} Element selector
 * @param  		{string} Minimum number of elements
 * @return 		{bool}
 */

const exists = function(el, limit) {

    return (el.length > 0)

}

export {
    page,
    exists
}


