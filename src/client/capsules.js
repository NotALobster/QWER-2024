

import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";


const URL = "http://localhost:3000/";
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
}

export function GetCookie(){
    const cookies = new Cookies(null, { path: '/' });
    console.log(cookies.get('login'));
}


export function Login(username, password){
    axios.post(URL + "users/signin", {
        username,
        password
    })    
    .then(response => {
        const cookies = new Cookies(null, { path: '/' });
        cookies.set('login', response.data.accessToken);
    })
}

export function HelloWorld(){
    axios.get(URL + "hello");
}

//export default capsules
/*

() => {
          fetch("http://localhost:3000/hello")
          .then((response) => console.log(response.text))
          }
          */