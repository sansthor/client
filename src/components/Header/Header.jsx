import React, { useEffect } from 'react';
import HeaderGuest from './HeaderGuest';
import HeaderMember from './HeaderMember';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember } from '../../redux/actions';

const Header = () => {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);

    return (
        <React.Fragment>
            {member.role !== undefined ? <HeaderMember /> : <HeaderGuest />}
        </React.Fragment>
    );
};

export default Header;
