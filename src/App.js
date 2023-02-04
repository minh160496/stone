import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./Header.js";
import Banner from "./Baner.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function MakeData() {
  return new Promise((resol, reject) => {
    const data = {
      banner: {
        img_lg: [
          {
            id: 1,
            src: "https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide3-img1.jpg",
          },
        ],
        img_md: [
          {
            id: 1,
            src: "https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide1-img2-1.jpg",
          },
          {
            id: 2,
            src: "https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide2-img2.jpg",
          },
        ],
        img_sm: [
          {
            id: 1,
            src: "https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide1-img3-1.jpg",
          },
          {
            id: 2,
            src: "https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide2-img3.jpg",
          },
        ],
      },
      slogans: [
        {
          id: 1,
          title: "FROM STONE TO DIAMOND",
          content:
            "Like a diamond’s evolution from raw earth to unique design, for nearly 50 years Eldorado Stone has transformed exteriors and interiors with the most believable architectural stone veneer in the world.With artisan finishes made in nature’s likeness, the truly transformational possibilities are endless.",
          src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/09/home-stone-diamond.png",
        },
      ],

      products: {
        title: "A NATURAL INSPIRATION",
        desc: "Each stone and brick is hand-painted piece by piece to create authentic details so that every space feels connected to organic elements. With over 150 colors and profiles to choose from, every vision is an attainable reality.",
        list: [
          {
            id: 1,
            type: "stone",
            src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/09/home-prod-stone.jpg",
          },
          {
            id: 2,
            type: "brick",
            src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/09/home-prod-brick.jpg",
          },
          {
            id: 3,
            type: "stone accents",
            src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/12/es_cobblestone_coal_canyon_exterior_facade_street_of_dreams-scaled.jpg",
          },
          {
            id: 4,
            type: "stone",
            src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/09/home-prod-stone.jpg",
          },
          {
            id: 5,
            type: "brick",
            src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/09/home-prod-brick.jpg",
          },
          {
            id: 6,
            type: "stone accents",
            src: "https://eldoradostostg.wpengine.com/wp-content/uploads/2022/12/es_cobblestone_coal_canyon_exterior_facade_street_of_dreams-scaled.jpg",
          },
        ],
      },

      templetes: [
        {
          id: 1,
          title: "A PLACE UNIQUELY YOURS",
          content:
            "What invigorates a space? At Eldorado Stone, we design with this question in mind. From bedrooms, kitchens, facades and outdoor spaces to intimate enclaves, relaxing retreats and tranquil escapes, we help clients create their dreams.",
          src: "https://www.eldoradostone.com/wp-content/uploads/2023/01/home-inspiration-rev.jpg",
        },
      ],

      about: {
        title: "BEAUTY ENVISIONED",
        content:
          "At Eldorado Stone, we push the boundaries of excellence, beauty and innovation by harnessing nature’s creativity and reimaging stone’s possibilities. Through technical textures, hand-painted hues, extensive selections and superior support, believability is the very core of our company philosophy. When you set your eyes on Eldorado Stone, it looks authentic, natural and, most of all, beautiful.",
      },

      contact: [
        {
          id: 1,
          name: "Modern Builders Supply",
          address: "825 Grand Avenue San Marcos CA 92078",
          phone: "(760) 591-4570",
        },
        {
          id: 2,
          name: "Modern Builders Supply",
          address: "825 Grand Avenue San Marcos CA 92078",
          phone: "(760) 591-4570",
        },
        {
          id: 3,
          name: "Modern Builders Supply",
          address: "825 Grand Avenue San Marcos CA 92078",
          phone: "(760) 591-4570",
        },
        {
          id: 4,
          name: "Modern Builders Supply",
          address: "825 Grand Avenue San Marcos CA 92078",
          phone: "(760) 591-4570",
        },
        {
          id: 5,
          name: "Modern Builders Supply",
          address: "825 Grand Avenue San Marcos CA 92078",
          phone: "(760) 591-4570",
        },
      ],

      footer: [
        {
          id: 1,
          text: "Sitemap",
        },
        {
          id: 2,
          text: "Warrantty",
        },
        {
          id: 3,
          text: "Teram of Sale",
        },
        {
          id: 4,
          text: "End User Agreement",
        },
        {
          id: 5,
          text: "Cookie Preferences",
        },
        {
          id: 6,
          text: "Cookie",
        },
        {
          id: 7,
          text: "COPYRIGHT © 2023. by Le Minh.",
        },
        {
          id: 8,
          src: "https://www.eldoradostone.com/wp-content/uploads/2022/10/wrss-w.png",
        },
      ],
    };
    setTimeout(() => {
      resol(data);
    }, 1500);
  });
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    MakeData().then((data) => {
      setData(data);
    });
  }, []);

  if (data.templetes)
    return (
      <div className="App container-fluit position-relative">
        <Header />
        <Banner data={data} />
        <Main data={data} />
        <Footer data={data} />
      </div>
    );
}

export default App;
