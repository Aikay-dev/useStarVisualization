import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useStarVisualization from "./hooks/useStarVisualization";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

type shopDataType = {
  image: string;
  price: number;
  rating: { rate: number };
  description: string;
};
function App() {
  const [storeData, setStoreData] = useState<null | shopDataType[]>(null);

  //On component mount, fetch the data from the store and set the first 5 inside a state
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.splice(0, 5));
        setStoreData(data.splice(0, 5));
      });
  }, []);

  return (
    <>
      <header>
        <p className="header-main-title">
          <span className="main-title-logo">
            <FontAwesomeIcon icon={fasStar} />
          </span>
          UseStar Visualization Hook
        </p>
        <div>
          <a href="https://github.com/GeneralAike" target="blank">
            {" "}
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://twitter.com/general_ik" target="blank">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="https://www.instagram.com/_a.i.k.a.y/" target="blank">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-esekhaigbe-3b9046241/" target="blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </header>
      <section className="main-section">
        <div className="banner">
          <p className="header">useStar Visualization</p>
          <p className="subText">
            Official Documentation of the custom useStar Visualization hook
          </p>
        </div>
        <article className="main-article">
          <div className="back-banner">
            <p className="introduction">Introduction</p>
            <p className="welcome">
              Welcome to the official website of the useStarVisualization hook!
              🌟
            </p>
          </div>
          <p className="firstPara">
            Are you tired of wrestling with rating visualizations in your web
            projects? Want an elegant and customizable way to showcase ratings
            in the form of stars? Fear not, the{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization
            </span>{" "}
            hook is here to rescue you and elevate the visual appeal of your
            ratings to celestial heights! ✨
          </p>
          <p className="secondPara">
            Our hook allows you to effortlessly transform numerical ratings into
            beautiful star representations. Whether you're building an
            e-commerce website, a review platform, or any application that
            requires user ratings,{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization
            </span>{" "}
            is your steadfast companion on this amazing journey. 🌌
          </p>
          <p className="topic-why-choose">Why Choose useStarVisualization ❔</p>
          <ul className="list">
            <p>
              ⭐ Easy Integration: With just a few lines of code, you'll be
              weaving star visualizations seamlessly into your React-based
              projects, like a skilled cosmic tailor! 🪡
            </p>
            <p>
              ⭐ Customizable: Unleash your creativity and wield the power of
              cosmic design! Tailor the appearance of stars to match your
              website's celestial theme. Adjust the size, color, and spacing to
              create the perfect constellation of stars. 🌠
            </p>
            <p>
              ⭐ Dynamic Updates: Fear not the cosmic winds of change!{" "}
              <span style={{ fontFamily: "monospace" }}>
                useStarVisualization
              </span>{" "}
              automatically handles changes in ratings, ensuring that your
              starry representations remain in sync with your data. 🌀
            </p>
            <p>
              ⭐ Accessibility: We embrace the principle of inclusion! We
              prioritize accessibility standards, making sure the star
              visualizations are usable by all, including those who rely on
              screen readers. 📜
            </p>
            <p>
              ⭐ Lightweight: Don't worry about the size of our hook! Our hook
              is designed to be as light as a feather, gracefully avoiding
              unnecessary bloat in your project. 🪶
            </p>
          </ul>
          <p className="topic-How-it-works">How it works❔</p>
          <p>
            First and foremost, I assume you've visited the GitHub repository
            and followed the installation steps properly. If you haven't,
            consider it a cosmic journey you must undertake! 🚀 Alternatively,
            for the seasoned travelers who have already cloned the project,
            kindly leave us a shining star ⭐ as a token of appreciation.
            🌟
            <br />
            Now, behold the magic of{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization
            </span>
            ! Simply pass the{" "}
            <span style={{ fontFamily: "monospace" }}>rating</span> value, the
            desired number of stars, and an object of your desired styling as
            parameters. Witness the marvel as you receive an array of{" "}
            <span style={{ fontFamily: "monospace" }}>font awesome stars</span>,
            each represented by a CSS class, ready to be seamlessly integrated
            into your UI. Ah, do you find yourself pondering over a style fit
            for the celestial stars? Worry not, for{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization
            </span>{" "}
            includes default styling out of the box! If you wish to use the
            default style, just pass in an empty object in the styling part of
            the hook. Allow me to demonstrate a function with the default
            styling:{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization(data.rating.rate, 5, {"{}"})
            </span>
            . By passing an empty object as the third argument, you prevent
            overwriting any of the default styles. ☯️
          </p>
        </article>

        <section className="example-section">
          <p className="header">Let's Embark on an Interstellar Adventure!🤩</p>
          <p>
            For this example, we shall traverse the cosmic realms and harness
            the power of the{" "}
            <a
              href="https://fakestoreapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fake Store API
            </a>{" "}
            to procure an abundance of e-commerce data. Fear not the void of
            hardcoded data, for in this voyage, practicality shall guide
            our path, and our cosmic creations shall resonate with the essence
            of your unique project. We shall employ the default fetch function
            to obtain our data, though you are free to choose any other method,
            like Axios, that aligns with your work flow.
          </p>
        </section>

        <section className="ecommerce-sect">
          {storeData?.map((data, index) => {
            console.log(storeData);
            return (
              <div className="card" key={index}>
                <div className="product-image-holder">
                  <img
                    src={data.image}
                    alt="product image"
                    className="product-image"
                  />
                </div>
                <p className="product-name">
                  {data.description.substring(0, 40)}
                  {"..."}
                </p>
                <div className="product-rate-holder">
                  <div>
                    {useStarVisualization(data.rating.rate, 5, {
                      fontSize: "18px",
                      color: "gold",
                      margin: "3px",
                    })}
                  </div>
                  <p className="product-rate-number">{data.rating.rate}</p>
                </div>
                <div className="product-price-nd-add">
                  <p className="product-price">${data.price}</p>
                  <button className="add-to-cart">Add to cart</button>
                </div>
              </div>
            );
          })}
        </section>
        <article className="error-handling-article">
          <p className="header">Error Handling ❗</p>
          <p>
            With every piece of software ever created, there are bound to be
            some errors — some of which can be quite humorous! Fear not, for the{" "}
            <span style={{ fontFamily: "monospace" }}>
              useVisualization Hook
            </span>{" "}
            comes equipped with robust error handling logic to prevent users
            from unleashing chaos on their UIs. Let's take a look at some of the
            witty and informative error messages that you might encounter:
          </p>
          <p>
            ⭐ Oh dear! It seems you've mixed up the data order when passing it
            into the hook. Remember, it should be in the following sequence:{" "}
            <span style={{ fontFamily: "monospace" }}>Rating</span>,{" "}
            <span style={{ fontFamily: "monospace" }}>StarCount</span> (the
            number of base Stars you want to display), and an object containing
            your custom <span style={{ fontFamily: "monospace" }}>style</span>.{" "}
            <span style={{ fontFamily: "monospace" }}>TypeScript</span>{" "}
            enthusiasts, rejoice!{" "}
            <span style={{ fontFamily: "monospace" }}>TypeScript</span> has got
            your back and will ensure the correct types are used. But hey, if
            you're daring enough to abandon{" "}
            <span style={{ fontFamily: "monospace" }}>TypeScript</span> and dive
            into JavaScript land, I strongly recommend adding some{" "}
            <span style={{ fontFamily: "monospace" }}>type checks</span> using
            conditionals to avoid unexpected issues.
          </p>
          <p>
            ⭐ Hold on a second! The Rating count (that's the rating of the
            particular product) should never exceed the{" "}
            <span style={{ fontFamily: "monospace" }}>StarCount</span>. We don't
            want to end up with one product shining brightly with 7 base stars
            while another has just 5. Let's keep it consistent, clean, and
            visually appealing! So, if you try using the function like this:{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization(7, 5, {"{}"})
            </span>
            , it won't display stars but will kindly remind you, "Rating should
            be equal to or less than Starcount". Trust me, it's for the greater
            good of UI harmony!
          </p>
          <p>
            ⭐ Negative stars? Not in this universe! Sorry, but we can't allow a
            product to be rated below 0. Who knows what dark matter lies beyond
            that? If by some cosmic mishap, a negative value slips through our
            defenses, we'll gracefully present you with a gentle message:
            "Rating should be equal to 0 or greater". Rest assured, you'll know
            what to do to bring the universe back into balance.
          </p>
          <p>
            ⭐ Time for some house rules! You can't pass a{" "}
            <span style={{ fontFamily: "monospace" }}>starCount</span> value
            less than or equal to 0. Even the cosmos demands at least one star
            to be shining in the sky! Don't worry; we've got you covered, and
            we'll make sure at least one star graces your UI.
          </p>
          <p>
            ⭐ Lastly, welcome to the realm of custom CSS{" "}
            <span style={{ fontFamily: "monospace" }}>styles</span>! If you're
            not sure how to wield the cosmic power of JavaScript to apply those{" "}
            <span style={{ fontFamily: "monospace" }}>styles</span>, fear not!
            Simply remember to use{" "}
            <span style={{ fontFamily: "monospace" }}>camelCase</span> for
            properties instead of{" "}
            <span style={{ fontFamily: "monospace" }}>kebab-case</span>. For
            example, in regular CSS, you'd write{" "}
            <span style={{ fontFamily: "monospace" }}>
              background-color: red
            </span>
            , but in JavaScript, it's{" "}
            <span style={{ fontFamily: "monospace" }}>
              backgroundColor: "red"
            </span>
            . Just a small adjustment to ensure your styling works its
            magic!
          </p>
          <span className="conclusion">Conclusion ❕</span>
          <p>
            Congratulations, cosmic traveler, for reaching the end of this epic
            Documentation journey! Embrace the wisdom gained and venture forth
            with confidence. The{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStar visualization hook
            </span>{" "}
            awaits your command, and with its seamless magic, your project shall
            shine like the stars! If you feel like showing your
            appreciation, don't hesitate to share a cup of coffee with
            the dev — details can be found in the header section. Thank you for
            choosing{" "}
            <span style={{ fontFamily: "monospace" }}>
              useStarVisualization
            </span>{" "}
            for your cosmic UI endeavors. 🌠
          </p>
        </article>
      </section>
      <footer>
        <p className="name">aikay</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
