const time = document.querySelector('.start');
const btn = document.querySelector('.btn');

//holds the status of the seats.contains selection of seats.
let selSeat = 1;
// array container of boolean values
const seats = [
  false, true, true, false, true, true, true, false, true, true, false, true, true, true, false, true, true, false, true, false, true, false, true, false, false, true, false, false, true, true];

// listens to the event by calling the findSeat function after the page loads
btn.addEventListener('click', findSeat);

// function to find the seat number
function findSeat() {
  const seatNumber =
    Number(prompt('Enter seat number of your choice:'));

  if (selSeat >= 0) {
    selSeat = -1; // status: no selection
    initSeats();  // calls the function to initiate the process
  }
  // searches through all the seats for availability
  for (let i = seatNumber; i <= seats.length; i++) {
    if (seats[i - 1]) {
      selSeat = i; // status: has seat selected

      // sets the seat selection & updates its appearance
      document.getElementById('seat' + i).src = 'select.png';
      document.getElementById('seat' + i).alt = 'Your Seat';

      // prompt user to accept seat
      //ask user if he/she really wants the seat given to him/her
      const Accept = confirm('seat ' + i + ' is available.Accept?');

      if (Accept) {
        //user accepts the seat, done!.
        break;

      }
      else
      //keep searching for the one you want
      {
        selSeat = -1; // no selection

        document.getElementById('seat' + i).src = 'selected.png';
        document.getElementById('seat' + i).alt = 'seat ' + i +
          ' is available';

      }

    }

  }

}
// function to initiate a seat
function initSeats() {
  const seatNumber =
    Number(prompt('Enter Same Seat Number Again:'));
  // if the seat number is within range, then carry on
  if (seatNumber <= seats.length && seatNumber != 0) {
    // loop through all the seat
    for (let i = seatNumber; i <= seats.length; i++) {
      if (seats[i - 1]) {
        // shows a seat is not taken
        document.getElementById('seat' + i).src = 'select.png';
        document.getElementById('seat' + i).alt = 'seat ' + i +
          ' is available';

        return
      }

      else {
        // shows a seat is taken
        document.getElementById('seat' + i).src = 'selected.png';
        document.getElementById('seat' + i).alt = 'seat ' + i +
          ' is Unavailable';
        return
      }
    }
  }
  else {
    // show an alert if user enters a seat out of range
    alert('Sorry! Our Bus only has ' + seats.length + ' seats.');
  }
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const weekdays = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const futureDate = new Date(2020, 11, 5, 09, 30, 00);
let yr = futureDate.getFullYear();
let ma = months[futureDate.getMonth()];
let wday = weekdays[futureDate.getDay()];
let dat = futureDate.getDate();
let hr = futureDate.getHours();
let mi = futureDate.getMinutes();
let seco = futureDate.getSeconds();

if (mi < 10) {
  mi = "0" + mi;
}
if (hr < 10) {
  hr = "0" + hr;
}
let result = " " + wday + ", " + dat + " " + ma + " At " + hr + ":" + mi + " " + ",  " + yr;

time.innerHTML = result;