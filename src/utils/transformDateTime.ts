export function transformDateTime(time: string) {
  const date: Date = new Date(time);
  const now: Date = new Date();

  const transformedTime = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (transformedTime < 60) {
    return `${transformedTime} sec(s) ago`;
  } else if (transformedTime < 3600) {
    const minutes = Math.floor(transformedTime / 60);
    return `${minutes} min(s) ago`;
  } else if (transformedTime < 86400) {
    const hours = Math.floor(transformedTime / 3600);
    return `${hours} hour(s) ago`;
  } else {
    const days = Math.floor(transformedTime / 86400);
    return `${days} day(s) ago`;
  }
}