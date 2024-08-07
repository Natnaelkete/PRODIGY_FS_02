import { useState } from "react";
import "./tableContent.scss";
// import { employees } from "../../data/employee";

import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "../ui/Modal";
import FormModal from "./FormModal";
import useGetEmployee from "../hooks/employee/useGetEmployee";
import WarningModal from "./WarningModal";
import DetailModal from "./DetailModal";
import EditModal from "./EditModal";

function TableContent() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [formModal, setFormModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const { employees, isLoading } = useGetEmployee();

  const handleDropdownClick = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
    setCurrentId(id);
  };

  if (isLoading) return <div>Loading..</div>;

  return (
    <div className={`container table-wrapper`}>
      <h1>Employee List</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee._id}</td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td className="dropdown-wrapper">
                <BsThreeDotsVertical
                  className="detail"
                  onClick={() => {
                    handleDropdownClick(employee._id);
                  }}
                />
                {activeDropdown === employee._id && (
                  <>
                    <div className="menu">
                      <p
                        onClick={() => {
                          setDetailModal(!detailModal);
                        }}
                      >
                        View Details
                      </p>
                      <p onClick={() => setWarningModal(!warningModal)}>
                        Delete
                      </p>
                      <p onClick={() => setEditModal(!editModal)}>Edit</p>
                    </div>
                    {/* This div will cover the entire screen*/}
                    <div
                      className="menu-bg"
                      onClick={() => setActiveDropdown(null)}
                    ></div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <FiArrowLeftCircle className="icons" />
        <FiArrowRightCircle className="icons" />
      </div>
      <button className="btn" onClick={() => setFormModal(!formModal)}>
        Add Employee
      </button>

      {/* Reusable Modal here */}
      {formModal && (
        <Modal prop={setFormModal}>
          <FormModal />
        </Modal>
      )}
      {detailModal && (
        <Modal prop={setDetailModal}>
          <DetailModal currentId={currentId} />
        </Modal>
      )}
      {warningModal && (
        <Modal prop={setWarningModal}>
          <WarningModal
            setWarningModal={setWarningModal}
            currentId={currentId}
          />
        </Modal>
      )}
      {editModal && (
        <Modal prop={setEditModal}>
          <EditModal setEditModal={setEditModal} currentId={currentId} />
        </Modal>
      )}
    </div>
  );
}

export default TableContent;
