import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../api-services/user-service";
import { message } from "antd";

function Homepage() {
  const [user, setUser] = useState<any>(null);

  const getData = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error: any) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-5">
      <h1>Homepage</h1>
      <p>Welcome,{user?.name}!</p>
    </div>
  );
}

export default Homepage;
