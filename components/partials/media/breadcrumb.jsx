import React from 'react';
import { useRouter } from 'next/router';
import ALink from '~/components/features/alink';

function Breadcrumb ( props ) {
    const router = useRouter();
    const { title, current, fullWidth = false } = props;

    return (
        <nav className="breadcrumb-nav border-0 mb-0">
            <div className={ 'd-flex align-items-center ' + ( fullWidth ? 'container-fluid' : 'container' ) }>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <ALink href="/">Home</ALink>
                    </li>
                    <li className="breadcrumb-item">
                        <ALink href="#">{title}</ALink>
                    </li>
                    <li className="breadcrumb-item active">{ current }</li>
                </ol>
            </div >
        </nav >
    )
}

export default React.memo( Breadcrumb );