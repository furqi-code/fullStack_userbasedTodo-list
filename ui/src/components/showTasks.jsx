import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { TaskCard } from "./taskCard";
import { TaskContext } from "../store/contextTask";

export function ShowTasks() {
  const { taskList, setTasklist } = useContext(TaskContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:1111/tasks",
      headers: {
        Authorization: localStorage.getItem("userDetail"),
      },
    })
      .then((res) => {
        setTasklist(res.data);  // tasklist[] state update krdo
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      });
  }, [taskList]); // before passing dependancy[] "Zero task added" was showing after edit & delete 
  // now i dont have to manually reload to see the correct changes
  // but this changes the state here also by setTasklist() causing infinite loop to run useEffect 

  if (error) return <h1>BAD REQUEST, REDIRECTING TO LOGIN</h1>;
  if (taskList.length === 0) return <p>Zero task added</p>;

  return (
    <div className="px-4 py-3 ms-[90px]">
      <div className="grid grid-cols-3 gap-4">
        {taskList.map((task) => (
          <div key={task.task_id}>
            <TaskCard {...task} />
          </div>
        ))}
      </div>
    </div>
  );
}
