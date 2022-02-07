import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import StickyBox from 'react-sticky-box';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';
import Video from '~/components/partials/media/video';
import BuyForm from '~/components/partials/media/BuyForm';

import Breadcrumb from '~/components/partials/media/breadcrumb';


function Media () {
    const slug = useRouter().query.slug;
    if ( !slug ) return <div></div>;
    const title = slug.split(" ")[0];
    const current = slug.split(" ")[1];
    const mediaProduct = slug.slice(title.length).trim();

    // const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    // const product = data && data.product.single;
    // const related = data && data.product.related;
    // const prev = data && data.product.prev;
    // const next = data && data.product.next;

    // if ( error ) {
    //     return <div></div>
    // }

    return (
        <>
        <div className="main">
            <Breadcrumb  current={mediaProduct} title={title} />
            <div className="page-content">
                <div className="container skeleton-body horizontal">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="product-details-top">
                                <div className={ "row skel-pro-single loaded" }>
                                    <div className="col-md-8">
                                        <Video />
                                    </div>

                                    <div className="col-md-4">
                                        <div className="entry-summary row">
                                            <div className="col-md-12">
                                                <div className="entry-summary1 mt-2 mt-md-0"></div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="entry-summary2"></div>
                                            </div>
                                        </div>
                                        <BuyForm pName={title} current={current} name={slug} />
                                    </div>
                                </div>
                            </div>
                            {
                                    <div className="skel-pro-tabs"></div>
                            }
                            <div className="nav-none">
                                {/* <RelatedProductsOne products={ related } loading={ loading } /> */}
                            </div>
                        </div>
                        <div className="col-lg-3 skeleton-body">
                             <StickyBox className={ `sticky-content skel-pro-single}` } offsetTop={ 70 }>
                                <div className="skel-widget"></div>
                                <div className="skel-widget"></div>
                                {/* <Sidebar products={ related } loading={ loading } /> */}
                            </StickyBox>
                        </div>
                    </div>
                </div >
            </div >
        </div >
        </>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Media );
