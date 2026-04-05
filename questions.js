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

  // ── Data Engineering: Medium ──────────────────────────────────────

  {
    id: 36,
    title: "DE: Deduplicate Records",
    difficulty: "Medium",
    problem: "The `raw_events` table has duplicate rows from a faulty ingestion pipeline. Using ROW_NUMBER(), write a query that returns only the **first occurrence** of each event per `user_id` and `event_type` (earliest `event_time`). Return `user_id`, `event_type`, and `event_time`. Order by `user_id`, `event_type`.",
    schema: `CREATE TABLE raw_events (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  event_type TEXT,
  event_time TEXT
);`,
    seed: `INSERT INTO raw_events VALUES
  (1, 1, 'login', '2024-01-01 08:00'),
  (2, 1, 'login', '2024-01-01 08:01'),
  (3, 1, 'click', '2024-01-01 09:00'),
  (4, 2, 'login', '2024-01-01 07:30'),
  (5, 2, 'login', '2024-01-01 07:31'),
  (6, 2, 'click', '2024-01-01 10:00'),
  (7, 2, 'click', '2024-01-01 10:01');`,
    answer: "WITH ranked AS (SELECT user_id, event_type, event_time, ROW_NUMBER() OVER (PARTITION BY user_id, event_type ORDER BY event_time) AS rn FROM raw_events) SELECT user_id, event_type, event_time FROM ranked WHERE rn = 1 ORDER BY user_id, event_type;",
    expectedOutput: [
      { user_id: 1, event_type: "click", event_time: "2024-01-01 09:00" },
      { user_id: 1, event_type: "login", event_time: "2024-01-01 08:00" },
      { user_id: 2, event_type: "click", event_time: "2024-01-01 10:00" },
      { user_id: 2, event_type: "login", event_time: "2024-01-01 07:30" },
    ],
  },
  {
    id: 37,
    title: "DE: Data Freshness Check",
    difficulty: "Medium",
    problem: "The `pipeline_runs` table logs ETL pipeline executions. For each `pipeline_name`, find the **most recent run** and calculate `hours_since_run` as the difference in hours between `run_time` and '2024-01-05 12:00' (use ROUND to 1 decimal). Flag pipelines as `status`: 'stale' if hours_since_run > 24, otherwise 'fresh'. Return `pipeline_name`, `last_run`, `hours_since_run`, `status`. Order by `hours_since_run` DESC.",
    schema: `CREATE TABLE pipeline_runs (
  id INTEGER PRIMARY KEY,
  pipeline_name TEXT,
  run_time TEXT,
  status TEXT,
  rows_processed INTEGER
);`,
    seed: `INSERT INTO pipeline_runs VALUES
  (1, 'user_etl', '2024-01-05 10:00', 'success', 5000),
  (2, 'user_etl', '2024-01-04 10:00', 'success', 4800),
  (3, 'orders_etl', '2024-01-03 08:00', 'success', 12000),
  (4, 'orders_etl', '2024-01-02 08:00', 'failed', 0),
  (5, 'payments_etl', '2024-01-05 11:30', 'success', 3000),
  (6, 'logs_etl', '2024-01-01 06:00', 'success', 50000);`,
    answer: "WITH latest AS (SELECT pipeline_name, MAX(run_time) AS last_run FROM pipeline_runs GROUP BY pipeline_name) SELECT pipeline_name, last_run, ROUND((JULIANDAY('2024-01-05 12:00') - JULIANDAY(last_run)) * 24, 1) AS hours_since_run, CASE WHEN ROUND((JULIANDAY('2024-01-05 12:00') - JULIANDAY(last_run)) * 24, 1) > 24 THEN 'stale' ELSE 'fresh' END AS status FROM latest ORDER BY hours_since_run DESC;",
    expectedOutput: [
      { pipeline_name: "logs_etl", last_run: "2024-01-01 06:00", hours_since_run: 102.0, status: "stale" },
      { pipeline_name: "orders_etl", last_run: "2024-01-03 08:00", hours_since_run: 52.0, status: "stale" },
      { pipeline_name: "user_etl", last_run: "2024-01-05 10:00", hours_since_run: 2.0, status: "fresh" },
      { pipeline_name: "payments_etl", last_run: "2024-01-05 11:30", hours_since_run: 0.5, status: "fresh" },
    ],
  },
  {
    id: 38,
    title: "DE: Row Count Validation",
    difficulty: "Medium",
    problem: "Compare row counts between `staging_users` and `prod_users` tables. Return a single row with `staging_count`, `prod_count`, `difference` (staging minus prod), and `match` ('Yes' if counts are equal, 'No' otherwise).",
    schema: `CREATE TABLE staging_users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
);

CREATE TABLE prod_users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
);`,
    seed: `INSERT INTO staging_users VALUES
  (1, 'Alice', 'alice@test.com'),
  (2, 'Bob', 'bob@test.com'),
  (3, 'Charlie', 'charlie@test.com'),
  (4, 'Diana', 'diana@test.com'),
  (5, 'Eve', 'eve@test.com');

INSERT INTO prod_users VALUES
  (1, 'Alice', 'alice@test.com'),
  (2, 'Bob', 'bob@test.com'),
  (3, 'Charlie', 'charlie@test.com');`,
    answer: "SELECT (SELECT COUNT(*) FROM staging_users) AS staging_count, (SELECT COUNT(*) FROM prod_users) AS prod_count, (SELECT COUNT(*) FROM staging_users) - (SELECT COUNT(*) FROM prod_users) AS difference, CASE WHEN (SELECT COUNT(*) FROM staging_users) = (SELECT COUNT(*) FROM prod_users) THEN 'Yes' ELSE 'No' END AS match;",
    expectedOutput: [
      { staging_count: 5, prod_count: 3, difference: 2, match: "No" },
    ],
  },
  {
    id: 39,
    title: "DE: Schema Null Audit",
    difficulty: "Medium",
    problem: "The `customer_data` table may have data quality issues. Write a query that returns a single row showing the count of NULL values in each column: `null_name`, `null_email`, `null_phone`, `null_city`. Order is not needed (single row).",
    schema: `CREATE TABLE customer_data (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  city TEXT
);`,
    seed: `INSERT INTO customer_data VALUES
  (1, 'Alice', 'alice@mail.com', '1234567890', 'New York'),
  (2, 'Bob', NULL, '9876543210', NULL),
  (3, NULL, 'charlie@mail.com', NULL, 'Chicago'),
  (4, 'Diana', 'diana@mail.com', NULL, NULL),
  (5, NULL, NULL, '5551234567', 'Houston');`,
    answer: "SELECT SUM(CASE WHEN name IS NULL THEN 1 ELSE 0 END) AS null_name, SUM(CASE WHEN email IS NULL THEN 1 ELSE 0 END) AS null_email, SUM(CASE WHEN phone IS NULL THEN 1 ELSE 0 END) AS null_phone, SUM(CASE WHEN city IS NULL THEN 1 ELSE 0 END) AS null_city FROM customer_data;",
    expectedOutput: [
      { null_name: 2, null_email: 2, null_phone: 2, null_city: 2 },
    ],
  },
  {
    id: 40,
    title: "DE: Incremental Load - New Records",
    difficulty: "Medium",
    problem: "Simulate an incremental load. The `source_data` table has fresh data. The `target_data` table has already-loaded data. Find all records in `source_data` that do **NOT** exist in `target_data` (match on `record_id`). Return `record_id`, `value`, and `updated_at`. Order by `record_id`.",
    schema: `CREATE TABLE source_data (
  record_id INTEGER PRIMARY KEY,
  value TEXT,
  updated_at TEXT
);

CREATE TABLE target_data (
  record_id INTEGER PRIMARY KEY,
  value TEXT,
  updated_at TEXT
);`,
    seed: `INSERT INTO source_data VALUES
  (1, 'alpha', '2024-01-05'),
  (2, 'bravo', '2024-01-05'),
  (3, 'charlie', '2024-01-05'),
  (4, 'delta', '2024-01-05'),
  (5, 'echo', '2024-01-05');

INSERT INTO target_data VALUES
  (1, 'alpha', '2024-01-03'),
  (2, 'bravo_old', '2024-01-03'),
  (3, 'charlie', '2024-01-03');`,
    answer: "SELECT s.record_id, s.value, s.updated_at FROM source_data s LEFT JOIN target_data t ON s.record_id = t.record_id WHERE t.record_id IS NULL ORDER BY s.record_id;",
    expectedOutput: [
      { record_id: 4, value: "delta", updated_at: "2024-01-05" },
      { record_id: 5, value: "echo", updated_at: "2024-01-05" },
    ],
  },
  {
    id: 41,
    title: "DE: Event Sessionization",
    difficulty: "Medium",
    problem: "The `clickstream` table has user page views. A new session starts when there is a gap of more than 30 minutes between consecutive events for the same user. Assign a `session_id` (starting from 1) per user. Return `user_id`, `page`, `view_time`, and `session_id`. Order by `user_id`, `view_time`.",
    schema: `CREATE TABLE clickstream (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  page TEXT,
  view_time TEXT
);`,
    seed: `INSERT INTO clickstream VALUES
  (1, 1, 'home', '2024-01-01 10:00'),
  (2, 1, 'products', '2024-01-01 10:15'),
  (3, 1, 'cart', '2024-01-01 10:25'),
  (4, 1, 'home', '2024-01-01 12:00'),
  (5, 1, 'about', '2024-01-01 12:10'),
  (6, 2, 'home', '2024-01-01 09:00'),
  (7, 2, 'products', '2024-01-01 09:20');`,
    answer: "WITH lagged AS (SELECT user_id, page, view_time, LAG(view_time) OVER (PARTITION BY user_id ORDER BY view_time) AS prev_time FROM clickstream), flagged AS (SELECT user_id, page, view_time, CASE WHEN prev_time IS NULL THEN 1 WHEN (JULIANDAY(view_time) - JULIANDAY(prev_time)) * 24 * 60 > 30 THEN 1 ELSE 0 END AS new_session FROM lagged) SELECT user_id, page, view_time, SUM(new_session) OVER (PARTITION BY user_id ORDER BY view_time) AS session_id FROM flagged ORDER BY user_id, view_time;",
    expectedOutput: [
      { user_id: 1, page: "home", view_time: "2024-01-01 10:00", session_id: 1 },
      { user_id: 1, page: "products", view_time: "2024-01-01 10:15", session_id: 1 },
      { user_id: 1, page: "cart", view_time: "2024-01-01 10:25", session_id: 1 },
      { user_id: 1, page: "home", view_time: "2024-01-01 12:00", session_id: 2 },
      { user_id: 1, page: "about", view_time: "2024-01-01 12:10", session_id: 2 },
      { user_id: 2, page: "home", view_time: "2024-01-01 09:00", session_id: 1 },
      { user_id: 2, page: "products", view_time: "2024-01-01 09:20", session_id: 1 },
    ],
  },
  {
    id: 42,
    title: "DE: Daily Aggregation Pipeline",
    difficulty: "Medium",
    problem: "The `transactions` table has raw transaction events with timestamps. Build a daily summary: for each `transaction_date` (extract date from `created_at`), return `transaction_date`, `total_transactions`, `total_amount`, and `avg_amount` (rounded to 2 decimals). Order by `transaction_date`.",
    schema: `CREATE TABLE transactions (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  amount REAL,
  created_at TEXT
);`,
    seed: `INSERT INTO transactions VALUES
  (1, 1, 49.99, '2024-01-01 08:30'),
  (2, 2, 120.00, '2024-01-01 14:00'),
  (3, 1, 25.50, '2024-01-01 18:00'),
  (4, 3, 75.00, '2024-01-02 09:00'),
  (5, 2, 200.00, '2024-01-02 12:00'),
  (6, 1, 30.00, '2024-01-03 10:00');`,
    answer: "SELECT DATE(created_at) AS transaction_date, COUNT(*) AS total_transactions, SUM(amount) AS total_amount, ROUND(AVG(amount), 2) AS avg_amount FROM transactions GROUP BY DATE(created_at) ORDER BY transaction_date;",
    expectedOutput: [
      { transaction_date: "2024-01-01", total_transactions: 3, total_amount: 195.49, avg_amount: 65.16 },
      { transaction_date: "2024-01-02", total_transactions: 2, total_amount: 275.0, avg_amount: 137.5 },
      { transaction_date: "2024-01-03", total_transactions: 1, total_amount: 30.0, avg_amount: 30.0 },
    ],
  },
  {
    id: 43,
    title: "DE: SCD Type 1 - Latest Record",
    difficulty: "Medium",
    problem: "The `user_history` table tracks changes (Slowly Changing Dimension). Each row has a `valid_from` timestamp. Write a query to get only the **latest version** of each user (most recent `valid_from`). Return `user_id`, `name`, `email`, `valid_from`. Order by `user_id`.",
    schema: `CREATE TABLE user_history (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  name TEXT,
  email TEXT,
  valid_from TEXT
);`,
    seed: `INSERT INTO user_history VALUES
  (1, 101, 'Alice Smith', 'alice@old.com', '2023-01-01'),
  (2, 101, 'Alice Smith', 'alice@new.com', '2024-01-01'),
  (3, 101, 'Alice Johnson', 'alice@new.com', '2024-06-01'),
  (4, 102, 'Bob Jones', 'bob@mail.com', '2023-06-01'),
  (5, 102, 'Bob Jones', 'bob@work.com', '2024-03-01'),
  (6, 103, 'Charlie Brown', 'charlie@mail.com', '2024-01-01');`,
    answer: "WITH ranked AS (SELECT user_id, name, email, valid_from, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY valid_from DESC) AS rn FROM user_history) SELECT user_id, name, email, valid_from FROM ranked WHERE rn = 1 ORDER BY user_id;",
    expectedOutput: [
      { user_id: 101, name: "Alice Johnson", email: "alice@new.com", valid_from: "2024-06-01" },
      { user_id: 102, name: "Bob Jones", email: "bob@work.com", valid_from: "2024-03-01" },
      { user_id: 103, name: "Charlie Brown", email: "charlie@mail.com", valid_from: "2024-01-01" },
    ],
  },
  {
    id: 44,
    title: "DE: Data Completeness Report",
    difficulty: "Medium",
    problem: "Generate a data completeness report for the `orders` table. For each column (`customer_id`, `product`, `amount`, `order_date`), calculate `total_rows`, `non_null_count`, and `completeness_pct` (percentage of non-null values, rounded to 1 decimal). Return one row per column: `column_name`, `total_rows`, `non_null_count`, `completeness_pct`. Order by `completeness_pct` ASC.",
    schema: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product TEXT,
  amount REAL,
  order_date TEXT
);`,
    seed: `INSERT INTO orders VALUES
  (1, 1, 'Laptop', 999.99, '2024-01-01'),
  (2, 2, NULL, 49.99, '2024-01-02'),
  (3, NULL, 'Phone', NULL, '2024-01-03'),
  (4, 3, 'Tablet', 299.99, NULL),
  (5, NULL, NULL, NULL, NULL);`,
    answer: "SELECT 'customer_id' AS column_name, COUNT(*) AS total_rows, COUNT(customer_id) AS non_null_count, ROUND(COUNT(customer_id) * 100.0 / COUNT(*), 1) AS completeness_pct FROM orders UNION ALL SELECT 'product', COUNT(*), COUNT(product), ROUND(COUNT(product) * 100.0 / COUNT(*), 1) FROM orders UNION ALL SELECT 'amount', COUNT(*), COUNT(amount), ROUND(COUNT(amount) * 100.0 / COUNT(*), 1) FROM orders UNION ALL SELECT 'order_date', COUNT(*), COUNT(order_date), ROUND(COUNT(order_date) * 100.0 / COUNT(*), 1) FROM orders ORDER BY completeness_pct ASC;",
    expectedOutput: [
      { column_name: "amount", total_rows: 5, non_null_count: 3, completeness_pct: 60.0 },
      { column_name: "customer_id", total_rows: 5, non_null_count: 3, completeness_pct: 60.0 },
      { column_name: "product", total_rows: 5, non_null_count: 3, completeness_pct: 60.0 },
      { column_name: "order_date", total_rows: 5, non_null_count: 4, completeness_pct: 80.0 },
    ],
  },
  {
    id: 45,
    title: "DE: Batch Processing Window",
    difficulty: "Medium",
    problem: "The `batch_jobs` table tracks ETL batch runs. For each batch, compute the `duration_min` (difference between `end_time` and `start_time` in minutes, rounded to 1 decimal), and `throughput` (rows_processed / duration in minutes, rounded to 0 decimals). Return `batch_id`, `job_name`, `duration_min`, `rows_processed`, `throughput`. Order by `throughput` DESC.",
    schema: `CREATE TABLE batch_jobs (
  batch_id INTEGER PRIMARY KEY,
  job_name TEXT,
  start_time TEXT,
  end_time TEXT,
  rows_processed INTEGER
);`,
    seed: `INSERT INTO batch_jobs VALUES
  (1, 'user_sync', '2024-01-01 01:00', '2024-01-01 01:30', 15000),
  (2, 'order_load', '2024-01-01 02:00', '2024-01-01 03:15', 50000),
  (3, 'log_archive', '2024-01-01 03:00', '2024-01-01 05:00', 200000),
  (4, 'payment_etl', '2024-01-01 01:00', '2024-01-01 01:10', 8000);`,
    answer: "SELECT batch_id, job_name, ROUND((JULIANDAY(end_time) - JULIANDAY(start_time)) * 24 * 60, 1) AS duration_min, rows_processed, ROUND(rows_processed / ((JULIANDAY(end_time) - JULIANDAY(start_time)) * 24 * 60)) AS throughput FROM batch_jobs ORDER BY throughput DESC;",
    expectedOutput: [
      { batch_id: 1, job_name: "user_sync", duration_min: 30.0, rows_processed: 15000, throughput: 500 },
      { batch_id: 4, job_name: "payment_etl", duration_min: 10.0, rows_processed: 8000, throughput: 800 },
      { batch_id: 3, job_name: "log_archive", duration_min: 120.0, rows_processed: 200000, throughput: 1667 },
      { batch_id: 2, job_name: "order_load", duration_min: 75.0, rows_processed: 50000, throughput: 667 },
    ],
  },

  // ── Data Engineering: Hard ────────────────────────────────────────

  {
    id: 46,
    title: "DE: SCD Type 2 - Build History",
    difficulty: "Hard",
    problem: "The `user_changes` table has snapshots of user data with `changed_at` dates. Build an SCD Type 2 history: for each record, add `valid_from` (same as `changed_at`), `valid_to` (the next `changed_at` for that user, or '9999-12-31' if it's the latest), and `is_current` (1 if latest, 0 otherwise). Return `user_id`, `name`, `email`, `valid_from`, `valid_to`, `is_current`. Order by `user_id`, `valid_from`.",
    schema: `CREATE TABLE user_changes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  name TEXT,
  email TEXT,
  changed_at TEXT
);`,
    seed: `INSERT INTO user_changes VALUES
  (1, 1, 'Alice', 'alice@v1.com', '2023-01-01'),
  (2, 1, 'Alice', 'alice@v2.com', '2023-06-01'),
  (3, 1, 'Alice Smith', 'alice@v3.com', '2024-01-01'),
  (4, 2, 'Bob', 'bob@v1.com', '2023-03-01'),
  (5, 2, 'Bob Jones', 'bob@v2.com', '2024-02-01');`,
    answer: "SELECT user_id, name, email, changed_at AS valid_from, COALESCE(LEAD(changed_at) OVER (PARTITION BY user_id ORDER BY changed_at), '9999-12-31') AS valid_to, CASE WHEN LEAD(changed_at) OVER (PARTITION BY user_id ORDER BY changed_at) IS NULL THEN 1 ELSE 0 END AS is_current FROM user_changes ORDER BY user_id, valid_from;",
    expectedOutput: [
      { user_id: 1, name: "Alice", email: "alice@v1.com", valid_from: "2023-01-01", valid_to: "2023-06-01", is_current: 0 },
      { user_id: 1, name: "Alice", email: "alice@v2.com", valid_from: "2023-06-01", valid_to: "2024-01-01", is_current: 0 },
      { user_id: 1, name: "Alice Smith", email: "alice@v3.com", valid_from: "2024-01-01", valid_to: "9999-12-31", is_current: 1 },
      { user_id: 2, name: "Bob", email: "bob@v1.com", valid_from: "2023-03-01", valid_to: "2024-02-01", is_current: 0 },
      { user_id: 2, name: "Bob Jones", email: "bob@v2.com", valid_from: "2024-02-01", valid_to: "9999-12-31", is_current: 1 },
    ],
  },
  {
    id: 47,
    title: "DE: Data Lineage - Source Tracing",
    difficulty: "Hard",
    problem: "The `data_lineage` table is a DAG representing data flow. Each row has a `table_name` and its `source_table` (NULL if it's a raw source). Using a recursive CTE starting from 'dashboard_metrics', trace **all upstream dependencies**. Return `table_name` and `depth` (0 for the starting table). Order by `depth`, then `table_name`.",
    schema: `CREATE TABLE data_lineage (
  id INTEGER PRIMARY KEY,
  table_name TEXT,
  source_table TEXT
);`,
    seed: `INSERT INTO data_lineage VALUES
  (1, 'raw_orders', NULL),
  (2, 'raw_users', NULL),
  (3, 'raw_payments', NULL),
  (4, 'stg_orders', 'raw_orders'),
  (5, 'stg_users', 'raw_users'),
  (6, 'stg_payments', 'raw_payments'),
  (7, 'fct_revenue', 'stg_orders'),
  (8, 'fct_revenue', 'stg_payments'),
  (9, 'dim_customers', 'stg_users'),
  (10, 'dashboard_metrics', 'fct_revenue'),
  (11, 'dashboard_metrics', 'dim_customers');`,
    answer: "WITH RECURSIVE upstream AS (SELECT table_name, 0 AS depth FROM data_lineage WHERE table_name = 'dashboard_metrics' GROUP BY table_name UNION ALL SELECT dl.source_table AS table_name, u.depth + 1 FROM data_lineage dl JOIN upstream u ON dl.table_name = u.table_name WHERE dl.source_table IS NOT NULL) SELECT table_name, MIN(depth) AS depth FROM upstream GROUP BY table_name ORDER BY depth, table_name;",
    expectedOutput: [
      { table_name: "dashboard_metrics", depth: 0 },
      { table_name: "dim_customers", depth: 1 },
      { table_name: "fct_revenue", depth: 1 },
      { table_name: "stg_orders", depth: 2 },
      { table_name: "stg_payments", depth: 2 },
      { table_name: "stg_users", depth: 2 },
      { table_name: "raw_orders", depth: 3 },
      { table_name: "raw_payments", depth: 3 },
      { table_name: "raw_users", depth: 3 },
    ],
  },
  {
    id: 48,
    title: "DE: Funnel Drop-off Analysis",
    difficulty: "Hard",
    problem: "The `funnel_events` table tracks user journey steps: 'visit', 'signup', 'activate', 'purchase'. For each step, calculate `users_count` and `drop_off_pct` (percentage of users lost compared to the previous step, rounded to 1 decimal; NULL for 'visit'). Order by the funnel sequence: visit -> signup -> activate -> purchase.",
    schema: `CREATE TABLE funnel_events (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  step TEXT,
  event_time TEXT
);`,
    seed: `INSERT INTO funnel_events VALUES
  (1, 1, 'visit', '2024-01-01 10:00'),
  (2, 2, 'visit', '2024-01-01 10:05'),
  (3, 3, 'visit', '2024-01-01 10:10'),
  (4, 4, 'visit', '2024-01-01 10:15'),
  (5, 5, 'visit', '2024-01-01 10:20'),
  (6, 1, 'signup', '2024-01-01 10:30'),
  (7, 2, 'signup', '2024-01-01 10:35'),
  (8, 3, 'signup', '2024-01-01 10:40'),
  (9, 5, 'signup', '2024-01-01 10:50'),
  (10, 1, 'activate', '2024-01-02 09:00'),
  (11, 2, 'activate', '2024-01-02 09:30'),
  (12, 1, 'purchase', '2024-01-03 14:00');`,
    answer: "WITH step_order AS (SELECT 'visit' AS step, 1 AS seq UNION ALL SELECT 'signup', 2 UNION ALL SELECT 'activate', 3 UNION ALL SELECT 'purchase', 4), step_counts AS (SELECT f.step, so.seq, COUNT(DISTINCT f.user_id) AS users_count FROM funnel_events f JOIN step_order so ON f.step = so.step GROUP BY f.step, so.seq) SELECT sc.step, sc.users_count, CASE WHEN LAG(sc.users_count) OVER (ORDER BY sc.seq) IS NULL THEN NULL ELSE ROUND((LAG(sc.users_count) OVER (ORDER BY sc.seq) - sc.users_count) * 100.0 / LAG(sc.users_count) OVER (ORDER BY sc.seq), 1) END AS drop_off_pct FROM step_counts sc ORDER BY sc.seq;",
    expectedOutput: [
      { step: "visit", users_count: 5, drop_off_pct: null },
      { step: "signup", users_count: 4, drop_off_pct: 20.0 },
      { step: "activate", users_count: 2, drop_off_pct: 50.0 },
      { step: "purchase", users_count: 1, drop_off_pct: 50.0 },
    ],
  },
  {
    id: 49,
    title: "DE: Partition Pruning Simulation",
    difficulty: "Hard",
    problem: "The `partitioned_logs` table simulates date-partitioned data. Write a query that finds the **top 2 error types by count** within partition '2024-01' only. Return `error_type`, `error_count`, and `pct_of_partition` (percentage of that error within the partition, rounded to 1 decimal). Order by `error_count` DESC.",
    schema: `CREATE TABLE partitioned_logs (
  id INTEGER PRIMARY KEY,
  partition_month TEXT,
  error_type TEXT,
  log_message TEXT,
  created_at TEXT
);`,
    seed: `INSERT INTO partitioned_logs VALUES
  (1, '2024-01', 'NullPointer', 'NPE at line 42', '2024-01-05'),
  (2, '2024-01', 'NullPointer', 'NPE at line 55', '2024-01-06'),
  (3, '2024-01', 'NullPointer', 'NPE at line 42', '2024-01-07'),
  (4, '2024-01', 'Timeout', 'Connection timeout', '2024-01-08'),
  (5, '2024-01', 'Timeout', 'Read timeout', '2024-01-09'),
  (6, '2024-01', 'OutOfMemory', 'Heap overflow', '2024-01-10'),
  (7, '2024-02', 'NullPointer', 'NPE at line 10', '2024-02-01'),
  (8, '2024-02', 'Timeout', 'Connection timeout', '2024-02-02');`,
    answer: "WITH partition_data AS (SELECT error_type, COUNT(*) AS error_count, SUM(COUNT(*)) OVER () AS total_in_partition FROM partitioned_logs WHERE partition_month = '2024-01' GROUP BY error_type), ranked AS (SELECT error_type, error_count, ROUND(error_count * 100.0 / total_in_partition, 1) AS pct_of_partition, ROW_NUMBER() OVER (ORDER BY error_count DESC) AS rn FROM partition_data) SELECT error_type, error_count, pct_of_partition FROM ranked WHERE rn <= 2 ORDER BY error_count DESC;",
    expectedOutput: [
      { error_type: "NullPointer", error_count: 3, pct_of_partition: 50.0 },
      { error_type: "Timeout", error_count: 2, pct_of_partition: 33.3 },
    ],
  },
  {
    id: 50,
    title: "DE: CDC - Change Data Capture",
    difficulty: "Hard",
    problem: "The `cdc_log` table captures INSERT ('I'), UPDATE ('U'), and DELETE ('D') operations with timestamps. For each `record_id`, determine its **current state**: apply operations in order and return the final snapshot. Deleted records should NOT appear. Return `record_id`, `value`, `last_operation`, `last_changed`. Order by `record_id`.",
    schema: `CREATE TABLE cdc_log (
  id INTEGER PRIMARY KEY,
  record_id INTEGER,
  operation TEXT,
  value TEXT,
  changed_at TEXT
);`,
    seed: `INSERT INTO cdc_log VALUES
  (1, 1, 'I', 'alpha', '2024-01-01 10:00'),
  (2, 2, 'I', 'bravo', '2024-01-01 10:05'),
  (3, 3, 'I', 'charlie', '2024-01-01 10:10'),
  (4, 1, 'U', 'alpha_v2', '2024-01-02 08:00'),
  (5, 2, 'D', NULL, '2024-01-02 09:00'),
  (6, 4, 'I', 'delta', '2024-01-02 10:00'),
  (7, 1, 'U', 'alpha_v3', '2024-01-03 08:00'),
  (8, 3, 'U', 'charlie_v2', '2024-01-03 09:00');`,
    answer: "WITH latest AS (SELECT record_id, operation, value, changed_at, ROW_NUMBER() OVER (PARTITION BY record_id ORDER BY changed_at DESC) AS rn FROM cdc_log) SELECT record_id, value, operation AS last_operation, changed_at AS last_changed FROM latest WHERE rn = 1 AND operation != 'D' ORDER BY record_id;",
    expectedOutput: [
      { record_id: 1, value: "alpha_v3", last_operation: "U", last_changed: "2024-01-03 08:00" },
      { record_id: 3, value: "charlie_v2", last_operation: "U", last_changed: "2024-01-03 09:00" },
      { record_id: 4, value: "delta", last_operation: "I", last_changed: "2024-01-02 10:00" },
    ],
  },
  {
    id: 51,
    title: "DE: Data Skew Detection",
    difficulty: "Hard",
    problem: "Detect data skew in the `distributed_data` table. For each `partition_key`, calculate `row_count`, `pct_of_total` (rounded to 1 decimal), and `skew_status`: 'heavily_skewed' if pct > 40, 'skewed' if pct > 25, otherwise 'balanced'. Also compute `ideal_pct` (100 / number of distinct partitions, rounded to 1 decimal). Order by `row_count` DESC.",
    schema: `CREATE TABLE distributed_data (
  id INTEGER PRIMARY KEY,
  partition_key TEXT,
  value TEXT
);`,
    seed: `INSERT INTO distributed_data VALUES
  (1, 'A', 'v1'), (2, 'A', 'v2'), (3, 'A', 'v3'), (4, 'A', 'v4'),
  (5, 'A', 'v5'), (6, 'A', 'v6'), (7, 'A', 'v7'), (8, 'A', 'v8'),
  (9, 'B', 'v9'), (10, 'B', 'v10'), (11, 'B', 'v11'),
  (12, 'C', 'v12'), (13, 'C', 'v13'),
  (14, 'D', 'v14');`,
    answer: "WITH stats AS (SELECT partition_key, COUNT(*) AS row_count, SUM(COUNT(*)) OVER () AS total_rows, COUNT(DISTINCT partition_key) OVER () AS num_partitions FROM distributed_data GROUP BY partition_key) SELECT partition_key, row_count, ROUND(row_count * 100.0 / total_rows, 1) AS pct_of_total, ROUND(100.0 / num_partitions, 1) AS ideal_pct, CASE WHEN row_count * 100.0 / total_rows > 40 THEN 'heavily_skewed' WHEN row_count * 100.0 / total_rows > 25 THEN 'skewed' ELSE 'balanced' END AS skew_status FROM stats ORDER BY row_count DESC;",
    expectedOutput: [
      { partition_key: "A", row_count: 8, pct_of_total: 57.1, ideal_pct: 25.0, skew_status: "heavily_skewed" },
      { partition_key: "B", row_count: 3, pct_of_total: 21.4, ideal_pct: 25.0, skew_status: "balanced" },
      { partition_key: "C", row_count: 2, pct_of_total: 14.3, ideal_pct: 25.0, skew_status: "balanced" },
      { partition_key: "D", row_count: 1, pct_of_total: 7.1, ideal_pct: 25.0, skew_status: "balanced" },
    ],
  },
  {
    id: 52,
    title: "DE: Late-Arriving Facts",
    difficulty: "Hard",
    problem: "The `events` table has an `event_time` (when it happened) and `ingested_at` (when the pipeline received it). Find late-arriving records where the ingestion delay exceeds 24 hours. Return `event_id`, `event_time`, `ingested_at`, `delay_hours` (rounded to 1 decimal), and rank them by delay using DENSE_RANK as `delay_rank`. Order by `delay_hours` DESC.",
    schema: `CREATE TABLE events (
  event_id INTEGER PRIMARY KEY,
  source TEXT,
  event_time TEXT,
  ingested_at TEXT,
  payload TEXT
);`,
    seed: `INSERT INTO events VALUES
  (1, 'app', '2024-01-01 10:00', '2024-01-01 10:05', 'click'),
  (2, 'app', '2024-01-01 12:00', '2024-01-03 08:00', 'purchase'),
  (3, 'iot', '2024-01-01 08:00', '2024-01-02 20:00', 'reading'),
  (4, 'iot', '2024-01-02 06:00', '2024-01-02 06:30', 'reading'),
  (5, 'app', '2024-01-01 14:00', '2024-01-04 14:00', 'signup'),
  (6, 'iot', '2024-01-03 10:00', '2024-01-03 10:10', 'alert');`,
    answer: "WITH delays AS (SELECT event_id, event_time, ingested_at, ROUND((JULIANDAY(ingested_at) - JULIANDAY(event_time)) * 24, 1) AS delay_hours FROM events WHERE (JULIANDAY(ingested_at) - JULIANDAY(event_time)) * 24 > 24) SELECT event_id, event_time, ingested_at, delay_hours, DENSE_RANK() OVER (ORDER BY delay_hours DESC) AS delay_rank FROM delays ORDER BY delay_hours DESC;",
    expectedOutput: [
      { event_id: 5, event_time: "2024-01-01 14:00", ingested_at: "2024-01-04 14:00", delay_hours: 72.0, delay_rank: 1 },
      { event_id: 2, event_time: "2024-01-01 12:00", ingested_at: "2024-01-03 08:00", delay_hours: 44.0, delay_rank: 2 },
      { event_id: 3, event_time: "2024-01-01 08:00", ingested_at: "2024-01-02 20:00", delay_hours: 36.0, delay_rank: 3 },
    ],
  },
  {
    id: 53,
    title: "DE: Star Schema - Fact & Dimension Join",
    difficulty: "Hard",
    problem: "Given a star schema with `fact_sales`, `dim_product`, and `dim_date` tables, write a query to calculate **total revenue and quantity by product category and quarter**. Return `category`, `quarter`, `total_qty`, `total_revenue`. Order by `category`, `quarter`.",
    schema: `CREATE TABLE dim_product (
  product_key INTEGER PRIMARY KEY,
  product_name TEXT,
  category TEXT
);

