import { Link } from "react-router";

const Browsedetails = ({ item, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.budget}</td>
      <td>{item.title}</td>
      <Link to={`/details/${item._id}`}>
        <td>
          <button className="btn bg-blue-700 text-white"> See Details</button>
        </td>
      </Link>
    </tr>
  );
};

export default Browsedetails;
