import firebase from "firebase/app";
import { toast } from "./toast";
import "firebase/firestore";
import { resolve } from "path";
require('firebase/auth')

const config = {
    apiKey: "AIzaSyCoHSb3tht2732yacCVnmc1Zik_Arya5NM",
    authDomain: "ionicproget.firebaseapp.com",
    projectId: "ionicproget",
    storageBucket: "ionicproget.appspot.com",
    messagingSenderId: "420996302997",
    appId: "1:420996302997:web:1b862605af61a7be14b39c",
    measurementId: "G-JFFY2L4TXM"
};
firebase.initializeApp(config)

export function getCurrentUser(){
    return new Promise((resolve,reject)=>{
        const unsubscribe= firebase.auth().onAuthStateChanged(function(user){
            if(user){
                resolve(user)
               
            }
            else{
                resolve(null)
            }
            unsubscribe()
        })
    })
 
}

export function logoutUser(){
    return firebase.auth().signOut()
}

export async function loginUser(username: string, password: string) {

    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
     
        return res
    } catch (error) {
        toast(error.message,5000)
        return false
    }

}

export async function registerUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message,4000)
        return false
    }
}