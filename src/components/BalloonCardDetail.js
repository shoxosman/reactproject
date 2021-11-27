import React from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../features/TheCardsSlice";
import useSound from "use-sound";
import { useState } from "react";
const BalloonCardDetail = () => {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
  let { name } = useParams();
  const cardInfo = [
    {
      title: "Get Well Balloons",
      body: "Send your thoughts with a unique get well balloon bouquet. Created by a local florist for delivery to a home or hospital. Make them smile today with a fun balloon bouquet. Hand delivered by a local florist to send your get well thoughts. Please note: Latex balloons may be substituted for additional mylar balloons.",
      img: "https://fyf.tac-cdn.net/images/products/large/FYFBA-15.jpg?auto=webp&quality=80&width=590",
      price: 20.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Rose & Lily And Balloon",
      body: "Send your best birthday wishes with this lovely bouquet of Asiatic lilies, waxflower, alstroemeria, roses and a birthday mylar balloon. Delivered in a clear glass fluted vase, this bouquet makes a wonderful gift they'll not soon forget.",
      img: "https://fyf.tac-cdn.net/images/products/large/BF89-11K-BBU.jpg?auto=webp&quality=80&width=590",
      price: 33.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Colorful Birthday Balloon",
      body: "Send a bouquet of buoyant birthday balloons to someone who loves fun, unique gifts! Our Colorful Birthday Balloon Bouquet offers color and vibrance. Have our Colorful Birthday Balloon Bouquet delivered today by a florist, with your birthday card. Make this birthday a memorable one with birthday balloons. Please note: birthday balloons may vary.",
      img: "https://fyf.tac-cdn.net/images/products/large/FTD-EO-6033.jpg?auto=webp&quality=80&width=590",
      price: 39.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Sweet Devotion",
      body: "The Spring Bursting Forth bouquet blooms with springtime charm and wonder, offering a beautiful expression of your sweetest sentiments this Spring season. Lovely lavender roses, lavender stock, and pink stock are accented with a variety of lush greens in this amazing floral arrangement. Presented in a modern cylinder vase, the bouquet is a wonderful gift to help celebrate an anniversary, a Spring birthday, or just because.",
      img: "https://fyf.tac-cdn.net/images/products/large/FTD-14-M6.jpg?auto=webp&quality=80&width=590",
      price: 35.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Happy Birthday Balloon",
      body: "No birthday is complete without balloons! No birthday is complete without chocolate, either! Send the Happy Birthday Balloon & Chocolate Bouquet to someone special just in time for their special day. Leave your mark by filling out a personalized gift message. This unique birthday balloon bouquet, chocolates and card is topped off with a hand tied red ribbon. Send today!",
      img: "https://fyf.tac-cdn.net/images/products/large/BN551G.jpg?auto=webp&quality=80&width=590",
      price: 22.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Happy Birthday Bear & Balloon",
      body: "Send your birthday wishes to the birthday girl or boy with a unique gift including a plush teddy bear and happy birthday mylar balloon. Arranged by a local florist and available for delivery today, this gift is a great way to send your happy birthday wishes.",
      img: "https://fyf.tac-cdn.net/images/products/large/FYFBA-28.jpg?auto=webp&quality=80&width=590",
      price: 25.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Purple Morning Melody",
      body: "Purple and perfect, these sophisticated flowers will speak for themselves wherever you choose to send them. Our generously arranged purple roses and seasonal greens are guaranteed to brighten up any home, office or special event. Preciously presented in a square glass vase, our Purple Morning Melody is also topped off with a pretty purple bow. Purple is famously known to represent royalty, nobility, power, ambition and luxury.",
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
      title: "Rainbow Roses",
      body: "Fill their day with color with a bouquet of mixed roses. A beautiful classic choice, mixed roses are the perfect gift to send to a friend or a loved one. With unique meanings for every color from red roses that mean love and courage to yellow roses that mean thank you and pink roses that mean joy, there is a message perfect for every occasion. So send your joy, love and affection today with a colorful rose bouquet. Flowers are delivered arranged and wrapped in a gift box. Blooms may take 2-3 days to open up, as shown in product photo. Upon arrival, remove flowers from wrap, trim ends of stems and place in vase with fresh water including flower food packet. Flower Freshness Guaranteed",
      img: "https://fyf.tac-cdn.net/images/products/large/F-211.jpg?auto=webp&quality=80&width=590",
      price: 25.99,
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

export default BalloonCardDetail;