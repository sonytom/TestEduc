<!DOCTYPE html>
<html>
<body>

<?php

$myArray = [
    'Francisco Souza',
    'Guilherme Rosa',
    'Arthur Golveia'
];

echo "Nome do segundo cliente :";
print_r($myArray[1]);
echo "\n";

$arrayDeNascimento = [
    'Francisco Souza' => '10-12-1996',
    'Arthur Golveia' => '14-01-2000',
    'Guilherme Rosa' => '26-05-1985',
    'Marcelo Planalto' => '26-05-1985'
];

$myArray = array_intersect_key($arrayDeNascimento, array_flip($myArray));

arsort($myArray);

print_r($myArray);

foreach ($myArray as $chave => $valor) {
    echo "$chave nascido em $valor\n";
}

?>

</body>
</html>
