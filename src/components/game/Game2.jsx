import React from "react";
import NormalText from "../text/normalText";
import Note from "../card/Note";
import "./Game2.css";

export default function Game2() {
  const [list, setList] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [note, setNote] = React.useState("");
  const [priority, setPriority] = React.useState([
    "Urgent",
    "Normal",
    "Biasa Saja",
    "Tidak Penting",
  ]);
  const [date, setDate] = React.useState("");

  const resetField = () => {
    setContent("");
    setNote("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (document.getElementById("toDoList").checkValidity() === false) {
      document.getElementById("toDoList").reportValidity();
    } else {
      const data = {
        content: content,
        note: note,
        priority: document.getElementById("priority").value,
        date: date,
      };
      setList((dataSebelumnya) => {
        return [...dataSebelumnya, data];
      });
      resetField();
    }
  };
  return (
    <div className="mx-5">
      <h1>Simple To-Do List</h1>
      <form action={submitHandler} id="toDoList">
        <div className="row mt-4">
          <div className="col col-lg-6">
            <NormalText forInput={"content"}>
              Apa yang ingin dikerjakan?
            </NormalText>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Nama To-Do List"
              name="content"
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
            <NormalText forInput={"note"}>Catatan</NormalText>
            <textarea
              name="note"
              id="note"
              rows="5"
              className="form-control"
              placeholder="Isi Catatan To-Do List"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              required
            ></textarea>

            <div className="text-start mt-3">
              <button className="btn btn-primary flex" onClick={submitHandler}>
                Tambah To-Do List
              </button>
            </div>
          </div>
          <div className="col col-lg-6">
            <NormalText forInput={"priority"}>Pilih Priority</NormalText>
            <select
              name="priority"
              id="priority"
              className="form-select mb-4"
              required="required"
            >
              <option value="">Pilih Priority</option>
              {priority.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>

            <NormalText forInput={"date"}>Tanggal To-Do List</NormalText>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control mb-4"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>
        </div>
      </form>
      <div className="mt-1 row g-3">
        {list.map((item, index) => (
          <Note
            key={index}
            priority={item.priority}
            date={item.date}
            content={item.content}
            note={item.note}
          />
        ))}
      </div>
    </div>
  );
}
