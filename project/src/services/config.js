import api from "./api";

export default api = {
  listStudents: () => {
    return api.get("students");
  },
  searchStudent: (student) => {
    return api.get(`student/${student}`);
  },
  registerStudent(student) {
    return api.post(`register/${student}`);
  },
  editStudentRegister(id) {
    return api.put(`edit/${id}`);
  },
  deleteStudent(id) {
    return api.delete(`delete/${id}`);
  },
};
