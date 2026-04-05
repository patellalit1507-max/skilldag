const questions = [
  {
    id: 1,
    title: "Select All Employees",
    difficulty: "Easy",
    problem: "Write a query to select all columns from the `employees` table.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT * FROM employees;",
    expectedOutput: [
      { id: 1, name: "Alice", department: "Engineering", salary: 90000, hire_date: "2020-01-15" },
      { id: 2, name: "Bob", department: "Marketing", salary: 75000, hire_date: "2019-06-01" },
      { id: 3, name: "Charlie", department: "Engineering", salary: 95000, hire_date: "2018-03-20" },
      { id: 4, name: "Diana", department: "HR", salary: 70000, hire_date: "2021-09-10" },
      { id: 5, name: "Eve", department: "Marketing", salary: 80000, hire_date: "2020-11-05" },
    ],
  },
  {
    id: 2,
    title: "Filter by Department",
    difficulty: "Easy",
    problem: "Select the `name` and `salary` of all employees in the **Engineering** department.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, salary FROM employees WHERE department = 'Engineering';",
    expectedOutput: [
      { name: "Alice", salary: 90000 },
      { name: "Charlie", salary: 95000 },
    ],
  },
  {
    id: 3,
    title: "Order by Salary",
    difficulty: "Easy",
    problem: "Select all employees ordered by `salary` in **descending** order. Return all columns.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT * FROM employees ORDER BY salary DESC;",
    expectedOutput: [
      { id: 3, name: "Charlie", department: "Engineering", salary: 95000, hire_date: "2018-03-20" },
      { id: 1, name: "Alice", department: "Engineering", salary: 90000, hire_date: "2020-01-15" },
      { id: 5, name: "Eve", department: "Marketing", salary: 80000, hire_date: "2020-11-05" },
      { id: 2, name: "Bob", department: "Marketing", salary: 75000, hire_date: "2019-06-01" },
      { id: 4, name: "Diana", department: "HR", salary: 70000, hire_date: "2021-09-10" },
    ],
  },
  {
    id: 4,
    title: "Count by Department",
    difficulty: "Easy",
    problem: "Count the number of employees in each department. Return columns `department` and `count`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT department, COUNT(*) AS count FROM employees GROUP BY department;",
    expectedOutput: [
      { department: "Engineering", count: 2 },
      { department: "HR", count: 1 },
      { department: "Marketing", count: 2 },
    ],
  },
  {
    id: 5,
    title: "Average Salary",
    difficulty: "Easy",
    problem: "Find the average salary for each department. Return `department` and `avg_salary` (rounded to nearest integer).",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT department, ROUND(AVG(salary)) AS avg_salary FROM employees GROUP BY department;",
    expectedOutput: [
      { department: "Engineering", avg_salary: 92500.0 },
      { department: "HR", avg_salary: 70000.0 },
      { department: "Marketing", avg_salary: 77500.0 },
    ],
  },
  {
    id: 6,
    title: "Join Orders with Customers",
    difficulty: "Medium",
    problem: "Write a query to show each order with the customer name. Return `order_id`, `customer_name`, `product`, and `amount`.",
    schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  customer_name TEXT,
  city TEXT
);

CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product TEXT,
  amount INTEGER
);`,
    seed: `INSERT INTO customers VALUES
  (1, 'John', 'New York'),
  (2, 'Sarah', 'Chicago'),
  (3, 'Mike', 'Houston');

