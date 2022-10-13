// VARIABLES 

var bonjour 
bonjour = 'Bonjour tout le monde'

var age = 42 

// Les variables "var" ont une portée qui est l'ensemble de la fonction qui les contient.

// Le mot clé "let" permet de déclarér une variable qui est limitée au bloc qui la contient.

for (let i=1; i<=10; i++) {
    let j = i
}

// Le mot clé "const" est utilisé pour définir une variable avec une valeur qui ne va jamais changé.

const AGE_MINIMUM = 7
const AGE_MAXIMUM = 77

// LES LITTERAUX DE GABARITS

// Les sauts de ligne 
// À la différence des chaînes classiques, 
// délimitées par des quotes (simples ou doubles), vous pouvez sauter une ligne sans problème dans un littéral de gabarit :

let singleQuotes = '
' // Erreur de syntaxe: '' string contains an unescaped line break

let doubleQuotes = "
" // Erreur de syntaxe: '' string contains an unescaped line break

let templateLiteral = `
` // OK 

// Intérpolation de données

// Si nous voulons injecter une variable (ou une constante) dans un littéral de gabarit, il existe de une syntaxe spécifique pour ne 
// Pas avoir à concaténer, en utilisant le marqueur ${} autour de notre valeur

const NUMERO = '007'

let message = `Bonjour, Agent ${NUMERO}` // "Bonjour, Agent 007"

// Les valeurs sont évaluées au moment de la déclaration, pas à chaque fois que vous faites appel à votre chaîne. 
// Si vous changez une valeur après avoir déclaré la chaîne il faudra la redéfinir.

let langage = 'Javascript'

let message_web = `Le meilleur langage pour le Web est ${langage}`

langage = 'Python'

message // "Le meilleur langage pour le Web est le Javascript"




