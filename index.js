// Code your solution in this file!
const logDriverNames = function (collection) {
  collection.forEach(function (driver) {
    console.log(driver.name)
  });
};

const logDriversByHometown = function (collection, location) {
  collection.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
}

const driversByRevenue = function (collection) {
  return collection.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (collection) {
  return collection.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (collection) {
  return collection.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
};

const averageRevenue = function (collection) {
  return totalRevenue(collection)/collection.length;
}
