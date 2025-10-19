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
  }, []); 
  
  if (error) return <h1 className="p-8 ms-24">BAD REQUEST, REDIRECTING TO LOGIN</h1>;
  if (taskList.length === 0) return <p className="p-8 ms-24">Zero task added</p>;

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
