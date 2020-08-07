import React from 'react';
import Styled from 'styled-components';
import CardComponent from '../CardComponent/CardComponent';

import './Card.css';

const Wrap = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 25px 25px 100px 25px;

`;

const Image = Styled.div`

    margin-top: 40px;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
   &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   }
`;
function CardPopular() {
    return (
        <div>
            <h1 className="title" align="center">
                Kategori Layanan Favorit
            </h1>
            <Wrap>
                <Image data-aos="fade-right">
                    <CardComponent
                        title="Wordpress"
                        image="https://bestpartnereducation.com/public/news/2019/12/tertarik-menjadi-web-developer-ikuti-langkah-ini/web%20developer.jpg"
                    />
                </Image>
                <Image data-aos="fade">
                    <CardComponent
                        title="Design Thinking"
                        image="https://wisdomeweb.com/wp-content/uploads/2020/01/ReactJS.jpg"
                    />
                </Image>
                <Image data-aos="fade-left">
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
