import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../../services/api";
import toast from "react-hot-toast";

function useUpdateEmployee() {
  const queryClient = useQueryClient();

  const { mutate: update, isPending } = useMutation({
    mutationFn: ({ id, formData }) => updateEmployee(id, formData),
    onSuccess: (data) => {
      toast.success("Employee updated");
      queryClient.invalidateQueries(["employee", data]);
    },
  });
  return { update, isPending };
}

export default useUpdateEmployee;
