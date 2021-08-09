import { useState } from "react";

function App() {
  const [userLists, setUserList] = useState([
    {
      name: "Mike"
    },
    {
      name: "John"
    },
    {
      name: "Jim"
    },
    {
      name: "Green"
    },
    {
      name: "Joe"
    },
    {
      name: "Anna"
    },
    {
      name: "Louise"
    },
    {
      name: "Ryan"
    },
    {
      name: "Thomas"
    },
    {
      name: "Nayomi"
    }
  ]);

  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [mode, setMode] = useState("add");
  const [editIndex, setEditIndex] = useState(0);

  // 입력폼 보기
  const onShowAddForm = () => {
    setMode("add");
    setShow(true);
  };

  // 한 행 추가
  const onAddData = () => {
    setUserList((state) => {
      const newState = state;
      return [...newState, { name: userName }];
    });
  };

  // 한 행 수정
  const onEditData = () => {
    console.log(editIndex);
    console.log(userName);
    setUserList((state) => {
      let newState = state;
      newState[editIndex].name = userName;
      return [...state, newState];
    });
  };
  // userLists[0].name='홍길동'; === [{name:"홍길동"}];

  // 이름 데이타 가져오기
  const onNameChange = (event) => {
    setUserName(event.target.value); // 홍길동
    // console.log(event.target.value);
  };

  const onRemove = (index) => {
    // console.log(item);
    // console.log(userLists);
    console.log(index);
    setUserList((state) => {
      let newState = state;
      newState.splice(index, 1); // 배열에서 지우기
      return [...state, newState];
    });
  };

  const onEdit = (name, index) => {
    console.log(name);
    console.log(index);

    setMode("edit");
    setUserName(name);
    setShow(true);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h2>Users</h2>
      {userLists.map((user, index) => (
        <div key={index}>
          {user.name}
          <button onClick={() => onRemove(index)}>delete</button>
          <button onClick={() => onEdit(user.name, index)}>edit</button>
        </div>
      ))}

      <button onClick={onShowAddForm}>add</button>

      {show == true ? (
        <div>
          <h2>
            {mode} {editIndex}
          </h2>
          이름:
          <input
            name="user_name"
            onChange={onNameChange}
            value={userName}
          ></input>
          {mode === "add" ? (
            <button onClick={onAddData}>입력완료</button>
          ) : null}
          {mode === "edit" ? (
            <button onClick={onEditData}>수정완료</button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default App;
