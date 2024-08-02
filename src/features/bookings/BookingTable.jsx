import BookingRow from './BookingRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useBookings } from './useBookings';
import Spinner from '../../ui/Spinner';
import Pagination from '../../ui/Pagination';
// import { useSearchParams } from 'react-router-dom';

function BookingTable() {
  const { bookings, isLoading } = useBookings();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="Bookings" />;

  // CLIENT SIDE FILTERED AND SORTING ***************************************
  // // 1. FILTERED
  // const filteredValue = searchParams.get('status') || 'all';
  // let filteredBookings;

  // if (filteredValue === 'all') filteredBookings = bookings;
  // if (filteredValue === 'checked-out')
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === 'checked-out'
  //   );
  // if (filteredValue === 'checked-in')
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === 'checked-in'
  //   );
  // if (filteredValue === 'unconfirmed')
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === 'unconfirmed'
  //   );

  // // 2. SORTING
  // const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  // const [field, direction] = sortBy.split('-');

  // // modify directions
  // const modifier = direction === 'asc' ? 1 : -1;
  // // Sorted bookings
  // const sortedBookings = filteredBookings.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={54} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
