import { Card } from "../UI/Card";
import classes from "./UsersList.module.css";
export const UsersList = (props) => {
  console.log("userList", props.users);
  return (
      
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.name}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
  );
};
