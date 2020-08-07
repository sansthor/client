import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember } from '../../redux/actions';
import NavbarUser from './NavbarUser';
import NavbarGuest from './NavbarGuest';
function Navbar() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    return (
        <div>
            <React.Fragment>
                {member.role !== undefined ? (
                    <NavbarUser username={member.username} id={member._id} />
                ) : (
                    <NavbarGuest />
                )}
            </React.Fragment>
        </div>
    );
}

export default Navbar;
