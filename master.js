// select landing page Element 


    document.querySelector(".fa-bars").onclick = function (){
     // this.classList.toggle("fa-spin"); litadwire
        document.querySelector(".setting-box").classList.toggle("open");// calssList.toggel == ytabe9 class li fi css
        document.querySelector(".toggle-settings").classList.toggle("fer");
    };


    document.querySelector(".fa-close").onclick = function (){
    document.querySelector(".setting-box").classList.toggle("fer_box");
          //    this.classList.toggle(".fer_box")
    };


let landingPage = document.querySelector(".loading-page");//tahddi el 3anser.

let imageArray = ["01.jpeg","02.jpeg","03.jpeg","04.jpeg"]; 

  // change bakground mage url
  //  landingPage.style.backgroundImage = 'url("image/02.jpeg")'; 
  //landingPage.computedStyleMap.backgroundImage = 'url("image/02.jpeg")';

  // setInterval(() => { // Méthode el mouda ;
  //       let randomnember = math.floor(math.random() * imageArray.length);// méthode de clcule tole arry list .
  //       landingPage.style.backgroundImage = 'url("image/'+imageArray[randomnember]+'")'; 
  //     // landingPage.style.transition = ' ease-in-out all 5s'
  // }, 1000);   
        
    function color(a) {  
      document.documentElement.style.setProperty('--min--color', a);// Méthode de change. 

      }
   
      let ourskills = document.querySelector(".skills");
          
       let  toggeltheme=0;
        function mode(){
          if(toggeltheme==0){
              document.documentElement.style.setProperty('--colorbackground','#000');// yada3 fi colorbackground el 9ima #000 
              document.documentElement.style.setProperty('--colorecrir','#fff');
              toggeltheme++;
          }
          else{
            document.documentElement.style.setProperty('--colorbackground','#fff');
              document.documentElement.style.setProperty('--colorecrir','#000');
              toggeltheme--;
          }
        }