import React from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../features/TheCardsSlice";
import useSound from "use-sound";
import { useState } from "react";
const WeddingCardDetail = () => {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
  let { name } = useParams();
  const cardInfo = [
    {
      title: "Pearled Passions",
      body: "A beautiful combination of stock, roses, tulips, orchids, carnations and sprengeri are gathered with delicate pearl strands to create the perfect bridesmaid bouquet. Hand created by a florist for delivery.",
      img: "https://fyf.tac-cdn.net/images/products/large/BN78-11J.jpg?auto=webp&quality=80&width=590",
      price: 41.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Altar Arrangements",
      body: "Create a spectacular altar scape with break away arrangement of green roses, orchids, hydrangea, snapdragons, gladiolus, hypericum, trachelium, amaranthus, and aspidistra.",
      img: "https://fyf.tac-cdn.net/images/products/large/BN87-11J.jpg?auto=webp&quality=80&width=590",
      price: 100.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Reception Centerpiece",
      body: "et your personal style shine brightly with this distinctive green break-away centerpiece with rose, orchids, hydrangea, snapdragons, gladiolus, trachelium, lily grass, and equisetum. This tall floral centerpiece is stunning with modern snapdragons and orchids.",
      img: "https://fyf.tac-cdn.net/images/products/large/BN87-21J.jpg?auto=webp&quality=80&width=590",
      price: 110.99,
      Text: "Same Day Delivary",
    },

    {
      title: "One Dozen White Roses",
      body: "Want to make today a heavenly one for someone you know? Send this premium bouquet of white roses. Meaning youthfulness, heavenly, and heavenly white roses are the ideal floral arrangements to send for wedding anniversaries, sympathy or just to let someone know you are thinking of them.",
      img: "https://fyf.tac-cdn.net/images/products/large/F-214.jpg?auto=webp&quality=80&width=590",
      price: 30.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Sunflower & Rose Bouquet",
      body: "A darling gem - this beautiful fall flower bouquet is delivered fresh to their door and sure to make them smile! This charming collection of bi-color roses and sunflowers are combined to create a whirlwind of fall colors and scents. This delightful garden bouquet comes in regular and deluxe sizes and makes the perfect gift for your friend or loved one on their birthday, special day, or just because!",
      img: "https://fyf.tac-cdn.net/images/products/large/BN70-11J.jpg?auto=webp&quality=80&width=590",
      price: 25.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Bedazzling Dozen Bouquet",
      body: "One dozen brilliant white long stem roses are hand arranged with pittosporum in a 12 ",
      img: "https://fyf.tac-cdn.net/images/products/large/T68-3.jpg?auto=webp&quality=80&width=590",
      price: 30.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Vibrant Beauty Bouquet",
      body: "Roses, lilies, athos, alstroemeria and Monte Casino blooms are celebrated superbly in all their vibrant beauty in this gleaming bouquet arranged in a clear gathering vase. Measures",
      img: "https://fyf.tac-cdn.net/images/products/large/BF515-11K_D.jpg?auto=webp&quality=80&width=590",
      price: 28.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Cotton Candy",
      body: "The Cotton Candy bouquet is the perfect arrangement to send to someone special in your life. It includes beautiful light pink and white roses; all beautifully arranged in a glass vase accented with a light pink bow.",
      img: "https://fyf.tac-cdn.net/images/products/large/T37-1.jpg?auto=webp&quality=80&width=590",
      price: 43.99,
      Text: "Same Day Delivary",
    },
  ];
  let product = cardInfo.filter((product) => {
    return product.title === name;
  });
  return (
    <div className="container home">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 col-xl-6 mt-5">
            <br />
            <h2>{product[0].title}</h2>
            <p>{product[0].body}</p>
            <h3>${product[0].price} </h3>
            <h3>{product[0].Text} </h3>
            <br />
            <Button
              disabled={disable}
              className="card-button"
              variant="primary"
              onClick={() => {
                dispatch(addCart(product));
                play();
                setDisable(true);
              }}
            >
              Add To Cart
            </Button>
          </div>
          <div class="col-12 col-lg-6 col-xl-6">
            <div>
              <img style={{ width: "450px" }} src={product[0].img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardDetail;
