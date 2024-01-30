type AnimalType = "cat" | "dog" | "bird";

enum AnimalStatus {
  available = "available",
  notAvailable = "not available",
}

type AnimalParams = {
  animal: AnimalType;
  breed: string;
  sterilized?: string;
};

type AnimalData = AnimalParams & {
  location: string;
  age?: number;
};

// Response #1

type AnimalFound = {
  status: AnimalStatus.available;
  data: AnimalData;
};

// Response #2

type AnimalNotFound = {
  status: AnimalStatus.notAvailable;
  data: {
    message: string;
    nextUpdateIn: Date;
  };
};

function isAvailable(
  animal: AnimalFound | AnimalNotFound
): animal is AnimalFound {
  return animal.status === AnimalStatus.available;
}

function checkAnimalData(animal: AnimalFound): AnimalData;
function checkAnimalData(animal: AnimalNotFound): string;

function checkAnimalData(
  animal: AnimalFound | AnimalNotFound
): AnimalData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

checkAnimalData({
  status: AnimalStatus.available,
  data: {
    animal: "cat",
    breed: "Persian",
    sterilized: "yes",
    location: "Russia",
    age: 1,
  },
});
