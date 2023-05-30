"use client";

import Image from 'next/image';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore"
import {useState} from "react";
import "./forum.scss"

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyC3XTkJGHuG4ZY3O3_moK3TNYLzpbGZH4Q",
        authDomain: "damirsinbaforum.firebaseapp.com",
        projectId: "damirsinbaforum",
        storageBucket: "damirsinbaforum.appspot.com",
        messagingSenderId: "423008084724",
        appId: "1:423008084724:web:9997a2e2182831dcc934a1",
        measurementId: "G-S12EEE89ME"});
}




const auth = firebase.auth();
const firestore = firebase.firestore();



export default  function Page  ()  {
    const [user] = useAuthState(auth);
    const sectionClass = user ? "chatroom" : "button"
    return (
       <>
           <div className="App">
            <SignOut/>

            <section className={`section${sectionClass}`}>
                {user ? <ChatRoom/> : <SignIn/>}
            </section>

           </div>
       </>
    );
};




function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(() => {
        }).catch(() => {


        });
    }
    return <button onClick={signInWithGoogle} className="text-black font-bold py-2 px-4 border-b-4  rounded" > Войти с помощью гугл акаунта</button>
}


function SignOut() {
    return auth.currentUser && (
        <button className="text-black font-bold py-2 px-4 border-b-4  rounded"  onClick={() => auth.signOut()}> Выйти</button>
    )
}

function ChatRoom() {
    const messagesRef = firestore.collection('messages')

    const query = messagesRef.orderBy('CreatedAt').limit(25);


    const [messages] = useCollectionData(query , {idField: 'id'});


    const [formValue, setFormValue] = useState('');


    const sendMessage = async(e:any) => {
        e.preventDefault();

        //@ts-ignore
        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL


        });

        setFormValue('')
    }

    return(
        <>
            <main>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message = {msg}/>)}
            </main>
            <form onSubmit={sendMessage}>

                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>


                <button className="submit-button" type="submit" > Отправить сообщение </button>
            </form>
        </>
    )
}

function ChatMessage(props:any) {

    const {text , uid, photoURL} = props.message;
    let image;
    // @ts-ignore
    const MessageClass = uid === auth.currentUser.uid ? "sent" : 'received'

    if(photoURL) {
        image = photoURL
    } else {
        image = "/placeholder-image.png"
    }
    return (
        <div className={`message ${MessageClass}`}>

            <Image src={image } alt ="Profile picture" width={40} height={40}>
            </Image>
            <p>{text}</p>
        </div>
    )
}
