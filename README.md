# Shopify Backend Developer Intern Challenge - Summer 22 

## Inventory Tracking

### Task

Build and Inventory Tracking Web Application with the following requirements - 

Basic CRUD functionality :
- Create Inventory Items
- Read and show all items
- Update Inventory Items
- Delete Items

Additional functionality :
- Push button to export Product Data to a CSV file

## Description 

The webpage is a Single Page Application consisting of basic CRUD functionality. There is a MongoDB database that connects to the Node.js server over Mongoose. 

An inventory item is defined as collection with the following properties - 

- Unique ID
- Name
- Type
- Cost
- Created At (Timestamp)

The frontend is a React.js framework that displays the list of items currently in the inventory. Items in the inventory can be created, updated and deleted. There is also an additional functionality to download the list of inventory items as CSV files.


Adding an Item - 

![ss1](./screenshots/ss1.png)

List of all Items - 

![ss2](./screenshots/ss2.png)

Updating an Item -

![ss3](./screenshots/ss3.png)

CSV File of Product Data -

![ss4](./screenshots/ss4.png)

## Directory Structure
```

├── README.md
├── docker-compose.yml
├── inventory-tracking
│   ├── Dockerfile
│   ├── bin
│   │   └── www
│   ├── client
│   │   ├── bundle.js
│   │   ├── bundle.js.LICENSE.txt
│   │   ├── bundle.js.map
│   │   ├── components
│   │   │   ├── Add.js
│   │   │   ├── App.js
│   │   │   ├── Delete.js
│   │   │   ├── ExportCSV.js
│   │   │   └── Update.js
│   │   ├── css
│   │   │   └── App.css
│   │   ├── helpers
│   │   │   ├── addData.js
│   │   │   ├── deleteData.js
│   │   │   ├── getData.js
│   │   │   └── updateData.js
│   │   ├── index.ejs
│   │   ├── index.js
│   │   └── routes
│   │       └── routes.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server
│   │   ├── config
│   │   │   └── local.json
│   │   ├── controllers
│   │   │   └── inventory.controller.js
│   │   ├── models
│   │   │   └── Inventory.js
│   │   ├── routes
│   │   │   └── routes.js
│   │   ├── server.js
│   │   ├── services
│   │   │   └── inventory.service.js
│   │   └── utils
│   │       └── index.js
│   └── webpack.config.js
└── screenshots
    ├── ss1.png
    ├── ss2.png
    ├── ss3.png
    └── ss4.png

```

## How To Run

### Step 1 - 

Clone the repository 

`git clone https://github.com/aish-where-ya/Shopify-challenge.git`

Move to the `Shopify-challenge` folder by running

`cd Shopify-challenge/inventory-tracking` 

### Step 2 - 

Make sure that you have Docker installed. Look up the documentation on how to install Docker -
https://docs.docker.com/get-docker/

### Step 3 -

Simply run - 

`docker-compose up`

### Step 4 - 

Navigate to `http://localhost:3000` to view the project.

Done!



## Coded With 

- Node.js
- React.js
- Express.js
- MongoDB
- Mongoose
- Docker