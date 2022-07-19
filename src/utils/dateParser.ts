let dateParser = (date: string) => {
    var dateString = date; // Oct 23
  
    const [day, month, year]:any = dateString.split("/");
  
    // month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+year, month - 1, day);
    return dateObject.getTime();
  }

  export default dateParser;