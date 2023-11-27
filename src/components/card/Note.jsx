import React from "react";

export default function Note({ priority, date, content, note }) {
  const getBackgound = () => {
    switch (priority) {
      case "Urgent":
        return "bg-danger";
      case "Normal":
        return "bg-success";
      case "Biasa Saja":
        return "bg-primary";
      case "Tidak Penting":
        return "bg-dark";
    }
  };

  return (
    <div className="col-lg-3">
      <div className="card h-100 border border-dark">
        <div className={`card-header text-white ${getBackgound()}`}>
          {priority}
        </div>
        <div className="card-body">
          <h5 className="card-title">Deadline: {date}</h5>
          <p className="card-text">{content}</p>
          <p className="card-text">{note}</p>
        </div>
      </div>
    </div>
  );
}
