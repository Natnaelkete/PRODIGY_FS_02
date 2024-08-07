import useDeleteEmployee from "../hooks/employee/useDeleteEmployee";
import "./warning.scss";

function WarningModal({ setWarningModal, currentId }) {
  const { deleteEmployeeFn, isPending } = useDeleteEmployee();
  return (
    <div className="warning">
      <h1>Are you sure you want to delete</h1>
      <div className="btn-container">
        <button className="btn cancel" onClick={() => setWarningModal(false)}>
          No
        </button>
        <button
          disabled={isPending}
          className="btn"
          onClick={() => {
            deleteEmployeeFn(currentId);
            setWarningModal(false);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default WarningModal;
