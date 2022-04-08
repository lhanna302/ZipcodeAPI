To run Zipcode API, you need the following installed:
* MySQL
* Node.js
* NPM

Running and querying the API
1. Run `CREATE DATABASE zip_code_city_county;` in your MySQL commandline.
2. Create and populate the database using the MySQL commandline:
    2a. Run the following to create the table:
    ```
      USE zip_code_city_county;
      CREATE TABLE zip_code_city_county(
      id int unsigned not null auto_increment,
      zip_code varchar(10) NOT NULL,
      city varchar(150) NOT NULL,
      county varchar(150) NOT NULL,
      PRIMARY KEY (id)
    );
    ```
    2b.  Run the following to populate the table:
    ```
    LOAD DATA LOCAL INFILE 'Zip_Code_Lookup_Table.csv' 
    INTO TABLE zip_code_city_county 
    FIELDS TERMINATED BY ',' 
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (zip_code, city, county);
    ```

3. The project can be run using `npm start` from inside `ZipcodeAPI`.
4. Tests can be run using `npm test`.



Things I would have done differently:
- used GraphQL, Typescript and Docker
  - I am familiar with each of the technologies but out of practice and thought trying to write the API perfectly sounded like an excellent way to waste time.  
- Database limitation to be adjusted by use case: limiting the varchar to 10 characters, the maximum length for zipcodes
- I would have liked to model a location object:
  Location : {
    id: int,
    zipcode: string,
    city: string,
    county: string, 
  }
  Were the data any more complex, I would have considered using an ORM (probably Sequelize).

- I should have set this up to use nodemon to instantly restart on change.
- I would have liked everything to run neatly through Docker, so a simple `docker up` would create and populate the database and run the server. That would hide some of the brittleness with how I handled the database load.  Also, populating with `LOCAL` is a security risk.
- I would have added linting.