import React from 'react';
import styles from './Table.module.css'; 

interface User {
  name: string;
  age: number;
  sex: string;
  married?: boolean;
  height: number;
}


interface PrajwalProps {
  users: User[];
}


const data: User[] = [
  {
    name: 'Hari',
    age: 25,
    sex: 'male',
    married: true,
    height: 10.6,
  }, {
    name: 'rick',
    age: 10,
    sex: 'male',
    married: false,
    height: 106,
  },{
    name: 'Cakin',
    age: 56,
    sex: 'Female',
    married: false,
    height: 16,
    
  }, {
    name: 'Mita',
    age: 21,
    sex: 'Female',
    married: false,
    height: 16,
    
  }, 
];

const Prajwal: React.FC<PrajwalProps> = ({ users = data }) => {
  return (
    <div className={styles.tableContainer}>
        <h1  className={styles.heading}>Prajwal Table</h1>
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
  );
};

export default Prajwal;