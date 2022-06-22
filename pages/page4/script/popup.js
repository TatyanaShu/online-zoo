
var modalEnter={};
// модальное окно 
function createModal (option) {
const  modal=document.createElement("div");
modal.classList.add("modal")
modal.insertAdjacentHTML ("afterbegin",`
<div class="modal-overlay" data-close="true">
<div class="form-donate">
<div class="popapPic"></div>
<div class="popapForm">
  <form action="post">
    <h3>Donate for your animal</h2>
    <div  class="form__first">
      <fieldset>
      <legend>Сhoose an animal</legend>
      <select name="choose" id="choose">
        <option value="1"><a href="">Panda</a></option>
        <option value="2"><a href="">Lion</a></option>
        <option value="3"><a href="">Monkey</a></option>
        <option value="4"><a href="">Gorilla</a></option>
        <option value="5"><a href="">Alligator</a></option>
        <option value="6"><a href=""></a></option>
        <option value="7"><a href=""></a></option>
        <option value="8"><a href=""></a></option>
      </select>
    </fieldset>
    <fieldset>
      <legend>To donate</legend>
      <input type="text" name="money" id="money">
      <label for="money"></label>
    </fieldset>
    </div>
    <div class = "form__second">
      <div>
        <h4>About you</h4>
        <fieldset>
          <legend>Name</legend>
          <input type="text" name="userName" id="user">
          <label for="user"></label>
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input type="email" name="userEmail" id="email">
          <label for="email"></label>
        </fieldset>
        <fieldset>
          <legend>Phone</legend>
          <select name="numb" id="numb">
              <option value=""> + 7</option>
              <option value=""> + 3</option>
          </select>
          <input type="tel" name="userTel" id="tel">
          <label for="tel"></label>
        </fieldset>
      </div>
      <div>
        <h4>Checkout</h4>
        <fieldset>
          <legend>Card number</legend>
           <input type="text" name="userCard" id="card">
          <label for="card"></label>
        </fieldset>
        <fieldset>
          <legend>Expiry date</legend>
          <select name="day" id="day"></select>
          <select name="mounth" id="mounth"></select>
        </fieldset>
        <fieldset>
          <legend>CVC</legend>
          <input type="text" name="cvc" id="cvc">
          <label for="cvc"></label>
        </fieldset>
      </div>
    </div>
    <div class="popap__agree">
      <p>If don’t cancel your subscription before the trial ends on April 15, 2021, you agree that you will automatically be charged</p>
      <button>
        <a href="#">
          <p>donate</p>
        </a> 
      </button> 
    </div>
  </form>
</div>
</div>
</div>
`);
let addEnter=document.getElementsByTagName("body");
addEnter[0].appendChild(modal);
return modal
}

modalEnter.modal= function modal (option){
    let anime_speed=200;
    let modalEnt=createModal(option)
    let destroyed=false;
    let closing=false;
    const modalka={
        open (){
           if (destroyed) {
                return console.log ("modal is destroyd");
            }
            modalEnt.classList.add("open");

        },
        close(){
            closing=true;
            modalEnt.classList.remove("open");
            modalEnt.classList.add ("hide");
            setTimeout (()=>{
                modalEnt.classList.remove("hide")
                closing=false
            }, anime_speed);}
            // modalEnt.remove("")

    }
    const listener = event=> {
        if (event.target.dataset.close) {
            modalka.close();
        }
    }
    modalEnt.addEventListener("click", listener)
    return Object.assign (modalka, {
        destroy () {
            modalEnt.childNodes.removeChild(modalEnt);
            modalEnt.removeEventListener("click",listener);
            destroyed=true;
        }
    })
}
let myModal=modalEnter.modal();
// let donates = document.querySelectorAll('.donate__btn')
// donates.forEach((item)=>{
// item.addEventListener('click', createModal)
// })