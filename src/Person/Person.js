import React from 'react';

const person  = (props) => {
    return (
       <div>
           <p>Iam {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p> {/* Children bliver brugt til at render alt det der står mellem opening og closening tag af vores component Så når vi i app.js bruger denne component vil vi kunne putte noget ind imellem <Person>noget ind her </Person>*/}
        </div> 
    
    )
}

export default person;