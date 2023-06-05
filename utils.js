const _ = require("lodash");

const findPostByTitle = (posts, reqTitle) => {
  let foundPostFlag = false;
  let requestedPost = {};
  posts.every((post) => {
    if (_.lowerCase(post.title) === _.lowerCase(reqTitle)) {
      foundPostFlag = true;
      requestedPost = post;
      return false;
    } else {
      return true;
    }
  });

  if (foundPostFlag === false) {
    return "not found";
  } else {
    return requestedPost;
  }
};

const truncateText = (text, numberOfLetters = 100) => {
  if (text.length <= numberOfLetters) {
    return text;
  } else {
    return text.slice(0, numberOfLetters) + "...";
  }
};

module.exports = { findPostByTitle, truncateText };
