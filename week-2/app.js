import promptSync from 'prompt-sync';
import dayjs from 'dayjs';

const prompt = promptSync();

const bookList = [];

const book = {
  tittle: '',
  interest: '',
  price: 0,
  added: '',
};

const date = dayjs().format('DD/MM/YYYY HH:MM:SS');

// book.name = prompt('Masukkan nama buku: ');
// book.interest = prompt('Masukkan minat baca: ');
// book.price = prompt('Masukkan harga buku: ');
// book.added = date;

const addBook = () => {
  console.clear();

  const tittle = prompt('Masukkan nama buku: ');
  const interest = prompt('Masukkan minat baca: ');
  const price = prompt('Masukkan harga buku: ');
  const added = date;

  bookList.push({
    tittle,
    interest,
    price,
    added,
  });
};

const running = true;

while (running) {
  console.log('Favorite Books Library');
  console.log('1. Show all books');
  console.log('2. Add new book');
  console.log('3. Exit');

  const choice = prompt('What do you want to do? ');

  if (choice === '1') {
    console.log(bookList);
  } else if (choice === '2') {
    addBook();
  } else if (choice === '3') {
    running = false;
  } else {
    console.log('Invalid input');
  }
}
