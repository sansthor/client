import React from "react";

function NavbarUser() {
  let url = "";
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src="https://img.vim-cn.com/6a/ed728d1db5126a936b5e1237e9e3aa58dd3100.png"
              width="112"
              height="28"
              alt="brand"
            ></img>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href={url} class="navbar-item">
              Bantuan
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a href="/catalog" class="button is-light">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div
              class="navbar-item has-dropdown is-hoverable"
              style={{ marginRight: "5em" }}
            >
              <a href={url} class="navbar-link">
                @username
              </a>

              <div class="navbar-dropdown">
                <a href="/profile" class="navbar-item">
                  Feed
                </a>
                <a href="/profile/edit" class="navbar-item">
                  Edit Profile
                </a>
                <a href="/dashboard" class="navbar-item">
                  Halaman Talent
                </a>
                <hr class="navbar-divider" />
                <a href={url} class="navbar-item">
                  <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
                  &nbsp;&nbsp;Keluar
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
