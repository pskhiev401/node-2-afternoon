drop table if exists products;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name varchar(40) NOT NULL,
    description varchar(80) NOT NULL,
    price int NOT NULL,
    image_url text NOT NULL
);

-- added manually via postico