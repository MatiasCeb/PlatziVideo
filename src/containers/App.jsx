import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import PropTypes from "../shared/initialState";
import "../assets/styles/App.scss";

const App = () => {
    const initialState = initialState;
    return PropTypes.mylist.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />

            {PropTypes.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {PropTypes.mylist.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {PropTypes.trends.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {PropTypes.originals.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )    
};

export default App;