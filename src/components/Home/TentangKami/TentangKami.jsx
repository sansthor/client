import React from "react";

function TentangKami() {
  return (
    <div>
      {/* Begin About Me Section */}
      <div className="section-light about-me" id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered section-title">
              Tentang <span>Digitarian</span>
            </h1>
          </div>
          <div className="columns is-multiline">
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p className="is-larger">
                {/* &emsp;&emsp; */}
                <strong>Platform-nya Talenta Digital</strong>
              </p>
              <br />
              <p style={{ textAlign: "justify" }}>
                &emsp;&emsp;Digitarian hadir sebagai wadah bagi para pekerja
                digital atau konsumen yang bergerak di bidang digital untuk
                saling bekerja sama. Digitarian memberikan ruang bagi pekerja
                digital untuk 'menjual' hasil karyanya atau jasanya. Digitarian
                memudahkan mereka yang membutuhkan layanan digital melalui
                talenta digital yang terdaftar di platform kami.
              </p>
              <br />
              <div className="is-divider"></div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>Contact Us</strong>
                  </p>
                  <p className="subheading">123-456-7890</p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>Email Us</strong>
                  </p>
                  <p className="subheading">hello@digitarian.com</p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>Our Website</strong>
                  </p>
                  <p className="subheading">digitarian.xyz</p>
                </div>
              </div>
            </div>
            <div className="column is-6 right-image " data-aos="fade-left">
              <img
                className="is-rounded"
                src="https://img.vim-cn.com/60/5e40099c55687fd9b561e4e85292247f8989e5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* End About Me Content */}
    </div>
  );
}

export default TentangKami;
