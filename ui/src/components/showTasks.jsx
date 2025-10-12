import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { TaskCard } from "./taskCard";
import { TaskContext } from "../store/contextTask";

export function ShowTasks() {
  // const { taskList } = useContext(TaskContext);
  const [taskList, setTasks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:1111/tasks",
      headers: {
        Authorization: localStorage.getItem("userDetail"),
      },
    })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        // alert("TOKEN NOT FOUND!!");
        setError(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      });
  }, []);

  if (error) return <h1>BAD REQUEST, REDIRECTING TO LOGIN</h1>;
  if (taskList.length === 0) return <p>Zero task added</p>;

  return (
    <div className="px-4 py-3 ms-[90px]">
      <div className="grid grid-cols-3 gap-4">
        {taskList.map((task) => (
          <div key={task.id}>
            <TaskCard {...task} />
          </div>
        ))}
      </div>
    </div>
  );
}
