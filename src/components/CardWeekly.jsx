import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './card.css'
import ellipsis from '../images/icon-ellipsis.svg'
import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import selfCare from '../images/icon-selfcare.svg'

const CardWeekly = () => {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState("daily");

    useEffect(() => {
        axios.get("./data.json").then((response) => {
            setData(response.data);
        })
            .catch(err => {
                console.log(err);
            });
    }, [selected])

    const images = {
        work,
        play,
        study,
        exercise,
        social,
        selfCare
    }

    return (
        <div className='container'>
            {data.map(item => {
                const image = images[item.title.toLowerCase()]
                return (
                    <div className="card" key={item.title}>
                        <div className="head">
                            <img src={image || images.selfCare} alt="item" />
                        </div>
                        <div className="info">
                            <div className="menu">
                                <h1>{item.title}</h1>
                                <img src={ellipsis} alt="menu" />
                            </div>
                            <div className="horrair">

                                <h2>{item.timeframes.weekly.current}hrs</h2>
                                <span>Last Week -{item.timeframes.weekly.previous}hrs</span>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardWeekly