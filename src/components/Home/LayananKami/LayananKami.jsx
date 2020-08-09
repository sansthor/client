import React from 'react';

function LayananKami() {
    return (
        <div>
            {/* Begin Services Content */}
            <div className="section-color services" id="services">
                <div className="container">
                    <div className="columns is-multiline">
                        <div
                            className="column is-12 about-me"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <h1 className="title has-text-centered section-title">
                                Layanan Kami
                            </h1>

                            <br />
                        </div>
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fab fa-android fa-3x"></i>
                                <hr />
                                <h2>
                                    Menawarkan berbagai jasa digital yang
                                    berkaitan dengan perangkat mobile berbasis
                                    android
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fas fa-globe fa-3x"></i>
                                {/* <i className="fas fa-paint-brush fa-3x"></i> */}
                                <hr />
                                <h2>
                                    Menawarkan berbagai jasa digital yang
                                    berkaitan dengan web
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fab fa-apple fa-3x"></i>
                                <hr />
                                <h2>
                                    Menawarkan berbagai jasa digital yang
                                    berkaitan dengan perangkat mobile berbasis
                                    iOS
                                </h2>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fas fa-user-tie fa-3x"></i>
                                <hr />
                                <h2>
                                    Menampilkan jasa digital oleh para talenta
                                    digital yang terdaftar
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="far fa-thumbs-up fa-3x"></i>
                                <hr />
                                <h2>
                                    Menjamin client mendapatkan jasa digital
                                    terbaik
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fas fa-code fa-3x"></i>
                                <hr />
                                <h2>
                                    Menawarkan jasa menulis kode untuk kebutuhan
                                    lainnya
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayananKami;
