function showCollapseditem(id) {
  if (id === "di1") {
    document.getElementById("ci1").style.display = "block";
  } else if (id === "di2") {
    document.getElementById("ci2").style.display = "block";
  } else if (id === "di3") {
    document.getElementById("ci3").style.display = "block";
  } else {
    console.log(id);
  }
}
function hideCollapsedItem(id) {
  if (id === "di1") {
    document.getElementById("ci1").style.display = "none";
  } else if (id === "di2") {
    document.getElementById("ci2").style.display = "none";
  } else if (id === "di3") {
    document.getElementById("ci3").style.display = "none";
  } else {
    console.log(id);
  }
}

function Display(screenSize, screenResolution) {
  this.screenSize = screenSize;
  this.screenResolution = screenResolution;
}

function Memory(internalMemory, RAM, cardSlot) {
  this.internalMemory = internalMemory;
  this.RAM = RAM;
  this.cardSlot = cardSlot;
}

function Performance(processor, GPU) {
  this.processor = processor;
  this.GPU = GPU;
}

function Camera(frontCamera, backCamera) {
  this.frontCamera = frontCamera;
  this.backCamera = backCamera;
}

function Phone(
  name,
  price,
  image,
  brand,
  colors,
  Network_Tech,
  phoneDimensions,
  phoneWeight,
  operatingSystem,
  screenSize,
  screenResolution,
  internalMemory,
  RAM,
  cardSlot,
  processor,
  GPU,
  frontCamera,
  backCamera
) {
  this.name = name;
  this.price = price;
  this.image = image;
  this.brand = brand;
  this.colors = colors;
  this.Network_Tech = Network_Tech,
  this.phoneDimensions = phoneDimensions,
  this.phoneWeight = phoneWeight,
  this.operatingSystem = operatingSystem,

  this.display = new Display(screenSize, screenResolution);
  this.screenSize = this.display.screenSize;
  this.screenResolution = this.display.screenResolution;

  this.memory = new Memory(internalMemory, RAM, cardSlot);
  this.internalMemory = this.memory.internalMemory;
  this.RAM = this.memory.RAM;
  this.cardSlot = this.memory.cardSlot

  this.performance = new Performance(processor, GPU);
  this.processor = this.performance.processor;
  this.GPU = this.performance.GPU;

  this.camera = new Camera(frontCamera, backCamera);
  this.frontCamera = this.camera.frontCamera;
  this.backCamera = this.camera.backCamera;
}

