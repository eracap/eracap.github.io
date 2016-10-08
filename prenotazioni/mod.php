<html>
<head>
<title>Verifica Dati</title>
</head>


 <body BGCOLOR=#FFFFFF  >
 
 
 
 <P>
 
 
 
 
 <?php
 $nome_new = $_POST[nome];
 $cognome_new = $_POST[cognome];
 $matricola_new = $_POST[matricola];
 $materia_new = $_POST[materia];
 $data_new = $_POST[data];
 
 
 if (($_POST[nome]=="")or($_POST[cognome]=="")or($_POST[matricola]=="")or($_POST[materia]=="")or($_POST[data]=="")){
 print "<p></p><p></p>Non hai inserito tutti i dati richiesti<br>";
 print ('<a href="foglio.htm"> Clicca qui per tornare al modulo </a>');}
 else{print ('
 <p><b>Dati inseriti:</b></p>
 <form method="POST" action="okk.php">
 <i>Nome:</i><br>
 <b>'.$nome_new.'</b>
 <input type="hidden" name="nome" value="'.$nome_new.'"><p>
 <i>Cognome:</i><br>
 <b>'.$cognome_new.'</b>
 <input type="hidden" name="cognome" value="'.$cognome_new.'"></b><p>
 <i>Matricola:</i><br>
 <b>'.$matricola_new.'</b>
 <input type="hidden" name="matricola" value="'.$matricola_new.'"></b><p>
 <i>Materia:</i><br>
 <b>'.$materia_new.'</b>
 <input type="hidden" name="materia" value="'.$materia_new.'"></b><p>
 <i>Data:</i><br>
 <b>'.$data_new.'</b>
 <input type="hidden" name="data" value="'.$data_new.'"></b><p>
 &nbsp;<p>
 &nbsp;<p>
 
 <b><i>Confermi?<i></i></b><i><br>
 <input type="submit" name="Invia" value="Si">
 </form>
 ');}
 ?>
 </body>
 
 </html>
 