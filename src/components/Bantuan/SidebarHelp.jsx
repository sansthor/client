import React from 'react';
import Accordian from './Accordian';
function SidebarHelp() {
    return (
        <div style={{ margin: '50px' }}>
            <h1 className="title is-2" style={{ padding: '40px 0' }}>
                Apa Yang Dapat Kami Bantu?
            </h1>
            <div style={{ marginBottom: '50px' }}>
                <p> Jawaban untuk FAQ.</p>{' '}
                <p>
                    Jika Anda membutuhkan bantuan, periksalah jika pertanyaan
                    Anda telah di jawab.
                </p>
            </div>
            <Accordian />
        </div>
    );
}

export default SidebarHelp;
