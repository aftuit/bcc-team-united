import React from "react";
import Header from "../../components/Header/Header";
import Missions from "../../components/Missions/Missions";
import Preview from "../../components/Preview/Preview";
import Prev_Video from "../../components/Prev_Video/Prev_Video";
const Home = () => {
    return (
        <div>
            <Header/>

            <Missions/>

            <Preview/>

            <Prev_Video />

        </div>
    )
}

export default Home