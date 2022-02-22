// const faker = require('faker');
import { faker } from '@faker-js/faker'
const getTitle = () => {
  const lorem = faker.lorem;
  return lorem.sentence();
};

const getNoteDesc = () => {
  const data = {
    time: 1587670998983,
    blocks: [
      {
        type: "header",
        data: {
          text: "A heading",
          level: 2
        }
      },
      {
        type: "paragraph",
        data: {
          text: "Paragraph with some <b>bold</b>&nbsp;text. And <a href=\"https://google.com\">some</a> <i>italic</i>&nbsp;text."
        }
      },
      {
        type: "paragraph",
        data: {
          text: "A lovely editor I must say."
        }
      },
      {
        type: "paragraph",
        data: {
          text: "Save new data."
        }
      },
    ],
    "version": "2.17.0"
  }

  return data;
};

const getDesc = () => {
  const lorem = faker.lorem;
  return lorem.paragraph();
};

const getName = () => {
  const helpers = faker.helpers;
  return helpers.userCard().name;
};

const getEmail = () => {
  const helpers = faker.helpers;
  return helpers.userCard().email;
};

const getFirstName = () => {
  const user = faker.name;
  return user.firstName();
};

const getLastName = () => {
  const user = faker.name;
  return user.lastName();
};

const getImageUrl = () => {
  const image = faker.image;
  return image.image();
};

const getPrice = () => {
  const commerce = faker.commerce;
  return commerce.price();
};

//get random index between min to max
const getRandIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = {
  getTitle,
  getDesc,
  getNoteDesc,
  getName,
  getImageUrl,
  getPrice,
  getFirstName,
  getLastName,
  getEmail,
  getRandIndex
};