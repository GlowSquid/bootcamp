const happy = false;

const greeting = new Promise((resolve, reject) => {
  if (happy) {
    resolve("Great!");
  } else {
    reject(";-(");
  }
});

greeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// Angela wants to be a nurse

let hasStudied = true;

const takeTest = _ => {
  return new Promise((resolve, reject) => {
    const license = {
      name: "Registered Nurse License",
      year: 2018
    };
    if (hasStudied) {
      resolve(license);
    } else {
      reject("Study first");
    }
  });
};

const applyJob = data => {
  return new Promise((resolve, reject) => {
    let employerInGoodMood = false;
    if (employerInGoodMood) {
      resolve("You got the job!");
    } else {
      reject("License missing");
    }
  });
};

// takeTest()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

takeTest()
  .then(applyJob)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
