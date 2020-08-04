import React from "react";

import "../../assets/css/Profile.css";

function Profile() {
  return (
    <div>
      <section className="section" id="about">
        <div className="columns has-same-height is-gapless">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h1>s</h1>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h3 className="title is-4">Profile</h3>

                <div className="content">
                  <table className="table-profile">
                    <tr>
                      <th colspan="1"></th>
                      <th colspan="2"></th>
                    </tr>
                    {/* <tr>
                      <td>Address:</td>
                      <td>Guru's Lab</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>0123-456789</td>
                    </tr> */}
                    <tr>
                      <td>Email:</td>
                      <td>minion@despicable.me</td>
                    </tr>
                  </table>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-gapless">
          <div className="column">
            <div className="card">
              <div className="card-content skills-content">
                <h3 className="title is-4">Riwayat Pembelian</h3>
                <div className="content">
                  <section className="section" id="portfolio">
                    <div className="container">
                      <div className="container portfolio-container">
                        <div className="columns">
                          <div className="column">
                            <div className="card">
                              <header className="card-header">
                                <p className="card-header-title">
                                  <span>Belajar HTML, CSS, JS</span>
                                </p>
                              </header>
                              <div className="card-content">
                                <figure className="image">
                                  <img
                                    src="https://img.vim-cn.com/7a/e703eaf3f27092ca83c3c0069b93e6dd268b71.png"
                                    alt="Admin template screenshot"
                                  ></img>
                                </figure>
                              </div>
                              <footer className="card-footer">
                                <a
                                  href="templates/admin.html"
                                  className="card-footer-item"
                                >
                                  Tandai Selesai
                                </a>
                              </footer>
                            </div>
                          </div>
                          <div className="column">
                            <div className="card">
                              <header className="card-header">
                                <p className="card-header-title">
                                  <span>Belajar HTML, CSS, JS</span>
                                </p>
                              </header>
                              <div className="card-content">
                                <figure className="image">
                                  <img
                                    src="https://img.vim-cn.com/7a/e703eaf3f27092ca83c3c0069b93e6dd268b71.png"
                                    alt="Admin template screenshot"
                                  ></img>
                                </figure>
                              </div>
                              <footer className="card-footer">
                                <a
                                  href="templates/admin.html"
                                  className="card-footer-item"
                                >
                                  Tandai Selesai
                                </a>
                              </footer>
                            </div>
                          </div>
                          <div className="column">
                            <div className="card">
                              <header className="card-header">
                                <p className="card-header-title">
                                  <span>Belajar HTML, CSS, JS</span>
                                </p>
                              </header>
                              <div className="card-content">
                                <figure className="image">
                                  <img
                                    src="https://img.vim-cn.com/7a/e703eaf3f27092ca83c3c0069b93e6dd268b71.png"
                                    alt="Admin template screenshot"
                                  ></img>
                                </figure>
                              </div>
                              <footer className="card-footer">
                                <a
                                  href="templates/admin.html"
                                  className="card-footer-item"
                                >
                                  Tandai Selesai
                                </a>
                              </footer>
                            </div>
                          </div>
                          <div className="column">
                            <div className="card">
                              <header className="card-header">
                                <p className="card-header-title">
                                  <span>Belajar HTML, CSS, JS</span>
                                </p>
                              </header>
                              <div className="card-content">
                                <figure className="image">
                                  <img
                                    src="https://img.vim-cn.com/7a/e703eaf3f27092ca83c3c0069b93e6dd268b71.png"
                                    alt="Admin template screenshot"
                                  ></img>
                                </figure>
                              </div>
                              <footer className="card-footer">
                                <a
                                  href="templates/admin.html"
                                  className="card-footer-item"
                                >
                                  Tandai Selesai
                                </a>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
