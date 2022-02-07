import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';
import RelatedProductsTwo from '~/components/partials/product/related/related-two';
import { Features } from '~/contents/features';
import FeatureCard from './FeatureCard';

function ProductSidebar ( props ) {
    const [ toggle, setToggle ] = useState( 0 );

    useEffect( () => {
        resizeHandle();
        window.addEventListener( "resize", resizeHandle );

        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }
    }, [] )

    function resizeHandle () {
        if ( document.querySelector( "body" ).offsetWidth < 992 ) {
            setToggle( true );
        } else {
            setToggle( false );
        }
    }

    function hideSideBar () {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        }
    }

    function toggleSideBar () {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        } else {
            document.querySelector( 'body' ).classList.add( 'sidebar-filter-active' );
        }
    }

    function closeSideBar () {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        }
    }

    return (
        <>
    <div className={ `${toggle ? 'sidebar-filter right' : 'sidebar'} sidebar-product` }>
        <div className={ toggle ? 'sidebar-filter-wrapper product-sidebar-wrapper' : '' }>
            <button onClick={ closeSideBar } className="btn-product btn-close" style={ { marginLeft: 'auto', marginRight: '5px' } }>
                <i className="icon-close"></i>
            </button>

            <div className="widget widget-products">
                <h4 className="widget-title mb-1">Our Features</h4>

                <div className="products">
                    {
                        Features.map(item => <FeatureCard img={item["img"]} name={item["content"]} />)
                    }
                </div>
            </div>
        </div>
    </div>

    { toggle ?
        <button className="sidebar-fixed-toggler right" onClick={ toggleSideBar }><i className="icon-cog"></i></button> :
        ''
    }
    <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>
</>
    );
}

export default React.memo( ProductSidebar );