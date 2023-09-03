require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const log = console.log;
const port = process.env.PORT;