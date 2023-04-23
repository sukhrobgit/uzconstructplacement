import Table from 'react-bootstrap/Table';

function UserTable({loading, users, error}) {
  console.log(users, 'from the pros');
  return (
    <Table striped bordered >
      <thead>
        <tr>
         
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>User Type</th>
        </tr>
      </thead>
      <tbody>

        
        {loading? ('Loading...'):
        error? (error):
        users.map(e=>{
          return( 
            <tr>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
           
            <td>{e.email}</td>
            <td>{e.isAdmin ? "Admin" : "User"}</td>
          </tr>
          )
          
        })}
        
      
      
      </tbody>
    </Table>
  );
}

export default UserTable;
