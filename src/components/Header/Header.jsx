import React from 'react';
import HeaderGuest from './HeaderGuest';
import HeaderMember from './HeaderMember';

const Header = () => {
    const token = localStorage.getItem('token');
    return (
        <React.Fragment>
            {token ? <HeaderMember /> : <HeaderGuest />}
        </React.Fragment>
    );
};

export default Header;
