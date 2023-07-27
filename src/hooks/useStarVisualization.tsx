import { faStarHalfStroke, far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(far, fas);

function getDecimal(number: number) {
  // Get the decimal part using the modulo operator
  const decimal = number % 1;
  // Roundup the decimal
  const roundedDecimal = +decimal.toFixed(10);
  // Convert the decimal to an integer and remove the decimal point
  const decimalInt = Math.floor(roundedDecimal * 10);

  // Return the integer value of the decimal part
  return decimalInt;
}

export default function useStarVisualization(
  rating: number,
  starCount: number,
  style: object
) {
  const DEFAULT_STYLE: object = {
    fontSize: "20px",
    color: "gold",
    margin: "0 5px",
  };
  const fullStarCount: number = Math.floor(rating); //The whole number of the rating is stored here eg. for a rating of 3.2, 3 is stored here
  const halfStarCount: number = getDecimal(rating); //The decimal number of the rating is stored here
  const emptyStars: number =
    halfStarCount > 0 && fullStarCount > 0 && halfStarCount > 5
      ? starCount - fullStarCount - 1
      : halfStarCount > 4
      ? starCount - fullStarCount - 1
      : starCount - fullStarCount; //this is used to calculate the number of empty stars that should show up

  const stars: JSX.Element[] = [];
  //A bunch of error checking parameters to prevent computing wrong data
  if (rating < 0) {
    return <p>Rating should be equal to 0 or greater</p>;
  } else if (rating > starCount) {
    return <p>Rating should be equal to or less than Starcount</p>;
  } else if (starCount <= 0) {
    return <p>Star count should be greater than 0</p>;
  } else {
    for (let i = 0; i < fullStarCount; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={["fas", "star"]}
          style={{ ...DEFAULT_STYLE, ...style }}
        />
      );
    }
    if (halfStarCount > 4) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          style={{ ...DEFAULT_STYLE, ...style }}
        />
      );
    }
    for (let j = 0; j < emptyStars; j++) {
      stars.push(
        <FontAwesomeIcon
          icon={["far", "star"]}
          style={{ ...DEFAULT_STYLE, ...style }}
        />
      );
    }

    return (
      <>
        {stars.map((star, index) => {
          return <span key={index}>{star}</span>;
        })}
      </>
    );
  }
}
