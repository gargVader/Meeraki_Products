import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Silicones from './productCategories/Silicones'
import Paints from './productCategories/Paints'
import SilverIonTechnology from './productCategories/Silver_ion_technology'
import LeatherChemicals from './productCategories/Leather_chemicals'
import Api from './productCategories/Api'
import RenewableEnergyProducts from './productCategories/RenewableEnergyProducts'
import WaterTeatmentChemicals from './productCategories/WaterTreatmentChemicals'
import ConstructionChemicals from './productCategories/ConstructionChemicals'
import ProductCategoryCards from './ProductCategoryCards'
import Header from "./Header"


export default function App() {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/">
                        <Header />
                        <ProductCategoryCards />
                    </Route>
                    <Route exact path="/silicones"> <Silicones /> </Route>
                    <Route exact path="/paints"> <Paints /> </Route>
                    <Route exact path="/silver_ion_technology"> <SilverIonTechnology /> </Route>
                    <Route exact path="/leather_chemicals"> <LeatherChemicals /> </Route>
                    <Route exact path="/api"> <Api /> </Route>
                    <Route exact path="/renewable_energy_products"> <RenewableEnergyProducts /> </Route>
                    <Route exact path="/water_treatment_chemicals"> <WaterTeatmentChemicals /> </Route>
                    <Route exact path="/construction_chemicals"> <ConstructionChemicals /> </Route>
                </Switch>

            </div>
        </Router>
    );
}
