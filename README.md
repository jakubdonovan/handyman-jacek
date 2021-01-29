# handyman-jacek

This is a simple landing page to be used for a freelancing handyman.

## Demo

You can view the demo [here]("https://handymanjacek.com").

## Installation

Starting the project in development mode locally.

**with yarn (hot reloading)**:

```
yarn
yarn start
```

Then open it at [http://localhost:3000](http://localhost:3000).

**with docker (builds):**

```
yarn docker
```

Then open it at [http://localhost:5000](http://localhost:5000).

## Deployment

** Push to the new commits to dokku **

```
git push dokku master
```

## User Stories

### Someone in need of a handyman, would like to see:

1. Has previous experience with the task they need done.
2. A friendly face within their community.
3. Can easily contact the handyman.

## Technologies

- React

  > Helps me maintain a programming standard, increasing readability and boilerplate.

  - Formik
    > Decreases boilerplate and increases readability for handling forms.
  - Yum
    > Form validation, works nicely with formik and code can be generated from gql queries.
  - Apollo
    > Can connect a graphql api with a few lines, allows for hooks to be generated from gql queries and mutations.

- Css
  - Tailwind
    > A great theme, more readability for css (IMO) and caching benefits?

* Express
  > Api's with much less boilerplate, easily implement middleware
* GraphQL

  - apollo-server-express
    > Easily start a gql server
  - graphql-compose

    - graphql-compose-mongoose
      > Turn mongoose schemas into gql schemas.

  - gql-codegen
    - gql-codegen-typescript
      > Turn gql schema, queries and mutations into types, apollo hooks, yum validation and more.

* MongoDB
  - Mongoose/Typegoose
    > Creates a layer of type safety (Using typescript types) to prevent your db from receiving bad data. Helps maintain a programming standard, increasing readability.

### **Overview**

My goal was to decrease development time, with as little affect on performance and readability.
I feel as if i've somewhat achieved it with the libraries I have used.

## UI Design with Figma

### **Home Page**

As this was a landing page that primarly targets mobile devices, I had to be tight with spacing and careful with the content.
![alt text](https://i.imgur.com/Pe86Nwv.png)
![alt text](https://i.imgur.com/qwZe3Ma.png)
![alt text](https://i.imgur.com/pghDif8.png)

### **Services Page**

The aim for this page was to expand upon the card found within the landing page, to provide additional information.
![alt text](https://i.imgur.com/iRZ5t4r.png)
