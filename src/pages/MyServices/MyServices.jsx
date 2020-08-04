import React from "react";

import "../../assets/css/Profile.css";
function MyServices() {
  return (
    <div>
      <div className="tabs">
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="is-active">
            <a href="/myservices">My Services</a>
          </li>
          <li>
            <a href="/order">Order</a>
          </li>
        </ul>
      </div>
      <section className="section" id="about">
        <div className="section-heading">
          <h3 className="title is-2">My Services</h3>
        </div>
        <div className="columns is-gapless">
          <div className="column">
            <div className="card">
              <div className="card-content skills-content">
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

export default MyServices;
