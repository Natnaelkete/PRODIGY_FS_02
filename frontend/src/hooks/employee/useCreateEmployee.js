import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee } from "../../services/api";
import toast from "react-hot-toast";

function useCreateEmployee() {
  const queryClient = useQueryClient();

  const { mutate: create, isPending } = useMutation({
    mutationFn: (newForm) => createEmployee(newForm),
    onSuccess: (data) => {
      toast.success("Employee created");
      queryClient.invalidateQueries(["employee", data]);
    },
    onError: (err) => toast.error(err.response.data.message),
  });
  return { create, isPending };
}

export default useCreateEmployee;
