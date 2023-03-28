import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import CardWeekly from "./components/CardWeekly";
import CardMonthly from "./components/CardMonthly";

const App = (props) => {

    const { title, timeframes } = props;

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState("daily");

    
    useEffect(() => {
        axios.get("/data.json").then((response) => {
            setData(response.data);
        })
            .catch(err => {
                console.log(err);
            });
    }, [selected])

      const handleClick = (timeframe) => {
        setSelected(timeframe);
      };

  return (
    <div className="App">
        <div className="content">
        <Navbar handleClick={handleClick}  selected={selected} />
            <Routes>
                <Route path='/' element={<Card key={title} title={title} timeframes={timeframes} />} />
                <Route path='/weekly' element={<CardWeekly />} />
                <Route path='/monthly' element={<CardMonthly />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
