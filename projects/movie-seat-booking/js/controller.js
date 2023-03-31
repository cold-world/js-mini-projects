import model from './model.js';
import view from './view.js';

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    view.movie.addEventListener('change', () => this.onMovieChange());
    view.seatsContainer.addEventListener('click', (e) => this.onSeatClick(e));
    this.reset();
    this.model.ticketPrice = +this.view.movie.value;
  }

  onMovieChange() {
    this.model.ticketPrice = +this.view.movie.value;
    this.reset();
  }

  onSeatClick(e) {
    const seat = e.target.closest('.seat');
    if (!seat || seat.classList.contains('occupied')) return;

    seat.classList.toggle('selected');

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    this.model.selectedSeats = [...selectedSeats].map((seat) => [...this.view.seats].indexOf(seat));

    const total = this.model.getTotalPrice();

    const indexes = this.model.selectedSeats.join(',');

    this.view.render(total, selectedSeats.length, indexes);
  }

  reset() {
    this.model.selectedSeats = [];
    this.view.seatsContainer
      .querySelectorAll('.row .seat.selected')
      .forEach((seat) => seat.classList.remove('selected'));
    const total = this.model.getTotalPrice();
    const selectedSeats = this.model.selectedSeats.length;
    this.view.render(total, selectedSeats);
  }
}

const controller = new Controller(view, model);
