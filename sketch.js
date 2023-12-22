const numbers_count = 100;
const number_size = 30 + 1; 
const half_size = number_size / 2;
const color_offset = 360 / numbers_count;

function setup() {
  createCanvas(number_size * numbers_count, number_size * (numbers_count + 1));
  const center_y = height / 2;
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(number_size / 2);
  colorMode(HSB, 360, 100, 100)
  rectMode(CENTER);
  noSmooth();

  background(0);

  translate(half_size, 0);
  for (let i = 0; i < numbers_count; ++i) {
    noFill();
    
    for (let j = 0; j < numbers_count; ++j) {
      stroke(color_offset * j, 100, 100);
      circle(
        half_size * j + i * (j * number_size),
        center_y,
        (j + 1) * number_size
      );
    }

    stroke(255);
    fill(0);
    if (isPrime(i)) {
      fill(250, 100, 100);
    }
    
    circle(i * number_size, center_y, number_size);
    fill(255);
    text(i, i * number_size, center_y);
  }
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
