import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSound from "use-sound";
const GraduationCard = () => {
  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
  const cardInfo = [
    {
      title: "Autumn Arrangement",
      body: "Send this incredibly appealing autumn arrangement to a special someone in your life! Welcome the fall season with bright classic colors and warmth. Perfect for any day of the week or a special seasonal holiday, this floral arrangement is sure to bring a smile to their face!",
      img: "https://fyf.tac-cdn.net/images/products/large/TFL11-2.jpg?auto=webp&quality=80&width=590",
      price: 30.99,
      Text: "Same Day Delivary",
    },
    {
      title: "Southern Peach Bouquet",
      body: "Looking for a modern twist on an old classic - this bouquet is just what you need! The Southern Peach Rose Bouquet brings you a subtle and sophisticated look with a bit of modern style. Charming and easy on the eyes, with beautiful pastel tones, this bouquet brings a room to life with it's artful appearance. Peach roses surrounded by white lilies, peach carnations and greenery - but the best part? All of this surrounds a green echeveria succulent. The fun new accessory to any bouquet, this delicate succulent adds a modern touch and is guaranteed to delight! This bouquet measures 15 1/4",
      img: "https://fyf.tac-cdn.net/images/products/large/TEV55-6.jpg?auto=webp&quality=80&width=590",
      price: 33.99,
      Text: "Same Day Delivary",
    },
    {
      title: "You're In My Heart",
      body: "Let your love bloom with this beautiful You're In My Heart flower bouquet. This all red flower arrangement is hand-arranged by a local florist near you with classic red roses, along with red carnations. All the red flowers make this gift a wonderful way of letting someone in your life know they are important to you and you appreciate all the love they give you. The red roses and carnations are delivered in a clear glass vase with a red ribbon tied around the center.",
      img: "https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg?auto=webp&quality=80&width=590",
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
      title: "Rainbow Roses",
      body: "Fill their day with color with a bouquet of mixed roses. A beautiful classic choice, mixed roses are the perfect gift to send to a friend or a loved one. With unique meanings for every color from red roses that mean love and courage to yellow roses that mean thank you and pink roses that mean joy, there is a message perfect for every occasion. So send your joy, love and affection today with a colorful rose bouquet. Flowers are delivered arranged and wrapped in a gift box. Blooms may take 2-3 days to open up, as shown in product photo. Upon arrival, remove flowers from wrap, trim ends of stems and place in vase with fresh water including flower food packet. Flower Freshness Guaranteed",
      img: "https://fyf.tac-cdn.net/images/products/large/F-211.jpg?auto=webp&quality=80&width=590",
      price: 25.99,
      Text: "Same Day Delivary",
    },
  ];

  return (
    <div>
      <Row xs={1} md={4} className="g-4 mt-5">
        {cardInfo.map((product, index) => {
          return (
            <Col>
              <Card className="flower-card" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Card.Text>{product.Text}</Card.Text>
                  <Button
                    className="card-button"
                    variant="primary"
                    onClick={() => {
                      play();
                    }}
                    as={Link}
                    to={`/product/Graduation/${product.title}`}
                  >
                    Read In Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default GraduationCard;
