import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Home = () => {
const {store, actions} = useContext(Context)

console.log(store.contacts)
	return(
	<div className="text-center mt-5">
		{store.contacts.map((contact)=>{
			return(
				<div key={contact.id}>{contact.name}</div>
			)
		})}
	</div>
	)
	
};
