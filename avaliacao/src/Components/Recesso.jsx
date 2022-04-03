import React from "react";
import Card from "./Card";

import {connect} from "react-redux";

function Recesso(props) {
    const newValue = props
    return(
        <Card title='Está chegando...' yellow>
            <div>
                <span>
                    <strong>
                        <h2>{`Estarei de recesso em ${newValue.newValue} dias`}</h2>
                    </strong>
                </span>
            </div>  
        </Card>
    )
}

function mapStateToProps(state) {
    return{
        newValue: state.numeros.newValue
    }
}

export default connect(mapStateToProps)(Recesso)