import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

export function useTodayActivity() {
  const { isLoading: isTodayActivityLoading, data: todayActivities } = useQuery(
    {
      queryFn: getStaysTodayActivity,
      queryKey: ['today-activity'],
    }
  );

  return { todayActivities, isTodayActivityLoading };
}
