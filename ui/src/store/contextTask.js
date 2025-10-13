import axios from "axios";
import { useReducer, createContext } from "react";
import { useNavigate } from "react-router";

export const TaskContext = createContext({
  taskList: [],
  setTasklist: () => {},
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "getTaskList":
      return action.tasks;
    default:
      return state;
  }
}

export function TaskContextProvider({ children }) {
  const [taskList, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  const setTasklist = (tasklist) => {
    dispatch({
      type: "getTaskList",
      tasks: tasklist,
    });
  };

  const getTask = () => {
    axios.get("http://localhost:1111/tasks").then((res) => {
      setTasklist(res.data)
    });
  };

  const addTask = async (task) => {
    try {
      const postResponse = await axios({
        method: "POST",
        url: "http://localhost:1111/tasks/add",
        headers: {
          Authorization: localStorage.getItem("userDetail"),
        },
        data: {
          ...task,
        },
      });
      console.log("Task added:", postResponse.data);
      navigate("/showTask");
    } catch (error) {
      console.error("Error adding tasks: ", error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const editedResponse = await axios({
        method: "PATCH",
        url: "http://localhost:1111/tasks/edit",
        headers: {
          Authorization: localStorage.getItem("userDetail"),
        },
        params: {
          task_id: updatedTask.task_id,
        },
        data: {
          ...updatedTask,
        },
      });
      console.log("Task updated:", editedResponse.data);
      getTask();
    } catch (err) {
      console.log("Error editing task: ", err);
    }
  };

  const deleteTask = async (task_id) => {
    try {
      const urll = task_id
        ? `http://localhost:1111/tasks/delete?task_id=${task_id}`
        : `http://localhost:1111/tasks/delete`;
      const deleteResponse = await axios({
        method: "DELETE",
        url: urll,
        headers: {
          Authorization: localStorage.getItem("userDetail"),
        },
      });
      console.log("Task deleted:", deleteResponse.data);
      getTask();
    } catch (err) {
      console.log("Error deleting task: ", err);
    }
  };

  return (
    <TaskContext
      value={{
        taskList: taskList,
        setTasklist: setTasklist,
        addTask: addTask,
        deleteTask: deleteTask,
        updateTask: updateTask,
      }}
    >
      {children}
    </TaskContext>
  );
}
