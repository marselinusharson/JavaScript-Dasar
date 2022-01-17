{
  const person = {
    namaDepan: "Marselinus",
    NamaAkhir: "Harson Rewo",
  };

  if ("namaDepan" in person) {
    alert(`HI ${person.namaDepan}`);
  } else {
    alert(`Helo`);
  }
}

{
  const person = {
    namaDepan: undefined,
    NamaAkhir: "Harson Rewo",
  };

  if ("namaDepan" in person) {
    alert(`HI ${person.namaDepan}`);
  } else {
    alert(`Helo`);
  }
}

{
  const person = {
    namaDepan: null,
    NamaAkhir: "Harson Rewo",
  };

  if ("namaDepan" in person) {
    alert(`HI ${person.namaDepan}`);
  } else {
    alert(`Helo`);
  }
}
