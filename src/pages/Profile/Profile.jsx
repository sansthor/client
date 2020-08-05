import React from 'react';

import '../../assets/css/Profile.css';

function Profile() {
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
                                        Nama Lengkap
                                    </h4>
                                    <h6 className="subtitle is-6">@username</h6>
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
                                    <tr>
                                        <th colspan="1"></th>
                                        <th colspan="2"></th>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>minion@despicable.me</td>
                                    </tr>
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
