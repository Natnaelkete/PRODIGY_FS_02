import { useQuery } from "@tanstack/react-query";
import { GetEmployee } from "../../services/api";

function useGetEmployee() {
  const { data: employees, isLoading } = useQuery({
    queryKey: ["employee"],
    queryFn: () => GetEmployee(),
    onError: (err) => console.log(err),
  });

  return { employees, isLoading };
}

export default useGetEmployee;
