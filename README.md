# R Gear: An e-commerce site for Rango and Remington Employee Gear

This repo holds the code for the server that communicates with the R Gear Client. It allows employees of Rango and Remington to purchase branded gear to wear on the job or at home.

## Important Links

- [Client Repo](https://github.com/Waisath-CJ/r-gear-client)
- [Deployed API](https://fierce-waters-36807.herokuapp.com/)
- [Deployed Client](https://waisath-cj.github.io/r-gear-client)

## Planning Story

In planning for this project, I decided to remake my senior project that I did in college using `React` for the client and `Node/Express/Mongoose` for the server API. I decided to begin with implementing the functionality of the API first so I could use `Postman` to make sure that the routes worked properly. Once the API was working how I wanted it to, I moved on to designing the client. This planning process was a little complicated as I had requirements that I needed to meet that the original project idea didn't meet; so I had to tweak some things to make it work.

However, there are still things that need to be updated in order for this project to be functional for Rango and Remington to use for their employee merch site.

### Technologies Used

- Node.js
- Express.js
- MongoDB / Mongoose

### Unsolved Problems

- Implement the `cart` functionality
- Implement `Stripe`
- Change the `requireOwnership` to reflect more of `admin` privileges instead of owning it
- Implement `checkout` functionality with `email` functionality as well

### Routes

| Verb   | URI Pattern            | Controller#Action        |
|--------|------------------------|--------------------------|
| POST   | `/sign-up`             | `users#signup`           |
| POST   | `/sign-in`             | `users#signin`           |
| PATCH  | `/change-password/`    | `users#changepw`         |
| DELETE | `/sign-out/`           | `users#signout`          |
| GET    | `/products`            | `products#getProducts`   |
| GET    | `/products/:prodId`    | `products#getProduct`    |
| POST   | `/products`            | `products#createProduct` |
| PATCH  | `/products/:prodId`    | `products#updateProduct` |
| DELETE | `/products/:prodId`    | `products#deleteProduct` |

## Images

---

#### ERD:

![ERD Version 1](https://i.imgur.com/ZvvYOO1.png)
