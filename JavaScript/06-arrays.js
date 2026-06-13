// Arrays in JavaScript

// An array is a data structure that can hold multiple values at once. 
// It is an ordered collection of items, where each item can be of any type (number, string, object, etc.). 
// Arrays are zero-indexed, meaning the first element is at index 0.    

let mobilePhone=["Samsung", "Apple", "OnePlus", "Google Pixel", "Nokia"];
console.log(mobilePhone);  //


let marks=[80,70,90,90];
console.log(marks);

let booleanValues=[true,false,true,false];
console.log(booleanValues);


let mobilePhone2=[
    {
    brand: "realme",
    model: "P4R 5G",
    color: "Silver Glare",
    ram: "4 GB",
    storage: "128 GB",
    display: "6.8 inch HD+",
    rearCamera: "50MP",
    frontCamera: "8MP",
    battery: "8000 mAh",
    processor: "Dimensity 6300"
  },
  {
    brand: "Samsung",
    model: "Galaxy M16 5G",
    color: "Blue",
    ram: "6 GB",
    storage: "128 GB",
    display: "6.7 inch FHD+",
    rearCamera: "50MP",
    frontCamera: "13MP",
    battery: "6000 mAh",
    processor: "Dimensity 6100+"
  },
  {
    brand: "Redmi",
    model: "13C 5G",
    color: "Startrail Silver",
    ram: "4 GB",
    storage: "128 GB",
    display: "6.74 inch HD+",
    rearCamera: "50MP",
    frontCamera: "5MP",
    battery: "5000 mAh",
    processor: "Dimensity 6100+"
  },
  {
    brand: "POCO",
    model: "M7 Pro 5G",
    color: "Green",
    ram: "8 GB",
    storage: "256 GB",
    display: "6.67 inch FHD+",
    rearCamera: "50MP",
    frontCamera: "16MP",
    battery: "5110 mAh",
    processor: "Dimensity 7025"
  },
  {
    brand: "Motorola",
    model: "G64 5G",
    color: "Mint Green",
    ram: "8 GB",
    storage: "128 GB",
    display: "6.5 inch FHD+",
    rearCamera: "50MP",
    frontCamera: "16MP",
    battery: "6000 mAh",
    processor: "Dimensity 7025"
  },
  {
    brand: "Vivo",
    model: "T3x 5G",
    color: "Crimson Bliss",
    ram: "6 GB",
    storage: "128 GB",
    display: "6.72 inch FHD+",
    rearCamera: "50MP",
    frontCamera: "8MP",
    battery: "6000 mAh",
    processor: "Snapdragon 6 Gen 1"
  },
  {
    brand: "iQOO",
    model: "Z9x 5G",
    color: "Storm Grey",
    ram: "8 GB",
    storage: "128 GB",
    display: "6.72 inch FHD+",
    rearCamera: "50MP",
    frontCamera: "8MP",
    battery: "6000 mAh",
    processor: "Snapdragon 6 Gen 1"
  },
  {
    brand: "OnePlus",
    model: "Nord CE4 Lite",
    color: "Mega Blue",
    ram: "8 GB",
    storage: "256 GB",
    display: "6.67 inch FHD+ AMOLED",
    rearCamera: "50MP",
    frontCamera: "16MP",
    battery: "5500 mAh",
    processor: "Snapdragon 695"
  },
  {
    brand: "OPPO",
    model: "A3 Pro 5G",
    color: "Moonlight Purple",
    ram: "8 GB",
    storage: "128 GB",
    display: "6.67 inch HD+",
    rearCamera: "50MP",
    frontCamera: "8MP",
    battery: "5100 mAh",
    processor: "Dimensity 6300"
  },
  {
    brand: "Infinix",
    model: "Note 40X 5G",
    color: "Lime Green",
    ram: "12 GB",
    storage: "256 GB",
    display: "6.78 inch FHD+",
    rearCamera: "108MP",
    frontCamera: "8MP",
    battery: "5000 mAh",
    processor: "Dimensity 6300"
  }

];



console.log(mobilePhone2[9].brand);  // Infinix