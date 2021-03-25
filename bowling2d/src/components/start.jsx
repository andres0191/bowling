import { React, useState, useEffect } from 'react';


function Start({values}){


    return(
        <div className="container">
            <h1 className="div-h1-playerOne">{values.playerOne}</h1>
            <h2>{values.playerTwo}</h2>
        </div>
    )
}

export default Start