import React from 'react'
import styles from './Table.module.css'; 
interface User {
  name: string;
  age: number;
  sex: string;
  married?: boolean;
  height: number;
}
const data: User[] = [
  {
    name: 'Ram',
    age: 21,
    sex: 'male',
    married: true,
    height: 12.6,
  }, {
    name: 'rizck',
    age: 10,
    sex: 'male',
    married: false,
    height: 106,
  },{
    name: 'Rita',
    age: 56,
    sex: 'Female',
    married: false,
    height: 16,
    
  }, {
    name: 'Samita',
    age: 26,
    sex: 'Female',
    married: false,
    height: 16,
    
  }, 
    
];


interface PrajwalProps {
  users: User[];
}
const Susanktable: React.FC<PrajwalProps> = ({ users = data }) => {
  return (
      <div className={styles.tableContainer}>
        <h1  className={styles.heading}>Susank Table </h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Married</th>
            <th>Height (cm)</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              <td>{item.married ? 'Yes' : 'No'}</td>
              <td>{item.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Susanktable;