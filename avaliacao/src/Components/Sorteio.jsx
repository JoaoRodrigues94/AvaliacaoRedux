import React from "react";
import Card from "./Card";

import {connect} from "react-redux";

function Sorteio(props) {
    const {newValue} = props
    const min = 0
    const aleatorio = parseInt(Math.random() * (newValue-min)) + min
    return(
        <Card title="Sorteio dos Números de 0 a N" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <span>{aleatorio}</span>
                </span>
            </div>  
        </Card>
    )
}

function mapStateToProps(state) {
    return{
        min: 0,
        newValue: state.numeros.newValue
    }
}

export default connect(mapStateToProps)(Sorteio)