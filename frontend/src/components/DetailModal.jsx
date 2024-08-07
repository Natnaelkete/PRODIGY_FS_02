import "./detail.scss";
import useGetEmployeeById from "../hooks/employee/useGetEmployeeById";

function DetailModal({ currentId }) {
  const { data, isLoading } = useGetEmployeeById(currentId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="detail-wrapper">
      <div className="heading">
        <img src="https://avatar.iran.liara.run/public/boy?"></img>
        <div>
          <h1>{data.fullName}</h1>
          <p>{data.email}</p>
        </div>
      </div>
      <ul>
        <li>
          <h2>Address</h2>
          <p>- {data.address}</p>
        </li>
        <li>
          <h2>Phone No.</h2>
          <p>- {data.phoneNumber}</p>
        </li>
        <li>
          <h2>Eduction</h2>
          <p>- {data.education}</p>
        </li>
        <li>
          <h2>Description</h2>
          <p>- {data.description}</p>
        </li>
      </ul>
      <p></p>
    </div>
  );
}

export default DetailModal;
