// Script by Prokhor Protasov,
// composer, conductor, self-taught web developer
// https://protasoff.com/

// Greatest Common Divisor
function Math_gcd(a, b) {
    if (a<b)
        [a, b] = [b, a]
    return b ? Math_gcd(b, a%b) : a
}

// get ratio ('16/9' or something) from dimensions
function Math_ratio(width, height) {
    const gcd = Math_gcd(width, height)
    return width/gcd + '/' + height/gcd
}

// add multiple css properties
function css(element, jsonCSS) {
    for (const property in jsonCSS)
        element.style[property] = jsonCSS[property]
}

// autorun
function autorun(callback) {
    if (document.readyState != 'loading')
        callback()
    else
        document.addEventListener('DOMContentLoaded', callback)
}

// responsive iframe
function videoIframe_MakeResponsive(provider, defaultRatio = '16/9') {
    document.querySelectorAll('iframe[src*="' + provider + '"]').forEach((iframe) => {
        if (!iframe.classList.contains('videoIframeFixed')) { // fix only new iframes
            let width = iframe.getAttribute('width')
            let height = iframe.getAttribute('height')
            let aspectratio = (width && height) ? Math_ratio(width, height) : defaultRatio
            iframe.removeAttribute('width') // reset
            iframe.removeAttribute('height') // reset
            iframe.classList.add('videoIframeFixed') // for future reference
            // wrapper container
            let wrapper = document.createElement('div')
            iframe.parentNode.insertBefore(wrapper, iframe)
            wrapper.appendChild(iframe) // move iframe inside
            // style
            css(wrapper, {
                'width': '100%',
                'position': 'relative',
                'aspect-ratio': aspectratio,
                'padding': '0'
            })
            css(iframe, {
                'width': '100%',
                'height': '100%',
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'margin': '0'
            })
        }
    })
}

// run it on page load
autorun(function () {
    videoIframe_MakeResponsive('youtube')
    videoIframe_MakeResponsive('vimeo')
    /* ... etc ... */
})
