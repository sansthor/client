import React from "react";
import Header from "../../components/Header/Header";
import FindDigitalService from "../../components/FindDigitalService/FindDigitalService";
import Footer from "../../components/Footer/Footer";

function CatalogService() {
    return (
        <div>
            <Header />
            <div style={{ paddingTop: "100px" }}>
                <FindDigitalService />
            </div>
            <Footer />
        </div>
    );
}

export default CatalogService;
