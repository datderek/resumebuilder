import { format } from 'date-fns';

export default function DateDisplay({ dateRange }) {
  if (dateRange[0] && dateRange[1]) {
    let startDate;
    const endDate = format(new Date(dateRange[1]), "MMM") + " '" + format(new Date(dateRange[1]), "yy");

    if (dateRange[0].substring(0, 4) === dateRange[1].substring(0, 4)) {
      startDate = format(new Date(dateRange[0]), "MMM");
    } else {
      startDate = format(new Date(dateRange[0]), "MMM") + " '" + format(new Date(dateRange[0]), "yy");
    }

    return (
      <>
        <span className='date'>{startDate + ' - ' + endDate}</span>
      </>
    );
  } else if (dateRange[0]) {
    return (
      <span className='date'>{format(new Date(dateRange[0]), "MMM") + " '" + format(new Date(dateRange[0]), "yy") + ' - Present'}</span>  
    )
  } else {
    return;
  }
}