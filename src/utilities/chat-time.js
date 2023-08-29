

export default function chatTime(timestamp) {
  const now = new Date();
  const messageTime = new Date(timestamp);
  const timeDifference = now - messageTime;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  
  if (timeDifference < minute) {
    return 'just now';
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDifference < 7 * day) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  } else {
    // Display the full date if it's been more than a week
    return messageTime.toLocaleDateString();
  }
}