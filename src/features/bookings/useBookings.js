import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { INITIAL_PAGE_SIZE, PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page")
    ? INITIAL_PAGE_SIZE
    : Number(searchParams.get("page"));

  // Query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + INITIAL_PAGE_SIZE],
      queryFn: () =>
        getBookings({ filter, sortBy, page: page + INITIAL_PAGE_SIZE }),
    });

  if (page > INITIAL_PAGE_SIZE)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - INITIAL_PAGE_SIZE],
      queryFn: () =>
        getBookings({ filter, sortBy, page: page - INITIAL_PAGE_SIZE }),
    });

  return { isLoading, error, bookings, count };
}
