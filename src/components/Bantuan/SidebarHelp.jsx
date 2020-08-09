import React from 'react';
import Accordian from './Accordian';
import Card from '@material-ui/core/Card';
function SidebarHelp() {
    return (
        <div style={{ margin: '50px', color: 'black' }}>
            <h1 style={{ padding: '30px 0', fontSize: '36px' }}>
                Apa Yang Dapat Kami Bantu?
            </h1>
            <div style={{ marginBottom: '50px' }}>
                <p>Jawaban untuk FAQ.</p>{' '}
                <p>
                    Jika Anda membutuhkan bantuan, periksalah jika pertanyaan
                    Anda telah di jawab.
                </p>
            </div>

            <Card>
                <Accordian />
            </Card>
        </div>
    );
}

export default SidebarHelp;
