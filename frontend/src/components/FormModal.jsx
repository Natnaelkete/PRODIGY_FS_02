import useCreateEmployee from "../hooks/employee/useCreateEmployee";
import "./formModal.scss";

function FormModal() {
  const { create, isPending } = useCreateEmployee();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newForm = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phone"),
      description: formData.get("description"),
      education: formData.get("education"),
      address: formData.get("address"),
    };

    create(newForm);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Personal Information Form</h2>
        <div className="wrap">
          <div>
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="fullName" required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="wrap">
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div>
            <label htmlFor="education">Education:</label>
            <input type="text" id="education" name="education" required />
          </div>
        </div>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="btn">
          {isPending ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default FormModal;
