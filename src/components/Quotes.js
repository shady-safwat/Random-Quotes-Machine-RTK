import React, { useEffect, useState } from "react";
import { fetchQuotes } from "./../redux/quoteSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Card } from "react-bootstrap";
import $ from "jquery";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import "./Quotes.sass";

function Quotes() {
  // Extract the data or the state from the Redux store
  const { quotes, loading, error } = useSelector((state) => state.quote);
  const [randomQuote, setRandomQuote] = useState([quotes]);
  
  console.log(randomQuote.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (loading === true) {
    return (
      <h3 className="text-center mt-5" style={{ color: "#fff" }}>
        Loading...
      </h3>
    );
  }

  if (error !== null) {
    return (
      <h3 className="text-center mt-5" style={{ color: "#fff" }}>
        Error... {error}
      </h3>
    );
  }

  // Define the function to generate a random quote.
  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex]; 
    setRandomQuote([randomQuote]);
    console.log(randomQuote);
  };

  // Define the function to generate a random color.
  const randomColor = () => {
    // Generate a random colors within the RGB
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    $("body, #tweet-quote , #new-quote").css({
      "background-color": randomColor,
    });

    $("#text, #author").css({
      color: randomColor,
    });
  };

  const newQuote = () => {
    getRandomIndex();
    randomColor();
  };

  return (
    <div className="quotes-wrapper">
      <Container>
        <Card
          className="d-flex justify-content-center mx-auto shadow rounded"
          id="quote-box"
        >
          <Card.Body className="my-3">
            <blockquote className="blockquote">
              <Card.Text className="text-center" id="text">
                <FaQuoteLeft className="quote-icon mx-2" size={14} />
                {randomQuote[0] && randomQuote[0].text}
              </Card.Text>

              <Card.Text className="author text-end" id="author">
                - {randomQuote[0] && randomQuote[0].author}
              </Card.Text>
            </blockquote>
          </Card.Body>

          <footer className="blockquote-footer d-flex justify-content-around">
            <a
              className="btn btn-dark border border-0"
              href={`https://twitter.com/intent/tweet?text="${
                randomQuote[0] && randomQuote[0].text}
              }by${randomQuote[0] && randomQuote[0].author}&hashtags=animeQuote`}
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
              title="tweet this quote"
              role="button"
            >
              <FaTwitter />
            </a>

            <Button
              className="border border-0"
              variant="dark"
              id="new-quote"
              onClick={newQuote}
            >
              New quote
            </Button>
          </footer>
        </Card>
      </Container>
    </div>
  );
}

export default Quotes;
