import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberGuest from './MemberGuest';
import MemberTalent from './MemberTalent';
import { fetchGetMember } from '../../redux/actions';

function MemberComponents() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember.role);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    return (
        <React.Fragment>
            {member === 'TALENT' ? <MemberTalent /> : <MemberGuest />}
        </React.Fragment>
    );
}

export default MemberComponents;
