import { useRouter } from 'next/router';

import ALink from '~/components/features/alink';
import NavItem from '~/components/home/nav-item';
import { navTitles } from "~/contents/navbar";

function MainMenu() {
    const router = useRouter();
    let path = router.asPath;
    let query = router.query;

    function showAllDemos( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container ${ path === '/' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/" className="sf-with-ul">services</ALink>

                    <div className="megamenu demo">
                        <div className="menu-col">
                            <div className="menu-title">Choose your demo</div>

                            <div className="demo-list">
                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-1` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/1.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">01 - furniture store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-2` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/2.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">02 - furniture store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-3` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/3.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">03 - electronic store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-4` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/4.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">04 - electronic store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-5` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/5.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">05 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-6` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/6.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">06 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-7` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/7.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">07 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-8` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/8.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">08 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-9` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/9.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">09 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-10` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/10.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">10 - shoes store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-11` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/11.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">11 - furniture simple store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-12` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/12.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">12 - fashion simple store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-13` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/13.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">13 - market</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-14` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/14.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">14 - market fullwidth</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-15` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/15.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">15 - lookbook 1</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-16` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/16.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">16 - lookbook 2</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-17` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/17.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">17 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-18` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/18.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">18 - fashion store (with sidebar)</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-19` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/19.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">19 - games store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-20` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/20.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">20 - book store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-21` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/21.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">21 - sport store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-22` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/22.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">22 - tools store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-23` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/23.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">23 - fashion left navigation store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-24` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/24.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">24 - extreme sport store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-25` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/25.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">25 - jewelry store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-26` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/26.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">26 - market store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-27` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/27.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">27 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-28` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/28.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">28 - food market store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-29` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/29.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">29 - t-shirts store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-30` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/30.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">30 - headphones store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-31` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/31.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">31 - yoga store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-32` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/32.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">32 - sunglasses store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-33` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/33.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">33 - cosmetics store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-34` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/34.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">34 - car parts</span>
                                    </a>
                                </div>
                            </div>

                            <div className="megamenu-action text-center">
                                <a
                                    href="#"
                                    className="btn btn-outline-primary-2 view-all-demos"
                                    onClick={ showAllDemos }
                                >
                                    <span>View All Demos</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                {
                    navTitles.map(item => <NavItem name={item}/>)
                }
            </ul>
        </nav>
    );
}

export default MainMenu;