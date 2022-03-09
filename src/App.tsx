// import React, { useState, useEffect } from "react";
// import Input from "./Input";
// import { Todo } from "./model";

// interface FromInt {
//   from: string;
//   id: number;
// }
// const App: React.FC = () => {
//   const [todo, settodo] = useState<string>("");
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [from, setFrom] = useState<FromInt>();

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (from?.from === "edit") {
//       setTodos(
//         todos.map((tododd) =>
//           tododd.id === from.id ? { ...tododd, todo: todo } : tododd
//         )
//       );
//     }

//     if (todo) {
//       setTodos([
//         ...todos,
//         {
//           id: Date.now(),
//           todo,
//           isDone: false,
//         },
//       ]);
//       settodo("");
//     }
//   };

//   const done = (id: number) => {
//     let newArray: Todo[] = [...todos];
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
//       )
//     );
//   };

//   const del = (id: number) => {
//     let newp: Todo[] = todos.filter((todo) => todo.id !== id);
//     setTodos([...newp]);
//   };

//   const edit = (todoItem: Todo) => {
//     settodo(todoItem.todo);
//     setFrom({
//       from: "edit",
//       id: todoItem.id,
//     });
//   };

//   // useEffect(() => {
//   //   if (from?.from === "edit") {
//   //     console.log("hey");
//   //   }
//   // }, [from]);

//   return (
//     <div>
//       <h1>Taskify</h1>
//       <Input todo={todo} setTodo={settodo} handleAdd={handleAdd} />
//       {todos &&
//         todos.map((todoItem) => (
//           <div
//             key={todoItem.id}
//             style={{
//               backgroundColor: "#2102ff",
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               marginTop: 12,
//             }}
//           >
//             <p>{todoItem.todo} </p>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <button onClick={() => edit(todoItem)}>edit</button>
//               <button onClick={() => del(todoItem.id)}>delete</button>
//               <button
//                 style={{
//                   backgroundColor: todoItem.isDone ? "green" : "red",
//                 }}
//                 onClick={() => done(todoItem.id)}
//               >
//                 {todoItem.isDone ? "COMPLETED" : "INCOMPLETED"}
//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default App;

// import React from "react";

// class Department {
//   constructor(
//     private readonly id: string,
//     public name: string,
//     private employee: string
//   ) {}

//   protected describes() {
//     console.log(
//       `department ${this.id}:${this.name} and our only employee is ${this.employee}`
//     );
//   }
// }

// const dep = new Department("1", "Tech", "alice");
// // console.log(dep);

// class IT extends Department {
//   constructor(id: string, public totalEmployess: number, employee: string) {
//     super(id, "IT", employee);
//   }
//   addMore() {
//     this.describes;
//   }
// }

// const newIT = new IT("25", 550, "alice ndeh");
// console.log(newIT);

// function App() {
//   return <div></div>;
// }

// export default App;

import React from "react";
interface Person {
  name: string;
  age: number;
}

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1 = 5, n2 = 10) => {
  return n1 + n2;
};

let user1: Person = {
  name: "alice",
  age: 20,
};
function App() {
  return <div></div>;
}

export default App;
