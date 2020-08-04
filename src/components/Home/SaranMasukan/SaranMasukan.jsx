import React from "react";

function SaranMasukan() {
  return (
    <div>
      {/* Begin Contact Content */}
      <div className="section-light contact" id="contact">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in-up"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                Kirim Saran & Masukan
              </h1>
            </div>
            <div className="column is-8 is-offset-2">
              <form
                action="https://formspree.io/email@example.com"
                method="POST"
              >
                <div className="field">
                  <label className="label">Nama</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Contoh: Digi Tarian"
                      name="Name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="Contoh: hello@digitarian.com"
                      name="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Pesan</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Halo, Digi.."
                      name="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control ">
                    <button className="button submit-button">
                      Kirim&nbsp;&nbsp;
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Content */}
    </div>
  );
}

export default SaranMasukan;
