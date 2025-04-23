import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Project/Project.css';
import PageTransition from '../../components/PageTransition';
import Footer from '../../components/Footer';

const Project = () => {
  const [lightData, setLightData] = useState([]);
  const [fanData, setFanData] = useState([]);

  useEffect(() => {
    axios.get("https://smart-lynk-backend.onrender.com/api/devices/usage")
      .then(response => {
        const light = response.data.filter(item => item.device === "light");
        const fan = response.data.filter(item => item.device === "fan");

        setLightData(light);
        setFanData(fan);
      })
      .catch(error => console.error("Error fetching usage data:", error));
  }, []);

  const getCategories = (data) => data.map(item => new Date(item.timestamp).toLocaleTimeString());

  const getChartSeries = (data, deviceName) => ([
    {
      name: `${deviceName} On`,
      data: data.map(item => item.status === "on" ? 1 : 0)
    },
    {
      name: `${deviceName} Off`,
      data: data.map(item => item.status === "off" ? 1 : 0)
    }
  ]);

  const getChartOptions = (deviceName) => ({
    chart: {
      type: 'bar',
      height: 450,
      width: '100%',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#00E396', '#FF4560'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    stroke: {
      width: 4
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [],
      title: {
        text: 'Time'
      },
      labels: {
        rotate: -45
      }
    },
    yaxis: {
      min: 0,
      max: 1,
      labels: {
        formatter: (value) => (value === 1 ? 'On' : (value === 0 ? 'Off' : ''))
      },
      title: {
        text: 'Status'
      }
    },
    title: {
      text: `${deviceName} Usage Bar Graph`,
      align: 'center',
      style: {
        fontSize: '22px'
      }
    },
    legend: {
      position: 'top'
    }
  });

 

  return (
    <>
    
    <div className='usage-page' data-aos="fade-left"  style={{ padding: '20px' }}>
      <h2 className='usage-title'>Device Usage Statistics</h2>

      <div className='chart-section' style={{ marginBottom: '50px' }}>
        
        <Chart
          options={{
            ...getChartOptions("Light"),
            xaxis: { categories: getCategories(lightData) }
          }}
          series={getChartSeries(lightData, "Light")}
          type="bar"
          height="350"
          width="900"
        />
      </div>

      <div className='chart-section'>
        
        <Chart
          options={{
            ...getChartOptions("Fan"),
            xaxis: { categories: getCategories(fanData) }
          }}
          series={getChartSeries(fanData, "Fan")}
          type="bar"
          height="350"
          width="900"
        />
      </div>
    </div>
    <Footer />
    
    </>
  );
};

export default Project;