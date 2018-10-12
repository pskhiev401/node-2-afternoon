const create = (req, res, next) => {
  const { name, description, price, img_url } = req.body;
  console.log("wheeeeeee");
  const db = req.app.get("db");
  db.create_product([name, description, price, img_url])
    .then(response => res.status(200).send("Sucessfully Added"))
    .catch(error => res.status(500).send(error));
};

const getOne = (req, res, next) => {
  console.log("Hit");
  const db = req.app.get("db");
  const { id } = req.params;
  db.read_product(id)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};
const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.read_products()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};
const update = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  const { name, description, price, img_url } = req.body;

  db.update_product([id, name, description, price, img_url])
  //here we decided to all instances of req.body, we also had to modify *A1 File*
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};
const deleted = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.delete_product(id)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};
module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleted
};
