class View {
  constructor() {
    this.totalPrice = document.querySelector('.info-price');
    this.totalSeats = document.querySelector('.info-seats');
    this.movie = document.querySelector('#movie');
    this.seatsContainer = document.querySelector('.container');
    this.seats = document.querySelectorAll('.row .seat:not(.occupied)');
    this.seatsIndex = document.querySelector('.info-index');
  }

  render(total, selectedSeats, seatsIndex) {
    this.totalPrice.textContent = total;
    this.totalSeats.textContent = selectedSeats;
    this.seatsIndex.textContent = seatsIndex && `Your seats are ${seatsIndex}`;
  }
}

export default new View();
