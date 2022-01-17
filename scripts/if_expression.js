// IF ELSE=========================ELSE IF============
{
  let nilai = 90;

  if (nilai > 80) {
    document.writeln(`<p>GOOD JOB</p>`);
  } else {
    document.writeln(`<p>TRY AGAIN NEXT GAME</p>`);
  }
}
// else if
{
  let nilai = 70;

  if (nilai > 80) {
    document.writeln(`<p>GOOD JOB</p>`);
  } else if (nilai > 70) {
    document.writeln(`<p>NICE TRY</p>`);
  } else if (nilai > 60) {
    document.writeln(`<p>NOT BAD</p>`);
  } else {
    document.writeln(`<p>TRY AGAIN NEXT GAME</p>`);
  }
}
