const getCurrentPosition = options =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
export default ({ timeout, maximumAge = 5 * 60 * 1000 } = {}) =>
  getCurrentPosition({
    maximumAge,
    timeout
  }).then(({ coords: { longitude, latitude }, timestamp }) =>
    Promise.resolve({
      coordinates: {
        longitude,
        latitude
      },
      timestamp
    })
  );
