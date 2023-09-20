import './index.css';
import Employee from './component/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role,setRole] = useState();
  const [employees, setEmployee] = useState([
    {
      id: 1,
      name: "Caleb", 
      role: "manager", 
      image:"https://images.pexels.com/photos/14836935/pexels-photo-14836935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "John", 
      role: "intern", 
      image:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Mikeala", 
      role: "CEO", 
      image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Megan", 
      role: "HOD", 
      image:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Frank", 
      role: "Admin officer", 
      image:"https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Mark", 
      role: "CFO", 
      image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  ]);

  function updateEmployee(id,newName,newRole){
     const updatedEmployees = employees.map((employee)=> {
        if(id === employee.id){
            return {...employee,name: newName, role: newRole};
        }
        return employee;
     })
  }
  const showEmployee = true;
  return (
    <div className="App">

      {showEmployee ?
      <>
        <input type='text' onChange ={(e) => {
          setRole(e.target.value);
        /* role = console.log(e.target.value);*/
        }}/>
          <div className = "flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
               <Employee 
                  key={employee.id} 
                  id={employee.id} 
                  name={employee.name} 
                  role={employee.role} 
                  image={employee.image} 
                  updateEmployee={updateEmployee}
               />
              );


            })}      

          </div> 
      </>
      :
        <p>You do not have access to the employees</p>

}
    </div>
  );
}

export default App;
