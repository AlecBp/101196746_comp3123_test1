const lowerCaseWords = (arr) =>
  new Promise((resolve, reject) => {
    if (!arr || arr.length === 0 || !Array.isArray(arr)) reject("Invalid input array");
    resolve(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

lowerCaseWords(["Alec", 101196746, "PAGLIARUSSI", "tEsT", true])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
