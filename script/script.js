
let searchText = '';


const loadComent = async(input) =>{

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?${input?`category=${input}`:""}`)
    const data = await response.json();

    cards(data.posts);

}

if(searchText.length <= 0){
loadComent();

}



//* -- control search

const CategorysearhHandeler = () =>{

     searchText = document.getElementById("searchPosts").value;


    if(searchText.length <= 0){
        loadComent();
     return alert("Input your search");   
     
    }
    loadComent(searchText);

}





//* Display coment cards

const cards = (data) => {
console.log(data);
    const cardParent = document.getElementById('card&count_parent');

    cardParent.innerHTML ="";

if(data.length <= 0 ){
const container = document.createElement('div');
container.innerHTML =`
<h1 class="font-bold text-red-500 m-10 text-4xl"> 
  <i class="fa-solid fa-face-tired"></i> No search found!
 </h1>
<p class="text-center text-red-500 mb-10"> search:{coding, comedy} 

`;
cardParent.appendChild(container);
}



    data.forEach((items) => {
        // console.log(items);
        const cardContainer = document.createElement('div');
        cardContainer.innerHTML =`
        
        <!--* comment card start -->
   <div id="comment_card" class="bg-gray-100 p-5 md:p-5 rounded-3xl md:flex gap-5 relative mt-10 ">

    <!--* image div start -->
    <div class="relative w-[4rem] mb-10 md:mb-0 mx-auto md:mx-0">
        <img class="w-[4rem] h-[4rem] rounded-xl" src="${items.image}">
        <div class="activation ${items.isActive ? 'bg-lime-500' : 'bg-red-500'} w-[1rem] h-[1rem]  absolute -top-1 rounded-full -right-1"></div>
    </div>
    <!--* image div end -->
    
    <!--* card text div start -->
    <div>
    
        <div id="userName" class="flex gap-5">
            <p>#${items.category}</p>
            <p>Author: ${items.author.name}</p>
        </div>
    
        <div class="title border-b border-dashed border-black">
            <h2 class="font-bold text-xl md:text-3xl mb-2">
            ${items.title}
            </h2>
    
            <p class="pb-5">
            ${items.description}
            </p>
        </div>
    
        <!--* icon and numcount button -->
        <div class="button md:flex md:justify-between align-baseline mt-5 ">
    
            <div class="flex justify-between gap-10">
                <p>
                    <i class="fa-regular fa-message"></i>
                    ${items.comment_count}
                </p>
                    
    
                <p>
                        <i class="fa-regular fa-eye"></i>
                    ${items.view_count}
                </p>
                    
    
                <p>
                        <i class="fa-regular fa-clock"></i>
                    ${items.posted_time}
                </p>
</div>
    <!--! icon btton end -->
    

    <!--* numcount btn -->
            <div class="flex justify-center md:absolute md:right-5">
    <button onclick="markAndCound('${items.title}', '${items.view_count}')" class="bg-orange-400 h-10 w-10 rounded-full ">
        <i class="fa-solid fa-envelope-open "></i>
    </button>
            </div>
    
        </div>
    </div>
                `
                
    cardParent.appendChild(cardContainer);


    }  )

    
};

const markAndCound = (title, view) => {
const markreadContainer = document.getElementById('markTitle');
const markTextContainer = document.createElement('div');
markTextContainer.innerHTML=`


    <!--* info container -->
    <div class="info_container bg-white p-2 rounded-2xl m-2 ">
        <p class="font-bold mb-2 lg:mb-0">${title}</p>

        <p>
        <i class="fa-regular fa-eye"></i> ${view}   
        </p>
        
    </div>

`;
markreadContainer.appendChild(markTextContainer);
    
let count = document.getElementById('markReadClickCount').innerText;
let countToNum = parseFloat(count);
countToNum += 1;
document.getElementById('markReadClickCount').innerText = countToNum;
console.log(typeof countToNum, typeof count, countToNum);
};




