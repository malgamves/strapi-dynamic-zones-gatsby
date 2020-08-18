# Portfolio Site using [Dynamic Zones](https://strapi.io/blog/release-beta-18-dynamic-zones) built with Strapi 

This application helps you get started building a company website with modular content thanks to Dynamic Zones. 

That means you can make changes and add components in your Strapi backend without having to change your frontend code. 
It is built with Gatsby and Strapi. Feel free to fork, edit and customise it for your own use.

[Try Me OUT!!](https://gatsby-strapi-dzone.netlify.app)

## Features
- Cute as hell 
- Dynamic Zones for modular content
- GraphQL first approach

## Content Model
- `Name` : Text
- `Description` : Text
- `LegoLand` : Dynamic Zone
  - `Quote` : Component
    - `Quote` : Text 
    - `Quoter` : Text 
  - `Image` : Component
    - `Caption` : Text 
    - `Image` : Media 
  - `Social Media` : Component
    - `Site` : Text 
    - `Link` : Text  


## In the works
- Fixing Navbar on smaller screens

## Pages
- A home page :`/`

## Getting Started

To get started clone the repo
```bash
git clone https://github.com/malgamves/strapi-dynamic-zones-gatsby.git
cd strapi-dynamic-zones-gatsby
```

The project has two folders `frontend` for your Nuxt frontend and `backend` for your Strapi backend.


### Frontend
The frontend is built with Gatsby. This sets up your frontend.
```bash
cd frontend

yarn install
```

Then run `yarn develop` to start your frontend server.

### Backend
The backend is built with Strapi. This sets up your backend.
```bash
cd backend

yarn install
```

Then run `yarn develop` to start your backend server.


## Deployment 

You can deploy your frontend by following the Gatsby [deployment guide](https://www.gatsbyjs.com/docs/deploying-and-hosting/).

For your backend, Strapi has numerous options in it's [deployment guide](https://strapi.io/documentation/3.0.0-beta.x/getting-started/deployment.html).


## Contributing

Feel free to send over a PR for any changes you think should be included.
