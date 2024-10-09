import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { selectUser } from "../redux/auth/selectors";

export default function UserNav() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>
        Welcome <b>{userName.name}</b>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
