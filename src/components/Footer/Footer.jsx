import React from 'react';

import '../../assets/css/Home.css';

function Footer() {
    return (
        <footer className="footer">
            <p>
                <strong className="white">Bulma</strong> by{' '}
                <a href="http://jgthms.com">Jeremy Thomas</a>. The source code
                is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                . The website content is licensed
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                </a>
                .
            </p>
        </footer>
    );
}

export default Footer;
