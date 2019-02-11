
// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
if ( !page('blog') )
{

    document.querySelector('.content > p').classList.add('intro')

}
