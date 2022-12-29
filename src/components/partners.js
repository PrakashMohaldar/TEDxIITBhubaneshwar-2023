import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { PartnersData } from "../data/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay,Pagination} from 'swiper';

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay ,Pagination]);

const Partners = () =>{
    const {sectionContent, items} = PartnersData;
    const {title} = sectionContent;

    const carouselOptions = {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        speed: 3500,
        pagination: {
          el: "#client-carousel-pagination",
          type: "bullets",
          clickable: true
        },
        autoplay:{
            delay: 2500
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          576: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          992: {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1200: {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        }
      };

      return (
        <section className="commonSection client">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="sec_title">{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper className="client_slider" {...carouselOptions}>
              {items.map(({ url, image }, index) => (
                <SwiperSlide key={index}>
                  <div className="singleClient">
                    <LinkR href={url}>
                      <a>
                        <img src={image} alt="" />
                      </a>
                    </LinkR>
                  </div>
                </SwiperSlide>
              ))}
              <div
                className="swiper-pagination"
                id="client-carousel-pagination"
              ></div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
      )
};
export default Partners