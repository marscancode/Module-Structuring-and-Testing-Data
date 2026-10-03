function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} am`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else if (hours === 12) {
    return `12:${minutes} pm`;
  } else {
    return `${time} am`;
  }
}

export { formatAs12HourClock };
