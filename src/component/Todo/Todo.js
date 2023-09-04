import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState([]);
  const [editindex, setEditIndex] = useState("");
  const [edit, setEdit] = useState(false);

  const HendleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const HendleSubmit = (event) => {
    event.preventDefault();

    if (edit) {
      const data = show;
      Object.assign(data[editindex], input);
      setShow([...data]);
      setEdit(false);
      setInput({
        name: "",
        email: "",
      });
    } else {
      setShow([...show, input]);
      setInput({
        name: "",
        email: "",
      });
    }
  };

  const HendlEdit = (id) => {
    const ttdata = show[id];
    setInput({
      name: ttdata.name,
      email: ttdata.email,
    });
    setEditIndex(id);
    setEdit(true);
  };
  const HendlDelete = (id) => {
    const tempdata = show.filter((data, i) => i !== id);
    setShow(tempdata);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <p className="h3 text-center">Todo List</p>
              </div>
              <div className="card-body">
                <form onSubmit={HendleSubmit}>
                  <input
                    type="name"
                    placeholder="Enter Name"
                    className="form-control mt-2"
                    name="name"
                    value={input.name}
                    onChange={HendleChange}
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control mt-2"
                    name="email"
                    value={input.email}
                    onChange={HendleChange}
                  />
                  <button className="btn btn-secondary mt-2">
                    {edit ? "Update" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <section className=" p-2  align-items-center justify-content-center">
          <table className="w-100">
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {show.map((data, id) => {
                return (
                  <tr key={id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => HendlEdit(id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => HendlDelete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Todo;
