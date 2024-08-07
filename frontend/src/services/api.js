import axios from "axios";

export const SignupApi = async (formData) => {
  const { data } = await axios.post("/api/users/signup", formData);
  return data;
};

export const LoginApi = async (formData) => {
  const { data } = await axios.post("/api/users/login", formData);
  console.log(data);
  return data;
};

export const LogoutApi = async () => {
  const { data } = await axios.post("/api/users/logout");
  return data;
};

export const GetEmployee = async () => {
  const { data } = await axios.get("/api/employee");

  return data;
};

export const GetEmployeeById = async (id) => {
  const { data } = await axios.get(`/api/employee/${id}`);

  return data;
};

export const createEmployee = async (formData) => {
  const { data } = await axios.post(`/api/employee/create`, formData);

  return data;
};

export const updateEmployee = async (id, formData) => {
  const res = await axios.put(`/api/employee/profile/${id}`, formData);

  return res.data;
};

export const deleteEmployee = async (id) => {
  const res = await axios.delete(`/api/employee/${id}`);

  return res.data;
};
