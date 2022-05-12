
import { SCENETYPE } from '../util/types'
import React from "react";

const initialState = {
    topCarouselImages: [
        {id: 1, src: "../../assets/img/head.png", alt: "error"},
        {id: 2, src: "../../assets/img/head.png", alt: "error"},
        {id: 3, src: "../../assets/img/head.png", alt: "error"},
        {id: 4, src: "../assets/img/head.png", alt: "error"},
    ],
    apartments: [
        {
            id: 1,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 2,
            room: 3,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 3,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 4,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 5,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 6,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 7,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 8,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 9,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 10,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 11,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 12,
            room: 2,
            block: 1,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
        {
            id: 13,
            room: 3,
            block: 5,
            floor: 1,
            balcony_size: 14,
            common_size: 13.3,
            bedroom_size: 10.9,
            kitchen_size: 9.9,
            child_room_size: 10.9,
            bath_toilet_size: 3.6,
            total_size: 53.9,
            price_m2: 7100000,
            total_price: 398310000,
            path: "/assets/img/t_1.jpg",
            img: "/assets/img/c_1.jpg",
        },
    ],
}

export const scenesReducer = (state=initialState, action) => {
    if(action.type === SCENETYPE){
        return {
            ...state,
            ...action.payload
        }
    }
    else return state
}