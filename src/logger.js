'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('file-save', (payload) => {
  console.log('File saved.', payload);
})

db.subscribe('file-error', (payload) => {
  console.log('File error:', payload);
})