import $$ from '@utilities/selectors'
import { exists } from '@utilities/helpers'

const Lazyload = function Lazyload()
{

    // lazyload our images
    const images = $$.wrapper.querySelectorAll('[data-lazy]')

    if ( exists(images) )
    {

        // options
        const options = {
            threshold: 0.5
        }

        const preloadImage = function preloadImage(img) {

            // find and store the image's data-lazy attribute
            // commented out for now, but if you want to go the extra mile, then you can do all the srcset attribute stuff on the images ;)
            // const srcset = img.dataset.srcset
            const src = img.dataset.lazy

            img.src = src
            // img.srcset = srcset

            // add a class of loaded
            // we can then use this as a hook for fade-in animations etc
            img.classList.add('loaded')

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
