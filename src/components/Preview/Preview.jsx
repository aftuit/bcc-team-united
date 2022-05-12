import React, {memo} from "react";
import Title from "../../components/Title/Title";
import { Container } from "@mui/material";
import Slider from "react-slick";
import "./style.scss";

const Preview = () => {

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        arrow: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    }

    const previews = [
        { id: 1, img: '/assets/img/h3_img2.jpg', icon: '/assets/img/icon1.png', title: 'ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ', desc: 'Жилой комплекс строится по стандартам 21 века, используя такие технологии как современная гидроизоляция, шумоизоляция, теплоизоляция и материалы такие как, Цемент М-500, Бетон М600, монолитные блоки. Строительство осуществляется с использованием современных технологий как зарубежного, так и отечественного производства.' },
        { id: 2, img: '/assets/img/h3_img3.jpg', icon: '/assets/img/icon4.png', title: 'КОМФОРТ И БЕЗОПАСНОСТЬ', desc: 'Проект был сделан в соответствии с базовой техникой свайных радий, в результате чего были получены отчеты организаций с международной аккредитацией, чтобы жилые помещения понесли минимальные повреждения от стихийных бедствий, как землетрясение. Благодаря интенсивному забиванию свай до более плотных почвенных слоев, дом обладает 9 бальной устойчивостью.' },
        { id: 3, img: '/assets/img/h3_img4.jpg', icon: '/assets/img/icon3.png', title: 'ЭКСКЛЮЗИВНЫЙ ДИЗАЙН', desc: 'Уникальный проект, не имеющий аналогов в Узбекистане. Наш проект отличается высококачественным строительством, использованием передовых технологий, а также современным дизайном. Дизайн комплекса был разработан лучшими дизайнерами Турции и отличается своим новомодным и изысканным стилем.' },
        { id: 4, img: '/assets/img/h3_img4.jpg', icon: '/assets/img/icon2.png', title: 'СОВРЕМЕННАЯ АРХИТЕКТУРА', desc: 'Уникальность заключается в том, что подвальные части всего комплекса связаны и предназначены для двух ярусных стоянок автомашин. Первые вторые этажи комплекса отведены под магазины, рестораны и социально бытовые обслуживающие помещения и по второму этажу комплексы соединены между собой проходом-мостом, что создает удобство для населения.' },
    ]

    return (
        <div className="preview-wrap">
            <Container>
                <Title title="OUR ADVANTAGES" desc="Making living spaces affordable" />
            </Container>
            <div className="row-preview">
                <Slider {...settings}>
                    {
                        previews.map(preview =>
                            <div className="container-row">
                                <div className="row" key={preview.id}>
                                    <div className="col-md-6 col-12">
                                        <img src={preview.img} alt="" className="d-block my-auto prw" />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="img-wrapper">
                                            <img src={preview.icon} alt="" />
                                        </div>
                                        <div className="info ">
                                            <h2 className="font-700 text-blue">{preview.title}</h2>
                                            <p className="mt-3 font-400">{preview.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default memo(Preview);