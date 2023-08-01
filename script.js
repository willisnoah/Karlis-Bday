function addListeners(){
    for(i=0;i<21;i++){
        const id=`button${i+1}`
       
        const buttonEl=document.getElementById(id)
        buttonEl.addEventListener("click",(e)=>{
            const id="img"+e.target.id.split("")[6]
          const picture= document.getElementById(id)
          console.log (picture)
          //change this from slash to ap ath to the purchased picture
          picture.src ="./imgs/purchased.banner.jpg";
          addToPurchased(picture.id)
          
        })
    }
}
const addToPurchased=(id)=>{
   const purchases= localStorage.getItem("purchaseHistory")
   if(purchases){}else{
    let purchases = [id]
    purchases=JSON.stringify(purchases)
    localStorage.setItem("purchaseHistory",purchases)}
}
addListeners()