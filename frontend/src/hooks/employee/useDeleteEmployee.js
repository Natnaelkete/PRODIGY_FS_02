import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployee } from "../../services/api";
import toast from "react-hot-toast";

function useDeleteEmployee() {
  const queryClient = useQueryClient();

  const { mutate: deleteEmployeeFn, isPending } = useMutation({
    mutationFn: (id) => deleteEmployee(id),
    onSuccess: (data) => {
      toast.success("Employee Deleted");
      queryClient.invalidateQueries(["employee", data]);
    },
    onError: (err) => toast.error(err.response.data.message),
  });
  return { deleteEmployeeFn, isPending };
}

export default useDeleteEmployee;
