import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember } from '../../redux/actions';
import '../../assets/css/Profile.css';

import TableProfileTalent from '../../components/Profile/TableProfileTalent';

function Profile() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    return (
        <div style={{ minHeight: '80vh' }}>
            <section className="section" id="about">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-3">
                        <div className="tile">
                            <div className="tile is-parent">
                                <article className="tile is-child has-text-centered">
                                    <figure className="image is-128x128 is-inline-block">
                                        <img
                                            src="https://img.vim-cn.com/80/791e5955feca09de9cbb8437f308c09f88c9b8.png"
                                            alt="avatar"
                                            className="is-rounded"
                                            style={{ margin: 'auto' }}
                                        ></img>
                                    </figure>
                                    <h4
                                        className="title is-4"
                                        style={{ marginTop: '2em' }}
                                    >
                                        {member.fullname}
                                    </h4>
                                    {member.role === 'USER' ? (
                                        <h6 className="subtitle is-6">
                                            Basic Member
                                        </h6>
                                    ) : (
                                        <h6 className="subtitle is-6">
                                            Talent
                                        </h6>
                                    )}
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification ">
                            <p className="title">Profile</p>
                            <div className="content">
                                {/* Content */}
                                <table className="table-profile">
                                    <tbody>
                                        <tr>
                                            <th colSpan="1"></th>
                                            <th colSpan="2"></th>
                                        </tr>
                                        <tr>
                                            <td>Username:</td>
                                            <td>{member.username}</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>{member.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>{member.address}</td>
                                        </tr>
                                        {member.role !== undefined &&
                                            member.role !== 'USER' && (
                                                <TableProfileTalent
                                                    skills={member.skills}
                                                    link={member.link}
                                                    phone={member.phone}
                                                />
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