CREATE TABLE dim_date (
  date_key INTEGER PRIMARY KEY,
  full_date TEXT,
  quarter TEXT
);

CREATE TABLE fact_sales (
  sale_id INTEGER PRIMARY KEY,
  product_key INTEGER,
  date_key INTEGER,
  quantity INTEGER,
  revenue REAL
);`,
    seed: `INSERT INTO dim_product VALUES
  (1, 'Widget A', 'Hardware'),
  (2, 'Widget B', 'Hardware'),
  (3, 'Service X', 'Software'),
  (4, 'Service Y', 'Software');

INSERT INTO dim_date VALUES
  (20240101, '2024-01-01', '2024-Q1'),
  (20240215, '2024-02-15', '2024-Q1'),
  (20240410, '2024-04-10', '2024-Q2'),
  (20240520, '2024-05-20', '2024-Q2');

INSERT INTO fact_sales VALUES
  (1, 1, 20240101, 10, 500.0),
  (2, 2, 20240101, 5, 250.0),
  (3, 3, 20240215, 20, 1000.0),
  (4, 1, 20240410, 8, 400.0),
  (5, 4, 20240410, 15, 750.0),
  (6, 3, 20240520, 25, 1250.0),
  (7, 2, 20240520, 12, 600.0);`,
    answer: "SELECT dp.category, dd.quarter, SUM(fs.quantity) AS total_qty, SUM(fs.revenue) AS total_revenue FROM fact_sales fs JOIN dim_product dp ON fs.product_key = dp.product_key JOIN dim_date dd ON fs.date_key = dd.date_key GROUP BY dp.category, dd.quarter ORDER BY dp.category, dd.quarter;",
    expectedOutput: [
      { category: "Hardware", quarter: "2024-Q1", total_qty: 15, total_revenue: 750.0 },
      { category: "Hardware", quarter: "2024-Q2", total_qty: 20, total_revenue: 1000.0 },
      { category: "Software", quarter: "2024-Q1", total_qty: 20, total_revenue: 1000.0 },
      { category: "Software", quarter: "2024-Q2", total_qty: 40, total_revenue: 2000.0 },
    ],
  },
  {
    id: 54,
    title: "DE: Pipeline SLA Breach Detection",
    difficulty: "Hard",
    problem: "The `pipeline_sla` table defines expected max `sla_minutes` per pipeline. The `pipeline_executions` table logs actual runs. Find all executions that **breached their SLA**. Return `pipeline_name`, `execution_time`, `actual_minutes` (rounded to 1 decimal), `sla_minutes`, and `breach_minutes` (how much over SLA, rounded to 1 decimal). Order by `breach_minutes` DESC.",
    schema: `CREATE TABLE pipeline_sla (
  pipeline_name TEXT PRIMARY KEY,
  sla_minutes INTEGER
);

