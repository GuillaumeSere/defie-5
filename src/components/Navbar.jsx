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
        <div className='card-user' aria-label='card'>
            <div className="card-menu" aria-label='menu'>
                <img src={avatar} alt="avatar" aria-label='avatar' />
                <span aria-label='presentation'>Report for</span>
                <h1 aria-label='name'>Jeremy Robson</h1>
                <nav>
                    <div className='list'>
                        <Link to='/'>
                            <div
                                className={selected === 'daily' ? 'active' : ''}
                                onClick={() => handleClick('daily')}
                            >Daily</div>
                        </Link>

                        <Link to='/weekly'>
                            <div
                                className={selected === 'weekly' ? 'active' : ''}
                                onClick={() => handleClick('weekly')}
                            >Weekly</div>
                        </Link>

                        <Link to='/monthly'>
                            <div
                                className={selected === 'monthly' ? 'active' : ''}
                                onClick={() => handleClick('monthly')}
                            >Monthly</div>
                        </Link>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
