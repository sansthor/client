import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember } from '../../redux/actions';
import DropdownTalent from './DropdownTalent';
import DropdownUser from './DropdownUser';

function Dropdown(props) {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    return (
        <React.Fragment>
            {member.role === 'TALENT' ? <DropdownTalent /> : <DropdownUser />}
        </React.Fragment>
    );
}

export default Dropdown;
