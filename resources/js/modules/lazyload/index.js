import $$ from '@utilities/selectors'
import { exists } from '@utilities/helpers'

const Lazyload = function Lazyload()
{

    // lazyload our images
    const images = $$.wrapper.querySelectorAll('[data-src]')

    if ( exists(images) )
    {

        // options
        const options = {
            threshold: 0.5
        }

        const preloadImage = (img) => {

            // find and store the image's data-load attribute
            const src = img.dataset.src

            img.src = src

            // add a class of loaded
            // we can then use this as a hook for fade-in animations etc
            img.classList.add('loaded')
            img.removeAttribute('data-src')

        }

        const lazyLoad = new IntersectionObserver((entries, lazyLoad) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    preloadImage(entry.target)
                    lazyLoad.unobserve(entry.target)

                }

            })

        }, options)

        images.forEach(image => {
            lazyLoad.observe(image)
        })

    }

}()

export default Lazyload
