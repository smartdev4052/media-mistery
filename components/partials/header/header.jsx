import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';
import LoginModal from '~/components/features/modals/login-modal';
import HeaderSearch from '~/components/partials/header/partials/header-search';
import WishlistMenu from '~/components/partials/header/partials/wishlist-menu';
import CartMenu from '~/components/partials/header/partials/cart-menu';
import MainMenu from '~/components/partials/header/partials/main-menu';
import StickyHeader from '~/components/features/sticky-header';

function Header () {
    const router = useRouter();
    const [ containerClass, setContainerClass ] = useState( 'container' );

    function openMobileMenu () {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    useEffect( () => {
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    return (
        <header className="header header-intro-clearance header-3">
            <div className="header-top">
                <div className={ containerClass }>
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a href="#" onClick={ e => { e.preventDefault(); } }>Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#" onClick={ e => { e.preventDefault(); } }>USD</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Eur</a></li>
                                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Usd</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#" onClick={ e => { e.preventDefault(); } }>ENGLISH</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>English</a></li>
                                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>French</a></li>
                                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Spanish</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <LoginModal />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className={ containerClass }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" alt="Molla Logo" className="bg-transparent" width="105" height="24" />
                        </ALink>
                    </div>

                    <div className="header-center d-lg-block d-none">
                        <HeaderSearch />
                    </div>

                    <div className="header-right">
                        <div className="header-dropdown-link">
                            <div className="account">
                                <ALink href="/shop/dashboard" title="My account">
                                    <div className="icon">
                                        <i className="icon-user"></i>
                                    </div>
                                    <p>Account</p>
                                </ALink>
                            </div>

                            <WishlistMenu />

                            <CartMenu />
                        </div>
                    </div>
                </div>
            </div>

            <StickyHeader>
                <div className="header-bottom sticky-header">
                    <div className={ containerClass }>
                        <div className="d-flex w-100 position-relative">
                            <div className="header-center">
                                <MainMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </StickyHeader>
        </header>
    )
}

export default Header;