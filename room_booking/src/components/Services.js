import React, { Component } from 'react'

import {FaCocktail, FaHiking, FaBeer, FaShuttleVan} from 'react-icons/fa';
import Title from './Title'


export default class Services extends Component {
state={
    services:[
        {
            icon: <FaCocktail/>,
            title: "Free Cocktail",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                   sed do eiusmod tempor incididu'
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                   sed do eiusmod tempor incid'
        },
        {
            icon: <FaShuttleVan />,
            title : "Strongest Beer",
            info: "orem ipsum dolor sit amet, consectetur adipiscing elit, \
                   sed do eiusmod tempor incid"
        },
        {
            icon: <FaBeer />,
            title : "Strongest Beer",
            info: "orem ipsum dolor sit amet, consectetur adipiscing elit, \
                   sed do eiusmod tempor incid"
        }
    ]
};
    render() {
        return (
           <section className="services">
               <Title title="services" />
                <div clasname="services-center">
                    {this.state.services.map((item,index)=> {
                        return(
                        <article key={index} className="service">
                            <span>{item.icon}</span> 
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                    })}
                </div>
           </section>
        );
    }
}