INSERT INTO orders VALUES
  (101, 1, 'Laptop', 1200),
  (102, 2, 'Phone', 800),
  (103, 1, 'Tablet', 500),
  (104, 3, 'Monitor', 350),
  (105, 2, 'Keyboard', 100);`,
    answer: "SELECT o.order_id, c.customer_name, o.product, o.amount FROM orders o JOIN customers c ON o.customer_id = c.id;",
    expectedOutput: [
      { order_id: 101, customer_name: "John", product: "Laptop", amount: 1200 },
      { order_id: 102, customer_name: "Sarah", product: "Phone", amount: 800 },
      { order_id: 103, customer_name: "John", product: "Tablet", amount: 500 },
      { order_id: 104, customer_name: "Mike", product: "Monitor", amount: 350 },
      { order_id: 105, customer_name: "Sarah", product: "Keyboard", amount: 100 },
    ],
  },
  {
    id: 7,
    title: "Total Spending per Customer",
    difficulty: "Medium",
    problem: "Find the total amount spent by each customer. Return `customer_name` and `total_spent`, ordered by `total_spent` descending.",
    schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  customer_name TEXT,
  city TEXT
);

CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product TEXT,
  amount INTEGER
);`,
    seed: `INSERT INTO customers VALUES
  (1, 'John', 'New York'),
  (2, 'Sarah', 'Chicago'),
  (3, 'Mike', 'Houston');

INSERT INTO orders VALUES
  (101, 1, 'Laptop', 1200),
  (102, 2, 'Phone', 800),
  (103, 1, 'Tablet', 500),
  (104, 3, 'Monitor', 350),
  (105, 2, 'Keyboard', 100);`,
    answer: "SELECT c.customer_name, SUM(o.amount) AS total_spent FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.customer_name ORDER BY total_spent DESC;",
    expectedOutput: [
      { customer_name: "John", total_spent: 1700 },
      { customer_name: "Sarah", total_spent: 900 },
      { customer_name: "Mike", total_spent: 350 },
    ],
  },
  {
    id: 8,
    title: "Subquery - Above Average Salary",
    difficulty: "Medium",
    problem: "Find all employees whose salary is above the overall average salary. Return `name`, `department`, and `salary`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, department, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
    expectedOutput: [
      { name: "Alice", department: "Engineering", salary: 90000 },
      { name: "Charlie", department: "Engineering", salary: 95000 },
    ],
  },
  {
    id: 9,
    title: "Students with Top Grades",
    difficulty: "Medium",
    problem: "Find students who scored **90 or above** in any subject. Return distinct `student_name` and `subject` with their `score`, ordered by score descending.",
    schema: `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  student_name TEXT,
  grade_level INTEGER
);

CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  student_id INTEGER,
  subject TEXT,
  score INTEGER
);`,
    seed: `INSERT INTO students VALUES
  (1, 'Amy', 10),
  (2, 'Ben', 11),
  (3, 'Cara', 10),
  (4, 'Dan', 12);

INSERT INTO scores VALUES
  (1, 1, 'Math', 95),
  (2, 1, 'Science', 88),
  (3, 2, 'Math', 72),
  (4, 2, 'Science', 91),
  (5, 3, 'Math', 90),
  (6, 3, 'Science', 85),
  (7, 4, 'Math', 60),
  (8, 4, 'Science', 78);`,
    answer: "SELECT s.student_name, sc.subject, sc.score FROM students s JOIN scores sc ON s.id = sc.student_id WHERE sc.score >= 90 ORDER BY sc.score DESC;",
    expectedOutput: [
      { student_name: "Amy", subject: "Math", score: 95 },
      { student_name: "Ben", subject: "Science", score: 91 },
      { student_name: "Cara", subject: "Math", score: 90 },
    ],
  },
  {
    id: 10,
    title: "HAVING Clause - Big Departments",
    difficulty: "Medium",
    problem: "Find departments that have a total salary expenditure greater than **150,000**. Return `department` and `total_salary`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department HAVING total_salary > 150000;",
    expectedOutput: [
      { department: "Engineering", total_salary: 185000 },
      { department: "Marketing", total_salary: 155000 },
    ],
  },

  // ==================== ADVANCED QUESTIONS (11-30) ====================

  {
    id: 11,
    title: "ROW_NUMBER - Salary Ranking",
    difficulty: "Advanced",
    problem: "Assign a row number to each employee ordered by `salary` descending. Return `name`, `salary`, and `row_num`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    expectedOutput: [
      { name: "Charlie", salary: 95000, row_num: 1 },
      { name: "Alice", salary: 90000, row_num: 2 },
      { name: "Eve", salary: 80000, row_num: 3 },
      { name: "Bob", salary: 75000, row_num: 4 },
      { name: "Diana", salary: 70000, row_num: 5 },
    ],
  },
  {
    id: 12,
    title: "RANK with Ties",
    difficulty: "Advanced",
    problem: "Rank contestants by `score` (descending) using `RANK()`. Note that tied scores get the same rank and the next rank is skipped. Return `name`, `score`, and `rank`.",
    schema: `CREATE TABLE contest (
  id INTEGER PRIMARY KEY,
  name TEXT,
  score INTEGER
);`,
    seed: `INSERT INTO contest VALUES
  (1, 'Alice', 95),
  (2, 'Bob', 92),
  (3, 'Charlie', 95),
  (4, 'Diana', 88),
  (5, 'Eve', 92);`,
    answer: "SELECT name, score, RANK() OVER (ORDER BY score DESC) AS rank FROM contest;",
    expectedOutput: [
      { name: "Alice", score: 95, rank: 1 },
      { name: "Charlie", score: 95, rank: 1 },
      { name: "Bob", score: 92, rank: 3 },
      { name: "Eve", score: 92, rank: 3 },
      { name: "Diana", score: 88, rank: 5 },
    ],
  },
  {
    id: 13,
    title: "DENSE_RANK - No Gaps",
    difficulty: "Advanced",
    problem: "Rank contestants by `score` (descending) using `DENSE_RANK()` so there are no gaps in rank numbers. Return `name`, `score`, and `dense_rank`.",
    schema: `CREATE TABLE contest (
  id INTEGER PRIMARY KEY,
  name TEXT,
  score INTEGER
);`,
    seed: `INSERT INTO contest VALUES
  (1, 'Alice', 95),
  (2, 'Bob', 92),
  (3, 'Charlie', 95),
  (4, 'Diana', 88),
  (5, 'Eve', 92);`,
    answer: "SELECT name, score, DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rank FROM contest;",
    expectedOutput: [
      { name: "Alice", score: 95, dense_rank: 1 },
      { name: "Charlie", score: 95, dense_rank: 1 },
      { name: "Bob", score: 92, dense_rank: 2 },
      { name: "Eve", score: 92, dense_rank: 2 },
      { name: "Diana", score: 88, dense_rank: 3 },
    ],
  },
  {
    id: 14,
    title: "ROW_NUMBER with PARTITION BY",
    difficulty: "Advanced",
    problem: "Rank employees **within each department** by salary (highest first). Return `name`, `department`, `salary`, and `dept_rank`. Order results by `department`, then `dept_rank`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, department, salary, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees ORDER BY department, dept_rank;",
    expectedOutput: [
      { name: "Charlie", department: "Engineering", salary: 95000, dept_rank: 1 },
      { name: "Alice", department: "Engineering", salary: 90000, dept_rank: 2 },
      { name: "Diana", department: "HR", salary: 70000, dept_rank: 1 },
      { name: "Eve", department: "Marketing", salary: 80000, dept_rank: 1 },
      { name: "Bob", department: "Marketing", salary: 75000, dept_rank: 2 },
    ],
  },
  {
    id: 15,
    title: "LAG - Month-over-Month Change",
    difficulty: "Advanced",
    problem: "For each month, show the revenue, the previous month's revenue (`prev_revenue`), and the difference (`change`). Use `LAG()`. Order by `month`.",
    schema: `CREATE TABLE monthly_sales (
  month TEXT PRIMARY KEY,
  revenue INTEGER
);`,
    seed: `INSERT INTO monthly_sales VALUES
  ('2024-01', 10000),
  ('2024-02', 12000),
  ('2024-03', 9000),
  ('2024-04', 15000),
  ('2024-05', 13000),
  ('2024-06', 17000);`,
    answer: "SELECT month, revenue, LAG(revenue) OVER (ORDER BY month) AS prev_revenue, revenue - LAG(revenue) OVER (ORDER BY month) AS change FROM monthly_sales ORDER BY month;",
    expectedOutput: [
      { month: "2024-01", revenue: 10000, prev_revenue: null, change: null },
      { month: "2024-02", revenue: 12000, prev_revenue: 10000, change: 2000 },
      { month: "2024-03", revenue: 9000, prev_revenue: 12000, change: -3000 },
      { month: "2024-04", revenue: 15000, prev_revenue: 9000, change: 6000 },
      { month: "2024-05", revenue: 13000, prev_revenue: 15000, change: -2000 },
      { month: "2024-06", revenue: 17000, prev_revenue: 13000, change: 4000 },
    ],
  },
  {
    id: 16,
    title: "LEAD - Look Ahead",
    difficulty: "Advanced",
    problem: "For each month, show the revenue and the **next** month's revenue (`next_revenue`). Use `LEAD()`. Order by `month`.",
    schema: `CREATE TABLE monthly_sales (
  month TEXT PRIMARY KEY,
  revenue INTEGER
);`,
    seed: `INSERT INTO monthly_sales VALUES
  ('2024-01', 10000),
  ('2024-02', 12000),
  ('2024-03', 9000),
  ('2024-04', 15000),
  ('2024-05', 13000),
  ('2024-06', 17000);`,
    answer: "SELECT month, revenue, LEAD(revenue) OVER (ORDER BY month) AS next_revenue FROM monthly_sales ORDER BY month;",
    expectedOutput: [
      { month: "2024-01", revenue: 10000, next_revenue: 12000 },
      { month: "2024-02", revenue: 12000, next_revenue: 9000 },
      { month: "2024-03", revenue: 9000, next_revenue: 15000 },
      { month: "2024-04", revenue: 15000, next_revenue: 13000 },
      { month: "2024-05", revenue: 13000, next_revenue: 17000 },
      { month: "2024-06", revenue: 17000, next_revenue: null },
    ],
  },
  {
    id: 17,
    title: "Running Total with SUM OVER",
    difficulty: "Advanced",
    problem: "Calculate a running total of revenue ordered by month. Return `month`, `revenue`, and `running_total`.",
    schema: `CREATE TABLE monthly_sales (
  month TEXT PRIMARY KEY,
  revenue INTEGER
);`,
    seed: `INSERT INTO monthly_sales VALUES
  ('2024-01', 10000),
  ('2024-02', 12000),
  ('2024-03', 9000),
  ('2024-04', 15000),
  ('2024-05', 13000),
  ('2024-06', 17000);`,
    answer: "SELECT month, revenue, SUM(revenue) OVER (ORDER BY month) AS running_total FROM monthly_sales ORDER BY month;",
    expectedOutput: [
      { month: "2024-01", revenue: 10000, running_total: 10000 },
      { month: "2024-02", revenue: 12000, running_total: 22000 },
      { month: "2024-03", revenue: 9000, running_total: 31000 },
      { month: "2024-04", revenue: 15000, running_total: 46000 },
      { month: "2024-05", revenue: 13000, running_total: 59000 },
      { month: "2024-06", revenue: 17000, running_total: 76000 },
    ],
  },
  {
    id: 18,
    title: "3-Month Moving Average",
    difficulty: "Advanced",
    problem: "Calculate a 3-month moving average of revenue using a window frame (`ROWS BETWEEN 2 PRECEDING AND CURRENT ROW`). Return `month`, `revenue`, and `moving_avg` (rounded to 2 decimal places). Order by `month`.",
    schema: `CREATE TABLE monthly_sales (
  month TEXT PRIMARY KEY,
  revenue INTEGER
);`,
    seed: `INSERT INTO monthly_sales VALUES
  ('2024-01', 10000),
  ('2024-02', 12000),
  ('2024-03', 9000),
  ('2024-04', 15000),
  ('2024-05', 13000),
  ('2024-06', 17000);`,
    answer: "SELECT month, revenue, ROUND(AVG(revenue) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS moving_avg FROM monthly_sales ORDER BY month;",
    expectedOutput: [
      { month: "2024-01", revenue: 10000, moving_avg: 10000.0 },
      { month: "2024-02", revenue: 12000, moving_avg: 11000.0 },
      { month: "2024-03", revenue: 9000, moving_avg: 10333.33 },
      { month: "2024-04", revenue: 15000, moving_avg: 12000.0 },
      { month: "2024-05", revenue: 13000, moving_avg: 12333.33 },
      { month: "2024-06", revenue: 17000, moving_avg: 15000.0 },
    ],
  },
  {
    id: 19,
    title: "Basic CTE",
    difficulty: "Advanced",
    problem: "Using a CTE named `high_earners`, find all employees with salary above 80000. Return `name` and `salary` from the CTE, ordered by salary descending.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "WITH high_earners AS (SELECT name, salary FROM employees WHERE salary > 80000) SELECT name, salary FROM high_earners ORDER BY salary DESC;",
    expectedOutput: [
      { name: "Charlie", salary: 95000 },
      { name: "Alice", salary: 90000 },
    ],
  },
  {
    id: 20,
    title: "CTE with Aggregation",
    difficulty: "Advanced",
    problem: "Using a CTE named `dept_stats`, calculate each department's total salary and employee count. Then select departments with more than 1 employee from the CTE. Return `department`, `total_salary`, and `emp_count`, ordered by `total_salary` descending.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "WITH dept_stats AS (SELECT department, SUM(salary) AS total_salary, COUNT(*) AS emp_count FROM employees GROUP BY department) SELECT department, total_salary, emp_count FROM dept_stats WHERE emp_count > 1 ORDER BY total_salary DESC;",
    expectedOutput: [
      { department: "Engineering", total_salary: 185000, emp_count: 2 },
      { department: "Marketing", total_salary: 155000, emp_count: 2 },
    ],
  },
  {
    id: 21,
    title: "Multiple CTEs",
    difficulty: "Advanced",
    problem: "Use two CTEs: `customer_totals` to sum each customer's order amounts, and `ranked` to rank customers by total spending using `RANK()`. Return `customer_name`, `total_spent`, and `rank` from the second CTE, ordered by `rank`.",
    schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  customer_name TEXT,
  city TEXT
);

CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product TEXT,
  amount INTEGER
);`,
    seed: `INSERT INTO customers VALUES
  (1, 'John', 'New York'),
  (2, 'Sarah', 'Chicago'),
  (3, 'Mike', 'Houston');

INSERT INTO orders VALUES
  (101, 1, 'Laptop', 1200),
  (102, 2, 'Phone', 800),
  (103, 1, 'Tablet', 500),
  (104, 3, 'Monitor', 350),
  (105, 2, 'Keyboard', 100);`,
    answer: "WITH customer_totals AS (SELECT customer_id, SUM(amount) AS total_spent FROM orders GROUP BY customer_id), ranked AS (SELECT c.customer_name, ct.total_spent, RANK() OVER (ORDER BY ct.total_spent DESC) AS rank FROM customer_totals ct JOIN customers c ON ct.customer_id = c.id) SELECT customer_name, total_spent, rank FROM ranked ORDER BY rank;",
    expectedOutput: [
      { customer_name: "John", total_spent: 1700, rank: 1 },
      { customer_name: "Sarah", total_spent: 900, rank: 2 },
      { customer_name: "Mike", total_spent: 350, rank: 3 },
    ],
  },
  {
    id: 22,
    title: "Recursive CTE - Org Hierarchy",
    difficulty: "Advanced",
    problem: "The `org_chart` table has a self-referencing `manager_id`. Use a recursive CTE to find **all employees under VP Engineering (id=2)**, both direct and indirect reports. Return `name` and `level` (1 = direct report, 2 = indirect). Order by `level`, then `name`.",
    schema: `CREATE TABLE org_chart (
  id INTEGER PRIMARY KEY,
  name TEXT,
  manager_id INTEGER
);`,
    seed: `INSERT INTO org_chart VALUES
  (1, 'CEO', NULL),
  (2, 'VP Engineering', 1),
  (3, 'VP Sales', 1),
  (4, 'Dev Lead', 2),
  (5, 'Designer', 2),
  (6, 'Sales Rep', 3),
  (7, 'Junior Dev', 4),
  (8, 'Intern', 4);`,
    answer: "WITH RECURSIVE team AS (SELECT id, name, manager_id, 0 AS level FROM org_chart WHERE id = 2 UNION ALL SELECT o.id, o.name, o.manager_id, t.level + 1 FROM org_chart o JOIN team t ON o.manager_id = t.id) SELECT name, level FROM team WHERE level > 0 ORDER BY level, name;",
    expectedOutput: [
      { name: "Designer", level: 1 },
      { name: "Dev Lead", level: 1 },
      { name: "Intern", level: 2 },
      { name: "Junior Dev", level: 2 },
    ],
  },
  {
    id: 23,
    title: "NTILE - Salary Quartiles",
    difficulty: "Advanced",
    problem: "Divide employees into 4 salary quartiles using `NTILE(4)` ordered by salary ascending. Return `name`, `salary`, and `quartile`. Order by `salary`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, salary, NTILE(4) OVER (ORDER BY salary) AS quartile FROM employees ORDER BY salary;",
    expectedOutput: [
      { name: "Diana", salary: 70000, quartile: 1 },
      { name: "Bob", salary: 75000, quartile: 1 },
      { name: "Eve", salary: 80000, quartile: 2 },
      { name: "Alice", salary: 90000, quartile: 3 },
      { name: "Charlie", salary: 95000, quartile: 4 },
    ],
  },
  {
    id: 24,
    title: "PERCENT_RANK",
    difficulty: "Advanced",
    problem: "Calculate the percentile rank of each employee's salary using `PERCENT_RANK()`. Return `name`, `salary`, and `pct_rank` (rounded to 2 decimal places). Order by `salary`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, salary, ROUND(PERCENT_RANK() OVER (ORDER BY salary), 2) AS pct_rank FROM employees ORDER BY salary;",
    expectedOutput: [
      { name: "Diana", salary: 70000, pct_rank: 0.0 },
      { name: "Bob", salary: 75000, pct_rank: 0.25 },
      { name: "Eve", salary: 80000, pct_rank: 0.5 },
      { name: "Alice", salary: 90000, pct_rank: 0.75 },
      { name: "Charlie", salary: 95000, pct_rank: 1.0 },
    ],
  },
  {
    id: 25,
    title: "FIRST_VALUE - Top Earner per Dept",
    difficulty: "Advanced",
    problem: "For each employee, show who the **top earner** is in their department using `FIRST_VALUE()`. Return `name`, `department`, `salary`, and `top_earner`. Order by `department`, then `salary` descending.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER,
  hire_date TEXT
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000, '2020-01-15'),
  (2, 'Bob', 'Marketing', 75000, '2019-06-01'),
  (3, 'Charlie', 'Engineering', 95000, '2018-03-20'),
  (4, 'Diana', 'HR', 70000, '2021-09-10'),
  (5, 'Eve', 'Marketing', 80000, '2020-11-05');`,
    answer: "SELECT name, department, salary, FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC) AS top_earner FROM employees ORDER BY department, salary DESC;",
    expectedOutput: [
      { name: "Charlie", department: "Engineering", salary: 95000, top_earner: "Charlie" },
      { name: "Alice", department: "Engineering", salary: 90000, top_earner: "Charlie" },
      { name: "Diana", department: "HR", salary: 70000, top_earner: "Diana" },
      { name: "Eve", department: "Marketing", salary: 80000, top_earner: "Eve" },
      { name: "Bob", department: "Marketing", salary: 75000, top_earner: "Eve" },
    ],
  },
  {
    id: 26,
    title: "CTE + Window Function Combo",
    difficulty: "Advanced",
    problem: "Use a CTE to calculate each student's total score across subjects, then rank them using `RANK()`. Return `student_name`, `total_score`, and `rank`, ordered by `rank`.",
    schema: `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  student_name TEXT,
  grade_level INTEGER
);

CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  student_id INTEGER,
  subject TEXT,
  score INTEGER
);`,
    seed: `INSERT INTO students VALUES
  (1, 'Amy', 10),
  (2, 'Ben', 11),
  (3, 'Cara', 10),
  (4, 'Dan', 12);

INSERT INTO scores VALUES
  (1, 1, 'Math', 95),
  (2, 1, 'Science', 88),
  (3, 2, 'Math', 72),
  (4, 2, 'Science', 91),
  (5, 3, 'Math', 90),
  (6, 3, 'Science', 85),
  (7, 4, 'Math', 60),
  (8, 4, 'Science', 78);`,
    answer: "WITH student_totals AS (SELECT s.student_name, SUM(sc.score) AS total_score FROM students s JOIN scores sc ON s.id = sc.student_id GROUP BY s.student_name) SELECT student_name, total_score, RANK() OVER (ORDER BY total_score DESC) AS rank FROM student_totals ORDER BY rank;",
    expectedOutput: [
      { student_name: "Amy", total_score: 183, rank: 1 },
      { student_name: "Cara", total_score: 175, rank: 2 },
      { student_name: "Ben", total_score: 163, rank: 3 },
      { student_name: "Dan", total_score: 138, rank: 4 },
    ],
  },
  {
    id: 27,
    title: "Running Balance with PARTITION BY",
    difficulty: "Advanced",
    problem: "Calculate a running balance for each bank account. Return `account`, `txn_date`, `amount`, and `running_balance` (cumulative sum partitioned by account). Order by `account`, then `txn_date`.",
    schema: `CREATE TABLE transactions (
  id INTEGER PRIMARY KEY,
  account TEXT,
  txn_date TEXT,
  amount INTEGER
);`,
    seed: `INSERT INTO transactions VALUES
  (1, 'Checking', '2024-01-05', 1000),
  (2, 'Savings', '2024-01-10', 5000),
  (3, 'Checking', '2024-01-15', -200),
  (4, 'Checking', '2024-02-01', 3000),
  (5, 'Savings', '2024-02-15', 2000),
  (6, 'Checking', '2024-03-01', -500);`,
    answer: "SELECT account, txn_date, amount, SUM(amount) OVER (PARTITION BY account ORDER BY txn_date) AS running_balance FROM transactions ORDER BY account, txn_date;",
    expectedOutput: [
      { account: "Checking", txn_date: "2024-01-05", amount: 1000, running_balance: 1000 },
      { account: "Checking", txn_date: "2024-01-15", amount: -200, running_balance: 800 },
      { account: "Checking", txn_date: "2024-02-01", amount: 3000, running_balance: 3800 },
      { account: "Checking", txn_date: "2024-03-01", amount: -500, running_balance: 3300 },
      { account: "Savings", txn_date: "2024-01-10", amount: 5000, running_balance: 5000 },
      { account: "Savings", txn_date: "2024-02-15", amount: 2000, running_balance: 7000 },
    ],
  },
  {
    id: 28,
    title: "Top N per Group",
    difficulty: "Advanced",
    problem: "Find the **top 2 earners in each department** using `ROW_NUMBER()` in a CTE. Return `name`, `department`, and `salary`. Order by `department`, then `salary` descending.",
    schema: `CREATE TABLE staff (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER
);`,
    seed: `INSERT INTO staff VALUES
  (1, 'Alice', 'Engineering', 90000),
  (2, 'Bob', 'Engineering', 85000),
  (3, 'Charlie', 'Engineering', 95000),
  (4, 'Diana', 'Sales', 70000),
  (5, 'Eve', 'Sales', 75000),
  (6, 'Frank', 'Sales', 72000),
  (7, 'Grace', 'Marketing', 68000),
  (8, 'Henry', 'Marketing', 71000);`,
    answer: "WITH ranked AS (SELECT name, department, salary, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn FROM staff) SELECT name, department, salary FROM ranked WHERE rn <= 2 ORDER BY department, salary DESC;",
    expectedOutput: [
      { name: "Charlie", department: "Engineering", salary: 95000 },
      { name: "Alice", department: "Engineering", salary: 90000 },
      { name: "Henry", department: "Marketing", salary: 71000 },
      { name: "Grace", department: "Marketing", salary: 68000 },
      { name: "Eve", department: "Sales", salary: 75000 },
      { name: "Frank", department: "Sales", salary: 72000 },
    ],
  },
  {
    id: 29,
    title: "Year-over-Year Growth with LAG",
    difficulty: "Advanced",
    problem: "Calculate year-over-year revenue growth percentage. Return `year`, `revenue`, `prev_year_revenue`, and `growth_pct` (rounded to 1 decimal). Use `LAG()` and a `CASE` expression to avoid division by zero for the first row. Order by `year`.",
    schema: `CREATE TABLE yearly_revenue (
  year INTEGER PRIMARY KEY,
  revenue INTEGER
);`,
    seed: `INSERT INTO yearly_revenue VALUES
  (2019, 100000),
  (2020, 85000),
  (2021, 120000),
  (2022, 140000),
  (2023, 135000);`,
    answer: "SELECT year, revenue, LAG(revenue) OVER (ORDER BY year) AS prev_year_revenue, CASE WHEN LAG(revenue) OVER (ORDER BY year) IS NOT NULL THEN ROUND((revenue - LAG(revenue) OVER (ORDER BY year)) * 100.0 / LAG(revenue) OVER (ORDER BY year), 1) ELSE NULL END AS growth_pct FROM yearly_revenue ORDER BY year;",
    expectedOutput: [
      { year: 2019, revenue: 100000, prev_year_revenue: null, growth_pct: null },
      { year: 2020, revenue: 85000, prev_year_revenue: 100000, growth_pct: -15.0 },
      { year: 2021, revenue: 120000, prev_year_revenue: 85000, growth_pct: 41.2 },
      { year: 2022, revenue: 140000, prev_year_revenue: 120000, growth_pct: 16.7 },
      { year: 2023, revenue: 135000, prev_year_revenue: 140000, growth_pct: -3.6 },
    ],
  },
  {
    id: 30,
    title: "CTE + Window: Performance Categories",
    difficulty: "Advanced",
    problem: "Use a CTE with a window function to compute `overall_avg` (average revenue across all months) and `running_total`. Then classify each month's performance as `'Above Avg'` or `'Below Avg'`. Return `month`, `revenue`, `running_total`, and `performance`. Order by `month`.",
    schema: `CREATE TABLE monthly_sales (
  month TEXT PRIMARY KEY,
  revenue INTEGER
);`,
    seed: `INSERT INTO monthly_sales VALUES
  ('2024-01', 10000),
  ('2024-02', 12000),
  ('2024-03', 9000),
  ('2024-04', 15000),
  ('2024-05', 13000),
  ('2024-06', 17000);`,
    answer: "WITH monthly_stats AS (SELECT month, revenue, AVG(revenue) OVER () AS overall_avg, SUM(revenue) OVER (ORDER BY month) AS running_total FROM monthly_sales) SELECT month, revenue, running_total, CASE WHEN revenue >= overall_avg THEN 'Above Avg' ELSE 'Below Avg' END AS performance FROM monthly_stats ORDER BY month;",
    expectedOutput: [
      { month: "2024-01", revenue: 10000, running_total: 10000, performance: "Below Avg" },
      { month: "2024-02", revenue: 12000, running_total: 22000, performance: "Below Avg" },
      { month: "2024-03", revenue: 9000, running_total: 31000, performance: "Below Avg" },
      { month: "2024-04", revenue: 15000, running_total: 46000, performance: "Above Avg" },
      { month: "2024-05", revenue: 13000, running_total: 59000, performance: "Above Avg" },
      { month: "2024-06", revenue: 17000, running_total: 76000, performance: "Above Avg" },
    ],
  },
  {
    id: 31,
    title: "Gaps and Islands - Consecutive Dates",
    difficulty: "Hard",
    problem: "The `logins` table records user login dates. Find **consecutive login streaks** for each user. Return `user_name`, `streak_start`, `streak_end`, and `streak_length` (number of consecutive days). A streak is a sequence of consecutive dates for the same user. Order by `user_name`, then `streak_start`.",
    schema: `CREATE TABLE logins (
  id INTEGER PRIMARY KEY,
  user_name TEXT,
  login_date TEXT
);`,
    seed: `INSERT INTO logins VALUES
  (1, 'Alice', '2024-01-01'),
  (2, 'Alice', '2024-01-02'),
  (3, 'Alice', '2024-01-03'),
  (4, 'Alice', '2024-01-06'),
  (5, 'Alice', '2024-01-07'),
  (6, 'Bob', '2024-01-01'),
  (7, 'Bob', '2024-01-03'),
  (8, 'Bob', '2024-01-04'),
  (9, 'Bob', '2024-01-05');`,
    answer: "WITH numbered AS (SELECT user_name, login_date, DATE(login_date, '-' || (ROW_NUMBER() OVER (PARTITION BY user_name ORDER BY login_date) - 1) || ' days') AS grp FROM logins) SELECT user_name, MIN(login_date) AS streak_start, MAX(login_date) AS streak_end, COUNT(*) AS streak_length FROM numbered GROUP BY user_name, grp ORDER BY user_name, streak_start;",
    expectedOutput: [
      { user_name: "Alice", streak_start: "2024-01-01", streak_end: "2024-01-03", streak_length: 3 },
      { user_name: "Alice", streak_start: "2024-01-06", streak_end: "2024-01-07", streak_length: 2 },
      { user_name: "Bob", streak_start: "2024-01-01", streak_end: "2024-01-01", streak_length: 1 },
      { user_name: "Bob", streak_start: "2024-01-03", streak_end: "2024-01-05", streak_length: 3 },
    ],
  },
  {
    id: 32,
    title: "Median Salary per Department",
    difficulty: "Hard",
    problem: "Calculate the **median salary** for each department. If there is an even number of employees, return the average of the two middle values. Return `department` and `median_salary` (rounded to nearest integer using ROUND). Order by `department`.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 90000),
  (2, 'Bob', 'Engineering', 80000),
  (3, 'Charlie', 'Engineering', 95000),
  (4, 'Diana', 'Marketing', 70000),
  (5, 'Eve', 'Marketing', 75000),
  (6, 'Frank', 'Marketing', 85000),
  (7, 'Grace', 'Marketing', 60000),
  (8, 'Hank', 'HR', 65000);`,
    answer: "WITH ranked AS (SELECT department, salary, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary) AS rn, COUNT(*) OVER (PARTITION BY department) AS cnt FROM employees) SELECT department, ROUND(AVG(salary)) AS median_salary FROM ranked WHERE rn IN ((cnt + 1) / 2, (cnt + 2) / 2) GROUP BY department ORDER BY department;",
    expectedOutput: [
      { department: "Engineering", median_salary: 90000 },
      { department: "HR", median_salary: 65000 },
      { department: "Marketing", median_salary: 72500 },
    ],
  },
  {
    id: 33,
    title: "Pivot Table - Sales by Quarter",
    difficulty: "Hard",
    problem: "The `sales` table has `product`, `quarter` (Q1-Q4), and `amount`. Write a query to **pivot** the data so each row shows a product with separate columns for `Q1`, `Q2`, `Q3`, and `Q4` totals. Use 0 if a product has no sales in a quarter. Order by `product`.",
    schema: `CREATE TABLE sales (
  id INTEGER PRIMARY KEY,
  product TEXT,
  quarter TEXT,
  amount INTEGER
);`,
    seed: `INSERT INTO sales VALUES
  (1, 'Widget', 'Q1', 1000),
  (2, 'Widget', 'Q2', 1500),
  (3, 'Widget', 'Q3', 1200),
  (4, 'Widget', 'Q4', 1800),
  (5, 'Gadget', 'Q1', 800),
  (6, 'Gadget', 'Q2', 900),
  (7, 'Gadget', 'Q4', 1100),
  (8, 'Doohickey', 'Q1', 500),
  (9, 'Doohickey', 'Q3', 700);`,
    answer: "SELECT product, COALESCE(SUM(CASE WHEN quarter = 'Q1' THEN amount END), 0) AS Q1, COALESCE(SUM(CASE WHEN quarter = 'Q2' THEN amount END), 0) AS Q2, COALESCE(SUM(CASE WHEN quarter = 'Q3' THEN amount END), 0) AS Q3, COALESCE(SUM(CASE WHEN quarter = 'Q4' THEN amount END), 0) AS Q4 FROM sales GROUP BY product ORDER BY product;",
    expectedOutput: [
      { product: "Doohickey", Q1: 500, Q2: 0, Q3: 700, Q4: 0 },
      { product: "Gadget", Q1: 800, Q2: 900, Q3: 0, Q4: 1100 },
      { product: "Widget", Q1: 1000, Q2: 1500, Q3: 1200, Q4: 1800 },
    ],
  },
  {
    id: 34,
    title: "Running Difference and Anomaly Detection",
    difficulty: "Hard",
    problem: "The `sensor_data` table records temperature readings over time. For each reading, calculate the `prev_temp` (previous reading using LAG), `temp_diff` (difference from previous), and flag it as `anomaly` ('Yes' if absolute difference > 5, otherwise 'No'). The first row should have NULL for `prev_temp` and `temp_diff`, and 'No' for `anomaly`. Order by `reading_time`.",
    schema: `CREATE TABLE sensor_data (
  id INTEGER PRIMARY KEY,
  reading_time TEXT,
  temperature REAL
);`,
    seed: `INSERT INTO sensor_data VALUES
  (1, '2024-01-01 08:00', 20.0),
  (2, '2024-01-01 09:00', 21.5),
  (3, '2024-01-01 10:00', 28.0),
  (4, '2024-01-01 11:00', 27.5),
  (5, '2024-01-01 12:00', 19.0),
  (6, '2024-01-01 13:00', 20.0);`,
    answer: "SELECT reading_time, temperature, LAG(temperature) OVER (ORDER BY reading_time) AS prev_temp, ROUND(temperature - LAG(temperature) OVER (ORDER BY reading_time), 1) AS temp_diff, CASE WHEN ABS(temperature - LAG(temperature) OVER (ORDER BY reading_time)) > 5 THEN 'Yes' WHEN LAG(temperature) OVER (ORDER BY reading_time) IS NULL THEN 'No' ELSE 'No' END AS anomaly FROM sensor_data ORDER BY reading_time;",
    expectedOutput: [
      { reading_time: "2024-01-01 08:00", temperature: 20.0, prev_temp: null, temp_diff: null, anomaly: "No" },
      { reading_time: "2024-01-01 09:00", temperature: 21.5, prev_temp: 20.0, temp_diff: 1.5, anomaly: "No" },
      { reading_time: "2024-01-01 10:00", temperature: 28.0, prev_temp: 21.5, temp_diff: 6.5, anomaly: "Yes" },
      { reading_time: "2024-01-01 11:00", temperature: 27.5, prev_temp: 28.0, temp_diff: -0.5, anomaly: "No" },
      { reading_time: "2024-01-01 12:00", temperature: 19.0, prev_temp: 27.5, temp_diff: -8.5, anomaly: "Yes" },
      { reading_time: "2024-01-01 13:00", temperature: 20.0, prev_temp: 19.0, temp_diff: 1.0, anomaly: "No" },
    ],
  },
  {
    id: 35,
    title: "Correlated Subquery - Employees Above Dept Average",
    difficulty: "Hard",
    problem: "Find employees whose salary is **above the average salary of their own department**. Return `name`, `department`, `salary`, and `dept_avg` (the department average salary, rounded to nearest integer). Use a correlated subquery for the department average. Order by `department`, then `salary` DESC.",
    schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  department TEXT,
  salary INTEGER
);`,
    seed: `INSERT INTO employees VALUES
  (1, 'Alice', 'Engineering', 120000),
  (2, 'Bob', 'Engineering', 90000),
  (3, 'Charlie', 'Engineering', 80000),
  (4, 'Diana', 'Marketing', 85000),
  (5, 'Eve', 'Marketing', 70000),
  (6, 'Frank', 'Marketing', 65000),
  (7, 'Grace', 'HR', 75000),
  (8, 'Hank', 'HR', 60000);`,
    answer: "SELECT e.name, e.department, e.salary, (SELECT ROUND(AVG(e2.salary)) FROM employees e2 WHERE e2.department = e.department) AS dept_avg FROM employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department = e.department) ORDER BY e.department, e.salary DESC;",
    expectedOutput: [
      { name: "Alice", department: "Engineering", salary: 120000, dept_avg: 96667 },
      { name: "Grace", department: "HR", salary: 75000, dept_avg: 67500 },
      { name: "Diana", department: "Marketing", salary: 85000, dept_avg: 73333 },
    ],
  },
];

module.exports = questions;
