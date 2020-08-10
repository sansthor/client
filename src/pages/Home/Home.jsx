import React from 'react';

import Cari from '../../components/Home/Cari/Cari';
import CardCategories from '../../components/CardComponent/CardCategories';
import TentangKami from '../../components/Home/TentangKami/TentangKami';
import MottoKami from '../../components/Home/MottoKami/MottoKami';
import LayananKami from '../../components/Home/LayananKami/LayananKami';
import CardPopular from '../../components/CardComponent/CardPopular';
// import SaranMasukan from '../../components/Home/SaranMasukan/SaranMasukan';

import '../../assets/css/Home.css';

function Home() {
    return (
        <div>
            {/* Begin Main Content */}
            <div className="main-content">
                <Cari />
                <CardCategories />
                <div style={{ marginTop: '5em' }}></div>
                <CardPopular />
                <MottoKami />
                <LayananKami />
                <TentangKami />
                {/* <SaranMasukan /> */}
            </div>
            {/* End Main Content */}
        </div>
    );
}

export default Home;
