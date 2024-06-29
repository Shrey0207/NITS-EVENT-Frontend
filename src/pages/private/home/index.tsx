import usersGlobalStore, { UsersStoreType } from "../../../store/users-store";

function Homepage() {
  const { currentUser } = usersGlobalStore() as UsersStoreType;
  return (
    <div>
      <h1>Homepage</h1>
      <p>Welcome,{currentUser?.name}!</p>
    </div>
  );
}

export default Homepage;
