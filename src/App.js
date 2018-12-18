import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Interests from "./Interests";
import FavFoods from "./FavFoods";
import Food from "./Food";
import Contact from "./Contact";
import ContactMethod from "./ContactMethod";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Header />
            <AboutMe>
                <Interests />
            </AboutMe>
            <FavFoods>
                <Food 
                    food="Pizza"
                    image="images/pizza.jpg"
                    time="All the time"
                    place="Queen Margharitas"
                />
                <Food 
                    food="Quesadillas"
                    image="images/quesadillas.jpg"
                    time="Afternoon Siesta"
                    place="Mejico"
                />
                <Food 
                    food="Icecream Pancakes"
                    image="images/pancakes.jpg"
                    time="Breaky"
                    place="Pancakes on the Rocks"
                />
                <Food 
                    food="Loaded Fries"
                    image="images/fries.jpg"
                    time="During the game"
                    place="My House"
                />
            </FavFoods>
            <Contact>
                <ContactMethod 
                    method="Phone:"
                    details="+12345678"
                />
                <ContactMethod 
                    method="Email:"
                    details="thatsme@test.com"
                />
                <ContactMethod 
                    method="Twitter:"
                    details="#superfun"
                />
            </Contact>
            <Footer />
        </div>
    );
};

export default App;