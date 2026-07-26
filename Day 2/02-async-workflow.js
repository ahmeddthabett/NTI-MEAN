const movies = [
  {
    id: 'movie-avatar',
    title: 'Avatar: The Way of Water',
    capacity: 50,
    bookedSeats: 32,
  },
  {
    id: 'movie-batman',
    title: 'The Batman',
    capacity: 30,
    bookedSeats: 30,
  },
];

//**********************

function findMovieByIdWithCallback(movieId, callback) {
  setTimeout(() => {
    const movie = movies.find((item) => item.id === movieId);

    if (!movie) {
      callback(new Error('Movie was not found'));
      return;
    }

    callback(null, { ...movie });
  }, 50);
}

//**********************

function findMovieById(movieId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!movieId) {
        reject(new Error('Movie id is required'));
        return;
      }

      const movie = movies.find((item) => item.id === movieId);

      if (!movie) {
        reject(new Error('Movie was not found'));
        return;
      }

      resolve({ ...movie });
    }, 50);
  });
}

//**********************

function calculateAvailableSeats(movie) {
  return Math.max(movie.capacity - movie.bookedSeats, 0);
}

//**********************

function ensureSeatAvailable(movie) {
  if (calculateAvailableSeats(movie) <= 0) {
    throw new Error('No seats available for this movie');
  }

  return true;
}

//**********************

function validateCustomer(customer) {
  const name = customer?.name?.trim() ?? '';
  const email = customer?.email?.trim().toLowerCase() ?? '';

  if (!name) {
    throw new Error('Customer name is required');
  }

  if (!email.includes('@')) {
    throw new Error('A valid customer email is required');
  }

  return { name, email };
}

//**********************

function bookTicketWithPromises(movieId, customer) {
  return findMovieById(movieId).then((movie) => {
    const validCustomer = validateCustomer(customer);
    ensureSeatAvailable(movie);

    return {
      id: `ticket-${movie.id}`,
      status: 'confirmed',
      customer: validCustomer,
      movieId: movie.id,
      availableSeatsBeforeBooking: calculateAvailableSeats(movie),
    };
  });
}

//**********************

async function bookTicket(movieId, customer) {
  try {
    const movie = await findMovieById(movieId);
    const validCustomer = validateCustomer(customer);
    ensureSeatAvailable(movie);

    return {
      status: 'success',
      message: 'Ticket booking successful.',
      ticket: {
        id: `ticket-${movie.id}`,
        status: 'confirmed',
        customer: validCustomer,
        movieId: movie.id,
      },
    };
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
}

//**********************

function printScenario(label, result) {
  console.log(`\n${label}`);
  console.log(JSON.stringify(result, null, 2));
}

//**********************

async function runDemonstration() {
  console.log('Cinema Ticketing Center — Day 2 async workflow');

  findMovieByIdWithCallback('movie-avatar', (error, movie) => {
    if (error) {
      console.error('Callback lookup failed:', error.message);
      return;
    }

    console.log(`Callback lookup: ${movie.title}`);
  });

  await findMovieById('movie-avatar')
    .then((movie) => {
      const availableSeats = calculateAvailableSeats(movie);
      console.log(`Promise lookup: ${availableSeats} available seats`);
    })
    .catch((error) => {
      console.error('Promise lookup failed:', error.message);
    });

  const promiseBooking = await bookTicketWithPromises('movie-avatar', {
    name: 'Mona Ali',
    email: 'MONA@EXAMPLE.COM',
  });
  printScenario('Promise booking succeeds', promiseBooking);

  const successfulResult = await bookTicket('movie-avatar', {
    name: '  Omar Hassan  ',
    email: '  OMAR@EXAMPLE.COM  ',
  });
  printScenario('async/await booking succeeds', successfulResult);

  const invalidEmailResult = await bookTicket('movie-avatar', {
    name: 'Salma',
    email: 'invalid-email',
  });
  printScenario('Invalid email is rejected', invalidEmailResult);

  const fullMovieResult = await bookTicket('movie-batman', {
    name: 'Youssef',
    email: 'youssef@example.com',
  });
  printScenario('Full movie hall is rejected', fullMovieResult);

  const missingMovieResult = await bookTicket('movie-missing', {
    name: 'Nour',
    email: 'nour@example.com',
  });
  printScenario('Missing movie is rejected', missingMovieResult);
}

//**********************

runDemonstration().catch((error) => {
  console.error('Unexpected demonstration failure:', error);
  process.exitCode = 1;
});