//import "./Intervalo.css";
import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import {alterarInput} from "../Store/actions/input";

function Numero(props) {
    const {newValue} = props
    return(
        <Card title = "Escolha um número" green>
            <div className="Intervalo">
                <span>
                    <span>Número: </span>
                    <input type="number" value={newValue} 
                    onChange={e => props.alterar(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch){
    return{
        alterar(novoNumero){
            const action = alterarInput(novoNumero)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return{
        newValue: state.numeros.newValue,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numero)