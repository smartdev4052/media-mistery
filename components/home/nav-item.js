import { navItems } from "~/contents/navbar";
import { useRouter } from 'next/router';
import ALink from '~/components/features/alink';

const NavItem = (props) =>  {
    const router = useRouter();
    const {title, content, isTwo, inNav} = navItems[props.name];
    let path = router.asPath;
    let query = router.query;

    if(inNav == false)  {
        return <></>;
    }

    const twoColumns = <div className="row">
        <div className="col-md-6">
            <ul>
                {
                    console.log(path),
                    content.slice(0, 5).map(item => <li className={ ( path.indexOf( `media/` ) > -1 && query.slug === `${title} ${item}`) ? "active" : '' }><ALink href={"/media/"+ title + " "+ item} scroll={ false }>{item}</ALink></li>)
                }
            </ul>
        </div>

        <div className="col-md-6">
            <ul>
                {
                    content.slice(5, content.length).map(item => <li className={ ( path.indexOf( `media/` ) > -1 && query.slug === `${title} ${item}`) ? "active" : '' }><ALink href={"/media/"+ title + " "+ item} scroll={ false }>{item}</ALink></li>)
                }
            </ul>
            
        </div>
    </div>

    const oneColumn = <ul>
            {content.map(item => <li className={ ( path.indexOf( `media/` ) > -1 && query.slug === `${title} ${item}`) ? "active" : '' }><ALink href={"/media/"+ title + " "+ item} scroll={ false }>{item}</ALink></li>)}
        </ul>

    return(
        <li className={ path.indexOf( `media/${title}` ) > -1 ? 'active' : '' }>
            <ALink href="#" className="sf-with-ul" scroll={ false }>{title}</ALink>
            {
                isTwo ? 
                <div className="megamenu megamenu-md">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="menu-col">
                                {twoColumns}                
                            </div>
                        </div>
                    </div>
                </div>
                :
                oneColumn
            }
        </li>
    );
}

export default NavItem;