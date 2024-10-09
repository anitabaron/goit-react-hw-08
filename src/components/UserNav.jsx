import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";

export default function UserNav() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>Welcome nazwaUser</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
