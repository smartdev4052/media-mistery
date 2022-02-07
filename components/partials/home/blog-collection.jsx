import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import PostFour from '~/components/features/posts/post-four';

import { fadeIn, blogSlider } from '~/utils/data';

function BlogCollection ( props ) {
    const { posts } = props;

    return (
        <div className="blog-posts bg-light pt-4 pb-5">
            <div className="container">
                <div className="heading heading-flex mb-2 mt-1">
                    <div className="heading-left">
                        <h2 className="title mb-0">From Our Blog</h2>
                    </div>

                    <div className="heading-right">
                        <ALink href="/blog/classic" className="title-link">View more articles <i className="icon-long-arrow-right"></i></ALink>
                    </div>
                </div>

                <OwlCarousel adClass="carousel-with-shadow owl-simple blog-carousel custom-carousel-equal-height" options={ blogSlider }>
                    {
                        posts ?
                            posts.map( ( item, index ) => (
                                <PostFour post={ item } key={ "Blog" + index } />
                            ) )
                            :
                            [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                <div className="skel-pro" key={ "Skeleton" + index }></div>
                            )
                    }
                </OwlCarousel>
            </div>
        </div>
    );
}

export default BlogCollection;