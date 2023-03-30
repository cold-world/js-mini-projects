//elements
const totalPrice = document.querySelector('.info-price');
const totalSeats = document.querySelector('.info-seats');
const movie = document.querySelector('#movie');
const seatsContainer = document.querySelector('.container');

let ticketPrice = +movie.value;

//logic
const booking = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected').length;
  const total = ticketPrice * selectedSeats;
  totalPrice.textContent = total;
  totalSeats.textContent = selectedSeats;
};

const resetState = () => {
  totalPrice.textContent = 0;
  totalSeats.textContent = 0;
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  selectedSeats.forEach((seat) => seat.classList.remove('selected'));
};

//event listeners
seatsContainer.addEventListener('click', (e) => {
  const seat = e.target.closest('.seat');
  if (!seat) return;

  if (seat.classList.contains('occupied')) return;

  seat.classList.toggle('selected');
  booking();
});

movie.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  resetState();
});
