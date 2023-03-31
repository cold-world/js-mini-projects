class Model {
  constructor() {
    this.ticketPrice = 0;
    this.selectedSeats = [];
  }

  getTotalPrice() {
    return this.ticketPrice * this.selectedSeats.length;
  }
}

export default new Model();
