import React from "react";

import "../../assets/css/Login.css";

function Register() {
  return (
    <div className="body">
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <p class="subtitle has-text-black">Sign Up</p>
              <hr class="login-hr" />
              <div className="box">
                <figure className="avatar">
                  <img
                    src="https://img.vim-cn.com/ef/26a9d5e371e8010bd4325e4298f254f87b4aa2.png"
                    alt="brand"
                  ></img>
                </figure>
                <form>
                  <div className="field">
                    <label className="label" style={{ textAlign: "start" }}>
                      Nama Lengkap
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        autofocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" style={{ textAlign: "start" }}>
                      Username
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        autofocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" style={{ textAlign: "start" }}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Your Email"
                        autofocus=""
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" style={{ textAlign: "start" }}>
                      Password
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <button className="button is-block is-info is-fullwidth">
                    Daftar <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </button>
                  <br />
                  <div className="field">
                    <p className="has-text-grey">
                      <label>
                        Sudah punya akun? <a href="/login">Masuk</a>
                      </label>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
