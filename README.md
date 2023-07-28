# UseStarVisualization Hook 🌟

Welcome to the official documentation for the UseStarVisualization hook! 🌟

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Are you tired of struggling with rating visualizations in your web projects? Want an elegant and customizable way to showcase ratings in the form of stars? Look no further! The UseStarVisualization hook is here to simplify your life and elevate the visual appeal of your ratings.

Our hook allows you to effortlessly transform numerical ratings into beautiful star representations. Whether you're building an e-commerce website, a review platform, or any application that requires user ratings, UseStarVisualization is your perfect companion.

## Getting Started

### Prerequisites

Before using the UseStarVisualization hook, make sure you have the following installed in your project:

- [React](https://reactjs.org/)
- [FontAwesome](https://fontawesome.com/v6/docs/web/use-with/react/)

### Installation

To use the UseStarVisualization hook, make sure to install the following:

Step 1

Clone the repo
`https://github.com/GeneralAike/useStarVisualization.git`

Step 2

Move into its directory
`cd useStarVisualization`

Step 3

Install dependencies with npm or yarn
`npm i || yarn add`

## Usage

To use the hook in your React project, simply copy and place the useStarvisualization file in your hooks folder and import it accordingly:

```jsx
import useStarVisualization from ".../hooks/useStarVisualization";

// Your component code...
```

The hook takes three parameters:
1. `rating`: The rating of the particular product (a number).
2. `starCount`: The number of base stars you want to display (a number).
3. `style`: An object containing your custom CSS styles (optional).

## Examples

Let's see some examples! 🚀🌌

For this example, we will use the Fake Store API to get a ton of e-commerce data. To follow along, make sure you have installed the hook as explained in the [Getting Started](#getting-started) section.

```jsx
import { useState, useEffect } from "react";
import useStarVisualization from ".../hooks/useStarVisualization";

function CosmicComponent() {
  const [productRating, setProductRating] = useState(4.75);

  useEffect(() => {
    // Fetch product rating from API or other sources
    // For now, let's set a sample rating
    setProductRating(4.75);
  }, []);

  return (
    <div>
      <h2>Cosmic Product Rating:</h2>
      {useStarVisualization(productRating, 5, { fontSize: "24px", color: "gold" })}
    </div>
  );
}
```

## Error Handling

With great power comes great responsibility! The UseStarVisualization hook has robust error handling logic to prevent users from using it in the wrong way. Here are some common error handling mechanisms:

- When passing data into the hook, they should go in the following order: `rating`, `starCount`, and an object containing your custom style. Mixing them up will result in errors.
- The `rating` count should always be less than or equal to the `starCount`. Trying to render more stars than the base count will trigger an error.
- The `rating` count should not be less than 0. Rendering negative stars doesn't make sense, and we've got you covered with an error message to remind you.
- The `starCount` should be greater than 0. We want to render at least one star for your creations.

## Contributing

Contributions to the UseStarVisualization hook are more than welcome! If you encounter any issues, have feature requests, or want to contribute improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
