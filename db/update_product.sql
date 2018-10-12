UPDATE products 
SET name = $2, DESCRIPTION = $3, price =$4, img_url = $5  
where product_id = $1;

-- *A1 FILE*