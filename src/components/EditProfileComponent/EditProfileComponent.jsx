import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileMember from './EditProfileMember';
import EditProfileTalent from './EditProfileTalent';
import { fetchGetMember } from '../../redux/actions';

function EditProfileComponents() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember.role);
    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);

    return (
        <React.Fragment>
            {member === 'TALENT' ? (
                <EditProfileTalent />
            ) : (
                <EditProfileMember />
            )}
        </React.Fragment>
    );
}

export default EditProfileComponents;
