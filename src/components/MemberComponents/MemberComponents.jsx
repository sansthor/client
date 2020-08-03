import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberGuest from './MemberGuest';
import MemberTalent from './MemberTalent';
import { fetchGetMember } from '../../redux/actions';
function MemberComponents(props) {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember.role);
    console.log(member, 'di member component');
    useEffect(() => {
        dispatch(fetchGetMember());
    }, []);
    return (
        <React.Fragment>
            {member === 'TALENT' ? <MemberTalent /> : <MemberGuest />}
        </React.Fragment>
    );
}

export default MemberComponents;