var mobile_phones = {
  iphone: {
    iphonex: new Phone(
      "iPhone X",
      35000,
      "https://www.gadgetsprices.com/wp-content/uploads/2020/03/Apple-iPhone-X-2.jpg",
      "Apple",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
    iphone_11_pro: new Phone(
      "iPhone 11 pro",
      55000,
      "https://static-www.o2.co.uk/sites/default/files/apple-iphone-11-pro-midnight-green-sku-header.png_.png",
      "Apple",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
    iphone_12_pro: new Phone(
      "iPhone 12 pro",
      65000,
      "https://www.gadgetsprices.com/wp-content/uploads/2020/03/Apple-iPhone-12-Pro-Max-4.jpg",
      "Apple",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
    iphone_13_pro: new Phone(
      "iPhone 13 pro",
      115000,
      "https://images.priceoye.pk/apple-iphone-13-pro-pakistan-priceoye-wb6qy.jpg",
      "Apple",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
  },
  samsung: {
    samsung_note_5: new Phone(
      "Note 5",
      76000,
      "https://www.gadgetsprices.com/wp-content/uploads/2020/03/Samsung-Galaxy-Note-5-32GB-2.jpg",
      "Samsung",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
    samsung_galaxy_s7: new Phone(
      "Galaxy s7",
      45000,
      "https://www.gadgetsprices.com/wp-content/uploads/2020/03/Samsung-Galaxy-S7.jpg",
      "Samsung",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
    samsung_fold: new Phone(
      "Z Fold",
      3500000,
      "https://www.gadgetsprices.com/wp-content/uploads/2020/03/Samsung-Galaxy-Fold.jpg",
      "Samsung",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
  },
  motorola: {
    moto_Droid_Z: new Phone(
      "Moto Z",
      35000,
      "https://www.bestmobile.pk/mobile_images/Original_1507994584Moto-G5S-Plus-pakistan.webp",
      "Motorolla",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
    Motorolla_E6: new Phone(
      "Moto E6",
      15000,
      "https://gsmorigin.com/wp-content/uploads/2019/09/Motorola-Moto-E6-plus-425x425.jpg",
      "Motorolla",
      ["Silver", "Space Grey"],
      "GSM / HSPA / LTE",
      "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
      "174 g",
      "iOS 11.1.1, up to iOS 15.6, planned upgrade to iOS 16",
      "5.8 inches",
      "1125 x 2436 pixels",
      "64 GB, 256 GB",
      "3 GB",
      false,
      "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      "Apple GPU (three-core graphics)",
      "7 MP, f/2.2, 32mm (standard)",
      ["12 MP, f/1.8, 28mm (wide)", "12 MP, f/2.4, 52mm (telephoto)"]
    ),
  },
};

var output_obj = {};

function selection(brand_selection, mobile_name) {
  switch (brand_selection) {
    case "iphone":
      switch (mobile_name) {
        case "iphonex":
          output_obj = mobile_phones.iphone.iphonex;
          break;
        case "iphone_11_pro":
          output_obj = mobile_phones.iphone.iphone_11_pro;
          break;
        case "iphone_12_pro":
          output_obj = mobile_phones.iphone.iphone_12_pro;
          break;
        case "iphone_13_pro":
          output_obj = mobile_phones.iphone.iphone_13_pro;
          break;
      }
      break;

    case "samsung":
      switch (mobile_name) {
        case "sam_gal_note_5":
          output_obj = mobile_phones.samsung.samsung_note_5;
          break;
        case "sam_gal_s7":
          output_obj = mobile_phones.samsung.samsung_galaxy_s7;
          break;
        case "sam_fold":
          output_obj = mobile_phones.samsung.samsung_fold;
          break;
      }
      break;

    case "moto":
      switch (mobile_name) {
        case "moto_droid_z":
          output_obj = mobile_phones.motorola.moto_Droid_Z;
          break;
        case "moto_e6":
          output_obj = mobile_phones.motorola.Motorolla_E6;
          console.log(output_obj.image);
          break;
      }
      break;
  }
  returnthesedivs();
}
function returnthesedivs() {
  setTimeout(function(){
  document.getElementById("mobile-image").src =        output_obj.image;
  document.getElementById("mobile-name").innerHTML =   output_obj.name;
  document.getElementById("mobile-price").innerHTML =  output_obj.price;
  document.getElementById("brand-name").innerHTML  =    output_obj.brand;
  document.getElementById("colors").innerHTML =        output_obj.colors;
  document.getElementById("network-tech").innerHTML =  output_obj.Network_Tech;
  document.getElementById("operating-sys").innerHTML = output_obj.operatingSystem;
  document.getElementById("dimension").innerHTML =     output_obj.phoneDimensions;
  document.getElementById("weight").innerHTML =        output_obj.phoneWeight;
  document.getElementById("screen-size").innerHTML =   output_obj.screenSize;
  document.getElementById("screen-resolution").innerHTML = output_obj.screenResolution;
  document.getElementById("internal-memory").innerHTML = output_obj.internalMemory;
  document.getElementById("RAM").innerHTML =           output_obj.RAM;
  document.getElementById("card-slot").innerHTML =     output_obj.cardSlot;
  document.getElementById("front-camera").innerHTML =  output_obj.frontCamera;
  document.getElementById("rear-camera").innerHTML =   output_obj.backCamera;
  document.getElementById("CPU").innerHTML =           output_obj.processor;
  document.getElementById("GPU").innerHTML =           output_obj.GPU;
  },500);
}

