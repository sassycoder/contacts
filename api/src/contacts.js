const Mongo       = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const process     = require('process');
const assert      = require('assert');

const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/app`;
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log(`Successfully connected to database.\n${url}`);
  db.close();
});

module.exports = {
  get: {
    route: '/contacts',
    respond: (req, res, next) => {
      MongoClient.connect(url, (err, db) => {
        db.collection('contacts')
          .find()
          .toArray((err, contacts) => {
            let body = err ? JSON.stringify(err) : contacts;
            res.send(body);
            console.log(`GET: /contacts/\n${JSON.stringify(body, null, 2)}`);
          });
        db.close();
        next();
      });
    }
  },
  post: {
    route: '/contacts',
    respond: (req, res, next) => {
      MongoClient.connect(url, (err, db) => {
        db.collection('contacts')
          .insertOne(req.params, (err, result) => {
            let body = err ? JSON.stringify(err) : result;
            res.send(body);
            console.log(`POST: /contacts/\n${JSON.stringify(body, null, 2)}`);
          });
        db.close();
        next();
      });
    }
  },
  put: {
    route: '/contacts',
    respond: (req, res, next) => {
      MongoClient.connect(url, (err, db) => {
        req.params._id = Mongo.ObjectId(req.params._id);
        db.collection('contacts')
          .update( {'_id': req.params._id}, req.params, (err, result) => {
            let body = err ? JSON.stringify(err) : result;
            res.send(body);
            console.log(`PUT: /update/\n${JSON.stringify(body, null, 2)}`);
          });
        db.close();
        next();
      });
    }
  },
  del: {
    route: '/contacts/:id',
    respond: (req, res, next) => {
      MongoClient.connect(url, (err, db) => {
        db.collection('contacts')
          .deleteOne( {'_id': Mongo.ObjectId(req.params.id)}, (err, result) => {
            let body = err ? JSON.stringify(err) : result;
            res.send(body);
            console.log(`DELETE: /delete/\n${JSON.stringify(body, null, 2)}`);
          });
        db.close();
        next();
      });
    }
  }
};
