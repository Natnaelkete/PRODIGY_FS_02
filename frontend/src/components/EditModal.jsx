import useUpdateEmployee from "../hooks/employee/useUpdateEmployee";
import "./editModal.scss";

function EditModal({ currentId }) {
  const { update, isPending } = useUpdateEmployee();

  function handleSubmit(e) {
    e.preventDefault();

    const newForm = new FormData(e.target);
    const formData = {
      fullName: newForm.get("fullName"),
      email: newForm.get("email"),
      password: newForm.get("password"),
      education: newForm.get("education"),
      address: newForm.get("address"),
      phoneNumber: newForm.get("phone"),
    };
    update({ id: currentId, formData });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Employee info</h2>
        <div className="wrap">
          <div>
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="fullName" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>

        <div className="wrap">
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div>
            <label htmlFor="education">Education:</label>
            <input type="text" id="education" name="education" />
          </div>
        </div>
        <div>
          <label htmlFor="education">Password:</label>
          <input type="text" id="education" name="education" />
        </div>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" />

        <button type="submit" className="btn">
          {isPending ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default EditModal;
