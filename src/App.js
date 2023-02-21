import Service from "./Service";
import { useEffect, useState } from "react";

function App() {
  //initializing users data state
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // calling users method in service class in order to call the api.
    Service.users().then((res) => {
      //seting users data state
      setUserData(res.data.data);
    });
  }, []);

  return (
    <div>
      {/* creating table to show users data */}
      <table>
        <tr>
          <th>Serial Number</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {/* checking if users data is empty or not  */}
        {userData.length > 0 && (
          <>
            {/* printing users in each row of the table from users table data */}
            {userData.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>
                    <img alt="avatar" src={user.avatar} />
                    &nbsp;{user.first_name}&nbsp;{user.last_name}
                  </td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </>
        )}
      </table>
    </div>
  );
}

export default App;
