import React from 'react';
import Smurf from './Smurf';

import { connect } from "react-redux"; 

 const SmurfList = ({ isLoading, smurfs })=> {
     // Replace the static isLoading variable with the state loading variable.
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
    return(<div className="listContainer">
        {
            smurfs && smurfs.map((smurf, index) => {
                return <Smurf smurf={smurf} key={index}/>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    };
};

// Connect the smurfs and loading state values to the SmurfList component.
export default connect(mapStateToProps, {})(SmurfList);