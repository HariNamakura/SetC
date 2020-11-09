$("#resp").hide();
$("#conj_3").hide();
$("#conj_4").hide();
$("#conj_5").hide();
numCon = 2;

function cleanDivs() {
     document.getElementById("printSetRepl").innerHTML = "";

}

function dosConj() {
     $("#conj_3").hide();
     $("#conj_4").hide();
     $("#conj_5").hide();
     numCon = 2;
}

function treConj() {
     $("#conj_3").show();
     $("#conj_4").hide();
     $("#conj_5").hide();
     numCon = 3;
}

function cuaConj() {
     $("#conj_3").show();
     $("#conj_4").show();
     $("#conj_5").hide();
     numCon = 4;
}

function cinConj() {
     $("#conj_3").show();
     $("#conj_4").show();
     $("#conj_5").show();
     numCon = 5;
}
/* info */

$("#infoText").hover(function () {
     $(this).append($("<a>Debe ingresar los Elementos separados por comas. Ejemplo: 'a,b,c...' </a>"));
}, function () {
     $(this).find("a").last().remove();
}
)

/* Ingreso de Datos */

/* Funcion union */
function unionSet() {
     Set.prototype.union = function (set2) {
          var union = new Set(this);
          for (var elem of set2) {
               union.add(elem);
          }
          return [...union];
     }
     setA = document.getElementById("setA").value;
      setB = document.getElementById("setB").value;
      setC = document.getElementById("setC").value;
      setD = document.getElementById("setD").value;
      setE = document.getElementById("setE").value;
      /* definir tamaño de los array */
      var arrSetA = setA.split(",")
      for (var i = 0; i < arrSetA.length; i++) { }
      var arrSetB = setB.split(",")
      for (var i = 0; i < arrSetB.length; i++) { }
      var arrSetC = setC.split(",")
      for (var i = 0; i < arrSetC.length; i++) { }
      var arrSetD = setD.split(",")
      for (var i = 0; i < arrSetD.length; i++) { }
      var arrSetE = setE.split(",")
      for (var i = 0; i < arrSetE.length; i++) { }

     switch (numCon) {
          case 2:
               /* convertir arrays en conjuntos */
               const set1 = new Set(arrSetA);
               const set2 = new Set(arrSetB);

               /* convertir resultado de la funcion union como array */
               reply = set1.union(set2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A ∪ B = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Union.png' id='img2'>";

               break;

          case 3:
               /* convertir arrays en conjuntos */
               const set1_2 = new Set(arrSetA);
               const set2_2 = new Set(arrSetB);
               const set3_2 = new Set(arrSetC);
               /* convertir resultado de la funcion union como array */
               repP1_2 = set1_2.union(set2_2)
               reply = set3_2.union(repP1_2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A ∪ B ∪ C = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Union3.png' id='img2'>";

               break;
          /* case 4: */
               /* convertir arrays en conjuntos */
               /* const set1_3 = new Set(arrSetA);
               const set2_3 = new Set(arrSetB);
               const set3_3 = new Set(arrSetC);
               const set4_3 = new Set(arrSetD); */
               /* convertir resultado de la funcion union como array */
               /* repP1_3 = set1_3.union(set2_3)
               repP2_3 = set3_3.union(repP1_3)
               reply = set4_3.union(repP2_3) */
               /* impresion de conjunto union */
/*                document.getElementById('printSetRepl').innerHTML = "A ∪ B ∪ C ∪ D = [ " + reply + " ]";
 */
               /* break; */
          /* case 5: */
               /* convertir arrays en conjuntos */
               /* const set1_4 = new Set(arrSetA);
               const set2_4 = new Set(arrSetB);
               const set3_4 = new Set(arrSetC);
               const set4_4 = new Set(arrSetD);
               const set5_4 = new Set(arrSetE); */
               /* convertir resultado de la funcion union como array */
               /* repP1_4 = set1_4.union(set2_4)
               repP2_4 = set3_4.union(repP1_4)
               repP3_4 = set4_4.union(repP2_4)
               reply = set5_4.union(repP3_4) */
               /* impresion de conjunto union */
/*                document.getElementById('printSetRepl').innerHTML = "A ∪ B ∪ C ∪ D ∪ E= [ " + reply + " ]";
 */
               break;

          default:
               break;
     }


}

/* popover information */

$(function () {
     $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
     $('[data-toggle="popover"]').popover()
})
     
function intersectionSet() {
     Set.prototype.intersection = function(set2) {
          var intersection = new Set();
          for (var elem of set2) {
              if (this.has(elem)) {
                  intersection.add(elem);
              }
          }
          return [...intersection];
      }
      setA = document.getElementById("setA").value;
      setB = document.getElementById("setB").value;
      setC = document.getElementById("setC").value;
      setD = document.getElementById("setD").value;
      setE = document.getElementById("setE").value;
      /* definir tamaño de los array */
      var arrSetA = setA.split(",")
      for (var i = 0; i < arrSetA.length; i++) { }
      var arrSetB = setB.split(",")
      for (var i = 0; i < arrSetB.length; i++) { }
      var arrSetC = setC.split(",")
      for (var i = 0; i < arrSetC.length; i++) { }
      var arrSetD = setD.split(",")
      for (var i = 0; i < arrSetD.length; i++) { }
      var arrSetE = setE.split(",")
      for (var i = 0; i < arrSetE.length; i++) { }
      
     switch (numCon) {
          case 2:
               /* convertir arrays en conjuntos */
               const set1 = new Set(arrSetA);
               const set2 = new Set(arrSetB);

               /* convertir resultado de la funcion union como array */
               reply = set1.intersection(set2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A ∩ B = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Intersection.png' id='img2'>";
               break;

          case 3:
               /* convertir arrays en conjuntos */
               const set1_2 = new Set(arrSetA);
               const set2_2 = new Set(arrSetB);
               const set3_2 = new Set(arrSetC);
               /* convertir resultado de la funcion union como array */
               repP1_2 = set1_2.intersection(set2_2)
               reply = set3_2.intersection(repP1_2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A ∩ B ∩ C = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Intersection3.png' id='img2'>";
               break;
          /* case 4: */
               /* convertir arrays en conjuntos */
               /* const set1_3 = new Set(arrSetA);
               const set2_3 = new Set(arrSetB);
               const set3_3 = new Set(arrSetC);
               const set4_3 = new Set(arrSetD); */
               /* convertir resultado de la funcion union como array */
               /* repP1_3 = set1_3.intersection(set2_3)
               repP2_3 = set3_3.intersection(repP1_3)
               reply = set4_3.intersection(repP2_3) */
               /* impresion de conjunto union */
               /* document.getElementById('printSetRepl').innerHTML = "A ∪ B ∪ C ∪ D = [ " + reply + " ]"; */

              /*  break; */
         /*  case 5: */
               /* convertir arrays en conjuntos */
               /* const set1_4 = new Set(arrSetA);
               const set2_4 = new Set(arrSetB);
               const set3_4 = new Set(arrSetC);
               const set4_4 = new Set(arrSetD);
               const set5_4 = new Set(arrSetE); */
               /* convertir resultado de la funcion union como array */
               /* repP1_4 = set1_4.intersection(set2_4)
               repP2_4 = set3_4.intersection(repP1_4)
               repP3_4 = set4_4.intersection(repP2_4)
               reply = set5_4.intersection(repP3_4) */
               /* impresion de conjunto union */
/*                document.getElementById('printSetRepl').innerHTML = "A ∪ B ∪ C ∪ D ∪ E= [ " + reply + " ]";
 */
               /* break; */

          default:
               break;
     }
      
}

function complementSet() {
     
     

     Set.prototype.union = function (set2) {
          var union = new Set(this);
          for (var elem of set2) {
               union.add(elem);
          }
          return [...union];
     }

      Set.prototype.difference = function(set2) {
          var difference = new Set(this);
          for (var elem of set2) {
              difference.delete(elem);
          }
          return [...difference];
      }

      

      setA = document.getElementById("setA").value;
      setB = document.getElementById("setB").value;
      setC = document.getElementById("setC").value;
      setD = document.getElementById("setD").value;
      setE = document.getElementById("setE").value;
      /* definir tamaño de los array */
      var arrSetA = setA.split(",")
      for (var i = 0; i < arrSetA.length; i++) { }
      var arrSetB = setB.split(",")
      for (var i = 0; i < arrSetB.length; i++) { }
      var arrSetC = setC.split(",")
      for (var i = 0; i < arrSetC.length; i++) { }
      var arrSetD = setD.split(",")
      for (var i = 0; i < arrSetD.length; i++) { }
      var arrSetE = setE.split(",")
      for (var i = 0; i < arrSetE.length; i++) { }
      
     switch (numCon) {
          case 2:
               /* convertir arrays en conjuntos */
               const set1 = new Set(arrSetA);
               const set2 = new Set(arrSetB);

               /* convertir resultado de la funcion union como array */
               reply = set2.difference(set1)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A' = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Complement.png' id='img2'>";
               break;

          case 3:
               /* convertir arrays en conjuntos */
               const set1_2 = new Set(arrSetA);
               const set2_2 = new Set(arrSetB);
               const set3_2 = new Set(arrSetC);


               /* convertir resultado de la funcion union como array */
               repP1_2 =  new Set (set2_2.union(set3_2))
               reply = repP1_2.difference(set1_2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A' = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Complement3.png' id='img2'>";
               break;
          default:
               break;
     }
      
}

function differenceSet() {
     
     

     Set.prototype.union = function (set2) {
          var union = new Set(this);
          for (var elem of set2) {
               union.add(elem);
          }
          return [...union];
     }

      Set.prototype.difference = function(set2) {
          var difference = new Set(this);
          for (var elem of set2) {
              difference.delete(elem);
          }
          return [...difference];
      }

      

      setA = document.getElementById("setA").value;
      setB = document.getElementById("setB").value;
      setC = document.getElementById("setC").value;
      setD = document.getElementById("setD").value;
      setE = document.getElementById("setE").value;
      /* definir tamaño de los array */
      var arrSetA = setA.split(",")
      for (var i = 0; i < arrSetA.length; i++) { }
      var arrSetB = setB.split(",")
      for (var i = 0; i < arrSetB.length; i++) { }
      var arrSetC = setC.split(",")
      for (var i = 0; i < arrSetC.length; i++) { }
      var arrSetD = setD.split(",")
      for (var i = 0; i < arrSetD.length; i++) { }
      var arrSetE = setE.split(",")
      for (var i = 0; i < arrSetE.length; i++) { }
      
     switch (numCon) {
          case 2:
               /* convertir arrays en conjuntos */
               const set1 = new Set(arrSetA);
               const set2 = new Set(arrSetB);

               /* convertir resultado de la funcion union como array */
               reply = set1.difference(set2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A - B = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Difference.png' id='img2'>";
               break;

          case 3:
               /* convertir arrays en conjuntos */
               const set1_2 = new Set(arrSetA);
               const set2_2 = new Set(arrSetB);
               const set3_2 = new Set(arrSetC);


               /* convertir resultado de la funcion union como array */
               repP1_2 =  new Set (set2_2.union(set3_2))
               reply = set1_2.difference(repP1_2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A - B C = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/Difference3.png' id='img2'>";
               break;
          default:
               break;
     }
      
}

function symDifferenceSet() {
     
     Set.prototype.intersection = function(set2) {
          var intersection = new Set();
          for (var elem of set2) {
              if (this.has(elem)) {
                  intersection.add(elem);
              }
          }
          return [...intersection];
      }

     Set.prototype.union = function (set2) {
          var union = new Set(this);
          for (var elem of set2) {
               union.add(elem);
          }
          return [...union];
     }

      Set.prototype.difference = function(set2) {
          var difference = new Set(this);
          for (var elem of set2) {
              difference.delete(elem);
          }
          return [...difference];
      }

      

      setA = document.getElementById("setA").value;
      setB = document.getElementById("setB").value;
      setC = document.getElementById("setC").value;
      setD = document.getElementById("setD").value;
      setE = document.getElementById("setE").value;
      /* definir tamaño de los array */
      var arrSetA = setA.split(",")
      for (var i = 0; i < arrSetA.length; i++) { }
      var arrSetB = setB.split(",")
      for (var i = 0; i < arrSetB.length; i++) { }
      var arrSetC = setC.split(",")
      for (var i = 0; i < arrSetC.length; i++) { }
      var arrSetD = setD.split(",")
      for (var i = 0; i < arrSetD.length; i++) { }
      var arrSetE = setE.split(",")
      for (var i = 0; i < arrSetE.length; i++) { }
      
     switch (numCon) {
          case 2:
               /* convertir arrays en conjuntos */
               const set1 = new Set(arrSetA);
               const set2 = new Set(arrSetB);

               /* convertir resultado de la funcion union como array */
               repP1 =  new Set (set1.union(set2))
               repP2 = new Set(set1.intersection(set2))
               reply = repP1.difference(repP2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A Δ B = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/SymDifference.png' id='img2'>";
               break;

          case 3:
               /* convertir arrays en conjuntos */
               const set1_2 = new Set(arrSetA);
               const set2_2 = new Set(arrSetB);
               const set3_2 = new Set(arrSetC);
               /* convertir resultado de la funcion union como array */
               repP1_2 = new Set(set1_2.union(set2_2))
               repP2_2 = new Set(set3_2.union(repP1_2))

               repP4_2 = new Set(set1_2.intersection(set2_2))
               repP3_2 = new Set(set3_2.intersection(repP1_2))

               unionI = new Set(repP4_2.union(repP3_2))
               reply = repP2_2.difference(repP4_2)
               /* impresion de conjunto union */
               document.getElementById('printSetRepl').innerHTML = "A Δ B Δ C = [ " + reply + " ]";
               document.getElementById('printTMG').innerHTML="<br><img src='imagenes/SymDifference3.png' id='img2'>";
               break;
          default:
               break;
     }
      
}

