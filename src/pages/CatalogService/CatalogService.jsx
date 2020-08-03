import React from 'react';
import Header from '../../components/Header/Header';
import FindDigitalService from '../../components/FindDigitalService/FindDigitalService';
import Footer from '../../components/Footer/Footer';

function CatalogService() {
    return (
        <div>
            <h2 style={{ margin: '50px 0 0 50px' }}>Result For : "Input"</h2>
            <div style={{ paddingTop: '100px' }}>
                <FindDigitalService />
            </div>
        </div>
    );
}

export default CatalogService;
