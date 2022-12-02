import { useState } from "react";
import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
export const AddUser = (props) => {
  const [alert, setAlert] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setAlert({
        title:'Input Error',
        message:'Please enter valid Name and Age'
      });
      return;
    }
    if (+age < 1) {
      setAlert({
        title:'Input Age Error',
        message:'Please enter valid Age (>0)'
      });
      return;
    }
    props.addUserToUsers(name, age);
    setAge("");
    setName("");
  };
  const onConfirm = () => {
    setAlert(null);
  }
  return (
    <div>
      {alert && <ErrorModal title={alert.title} message={alert.message} onConfirm={onConfirm} />}
      
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            value={name}
            onChange={onNameChangeHandler}
            id="username"
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={onAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
