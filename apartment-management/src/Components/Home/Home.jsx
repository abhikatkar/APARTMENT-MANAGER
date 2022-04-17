import { useEffect, useState } from "react";
import axios from "axios";
import "../Home/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [value , setValue] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://apartment-management-app.herokuapp.com/data?_limit=3&_page=1`")
      .then((res) => {
        setItem([...res.data]);
      });
  };

  const own = () => {
    axios
      .get("https://apartment-management-app.herokuapp.com/data?type=owner")
      .then((res) => {
        setItem([...res.data]);
      });
  };

  const ten = () => {
    axios
      .get("https://apartment-management-app.herokuapp.com/data?type=tenant")
      .then((res) => {
        setItem([...res.data]);
      });
  };

  const asc = () => {
    axios
      .get("https://apartment-management-app.herokuapp.com/data?asc=1")
      .then((res) => {
        setItem([...res.data]);
      });
  };

  const desc = () => {
    axios
      .get("https://apartment-management-app.herokuapp.com/data?desc=-1")
      .then((res) => {
        setItem([...res.data]);
      });
  };

  const block = (value) => {
    axios
      .get(`https://apartment-management-app.herokuapp.com/data?block=${value}`)
      .then((res) => {
        setItem([...res.data]);
      });
  };

  return (
    <div>
      <h1>Home page</h1>

      <hr />

      <div className="btn">
        <button onClick={own}>Filter by Owner</button>
        <button onClick={ten}>Filter by Tenant</button>
        <div>
            <input type="text" onChange={(e)=>{setValue(e.target.value)}} />
            <button onClick={()=>{block(value)}}>search</button>
        </div>
        <button onClick={asc}>Sort Flat No. in Ascending order</button>
        <button onClick={desc}>Sort Flat No. in Descendingly order</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Flat no.</th>
            <th>Total no. of residents</th>
            <th>Block</th>
            <th>Type</th>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {item.map((d) => {
            return (
              <tr>
                <th>{d.flat_no}</th>
                <th>{d.no_res}</th>
                <th>{d.block}</th>
                <th>{d.type}</th>
                <th>{d.res1name}</th>
                <th>
                  <Link to={`/detail/${d._id}`}>
                    <img src={d.pic} alt="" />
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
