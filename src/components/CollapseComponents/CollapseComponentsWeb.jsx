import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function CollapseComponentsWeb() {
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
                        <strong> Berapa tambahan Biaya per Fitur ?</strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Untuk biaya tambahan per fitur kita biasa mematok tarif
                        $30, namun kami biasanya meninjau kembali fitur apa saja
                        yang ingin di tambahkan, apabila sangat detail dan rumit
                        mungkin harganya bisa sampai $300.
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
                            apabila ada kendala apakah saya masih bisa meminta
                            bantuan maintenance ?
                        </strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Kami menetapkan waktu revisi yaitu 2 kali untuk setiap
                        jasa pembuatan Web , namun apabila klien meminta untuk
                        menambah maintenance di luar yg 2x revisi itu kami
                        mengenakan biaya $30 per maintenance.
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
                            Apakah Harga yang tertera sudah termasuk hosting ?
                        </strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ya, harga sudah termasuk biaya hosting, dengan jangka
                        waktu 1 tahun.
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
                            Apakah dalam pembuatan web sudah menerapkan SEO ?
                        </strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ya, saya bekerjasama dengan rekan yang sudah
                        berkecimpung lama di dunia SEO tentu saja
                        kredibilitasnya tidak di ragukan lagi.
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
                            {' '}
                            Akankah situs web saya memiliki teknologi yang akan
                            bertahan selama beberapa tahun?
                        </strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Iya. Kecuali beberapa teknologi baru tiba-tiba muncul
                        entah dari mana dan menggemparkan dunia, teknologi
                        React.js akan baik-baik saja selama bertahun-tahun.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
