// Movie and category data for the static version
const categories = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Adventure' },
  { id: 3, name: 'Comedy' },
  { id: 4, name: 'Drama' },
  { id: 5, name: 'Horror' },
  { id: 6, name: 'Sci-Fi' },
  { id: 7, name: 'Thriller' },
  { id: 8, name: 'Animation' }
];

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    releaseDate: "2010-07-16",
    isReleased: true,
    categoryId: 1,
    rating: "8.8",
    director: "Christopher Nolan"
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    isReleased: true,
    categoryId: 1,
    rating: "9.0",
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    releaseDate: "1994-10-14",
    isReleased: true,
    categoryId: 7,
    rating: "8.9",
    director: "Quentin Tarantino"
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    releaseDate: "1994-09-23",
    isReleased: true,
    categoryId: 4,
    rating: "9.3",
    director: "Frank Darabont"
  },
  {
    id: 5,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    releaseDate: "1972-03-24",
    isReleased: true,
    categoryId: 4,
    rating: "9.2",
    director: "Francis Ford Coppola"
  },
  {
    id: 6,
    title: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    imageUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    releaseDate: "1999-10-15",
    isReleased: true,
    categoryId: 4,
    rating: "8.8",
    director: "David Fincher"
  },
  {
    id: 7,
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    isReleased: true,
    categoryId: 6,
    rating: "8.7",
    director: "Lana and Lilly Wachowski"
  },
  {
    id: 8,
    title: "Goodfellas",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    imageUrl: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    releaseDate: "1990-09-12",
    isReleased: true,
    categoryId: 4,
    rating: "8.7",
    director: "Martin Scorsese"
  },
  {
    id: 9,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    releaseDate: "2014-11-07",
    isReleased: true,
    categoryId: 6,
    rating: "8.6",
    director: "Christopher Nolan"
  },
  {
    id: 10,
    title: "The Silence of the Lambs",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    imageUrl: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    releaseDate: "1991-02-14",
    isReleased: true,
    categoryId: 7,
    rating: "8.6",
    director: "Jonathan Demme"
  },
  {
    id: 11,
    title: "Blade Runner 2049",
    description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    imageUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    releaseDate: "2017-10-06",
    isReleased: true,
    categoryId: 6,
    rating: "8.0",
    director: "Denis Villeneuve"
  },
  {
    id: 12,
    title: "The Avengers",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    imageUrl: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    releaseDate: "2012-05-04",
    isReleased: true,
    categoryId: 1,
    rating: "8.0",
    director: "Joss Whedon"
  },
  {
    id: 13,
    title: "The Social Network",
    description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    imageUrl: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    releaseDate: "2026-01-15",
    isReleased: false,
    categoryId: 4,
    rating: "7.7",
    director: "David Fincher"
  },
  {
    id: 14,
    title: "Whiplash",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    imageUrl: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCzxXett.jpg",
    releaseDate: "2025-12-10",
    isReleased: false,
    categoryId: 4,
    rating: "8.5",
    director: "Damien Chazelle"
  },
  {
    id: 15,
    title: "Avatar",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    imageUrl: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    releaseDate: "2009-12-18",
    isReleased: true,
    categoryId: 2,
    rating: "7.8",
    director: "James Cameron"
  },
  {
    id: 16,
    title: "Titanic",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    imageUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    releaseDate: "1997-12-19",
    isReleased: true,
    categoryId: 4,
    rating: "7.9",
    director: "James Cameron"
  },
  {
    id: 17,
    title: "Mad Max: Fury Road",
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    imageUrl: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    releaseDate: "2015-05-15",
    isReleased: true,
    categoryId: 1,
    rating: "8.1",
    director: "George Miller"
  },
  {
    id: 18,
    title: "The Incredibles",
    description: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    imageUrl: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    releaseDate: "2004-11-05",
    isReleased: true,
    categoryId: 8,
    rating: "8.0",
    director: "Brad Bird"
  },
  {
    id: 19,
    title: "Spirited Away",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    imageUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    releaseDate: "2001-07-20",
    isReleased: true,
    categoryId: 8,
    rating: "8.6",
    director: "Hayao Miyazaki"
  },
  {
    id: 20,
    title: "The Lion King",
    description: "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
    imageUrl: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    releaseDate: "1994-06-24",
    isReleased: true,
    categoryId: 8,
    rating: "8.5",
    director: "Roger Allers, Rob Minkoff"
  },
  {
    id: 21,
    title: "Get Out",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    imageUrl: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfA8tGqRGmAwqH9.jpg",
    releaseDate: "2026-02-24",
    isReleased: false,
    categoryId: 5,
    rating: "7.7",
    director: "Jordan Peele"
  },
  {
    id: 22,
    title: "The Grand Budapest Hotel",
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    imageUrl: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrOo.jpg",
    releaseDate: "2014-03-07",
    isReleased: true,
    categoryId: 3,
    rating: "8.1",
    director: "Wes Anderson"
  },
  {
    id: 23,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    imageUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    releaseDate: "1994-07-06",
    isReleased: true,
    categoryId: 4,
    rating: "8.8",
    director: "Robert Zemeckis"
  },
  {
    id: 24,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    imageUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    releaseDate: "2025-12-19",
    isReleased: false,
    categoryId: 2,
    rating: "8.8",
    director: "Peter Jackson"
  },
  {
    id: 25,
    title: "Dune",
    description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    imageUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    releaseDate: "2025-10-01",
    isReleased: false,
    categoryId: 6,
    rating: "8.0",
    director: "Denis Villeneuve"
  },
  {
    id: 26,
    title: "No Time to Die",
    description: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    imageUrl: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    releaseDate: "2026-03-15",
    isReleased: false,
    categoryId: 1,
    rating: "7.5",
    director: "Cary Joji Fukunaga"
  },
  {
    id: 27,
    title: "The Green Mile",
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    imageUrl: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    releaseDate: "1999-12-10",
    isReleased: true,
    categoryId: 4,
    rating: "8.6",
    director: "Frank Darabont"
  },
  {
    id: 28,
    title: "Eternal Sunshine of the Spotless Mind",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    imageUrl: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    releaseDate: "2004-03-19",
    isReleased: true,
    categoryId: 4,
    rating: "8.3",
    director: "Michel Gondry"
  },
  {
    id: 29,
    title: "Parasite",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    releaseDate: "2019-10-11",
    isReleased: true,
    categoryId: 7,
    rating: "8.6",
    director: "Bong Joon-ho"
  },
  {
    id: 30,
    title: "Joker",
    description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    releaseDate: "2019-10-04",
    isReleased: true,
    categoryId: 7,
    rating: "8.4",
    director: "Todd Phillips"
  }
];