import styled from "styled-components";
import { useRecentBookings } from "./useRecesentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecesentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingRecentBookings } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays();

  if (isLoadingRecentBookings || isLoadingStays) return <Spinner />;

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