CREATE TABLE pipeline_executions (
  id INTEGER PRIMARY KEY,
  pipeline_name TEXT,
  start_time TEXT,
  end_time TEXT,
  status TEXT
);`,
    seed: `INSERT INTO pipeline_sla VALUES
  ('user_etl', 30),
  ('order_etl', 60),
  ('log_etl', 120),
  ('payment_etl', 45);

INSERT INTO pipeline_executions VALUES
  (1, 'user_etl', '2024-01-01 01:00', '2024-01-01 01:25', 'success'),
  (2, 'user_etl', '2024-01-02 01:00', '2024-01-02 01:50', 'success'),
  (3, 'order_etl', '2024-01-01 02:00', '2024-01-01 04:30', 'success'),
  (4, 'log_etl', '2024-01-01 03:00', '2024-01-01 04:00', 'success'),
  (5, 'payment_etl', '2024-01-01 01:00', '2024-01-01 02:00', 'success'),
  (6, 'order_etl', '2024-01-02 02:00', '2024-01-02 02:45', 'success');`,
    answer: "SELECT pe.pipeline_name, pe.start_time AS execution_time, ROUND((JULIANDAY(pe.end_time) - JULIANDAY(pe.start_time)) * 24 * 60, 1) AS actual_minutes, ps.sla_minutes, ROUND((JULIANDAY(pe.end_time) - JULIANDAY(pe.start_time)) * 24 * 60 - ps.sla_minutes, 1) AS breach_minutes FROM pipeline_executions pe JOIN pipeline_sla ps ON pe.pipeline_name = ps.pipeline_name WHERE (JULIANDAY(pe.end_time) - JULIANDAY(pe.start_time)) * 24 * 60 > ps.sla_minutes ORDER BY breach_minutes DESC;",
    expectedOutput: [
      { pipeline_name: "order_etl", execution_time: "2024-01-01 02:00", actual_minutes: 150.0, sla_minutes: 60, breach_minutes: 90.0 },
      { pipeline_name: "user_etl", execution_time: "2024-01-02 01:00", actual_minutes: 50.0, sla_minutes: 30, breach_minutes: 20.0 },
      { pipeline_name: "payment_etl", execution_time: "2024-01-01 01:00", actual_minutes: 60.0, sla_minutes: 45, breach_minutes: 15.0 },
    ],
  },
  {
    id: 55,
    title: "DE: Window-Based Deduplication with Priority",
    difficulty: "Hard",
    problem: "The `raw_ingestion` table receives records from multiple sources with a `source_priority` (lower = more trusted). When the same `entity_id` arrives from multiple sources, keep only the highest-priority (lowest number) record. If tied, keep the most recent `ingested_at`. Return `entity_id`, `value`, `source`, `source_priority`, `ingested_at`. Order by `entity_id`.",
    schema: `CREATE TABLE raw_ingestion (
  id INTEGER PRIMARY KEY,
  entity_id INTEGER,
  value TEXT,
  source TEXT,
  source_priority INTEGER,
  ingested_at TEXT
);`,
    seed: `INSERT INTO raw_ingestion VALUES
  (1, 100, 'val_a1', 'api', 1, '2024-01-01 10:00'),
  (2, 100, 'val_a2', 'csv', 3, '2024-01-01 12:00'),
  (3, 100, 'val_a3', 'api', 1, '2024-01-02 08:00'),
  (4, 200, 'val_b1', 'webhook', 2, '2024-01-01 09:00'),
  (5, 200, 'val_b2', 'csv', 3, '2024-01-01 11:00'),
  (6, 300, 'val_c1', 'csv', 3, '2024-01-01 10:00'),
  (7, 300, 'val_c2', 'webhook', 2, '2024-01-01 14:00'),
  (8, 300, 'val_c3', 'webhook', 2, '2024-01-02 09:00');`,
    answer: "WITH ranked AS (SELECT entity_id, value, source, source_priority, ingested_at, ROW_NUMBER() OVER (PARTITION BY entity_id ORDER BY source_priority ASC, ingested_at DESC) AS rn FROM raw_ingestion) SELECT entity_id, value, source, source_priority, ingested_at FROM ranked WHERE rn = 1 ORDER BY entity_id;",
    expectedOutput: [
      { entity_id: 100, value: "val_a3", source: "api", source_priority: 1, ingested_at: "2024-01-02 08:00" },
      { entity_id: 200, value: "val_b1", source: "webhook", source_priority: 2, ingested_at: "2024-01-01 09:00" },
      { entity_id: 300, value: "val_c3", source: "webhook", source_priority: 2, ingested_at: "2024-01-02 09:00" },
    ],
  },
];

module.exports = questions;
