import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
const movies = [
  // Hollywood Movies
  {
    title: "Inception",
    image: "../src/assets/images/inception.jpg",
    description: "A mind-bending thriller by Christopher Nolan.",
    industry: "Hollywood",
  },
  {
    title: "The Dark Knight",
    image: "../src/assets/images/The Dark Knight.jpg",
    description: "A gripping superhero film directed by Christopher Nolan.",
    industry: "Hollywood",
  },
  {
    title: "Parasite",
    image: "../src/assets/images/Parasite.jpg",
    description: "A South Korean dark comedy thriller by Bong Joon-ho.",
    industry: "Hollywood",
  },
  {
    title: "Pulp Fiction",
    image: "../src/assets/images/Pulp Fiction.jpg",
    description: "A cult classic crime film directed by Quentin Tarantino.",
    industry: "Hollywood",
  },
  {
    title: "The Shawshank Redemption",
    image: "../src/assets/images/The Shawshank Redemption.jpg",
    description:
      "A drama film based on a novella by Stephen King, directed by Frank Darabont.",
    industry: "Hollywood",
  },
  {
    title: "The Godfather",
    image: "../src/assets/images/The Godfather.jpg",
    description:
      "A crime film directed by Francis Ford Coppola, based on Mario Puzo's novel.",
    industry: "Hollywood",
  },
  {
    title: "The Matrix",
    image: "../src/assets/images/The Matrix.jpg",
    description: "A sci-fi action film directed by the Wachowskis.",
    industry: "Hollywood",
  },
  {
    title: "Fight Club",
    image: "../src/assets/images/Fight Club.jpg",
    description: "A psychological drama film directed by David Fincher.",
    industry: "Hollywood",
  },
  {
    title: "Forrest Gump",
    image: "../src/assets/images/Forrest Gump.jpg",
    description: "A drama film directed by Robert Zemeckis.",
    industry: "Hollywood",
  },
  {
    title: "The Silence of the Lambs",
    image: "../src/assets/images/The Silence of the Lambs.jpg",
    description: "A psychological horror film directed by Jonathan Demme.",
    industry: "Hollywood",
  },
  {
    title: "Gladiator",
    image: "../src/assets/images/Gladiator.jpg",
    description: "A historical drama film directed by Ridley Scott.",
    industry: "Hollywood",
  },
  {
    title: "Titanic",
    image: "../src/assets/images/Titanic.jpg",
    description: "A romance-disaster film directed by James Cameron.",
    industry: "Hollywood",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image:
      "../src/assets/images/The Lord of the Rings The Fellowship of the Ring.jpg",
    description: "A fantasy film directed by Peter Jackson.",
    industry: "Hollywood",
  },
  {
    title: "The Avengers",
    image: "../src/assets/images/The Avengers.jpg",
    description: "A superhero film directed by Joss Whedon.",
    industry: "Hollywood",
  },
  {
    title: "Avatar",
    image: "../src/assets/images/Avatar.jpg",
    description: "A sci-fi epic directed by James Cameron.",
    industry: "Hollywood",
  },
  {
    title: "Jurassic Park",
    image: "../src/assets/images/Jurassic Park.jpg",
    description: "A sci-fi adventure film directed by Steven Spielberg.",
    industry: "Hollywood",
  },
  {
    title: "Interstellar",
    image: "../src/assets/images/Interstellar.jpg",
    description: "A sci-fi film directed by Christopher Nolan.",
    industry: "Hollywood",
  },
  {
    title: "Whiplash",
    image: "../src/assets/images/Whiplash.jpg",
    description: "A drama film directed by Damien Chazelle.",
    industry: "Hollywood",
  },
  {
    title: "Avatar The Way of Water",
    image: "../src/assets/images/Avatar The Way of Water.jpg",
    description: "The Way of Water is a 2022  epic sci-fi film directed by James Cameron.",
    industry: "Hollywood",
  },
  {
    title: "La La Land",
    image: "../src/assets/images/La La Land.jpg",
    description: "A musical film directed by Damien Chazelle.",
    industry: "Hollywood",
  },

  // Bollywood Movies
  {
    title: "Dhoom",
    image: "../src/assets/images/Dhoom.jpg",
    description: "Dhoom is an action thriller film directed by Sanjay Gadhvi.",
    industry: "Bollywood",
  },
  {
    title: "Sholay",
    image: "../src/assets/images/Sholay.jpg",
    description:
      "An iconic Bollywood action-adventure film directed by Ramesh Sippy.",
    industry: "Bollywood",
  },
  {
    title: "3 Idiots",
    image: "../src/assets/images/3 Idiots.jpg",
    description: "A Bollywood comedy-drama film directed by Rajkumar Hirani.",
    industry: "Bollywood",
  },
  {
    title: "Kuch Kuch Hota Hai",
    image: "../src/assets/images/Kuch Kuch Hota Hai.jpg",
    description: "A Bollywood romantic drama film directed by Rajkumar Hirani.",
    industry: "Bollywood",
  },
  {
    title: "Baag Milkha Bhaag",
    image: "../src/assets/images/baag milkha bhaag.jpg",
    description:
      "A Bollywood biographical sports drama film directed by Rakeysh Omprakash Mehra.",
    industry: "Bollywood",
  },
  {
    title: "Dangal",
    image: "../src/assets/images/Dangal.jpg",
    description: "A biographical sports drama film directed by Nitesh Tiwari.",
    industry: "Bollywood",
  },
  {
    title: "Lagaan",
    image: "../src/assets/images/Lagaan.jpg",
    description: "A period drama film directed by Ashutosh Gowariker.",
    industry: "Bollywood",
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    image: "../src/assets/images/Kabhi Khushi Kabhie Gham.jpg",
    description: "A Bollywood family drama directed by Karan Johar.",
    industry: "Bollywood",
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    image: "../src/assets/images/Dilwale Dulhania Le Jayenge.jpg",
    description: "A Bollywood romantic drama directed by Aditya Chopra.",
    industry: "Bollywood",
  },
  {
    title: "Piku",
    image: "../src/assets/images/Piku.jpg",
    description: "A comedy-drama film directed by Shoojit Sircar.",
    industry: "Bollywood",
  },
  {
    title: "Queen",
    image: "../src/assets/images/Queen.jpg",
    description: "A comedy-drama film directed by Vikas Bahl.",
    industry: "Bollywood",
  },
  {
    title: "Barfi!",
    image: "../src/assets/images/Barfi!.jpg",
    description: "A romantic comedy-drama film directed by Anurag Basu.",
    industry: "Bollywood",
  },
  {
    title: "Zindagi Na Milegi Dobara",
    image: "../src/assets/images/Zindagi Na Milegi Dobara.jpg",
    description: "A Bollywood comedy-drama film directed by Zoya Akhtar.",
    industry: "Bollywood",
  },
  {
    title: "Chakde! India",
    image: "../src/assets/images/Chakde! India.jpg",
    description: "A sports drama film directed by Shimit Amin.",
    industry: "Bollywood",
  },
  {
    title: "Rang De Basanti",
    image: "../src/assets/images/Rang De Basanti.jpg",
    description: "A drama film directed by Rakeysh Omprakash Mehra.",
    industry: "Bollywood",
  },
  {
    title: "Taare Zameen Par",
    image: "../src/assets/images/Taare Zameen Par.jpg",
    description: "A drama film directed by Aamir Khan.",
    industry: "Bollywood",
  },
  {
    title: "Gully Boy",
    image: "../src/assets/images/Gully Boy.jpg",
    description: "A musical drama film directed by Zoya Akhtar.",
    industry: "Bollywood",
  },
  {
    title: "Devdas",
    image: "../src/assets/images/Devdas.jpg",
    description:
      "A Bollywood romantic drama directed by Sanjay Leela Bhansali.",
    industry: "Bollywood",
  },
  {
    title: "Ae Dil Hai Mushkil",
    image: "../src/assets/images/Ae Dil Hai Mushkil.jpg",
    description: "A Bollywood romantic drama directed by Karan Johar.",
    industry: "Bollywood",
  },
  {
    title: "Bajrangi Bhaijaan",
    image: "../src/assets/images/Bajrangi Bhaijaan.jpg",
    description: "A Bollywood drama film directed by Kabir Khan.",
    industry: "Bollywood",
  },

  // Malayalam Movies
  {
    title: "Drishyam",
    image: "../src/assets/images/Drishyam.jpg",
    description: "A Malayalam thriller directed by Jeethu Joseph.",
    industry: "Malayalam",
  },
  {
    title: "Kumbalangi Nights",
    image: "../src/assets/images/Kumbalangi Nights.jpg",
    description: "A Malayalam drama film directed by Madhu C. Narayanan.",
    industry: "Malayalam",
  },
  {
    title: "Aavesham",
    image: "../src/assets/images/Aavesham.jpg",
    description: "A Malayalam stoner action comedy film directed by Jithu Madhavan.",
    industry: "Malayalam",
  },
  {
    title: "Manjummel Boys",
    image: "../src/assets/images/Manjummel Boys.jpg",
    description: "A Malayalam Adventure Drama Thriller directed by Chidambaram.",
    industry: "Malayalam",
  },
  {
    title: "Minnal Murali",
    image: "../src/assets/images/Minnal Murali.jpg",
    description: "A Malayalam superhero film directed by Basil Joseph.",
    industry: "Malayalam",
  },
  {
    title: "Jallikattu",
    image: "../src/assets/images/Jallikattu.jpg",
    description: "A Malayalam  Action & Adventure movie directed by Lijo Jose Pellissery.",
    industry: "Malayalam",
  },
  {
    title: "Trance",
    image: "../src/assets/images/Trance.jpg",
    description: "A Malayalam neo-noir psychological thriller film directed by Anwar Rasheed",
    industry: "Malayalam",
  },
  {
    title: "Bangalore Days",
    image: "../src/assets/images/Bangalore Days.jpg",
    description: "A Malayalam romantic comedy-drama directed by Anjali Menon.",
    industry: "Malayalam",
  },
  {
    title: "Premam",
    image: "../src/assets/images/Premam.jpg",
    description: "A Malayalam romantic drama directed by Alphonse Puthren.",
    industry: "Malayalam",
  },
  {
    title: "Jacobinte Swargarajyam",
    image: "../src/assets/images/Jacobinte Swargarajyam.jpg",
    description: "A Malayalam drama film directed by Vineeth Sreenivasan.",
    industry: "Malayalam",
  },
  {
    title: "Ustad Hotel",
    image: "../src/assets/images/Ustad Hotel.jpg",
    description: "A Malayalam drama film directed by Anwar Rasheed.",
    industry: "Malayalam",
  },
  {
    title: "Action Hero Biju",
    image: "../src/assets/images/Action Hero Biju.jpg",
    description: "A Malayalam action-comedy film directed by Abrid Shine.",
    industry: "Malayalam",
  },
  {
    title: "Mayanadhi",
    image: "../src/assets/images/Mayanadhi.jpg",
    description: "A Malayalam romantic thriller directed by Aashiq Abu.",
    industry: "Malayalam",
  },
  {
    title: "Maheshinte Prathikaaram",
    image: "../src/assets/images/Maheshinte Prathikaaram.jpg",
    description: "A Malayalam comedy drama film directed by Dileesh Pothan.",
    industry: "Malayalam",
  },
  {
    title: "Oru Vadakkan Veeragatha",
    image: "../src/assets/images/Oru Vadakkan Veeragatha.jpg",
    description: "A Malayalam epic historical drama directed by Hariharan.",
    industry: "Malayalam",
  },
  {
    title: "C.I.D. Moosa",
    image: "../src/assets/images/C.I.D. Moosa.jpg",
    description: "A Malayalam action-comedy film directed by Johny Antony.",
    industry: "Malayalam",
  },
  {
    title: "Ennu Ninte Moideen",
    image: "../src/assets/images/Ennu Ninte Moideen.jpg",
    description: "A Malayalam romantic drama directed by R. S. Vimal.",
    industry: "Malayalam",
  },
  {
    title: "Kalyanaraman",
    image: "../src/assets/images/Kalyanaraman.jpg",
    description: "A Malayalam comedy-drama film directed by K. K. Rajeev.",
    industry: "Malayalam",
  },
  {
    title: "Kilukkam",
    image: "../src/assets/images/Kilukkam.jpg",
    description: "A Malayalam comedy-drama film directed by Priyadarshan.",
    industry: "Malayalam",
  },
  {
    title: "Manichitrathazhu",
    image: "../src/assets/images/Manichitrathazhu.jpg",
    description: "A Malayalam psychological thriller directed by Fazil.",
    industry: "Malayalam",
  },

  // Tamil Movies
  {
    title: "Baasha",
    image:
      "../src/assets/images/Baasha.jpg",
    description: "A Tamil action film directed by Suresh Krissna.",
    industry: "Tamil",
  },
  {
    title: "Mankatha",
    image:
      "../src/assets/images/Mankatha.jpg",
    description: "A Tamil heist film directed by Venkat Prabhu.",
    industry: "Tamil",
  },
  {
    title: "Super Deluxe",
    image:
      "../src/assets/images/Super Deluxe.jpg",
    description: "A Tamil film directed by Thiagarajan Kumararaja.",
    industry: "Tamil",
  },
  {
    title: "Vikram",
    image:
      "../src/assets/images/Vikram.jpg",
    description: "A Tamil action film directed by Lokesh Kanagaraj.",
    industry: "Tamil",
  },
  {
    title: "Visaranai",
    image:
      "../src/assets/images/Visaranai.jpg",
    description: "A Tamil crime drama directed by Vetrimaaran.",
    industry: "Tamil",
  },
  {
    title: "Subramaniapuram",
    image:
      "../src/assets/images/Subramaniapuram.jpg",
    description: "A Tamil period drama directed by M. Sasikumar.",
    industry: "Tamil",
  },
  {
    title: "Kakka Muttai",
    image:
      "../src/assets/images/Kakka Muttai.jpg",
    description: "A Tamil film directed by M. Manikandan.",
    industry: "Tamil",
  },
  {
    title: "Master",
    image:
      "../src/assets/images/Master.jpg",
    description: "A Tamil action-thriller directed by Lokesh Kanagaraj.",
    industry: "Tamil",
  },
  {
    title: "Mersal",
    image:
      "../src/assets/images/Mersal.jpg",
    description: "A Tamil action film directed by Atlee Kumar.",
    industry: "Tamil",
  },
  {
    title: "Vaathi",
    image:
      "../src/assets/images/Vaathi.jpg",
    description: "A Tamil drama film directed by Siva Karthikeyan.",
    industry: "Tamil",
  },
  {
    title: "Jigarthanda",
    image:
      "../src/assets/images/Jigarthanda.jpg",
    description: "A Tamil crime thriller directed by Karthik Subbaraj.",
    industry: "Tamil",
  },
  {
    title: "Ratsasan",
    image:
      "../src/assets/images/Ratsasan.jpg",
    description: "A Tamil psychological thriller directed by Ram Kumar.",
    industry: "Tamil",
  },
  {
    title: "Kanchana",
    image:
      "../src/assets/images/Kanchana.jpg",
    description: "A Tamil horror comedy film directed by Raghava Lawrence.",
    industry: "Tamil",
  },
  {
    title: "Thani Oruvan",
    image:
      "../src/assets/images/Thani Oruvan.jpg",
    description: "A Tamil action thriller directed by Mohan Raja.",
    industry: "Tamil",
  },
  {
    title: "Vada Chennai",
    image:
      "../src/assets/images/Vada Chennai.jpg",
    description: "A Tamil gangster drama directed by Vetrimaaran.",
    industry: "Tamil",
  },
  {
    title: "Pariyerum Perumal",
    image:
      "../src/assets/images/Pariyerum Perumal.jpg",
    description: "A Tamil legal drama directed by Mari Selvaraj.",
    industry: "Tamil",
  },
  {
    title: "Petta",
    image:
      "../src/assets/images/Petta.jpg",
    description: "A Tamil action film directed by Karthik Subbaraj.",
    industry: "Tamil",
  },
  {
    title: "Madharasapattinam",
    image:
      "../src/assets/images/Madharasapattinam.jpg",
    description: "A Tamil historical drama directed by A. L. Vijay.",
    industry: "Tamil",
  },
  {
    title: "Deiva Thirumagal",
    image:
      "../src/assets/images/Deiva Thirumagal.jpg",
    description: "A Tamil drama film directed by A. L. Vijay.",
    industry: "Tamil",
  },
  {
    title: "Enthiran",
    image:
      "../src/assets/images/Enthiran.jpg",
    description: "A Tamil science fiction film directed by S. Shankar.",
    industry: "Tamil",
  },

  //Telugu movies
  {
    "title": "Baahubali: The Beginning",
    "image": "../src/assets/images/Baahubali The Beginning.jpg",
    "description": "A Telugu epic action film directed by S. S. Rajamouli.",
    "industry": "Telugu"
  },
  {
    "title": "Baahubali: The Conclusion",
    "image": "../src/assets/images/Baahubali The Conclusion.jpg",
    "description": "The sequel to Baahubali: The Beginning, directed by S. S. Rajamouli.",
    "industry": "Telugu"
  },
  {
    "title": "Arjun Reddy",
    "image": "../src/assets/images/Arjun Reddy.jpg",
    "description": "A Telugu romantic drama film directed by Sandeep Reddy Vanga.",
    "industry": "Telugu"
  },
  {
    "title": "Mahanati",
    "image": "../src/assets/images/Mahanati.jpg",
    "description": "A Telugu biographical film directed by Nag Ashwin.",
    "industry": "Telugu"
  },
  {
    "title": "Jersey",
    "image": "../src/assets/images/Jersey.jpg",
    "description": "A Telugu sports drama directed by Gautam Tinnanuri.",
    "industry": "Telugu"
  },
  {
    "title": "Eega",
    "image": "../src/assets/images/Eega.jpg",
    "description": "A Telugu fantasy film directed by S. S. Rajamouli.",
    "industry": "Telugu"
  },
  {
    "title": "Sye",
    "image": "../src/assets/images/Sye.jpg",
    "description": "A Telugu sports film directed by S. S. Rajamouli.",
    "industry": "Telugu"
  },
  {
    "title": "Pelli Sandadi",
    "image": "../src/assets/images/Pelli Sandadi.jpg",
    "description": "A Telugu romantic drama directed by K. Raghavendra Rao.",
    "industry": "Telugu"
  },
  {
    "title": "Magadheera",
    "image": "../src/assets/images/Magadheera.jpg",
    "description": "A Telugu historical action film directed by S. S. Rajamouli.",
    "industry": "Telugu"
  },
  {
    "title": "Srimanthudu",
    "image": "../src/assets/images/Srimanthudu.jpg",
    "description": "A Telugu drama film directed by Koratala Siva.",
    "industry": "Telugu"
  },
  {
    "title": "Kshana Kshanam",
    "image": "../src/assets/images/Kshana Kshanam.jpg",
    "description": "A Telugu thriller film directed by Ram Gopal Varma.",
    "industry": "Telugu"
  },
  {
    "title": "Chiranjeevi",
    "image": "../src/assets/images/Chiranjeevi.jpg",
    "description": "A Telugu action drama directed by K. Raghavendra Rao.",
    "industry": "Telugu"
  },
  {
    "title": "Gangleader",
    "image": "../src/assets/images/Gangleader.jpg",
    "description": "A Telugu action film directed by Vijaya Bapineedu.",
    "industry": "Telugu"
  },
  {
    "title": "Nuvvostanante Nenoddantana",
    "image": "../src/assets/images/Nuvvostanante Nenoddantana.jpg",
    "description": "A Telugu romantic film directed by K. S. Ravindra.",
    "industry": "Telugu"
  },
  {
    "title": "Ala Vaikunthapurramuloo",
    "image": "../src/assets/images/Ala Vaikunthapurramuloo.jpeg",
    "description": "A Telugu action drama directed by Trivikram Srinivas.",
    "industry": "Telugu"
  },
  {
    "title": "Sankarabharanam",
    "image": "../src/assets/images/Sankarabharanam.jpg",
    "description": "A Telugu classic drama film directed by K. Vishwanath.",
    "industry": "Telugu"
  },
  {
    "title": "Arya",
    "image": "../src/assets/images/Arya.jpg",
    "description": "A Telugu romatic comedy film directed by Sukumar.",
    "industry": "Telugu"
  },
  {
    "title": "Oopiri",
    "image": "../src/assets/images/Oopiri.jpg",
    "description": "A Telugu drama film directed by Vamsi Paidipally.",
    "industry": "Telugu"
  },
  {
    "title": "Jalsa",
    "image": "../src/assets/images/Jalsa.jpg",
    "description": "A Telugu action film directed by Trivikram Srinivas.",
    "industry": "Telugu"
  },
  {
    "title": "Pushpa",
    "image": "../src/assets/images/Pushpa.jpg",
    "description": "A Telugu action drama film written and directed by Sukumar.",
    "industry": "Telugu"
  }
];
function MoviePage() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default MoviePage;
