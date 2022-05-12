import React from 'react'
import Title from "../Title/Title";
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "./style.scss";


const Missions = () => {

    const missions = [
        { id: 1, img: '/assets/img/development_1.png', title: 'Residential Developments', parag: 'The Group successfully ventured into Real Estate by creating a series of residential spaces at strategic locations in Kolkata, Siliguri and Durgapur under the aegis of Dream Homes.' },
        { id: 2, img: '/assets/img/development_2.png', title: 'Commercial Developments', parag: 'Our mission is to engage in issues that are of concern to individuals, families and communities through an uncompromising commitment to create outstanding living, work and leisure environments.' },
        { id: 3, img: '/assets/img/development_3.png', title: 'Investor', parag: "TReHomes started it's journey almost 3 decades back. The Group has firmly established itself as a trustworthy and dependable organization in Real Estate Industry that delivers quality." },
    ]

    return (
        <div className='mission-wrap'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-md-6">
                    <Title title="OUR MISSION" desc="To be the most trusted name in real estate globally" />
                </div>
                <p className='col-md-5 mt-auto info font-200'>We continuously strive to provide the best living experience.
                    Today, better than yesterday. Tomorrow, better than today. By
                    developing landmark buildings and expansive residences in record time,
                    ensuring the most fulfilling lives to their occupants.
                </p>
            </div>
            <div className="row">
                {
                    missions.map(mission =>
                        <div className='col-md-4 col-12 px-4 text-center' key={mission.key}>
                            <div>
                                <img src={mission.img} alt="" />
                                <h2 className='text-blue my-3 font-400'>{mission.title}</h2>
                                <p className='mt-2 font-200'>{mission.parag}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Missions