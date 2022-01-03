import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'
import { motion } from 'framer-motion';
import './styles.scss';

export const Weather = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const getWeatherInfo = async () => {
      try {
        const weatherData = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const currentTemp = (weatherData.data.main.temp * 9/5) + 32;
        const currentDate = format(new Date(), 'MMM dd');
        setTemp(currentTemp);
        setDescription(weatherData.data.weather[0].main);
        setDate(currentDate);
      } catch (err: any) {
        console.log(err.response.data.error);
      }
    };
   
    getWeatherInfo();
  }, []);
  return (
    <motion.section
      className="weather-widget"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <div className="weather-content">
        <div>Minneapolis</div>
        {date && <div>{date}</div>}
        {temp && <div>{Math.round(temp)}&#8457;</div>}
        {description && <div>{description}</div>}
      </div>
    </motion.section>
  );
};