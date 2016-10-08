<html>
<head>
<title>Scrittura del file</title>
</head>

 <body BGCOLOR=#FFFFFF  >



<?php
$nome_end = $_POST[nome];
$cognome_end = $_POST[cognome];
$matr = $_POST[matricola];
$mat = $_POST[materia];
$day = $_POST[data];


$fp=fopen ("registrazioni.dat", "a");
fwrite($fp,"$cognome_end $nome_end   $matr   $mat   $day \n");
fclose ($fp);

print "$nome_end $cognome_end registrazione completata.";
?>


<a href="http://www.dm.uniba.it/%7Ecaponio"><b>
<br>Torna alla homepage</b></a> <br></body>

</html>
