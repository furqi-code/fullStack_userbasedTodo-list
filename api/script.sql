create database todo_list1;
use todo_list1;

create table users(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
	user_id INT NOT NULL,
  task_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending', 'in-progress', 'completed', 'just now') DEFAULT 'pending',
  created_at DATE NOT NULL,
  due_date DATE,
  updated_at DATE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

INSERT INTO tasks (user_id, title, description, status, created_at, due_date, updated_at)
VALUES (1, 'Sample Task 1', 'Description of task 1', 'pending', '2027-01-09', '2025-10-10', NULL);

select * from users;
select * from tasks;

DELETE FROM tasks WHERE task_id = 1;


drop database todo_list1;