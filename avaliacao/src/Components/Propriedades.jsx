import React from "react";
import Card from "./Card";

import {connect} from "react-redux";

function Propriedades(props) {
    const{newValue} = props
    return(
        <Card title={props.titulo} blue>
            <div>
                <span>
                    <span>{`${props.aluno} sua nota é: `}</span>
                    <strong>{newValue}</strong>
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

export default connect(mapStateToProps)(Propriedades)