import React from 'react';
import CardComponentsCategories from '../CardComponent/CardComponentsCategories';
function CardRiwayat() {
    return (
        <div className="notification">
            <CardComponentsCategories
                image="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/KJMaqOmCNiMe4USlckLcUlJzPKfQhEt8Z8WqWMhv.png"
                title="Membuat web Dengan React"
                name="LeviAckerman"
                avatar="https://i.pinimg.com/originals/97/54/f6/9754f6c22aeade64c3e77cf1c9406567.jpg"
            />
            <div className="buttons is-right">
                <button
                    className="button is-link is-rounded"
                    style={{ marginTop: '1em' }}
                >
                    Tandai Selesai
                </button>
            </div>
        </div>
    );
}

export default CardRiwayat;
