import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  //PROCEDIMIENTO PARA MOSTRAR LOS BLOGS
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlogs(res.data);
  };

  //PROCEDIMIENTO PARA ELIMINAR UN BLOG
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs(); //vuelvo a pintar
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary my-2">
            <i className="fa-regular fa-square-plus"></i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((items) => (
                <tr key={items.id}>
                  <td>{items.title}</td>
                  <td>{items.content}</td>
                  <td>
                    <Link to={`/edit/${items.id}`} className="btn btn-info">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => deleteBlog(items.id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
