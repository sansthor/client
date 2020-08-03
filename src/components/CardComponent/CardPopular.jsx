import React from 'react';
import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CardComponent from '../../components/CardComponent/CardComponent';

const Wrap = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 25px 25px 100px 25px;

`;

const Image = Styled.div`

    margin-top: 40px;

`;
function CardPopular() {
    return (
        <div>
            <Typography gutterBottom variant="h5" component="h2" align="center">
                <strong>Best Categories Service</strong>
            </Typography>
            <Wrap>
                <Image>
                    <CardComponent
                        title="Wordpress"
                        image="https://bestpartnereducation.com/public/news/2019/12/tertarik-menjadi-web-developer-ikuti-langkah-ini/web%20developer.jpg"
                    />
                </Image>
                <Image>
                    <CardComponent
                        title="Design Thinking"
                        image="https://wisdomeweb.com/wp-content/uploads/2020/01/ReactJS.jpg"
                    />
                </Image>
                <Image>
                    <CardComponent
                        title="Web Development"
                        image="https://bestpartnereducation.com/public/news/2019/12/tertarik-menjadi-web-developer-ikuti-langkah-ini/web%20developer.jpg"
                    />
                </Image>
            </Wrap>
        </div>
    );
}

export default CardPopular;
