{
  const person = {
    address: {
      country: "INDONESIA",
    },
  };

  let country = person?.address?.country;
  document.writeln(`<p>${country}</p>`);
}
{
  const person = {};

  let country = person?.address?.country;
  document.writeln(country);
}
