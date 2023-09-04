import React, { Fragment, useState } from "react";
// crud opration
const Crud = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editindex, setEditIndex] = useState("");

  const HendleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const HendlSubmit = (event) => {
    event.preventDefault();
    if (edit) {
      const ttdata = show;
      Object.assign(ttdata[editindex], input);
      setShow([...ttdata]);
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

  const HendleDelete = (index) => {
    const filterdata = show.filter((data, i) => i !== index);
    setShow(filterdata);
  };

  const HendelEdit = (index) => {
    const tempdata = show[index];
    setInput({
      name: tempdata.name,
      email: tempdata.email,
    });
    setEdit(true);
    setEditIndex(index);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className="mt-3 ">
              <h2 className="text-center">Crud App</h2>
            </div>
          </div>
        </div>
        <section className=" p-2 d-flex flex-column align-items-center justify-content-center">
          <div className="col-md-4 ">
            <form onSubmit={HendlSubmit}>
              <div className="list-group-item list-group-item-action">
                <label>Name : </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={input.name}
                  onChange={HendleChange}
                />
              </div>
              <div className="list-group-item list-group-item-action ">
                <label>Email :</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={input.email}
                  onChange={HendleChange}
                />
              </div>
              <button className="btn btn-primary btn-sm small mt-2">
                {edit ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </section>
        <section>
          <div className="container mt-4 ">
            {show.map((data, i) => {
              return (
                <div className="row">
                  <div className="col-md-4">
                    <p className="h3">Name</p>
                    <p>{data.name}</p>
                  </div>
                  <div className="col-md-4">
                    <p className="h3">Email</p>
                    <p>{data.email}</p>
                  </div>
                  <div className="col-md-4">
                    <p className="h3">Action</p>
                    <button
                      className="btn btn-info btn-sm "
                      onClick={() => HendelEdit(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-2"
                      onClick={() => HendleDelete(i)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Crud;
