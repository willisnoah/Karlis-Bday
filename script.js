// function addListeners(){
//     for(i=0;i<21;i++){
//         const id=`button${i+1}`
//         const buttonEl=document.getElementById(id)
//         buttonEl.addEventListener("click",(e)=>{
//             const id="img"+e.target.id.split("")[6]
//             const id2="img"+e.target.id.split("")[7]
//           const picture= document.getElementById(id,id2)
//           console.log (picture)
//           //change this from slash to ap ath to the purchased picture
//           picture.src ="./imgs/purchased.banner.jpg";
//           addToPurchased(picture.id)
//           addToPurchased(picture.id2)
//         })
//     }
//         }
// const addToPurchased=(id)=>{
//    const purchases= localStorage.getItem("purchaseHistory")
//    if(purchases){}else{
//     let purchases = [id]
//     purchases=JSON.stringify(purchases)
//     localStorage.setItem("purchaseHistory",purchases)}
// }
// addListeners()