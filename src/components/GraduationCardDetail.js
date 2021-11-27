import React from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../features/TheCardsSlice";
import useSound from "use-sound";
import { useState } from "react";
const GraduationCardDetail = () => {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
  let { name } = useParams();
  const cardInfo = [
    {
      title: "Red Roses w/ Chocolates & Bear",
      body: "Go over the top with a romantic gift that is sure to please the one you love. The One Dozen Long Stemmed Red Rose bouquet is delivered with an adorable plush teddy bear and box of chocolates. Why just send roses when you can make the gift extra special by adding on a teddy bear and chocolates, for a complete floral gift package. We invite you to customize your gift by choosing an I Love You vase, or by creating a custom photo vase to be delivered with the rose bouquet. Don't wait!",
      img: "https://fyf.tac-cdn.net/images/products/large/F-503.jpg?auto=webp&quality=80&width=590",
      price: 39.99,
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
      title: "Blue Skies Bouquet",
      body: "Celebrate their birthday with a stunning floral bouquet that is hand arranged by one of our top notch local florists. This beautiful arrangement included white Asiatic lilies, yellow roses, blue delphinium and purple Monte Casino blooms...all creatively designed in a clear fluted vase with a blue satin ribbon and delivered with a birthday mylar balloon.",
      img: "https://fyf.tac-cdn.net/images/products/large/BF216-11KM-BBU.jpg?auto=webp&quality=80&width=590",
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
      title: "Burgundy Blooms",
      body: "Perfect for fall, our Burgundy Blooms are a burst of seasonal color for any occasion. With the beautiful burgundy carnations and pops of bright oranges you can almost smell fall just looking this bouquet. Wrapped in a plaid bow, this arrangement is a great way to celebrate the season of leaves and pumpkins and apple cider and bring the wonderful colors of fall into the home!",
      img: "https://fyf.tac-cdn.net/images/products/large/FTD-B4-4785.jpg?auto=webp&quality=80&width=590",
      price: 30.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Sunflower & Rose Bouquet",
      body: "A darling gem - this beautiful fall flower bouquet is delivered fresh to their door and sure to make them smile! This charming collection of bi-color roses and sunflowers are combined to create a whirlwind of fall colors and scents. This delightful garden bouquet comes in regular and deluxe sizes and makes the perfect gift for your friend or loved one on their birthday, special day, or just because!",
      img: "https://fyf.tac-cdn.net/images/products/large/F-757.jpg?auto=webp&quality=80&width=590",
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

export default GraduationCardDetail;
