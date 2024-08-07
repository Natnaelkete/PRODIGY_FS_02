import { useQuery } from "@tanstack/react-query";
import { GetEmployeeById } from "../../services/api";

function useGetEmployeeById(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => GetEmployeeById(id),
    onError: (err) => console.log(err.message),
    enabled: !!id,
  });

  return { data, isLoading };
}

export default useGetEmployeeById;
