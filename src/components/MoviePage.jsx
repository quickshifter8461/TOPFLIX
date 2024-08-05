import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
const movies = [
  {
    title: "The Shawshank Redemption",
    image: "/Images/The Shawshank Redemption.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    industry: "Hollywood",
  },
  {
    title: "The Godfather",
    image: "/Images/The Godfather.jpg",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    industry: "Hollywood",
  },
  {
    title: "The Dark Knight",
    image: "/Images/The Dark Knight.jpg",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    industry: "Hollywood",
  },
  {
    title: "Pulp Fiction",
    image: "/Images/Pulp Fiction.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    industry: "Hollywood",
  },
  {
    title: "Schindler's List",
    image: "/Images/Schindler's List.jpg",
    description:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    industry: "Hollywood",
  },
  {
    title: "Forrest Gump",
    image: "/Images/Forrest Gump.jpg",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    industry: "Hollywood",
  },
  {
    title: "Inception",
    image: "/Images/Inception.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    industry: "Hollywood",
  },
  {
    title: "The Matrix",
    image: "/Images/The Matrix.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    industry: "Hollywood",
  },
  {
    title: "Fight Club",
    image: "/Images/Fight Club.jpg",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    industry: "Hollywood",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    image: "/Images/The Lord of the Rings The Return of the King.jpg",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    industry: "Hollywood",
  },
  //bollywood
  {
    title: "Sholay",
    image: "/Images/Sholay.jpg",
    description: "A classic tale of friendship and revenge set in rural India.",
    industry: "Bollywood",
  },
  {
    title: "3 Idiots",
    image: "/Images/3 Idiots.jpg",
    description:
      "A comedy-drama about three friends and their experiences at an Indian engineering college.",
    industry: "Bollywood",
  },
  {
    title: "Dangal",
    image: "/Images/Dangal.jpg",
    description:
      "A biographical sports drama about the Phogat family and their journey in wrestling.",
    industry: "Bollywood",
  },
  {
    title: "Lagaan",
    image: "/Images/Lagaan.jpg",
    description:
      "A period drama about a group of villagers who challenge British rulers to a game of cricket.",
    industry: "Bollywood",
  },
  {
    title: "Mughal-E-Azam",
    image: "/Images/Mughal-E-Azam.jpg",
    description:
      "A historical epic about the love affair between Prince Salim and Anarkali.",
    industry: "Bollywood",
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    image: "/Images/Dilwale Dulhania Le Jayenge.jpg",
    description:
      "A romantic drama about a young couple who fall in love during a trip to Europe.",
    industry: "Bollywood",
  },
  {
    title: "Mother India",
    image: "/Images/Mother India.jpg",
    description:
      "A dramatic tale of a poverty-stricken woman who raises her sons amidst hardships.",
    industry: "Bollywood",
  },
  {
    title: "Gully Boy",
    image: "/Images/Gully Boy.jpg",
    description:
      "A musical drama inspired by the lives of street rappers in Mumbai.",
    industry: "Bollywood",
  },
  {
    title: "Barfi!",
    image: "/Images/Barfi!.jpg",
    description:
      "A charming tale of a mute and deaf man and his relationships with two women.",
    industry: "Bollywood",
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    image: "/Images/Kabhi Khushi Kabhie Gham.jpg",
    description:
      "A family drama about the complex relationships between members of a wealthy Indian family.",
    industry: "Bollywood",
  },
  //malayalam

  {
    title: "Drishyam",
    image: "/Images/Drishyam.jpg",
    description:
      "A gripping thriller about a father's desperate measures to protect his family.",
    industry: "Malayalam",
  },
  {
    title: "Bangalore Days",
    image: "/Images/Bangalore Days.jpg",
    description:
      "A heartwarming story of three cousins who move to Bangalore to pursue their dreams.",
    industry: "Malayalam",
  },
  {
    title: "Premam",
    image: "/Images/Premam.jpg",
    description:
      "A coming-of-age romance that follows the life of a young man through different stages of his love life.",
    industry: "Malayalam",
  },
  {
    title: "Kumbalangi Nights",
    image: "/Images/Kumbalangi Nights.jpg",
    description:
      "A beautifully crafted tale of four brothers living in a fishing village.",
    industry: "Malayalam",
  },
  {
    title: "Maheshinte Prathikaaram",
    image: "/Images/Maheshinte Prathikaaram.jpg",
    description:
      "A comedy-drama about a photographer who seeks revenge after a local fight.",
    industry: "Malayalam",
  },
  {
    title: "Ustad Hotel",
    image: "/Images/Ustad Hotel.jpg",
    description:
      "A heartwarming tale of a young man who rediscovers his roots through his grandfather's restaurant.",
    industry: "Malayalam",
  },
  {
    title: "Thondimuthalum Driksakshiyum",
    image: "/Images/Thondimuthalum Driksakshiyum.jpg",
    description:
      "A realistic drama about a petty thief and the ensuing investigation.",
    industry: "Malayalam",
  },
  {
    title: "Charlie",
    image: "/Images/Charlie.jpg",
    description:
      "A visually enchanting film about a woman who embarks on a journey to find a mysterious artist.",
    industry: "Malayalam",
  },
  {
    title: "Iyobinte Pusthakam",
    image: "/Images/Iyobinte Pusthakam.jpg",
    description:
      "A period drama set in the 1900s about love, betrayal, and revenge.",
    industry: "Malayalam",
  },
  {
    title: "Virus",
    image: "/Images/Virus.jpg",
    description:
      "A medical thriller based on the 2018 Nipah virus outbreak in Kerala.",
    industry: "Malayalam",
  },

  //tamil

  {
    title: "Baasha",
    image: "/Images/Baasha.jpg",
    description:
      "A former gangster tries to live a normal life but is drawn back into the underworld.",
    industry: "Tamil",
  },
  {
    title: "Anbe Sivam",
    image: "/Images/Anbe Sivam.jpg",
    description:
      "Two men with contrasting ideologies embark on a journey together, learning from each other.",
    industry: "Tamil",
  },
  {
    title: "Alaipayuthey",
    image: "/Images/Alaipayuthey.jpg",
    description:
      "A romantic drama about the trials and tribulations of a young married couple.",
    industry: "Tamil",
  },
  {
    title: "Vikram Vedha",
    image: "/Images/Vikram Vedha.jpg",
    description:
      "A cop and a gangster engage in a game of cat and mouse with moral dilemmas.",
    industry: "Tamil",
  },
  {
    title: "Super Deluxe",
    image: "/Images/Super Deluxe.jpg",
    description:
      "A dark comedy that interweaves multiple stories on themes of acceptance and morality.",
    industry: "Tamil",
  },
  {
    title: "Paruthiveeran",
    image: "/Images/Paruthiveeran.jpg",
    description:
      "A love story set in a rural backdrop with powerful performances and intense storytelling.",
    industry: "Tamil",
  },
  {
    title: "Mouna Raagam",
    image: "/Images/Mouna Raagam.jpg",
    description:
      "A woman reluctantly enters into an arranged marriage and gradually opens up about her past.",
    industry: "Tamil",
  },
  {
    title: "Kaakha Kaakha",
    image: "/Images/Kaakha Kaakha.jpg",
    description:
      "A police officer's life takes a turn when he falls in love amidst a high-stakes mission.",
    industry: "Tamil",
  },
  {
    title: "Thalapathi",
    image: "/Images/Thalapathi.jpg",
    description:
      "A story of friendship and loyalty set against the backdrop of a gang rivalry.",
    industry: "Tamil",
  },
  {
    title: "Vaaranam Aayiram",
    image: "/Images/Vaaranam Aayiram.jpg",
    description:
      "A man reflects on his life and relationships as he deals with the loss of his father.",
    industry: "Tamil",
  },
  //telugu

  {
    title: "Baahubali: The Beginning",
    image: "/Images/Baahubali The Beginning.jpg",
    description:
      "A young man learns about his heritage and sets out to claim his kingdom.",
    industry: "Telugu",
  },
  {
    title: "Baahubali: The Conclusion",
    image: "/Images/Baahubali The Conclusion.jpg",
    description:
      "The epic conclusion of the Baahubali saga, where the young prince fulfills his destiny.",
    industry: "Telugu",
  },
  {
    title: "Arjun Reddy",
    image: "/Images/Arjun Reddy.jpg",
    description:
      "A brilliant but short-tempered young medical surgeon goes on a self-destructive path after his girlfriend is forced to marry another man.",
    industry: "Telugu",
  },
  {
    title: "Mahanati",
    image: "/Images/Mahanati.jpg",
    description:
      "The biographical film about the life of legendary South Indian actress Savitri.",
    industry: "Telugu",
  },
  {
    title: "Jersey",
    image: "/Images/Jersey.jpg",
    description:
      "A cricketer who quits cricket decides to revive his career at the age of 36 for his son's wish of getting a jersey as a gift.",
    industry: "Telugu",
  },
  {
    title: "Eega",
    image: "/Images/Eega.jpg",
    description:
      "A man is reborn as a housefly and seeks to avenge his murder.",
    industry: "Telugu",
  },
  {
    title: "Ala Vaikunthapurramuloo",
    image: "/Images/Ala Vaikunthapurramuloo.jpg",
    description:
      "A man discovers that his biological father is a wealthy businessman and sets out to claim his rightful place.",
    industry: "Telugu",
  },
  {
    title: "Magadheera",
    image: "/Images/Magadheera.jpg",
    description:
      "A warrior reincarnates to avenge his past life and save his lover.",
    industry: "Telugu",
  },
  {
    title: "Pokiri",
    image: "/Images/Pokiri.jpg",
    description:
      "An undercover cop infiltrates a crime syndicate and falls in love with a dance teacher.",
    industry: "Telugu",
  },
  {
    title: "Gabbar Singh",
    image: "/Images/Gabbar Singh.jpg",
    description:
      "A police officer who follows the principles of a Bollywood character and takes on the local mafia.",
    industry: "Telugu",
  },
];
function MoviePage() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <MovieList movies={movies} />
      </div>
      <Footer/>
    </div>
  );
}

export default MoviePage;
