


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {useTransition, animated} from 'react-spring'



const Wtf = () =>{

    const [index, setIndex] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
      
          setIndex( (index+1)  % fotos.length)
       
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      });

const fotos = [

        {
          "url": "https://images.unsplash.com/photo-1546096439-63d873fb49a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "kQknnRomWAk",
          "user": "Pierre Châtel-Innocenti"
        },
        {
          "url": "https://images.unsplash.com/photo-1546010226-36a66df47ccf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "_Agl-CUoQvc",
          "user": "Pierre Châtel-Innocenti"
        },
        {
          "url": "https://images.unsplash.com/photo-1578589302500-3fe6d8ab5395?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "xmFe9_aRVP0",
          "user": "USGS"
        },
        {
          "url": "https://images.unsplash.com/photo-1531142548314-d0c367e9f64b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "-hBHRVI2WXI",
          "user": "Michael Shannon"
        },
        {
          "url": "https://images.unsplash.com/photo-1542402647-a0ee7cc2f343?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "aw3LECuvIAk",
          "user": "Samuel Ramos"
        },
        {
          "url": "https://images.unsplash.com/photo-1554085206-7426133314f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "rNPSV1yYwZ4",
          "user": "Sergio Rios"
        },
        {
          "url": "https://images.unsplash.com/photo-1485746587195-5d6d85ddcb33?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "MDupks3qrVo",
          "user": "Glen Jackson"
        },
        {
          "url": "https://images.unsplash.com/photo-1571832307249-565c838c006a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "1CZOvB8AbCM",
          "user": "Clay Banks"
        },
        {
          "url": "https://images.unsplash.com/photo-1507048048024-c5ee15959e36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "LKpV6UGPRkI",
          "user": "Maarten van den Heuvel"
        },
        {
          "url": "https://images.unsplash.com/photo-1511759968852-0de9b0f7c48f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "z7c1ZWPquSg",
          "user": "Andre Hunter"
        },
        {
          "url": "https://images.unsplash.com/photo-1568030141636-987df2bf64f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "pyneu9fJtc8",
          "user": "Harshil Gudka"
        },
        {
          "url": "https://images.unsplash.com/photo-1568879316114-b1671be72502?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "y1N6NpP5yhA",
          "user": "Zoë Reeve"
        },
        {
          "url": "https://images.unsplash.com/photo-1590100958871-a8d13c35ac33?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "f5XEzQ--V1s",
          "user": "Andy Holmes"
        },
        {
          "url": "https://images.unsplash.com/photo-1600791609253-874984981d01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "W7MkB4ghkfM",
          "user": "Benjamin Disinger"
        },
        {
          "url": "https://images.unsplash.com/photo-1529801231037-d67f3dce5d89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "mgJo2xmXyAM",
          "user": "Anthony Aird"
        },
        {
          "url": "https://images.unsplash.com/photo-1570897620591-0ca6af1eacd7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "tqNDO8XtF5M",
          "user": "Ýlona María Rybka"
        },
        {
          "url": "https://images.unsplash.com/photo-1583182318818-c92f4fe08e10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "RpM4z7a7wcw",
          "user": "Clay Banks"
        },
        {
          "url": "https://images.unsplash.com/photo-1521897258701-21e2a01f5e8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "WVUrbhWtRNM",
          "user": "Steve Johnson"
        },
        {
          "url": "https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "eUyNYtwN0tA",
          "user": "Nicole Geri"
        },
        {
          "url": "https://images.unsplash.com/photo-1584573062918-ad06605b3635?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "B1bu7r41HuU",
          "user": "Martin Sanchez"
        },
        {
          "url": "https://images.unsplash.com/photo-1566927540107-c49dc3e7401a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "Vr7dawiv2yo",
          "user": "Katie Drazdauskaite"
        },
        {
          "url": "https://images.unsplash.com/photo-1574786879814-8d498f7dd56c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "EGuOcoec1BE",
          "user": "Andy Holmes"
        },
        {
          "url": "https://images.unsplash.com/photo-1580323315189-0c3f0f97613b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "Gs_J1ysOp-M",
          "user": "Clay Banks"
        },
        {
          "url": "https://images.unsplash.com/photo-1600023989475-a90a185e1f19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "kopgxTqeZvo",
          "user": "Sophia Simoes"
        },
        {
          "url": "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "r41Xthw-fEk",
          "user": "Martin Sanchez"
        },
        {
          "url": "https://images.unsplash.com/photo-1571060366844-f075a4648b11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "tRXPl_FCK9c",
          "user": "Clay Banks"
        },
        {
          "url": "https://images.unsplash.com/photo-1563194081-ef73fa8f19be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "EgWxUsZByFw",
          "user": "Andy Holmes"
        },
        {
          "url": "https://images.unsplash.com/photo-1603883137490-adcf69bb77aa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "eibTgvU7rH0",
          "user": "Sophia Simoes"
        },
        {
          "url": "https://images.unsplash.com/photo-1588007322241-99d626e529e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "1TzDSt94xR0",
          "user": "Clay Banks"
        },
        {
          "url": "https://images.unsplash.com/photo-1575552286163-7ca796f555a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
          "id": "IYLcwiyYUgc",
          "user": "Clay Banks"
        }
      ]
  


  const foto = fotos[index]

  const transitions = useTransition(foto, item => item.id, {
    from: {opacity: 0, position : "absolute", transform: `scale(11)`},
    enter: {opacity: 1 , transform: `scale(1)`},
    leave:{opacity:0, transform: `scale(0.9)`}
  })





return transitions.map(({item, props, key})=>


        <animated.div key={key} style={{

            "background": "lime",
            "backgroundImage": `url(${item.url})`,
            " z-index": "1" ,
            "minHeight": "100%",
            "minWidth": "1024px",
            "position": "fixed",
            ...props
            
            
            }}>
        
                 <h1>{index}</h1>
        
        
        </animated.div>
        
        


)



}

export default Wtf