const anagrammes = (stringA, stringB) => {

  stringA = stringA.replace(/[^A-Za-z0-9_]/g,"");
  stringB = stringB.replace(/[^A-Za-z0-9_]/g,"");

  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();

  stringA = stringA.split('');
  stringB = stringB.split('');

  stringA = stringA.sort();
  stringB = stringB.sort();

  stringA = stringA.join('');
  stringB = stringB.join('');

  console.log(stringA+"    "+stringB);

  if(stringA == stringB){
    return true;
  }else{
    return false;
  }
};


class Stack {
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */
  // tab;
  constructor(){
    this.tab = new Array();
    this.bru = 0;
  }

  push(x){
    this.tab.push(x);
    this.bru++;
  }
  pop(){
    var value = this.tab[this.bru-1];
    this.tab.splice(this.bru-1, 1);
    this.bru--;
    console.log(2)
    return value;
  }
  peek(){
    return this.tab[this.bru-1];
  }
};


const fizzBuzz = (n) => {
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */
  for(i = 1; i <= n; i++){
    current = i;
    if(i % 3 == 0){
      current = "fizz";
    }
    if(i % 5 == 0){
        current = "buzz";
      }
    if(i % 3 == 0 && i % 5 == 0){
      current = "fizzbuzz";
    }
    console.log(current)
  }
};

const spirale = (n) => {

  let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
          result[startRow][i] = counter;
          counter++;
      }
      startRow++;
      for (let y = startRow; y <= endRow; y++) {
          result[y][endCol] = counter;
          counter++;
      }

      endCol--;

      for (let i = endCol; i >= startCol; i--) {
          result[endRow][i] = counter;
          counter++;
      }

      endRow--;
      for (let i = endRow; i >= startRow; i--) {
          result[i][startCol] = counter;
          counter++;
      }

      startCol++;

  }

  return result;

  /**
   * Retourne une matrice spirale de taille n x n.
   *
   * Exemples :
   *
   * matrix(2) = [[1, 2],
   *              [4, 3]]
   *
   * matrix(3) = [[1, 2, 3],
   *              [8, 9, 4],
   *              [7, 6, 5]]
   *
   * matrix(4) = [[1,   2,  3, 4],
   *              [12, 13, 14, 5],
   *              [11, 16, 15, 6],
   *              [10,  9,  8, 7]]
   */

};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */

function test(dir, y, x, tab){
  if(dir == 'droite' && y == 0){
    if(vertical(dir, y, x, tab)){
      return true;
    }
    if(horizontal(dir, y, x, tab)){
      return true;
    }
    if(diagonal(dir, y, x, tab)){
      return true;
    }
  }
}



function vertical(dir, y, x, tab) {

  let safe = 0
  console.log(" VERTICAL : ")
  console.log(" dir : "+dir+" y : "+y+" x : "+x+" tab : "+tab);
    if(y == 0){
      for(i=0; i<4; i++){
        
        if(i != 0 && safe != tab[i][x]){
          console.log("false")
          return false;
        }
        console.log(" x : "+x+" y : "+y);
        safe = tab[i][x]
      }
      console.log("true")
      return true;
    } else{

      for(i=4; i>0; i--){
        
        if(i != 4 && safe != tab[i][x]){
          console.log("false")
          return false;
        }
        console.log(" x : "+x+" y : "+y);
        safe = tab[i][x]
      }
      console.log("true")
      return true;
    }
}

function horizontal(dir, y, x, tab){

  let safe = 0;
  console.log(" HORIZONTAL : ")
  console.log(" dir : "+dir+" y : "+y+" x : "+x+" tab : "+tab);
    if(dir == "droite"){
      for(i = 0; i<4; i++){
        if(i != 0 && safe != tab[i][x]){
          console.log("false")
          return false;
        }
        console.log(" x : "+x+" y : "+y);
        safe = tab[y][i]
      }
      console.log("true")
      return true;
    } else{
      for(i = 4; i>0; i--){
        if(i != 0 && safe != tab[i][x]){
          console.log("false")
          return false;
        }
        console.log(" x : "+x+" y : "+y);
        safe = tab[y][i]
      }
      console.log("true")
      return true;
    }
}
function diagonal(dir, y, x, tab){
  console.log(" DIAGONAL : ")
  console.log(" dir : "+dir+" y : "+y+" x : "+x+" tab : "+tab);
    // if(y == 0){
    //   for
    // }
}












  let dir = '';
  let y = 0;
  let x = 0;
  let joueur = 0;
  let result = 0; 
  grid.forEach((el) => {
    el.forEach((sub)=> {
      if(sub == 1 || sub == 2){
        joueur = sub;
        x = el.indexOf(sub);
        if(el.indexOf(sub) < 2){
          dir = 'droite';
        }
        if(el.indexOf(sub) >= 3){
          dir = 'gauche';
        }
      }
    })
    if(test(dir, y, x, grid)){
      console.log(" OUUUUUUUUUUUUUUUUUUUUIIIIIIIIIIIIIIIIIIIIIIIIII")
      result = joueur;
    }else{
      y++;
    }
    console.log("############################################################");
    return result;
  })














};

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}
