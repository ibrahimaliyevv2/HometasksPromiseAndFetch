// let dataId=1;

// document.querySelector('btn-other').addEventListener('click',function(e){
//     dataId++;
//  })


document.querySelector('.btn-need').addEventListener('click',function(e){ 
    fetch(`https://jsonplaceholder.typicode.com/users/1/posts`)
    .then(response=>response.json())
    .then(data=>{
    
        data.forEach(element => {
            let card = `<div class="col-4 mb-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card ${element.userId}</h6>
                <p class="card-text">${element.body}</p>
                <button type="button" class="btn btn-other btn-primary">Button</button>
            </div>
        </div>`;
    
            document.querySelector('.row').innerHTML+=card
        });
        
    })
})

 
// let visitCount = localStorage.getItem('visitCount');

// function BasketItem(id,count){
//     this.Id = id;
//     this.Count = count;
// }

// if(!visitCount){
//     visitCount=0;
// }

// visitCount++;

// localStorage.setItem('visitCount',visitCount)

// let btns = document.querySelectorAll('.btn-other');

// btns.forEach(el=>{
//     el.addEventListener('click',function(e){
//         let dataId = el.parentNode.parentNode.getAttribute('data-id');
        
//         let basketStr = localStorage.getItem('basket');

//         let basketItems;
//         if(!basketStr){
//             basketItems = [];
//         }
//         else{
//             basketItems = JSON.parse(basketStr);
//         }

//         let item = basketItems.find(x=>x.Id == dataId);

//         if(item){
//             item.Count++;
//         }
//         else{
//             item = new BasketItem(dataId,1);
//             basketItems.push(item);
//         }

//         document.querySelector('.basket .item-count').innerText = basketItems.length;

//         localStorage.setItem('basket',JSON.stringify(basketItems))
//     })
// })



// console.log(visitCount)