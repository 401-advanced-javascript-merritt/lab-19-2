'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('file-save', (payload) => {
  console.log('File saved.', payload);
});

db.subscribe('file-error', (payload) => {
  console.log('File error:', payload);
});

db.subscribe('create', (payload) => {
  console.log('Ficreate route', payload);
});

db.subscribe('read', (payload) => {
  console.log('read route', payload);
});

db.subscribe('update', (payload) => {
  console.log('update route', payload);
});

db.subscribe('delete', (payload) => {
  console.log('delete route:', payload);
});

db.subscribe('error', (payload) => {
  console.log('server error', payload);
});
