import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function useGetCabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}

export default useGetCabins;
