import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordianComponents from './AccordianComponents';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <strong>Saya Lupa Kata Sandi Saya</strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Anda dapat mengubah kata sandi dengan menghubungi Admin
                        Digitiarian Anda akan menerima email yang menjelaskan
                        cara untuk membuat ulang kata sandi Anda.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>
                        <strong>
                            Transaksi Sudah Selesai namun saldo belum bertambah
                            ?
                        </strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Harap menunggu selama 10 menit apabila saldo belum juga
                        bertambah silahkan hubungi admin digitarian
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <AccordianComponents
                titleone="Saya tak sengaja membuat lebih dari satu akun. Dapatkah saya menggabungkan kedua akun tersebut?"
                descone="Sayangnya, Anda tidak dapat menggabungkan banyak akun. Silakan pilih satu akun dan menggunakannya."
                titletwo="Saya ingin mengubah username saya."
                desctwo="Anda dapat mengubah username Anda dengan cara masuk sebagai member/talent lalu klik menu Dropdown di sebelah kanan lalu pilih edit profile"
            />

            <AccordianComponents
                titleone="Halaman tidak ditampilkan dengan benar."
                descone="Jika perangkat Anda memiliki masalah koneksi internet:
Cobalah mengakses dari jaringan yang berbeda atau hubungi administrator jaringan Anda.
Jika cara di atas tidak dapat yang menyelesaikan masalah ini, tolong kirimkan cuplikan layar kepada admin Digitarian."
                titletwo="Bagaiman jika koneksi internet putus ketika transaksi berjalan?"
                desctwo="Mohon periksa pada menu 'riwayat pembelian', jika transaksi tersebut masuk ke dalam daftar riwayat pembelian maka tidak perlu dilakukan transaksi ulang. Sebaliknya, jika tidak masuk ke dalam daftar riwayat pembelian, maka lakukan transaksi ulang."
            />

            <AccordianComponents
                titleone="Bagaimana cara untuk menghapus akun saya?"
                descone="Anda dapat menghubungi admin Digitarian namu perl di ketahui apabila anda ingin menghapus akun, semua riwayat pembelian dan pleyanan service anda tidak akan pernah di tampilkan lagi"
                titletwo="Apa keuntungan menggunakan Digitarian"
                desctwo="Digitarian sangat mudah dan simple, dengan menemukan pelanggan dan pembeli serta menjamin keamanan dalam transaksi"
            />
        </div>
    );
}
