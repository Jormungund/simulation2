INSERT INTO products (name, address, city, state, zip, image_url, mortgage, rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

select * from products;