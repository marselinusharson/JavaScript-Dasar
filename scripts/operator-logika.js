//AND OR UNERY
{
  const nilaiUjian = 70;
  const nilaiabsensi = 70;

  const lulusUjian = nilaiUjian > 75;
  const lulusAbsensi = nilaiabsensi > 75;
  const lulus = lulusUjian && lulusAbsensi;
  document.writeln(lulus);
}
document.writeln("</br>");
{
  const nilaiUjian = 70;
  const nilaiabsensi = 79;

  const lulusUjian = nilaiUjian > 75;
  const lulusAbsensi = nilaiabsensi > 75;
  const lulus = lulusUjian || lulusAbsensi;
  document.writeln(lulus);
  document.writeln("</br>");
  document.writeln(!lulus);
}
