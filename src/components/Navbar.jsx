import React, { useEffect, useState } from 'react'
import './navbar.css'
import avatar from '../images/image-jeremy.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [selected, setSelected] = useState('daily');
    const [data, setData] = useState([]);

    const handleClick = (timeframe) => {
        setSelected(timeframe);
    }

    const getData = () => {
        axios.get("./data.json").then((response) => {
            setData(response.data);
        })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getData(data)
    }, [selected])

    return (
        <div className='card-user'>
            <div className="card-menu">
                <img src={avatar} alt="avatar" />
                <span>Report for</span>
                <h1>Jeremy Robson</h1>
                <nav>
                    <ul className='list'>
                        <Link to='/'>
                            <li
                                className={selected === 'daily' ? 'active' : ''}
                                onClick={() => handleClick('daily')}
                            >Daily</li>
                        </Link>

                        <Link to='/weekly'>
                            <li
                                className={selected === 'weekly' ? 'active' : ''}
                                onClick={() => handleClick('weekly')}
                            >Weekly</li>
                        </Link>

                        <Link to='/monthly'>
                            <li
                                className={selected === 'monthly' ? 'active' : ''}
                                onClick={() => handleClick('monthly')}
                            >Monthly</li>
                        </Link>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
