

import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

/*
export default class capsules extends Component{
    
    helloWorld(){
        axios.get("http://localhost:3000/hello")
        .then(response => {
            console.log(response.data);
        })
    }

}
*/

export function StartCookie(){
    const cookies = new Cookies(null, { path: '/' });
    cookies.set('login', 'test');
}

export function GetCookie(){
    const cookies = new Cookies(null, { path: '/' });
    console.log(cookies.get('login'));
}



export function HelloWorld(){
    axios.get("http://localhost:3000/hello")
    .then(response => {
        console.log(response.data);
    })
}

//export default capsules
/*

() => {
          fetch("http://localhost:3000/hello")
          .then((response) => console.log(response.text))
          }
          */