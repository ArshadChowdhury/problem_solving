// iterate over array and build a hash table:
// KEY is the complement!
// VALUE is the index!
// each iteration, you check back against what has already been placed in the hash map

var twoSum = function (nums, target) {
  const { append } = require("express/lib/response");

  let result = [];

  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in hashMap) {
      result[0] = hashMap[complement];
      result[1] = i;
    }

    hashMap[nums[i]] = i;
  }

  return result;
};

function printChildren(t) {}

function printChildrenRecurse(t) {
  if (t.children.length === 0) {
    return;
  }

  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecurse(child);
  });
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

let a = 1;
let b = 2;

setTimeout(function () {
  console.log("Timeout: " + a);
}, 500);

a = 10;

fetch("/").then(function () {
  console.log("Fetch");
});

console.log("Synchronous");

console.log(a);
console.log(b);

function makeRequest(jayga) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${jayga}`);
    if (jayga === "Google") {
      resolve("Google says Hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(reaction) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${reaction}`);
  });
}

makeRequest("Google")
  .then((reply) => {
    console.log("Response received");
    return processRequest(reply);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((err) => {
    console.log(err);
  });

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float
//  parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    h = h * bounce;

    while (h > window) {
      count += 2;
      h = h * bounce;
    }
    return count;
  } else {
    return -1;
  }
}

console.log(bouncingBall(5.5, 0.66, 1.5));

var array = [2, 1, 1, 2, 1, 2, 1];

function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => {
    if (v == value) {
      count++;
    }
    v === value && count++;
  });
  return count;
}

console.log(getOccurrence(array, 2));

function reverse(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var newArray = array.pop(i);
    if (array.length == 0) {
      array.push(newArray);
    }
  }
  while (array.length) {
    output.push(array.pop());
  }
  return output;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

function reversed(array) {
  let reversedArray = [];
  while (array.length) {
    reversedArray.push(array.pop());
  }
  return reversedArray;
}

console.log(reversed(["Z", "Y", "U", "X"]));

function reverse() {
  const array3 = [1, 2, 3, 4, 5, 6, 7];
  var output = [];
  while (array3.length) {
    output.push(array3.pop());
  }
  return output;
}
console.log(reverse());

function solution(str, ending) {
  let strings = str;
  let endings = ending;
  var filteredValue = strings.filter((str) => str.includes("bedroom"));
  if (filteredValue.length) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("abc", "bc"));

let text = "Hello world!";
let result = text.substr(1, 4);
console.log(result);

var myArray = ["bedroomone", "bedroomonetwo", "bathroom"];

var PATTERN = "bedroom",
  filtered = myArray.filter(function (str) {
    return str.indexOf(PATTERN) === -1;
  });
console.log(filtered);

function sumDigits(number) {
  var digits = number
    .toString()
    .split("")
    .map((iNum) => parseInt(iNum, 10));
  const sum = digits.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}

console.log(sumDigits(13412));

let x = 100;

function logX() {
  console.log(x);
}

logX();

fetch(
  "https://newsapi.org/v2/everything?q=Apple&from=2022-03-13&sortBy=popularity&apiKey=b162e9ab719742feab59b914f70f14ee"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

var noOdds = (values) => values.filter((x) => x % 2 === 0);

function noOdds(values) {
  return values.filter(function (x) {
    return x % 2 === 0;
  });
}

console.log(noOdds([1, 3, 5, 2, 4, 6]));

const addValue = (a, b, c = 3) => a + b + c;
console.log(addValue(1, 2));

const users = [
  {
    _id: "2120",
    name: "Jhon Smith",
  },
  {
    _id: "2120",
    name: "Micheal Jhon",
  },
  {
    _id: "2120",
    name: "Jhon Smith",
  },
];

console.log(users[1].name);

const price = "500";
const newPrice = parseInt(price);
const discount = newPrice * (15 / 100);
const divEl = `<div class="red-bg">Discount = ${discount} </div>`;
console.log(divEl);

async () => {
  try {
    let response = await fetch("a valid url");
    let user = await response.json();
  } catch (err) {
    console.log("error message");
  }
};

function myBio(firstName, lastName, company) {
  console.log(`${firstName} ${lastName} runs${company}`);
}
myBio(...["aa", "bb", "cc"]);

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split("").sort().join();
}

console.log(anagrams("mon", "konm"));

var isAnagram = function (test, original) {
  return checkedAnagram(test) === checkedAnagram(original);
};

function checkedAnagram(str) {
  return str.replace(/[^\w]/g).toLowerCase().split("").sort().join();
}

function solution(nums) {
  if (nums === null) {
    return [];
  } else {
    // use a - b for small to large & b - a for large to small
    return [].slice.call(nums).sort((a, b) => b - a);
  }
}

console.log(solution([2, 5, 5, 1, 3, 23, 234]));

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
// can put any number here and it'll be converted to next multiple number of 5

console.log(roundToNext5(6));

// I sort of have this different problem now, I'm going to sit for bar exam in 2 months
// I need to study 1000 pages in total, so I need to study 20 pages on average per day.
