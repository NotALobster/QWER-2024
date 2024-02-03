

import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";


const URL = 'https://qwer-2024.onrender.com/' //"http://localhost:3000/";
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
    console.log(cookies.get('userToken'));
}


export function Signin(username, password){
    axios.post(URL + "users/signin", {
        username,
        password
    })    
    .then(response => {
        const cookies = new Cookies(null, { path: '/' });
        cookies.set('userToken', response.data.accessToken);
    })
}

export function Signup(username, password){
    axios.post(URL + "users/signup", {
        username,
        password
    }) 
    .catch(err => {
        console.log("if this is 400 then username is already in use")
        console.log(err);
    })       
    .then(response => {
        console.log(response);
    })
}

export function HelloWorld(){
    axios.get(URL + "hello")
    .then(response => console.log(response.data));
}

export function HelloWorldBasic(){
    console.log("Hello World, Basic Edition");
}

export function GetCapsules(){
    const cookies = new Cookies(null, { path: '/' });
    axios.get(URL + "capsules/user", {headers: cookies.get("userToken")})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}

//export default capsules
/*

() => {
          fetch("http://localhost:3000/hello")
          .then((response) => console.log(response.text))
          }
          */