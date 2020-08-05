import React from 'react';

import Cari from '../../components/Home/Cari/Cari';
import CardCategories from '../../components/CardComponent/CardCategories';
import TentangKami from '../../components/Home/TentangKami/TentangKami';
import MottoKami from '../../components/Home/MottoKami/MottoKami';
import LayananKami from '../../components/Home/LayananKami/LayananKami';
import PenawaranTalent from '../../components/Home/PenawaranTalent/PenawaranTalent';
import SaranMasukan from '../../components/Home/SaranMasukan/SaranMasukan';

import '../../assets/css/Home.css';

function Home() {
    return (
        <div>
            {/* Begin Main Content */}
            <div className="main-content">
                <Cari />
                <CardCategories />
                <TentangKami />
                <MottoKami />
                <LayananKami />
                <PenawaranTalent />
                <SaranMasukan />
            </div>
            {/* End Main Content */}
        </div>
    );
}

export default Home;
