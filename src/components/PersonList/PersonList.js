import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';
import PersonCard from '../PersonCard/PersonCard';


const PersonList = ({persons}) => {
    return (
            <div className = 'tc f3'>
               <h2>Licensees</h2>
               {
               persons.map((person,i) => {
               	return (
                    <PersonCard 
                    key={persons[i].id}
                    id={persons[i].id}

                    licLastName={persons[i].licLastName}
                    licFirstName={persons[i].licFirstName}
                     licNo={persons[i].licNo}
                    licExpDate={persons[i].licExpDate}
                     licStatus={persons[i].licStatus}

                    />
                    );
                })
               }
            </div>
          );
  }

export default PersonList;