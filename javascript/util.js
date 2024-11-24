export function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);

    const seconds = Math.floor((now - past) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // Approximation of a month (30 days)
    const years = Math.floor(days / 365); // Approximation of a year (365 days)

    if (years > 0) {
        const remainingMonths = Math.floor((days % 365) / 30);
        return years + " year" + (years > 1 ? "s" : "") + (remainingMonths > 0 ? " and " + remainingMonths + " month" + (remainingMonths > 1 ? "s" : "") : "");
    } else if (months > 0) {
        const remainingWeeks = Math.floor((days % 30) / 7);
        return months + " month" + (months > 1 ? "s" : "") + (remainingWeeks > 0 ? " and " + remainingWeeks + " week" + (remainingWeeks > 1 ? "s" : "") : "");
    } else if (weeks > 0) {
        const remainingDays = days % 7;
        return weeks + " week" + (weeks > 1 ? "s" : "") + (remainingDays > 0 ? " and " + remainingDays + " day" + (remainingDays > 1 ? "s" : "") : "");
    } else if (days > 0) {
        return days + " day" + (days > 1 ? "s" : "");
    } else {
        return "Today";
    }
}
  


export function openWebsiteOnAnotherTab(event) {
    event.preventDefault();
    window.open(event.target.href);
}