import React from 'react';
import FindDigitalService from '../../components/FindDigitalService/FindDigitalService';

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
