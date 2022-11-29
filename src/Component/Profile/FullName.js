import React from "react";

const MyName = () => {
 return <h3>Benna WALID</h3>
};

export default MyName;

/*second function*/

let firstName = "Walid";
let lastName = "Benna";

export const MyName2 = () => {
return <p>{firstName + " " + lastName}</p>;
};