import React, {useEffect, useState} from 'react';
import './employee.css';
Employee.propTypes = {
    
};

function Employee(props) {
    const [emp, setEmp] = useState(null);
    const [error, setError] = useState(false);
    useEffect(()=>{
           fetch("/employee", ).then(
               (res) => {
                   res.json().then( (data) => {
                       console.log('data',data);
                       setEmp(data);
                       }
                   ).catch(err => {
                       console.log("Error",err)
                       setError(true)
                   })
           }).catch(err => {
               console.log("Error",err)
               setError(true)
           }) ;
        },
        [])

    return (
        <>


            <div className={'employee__container'}>
                <p>Employees:</p>
            {emp && emp.map( e=> <div className={'employee__item'}>{e.email}</div>)}
                {error && <div> Unable to connect server, please run the node.js server in 3001 port</div>}
            </div>

        </>
    );
}

export default Employee;
