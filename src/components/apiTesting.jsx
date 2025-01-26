import React, { useEffect, useState } from "react";

const ApiTesting = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const apiResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await apiResponse.json();
        setUsers(data);
      } catch (error) {
        console.log("error : ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // console.log(users, isLoading);

  return (
    <div>
      {isLoading ? (
        <h1>Loading data...</h1>
      ) : (
        <ul>
          {users.map((singleUser) => (
            <li key={singleUser.id}>{singleUser.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiTesting;
