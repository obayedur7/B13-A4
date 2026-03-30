let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn'

let total = document.getElementById('total-count');
let totalTwo = document.getElementById('total-2');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterButton = document.getElementById('all-filter-btn');
const interviewFilterButton = document.getElementById('interview-filter-btn');
const rejectedFilterButton = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('all-cards');
const noJobsSection = document.getElementById('no-jobs');
const mainContainer = document.getElementById('main-container');
const filterSection = document.getElementById('filter-section');
const interviewNumOfJobs = document.getElementById('int-num-of-jobs');
const rejectedNumOfJobs = document.getElementById('rej-num-of-jobs');

function calculateCount (){
    total.innerText = allCardSection.children.length;
    totalTwo.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    interviewNumOfJobs.innerText = interviewList.length + ' of';
    rejectedNumOfJobs.innerText = rejectedList.length + ' of';
    
}
calculateCount();

function toggleStyle(id){
    currentStatus = id ;
allFilterButton.classList.remove('bg-blue-500');
interviewFilterButton.classList.remove('bg-blue-500');
rejectedFilterButton.classList.remove('bg-blue-500');

allFilterButton.classList.add('bg-white');
interviewFilterButton.classList.add('bg-white');
rejectedFilterButton.classList.add('bg-white');

const selected = document.getElementById(id);
selected.classList.remove('bg-white');
selected.classList.add('bg-blue-500');
if(id == 'all-filter-btn'){
    noJobsSection.classList.add('hidden')
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
    interviewNumOfJobs.classList.add('hidden');
    rejectedNumOfJobs.classList.add('hidden');
}
else if(id == 'interview-filter-btn'){
  if(interviewList.length == 0){
    noJobsSection.classList.remove('hidden')}
    else {noJobsSection.classList.add('hidden')}
    if(interviewList.length != 0){
      interviewNumOfJobs.classList.remove('hidden')
    } else { interviewNumOfJobs.classList.add('hidden')}

    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    rejectedNumOfJobs.classList.add('hidden');
    renderInterview();
}
else if(id == 'rejected-filter-btn'){
    if(rejectedList.length == 0){
    noJobsSection.classList.remove('hidden')}
    else{noJobsSection.classList.add('hidden')}
    if(rejectedList.length != 0){
     rejectedNumOfJobs.classList.remove('hidden');
    } else {rejectedNumOfJobs.classList.add('hidden')}

    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    interviewNumOfJobs.classList.add('hidden');
    renderRejected();
}
}


mainContainer.addEventListener('click', function(event){
if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const condition = parentNode.querySelector('.condition').innerText;
    const status = parentNode.querySelector('.statuss').innerText;
    const details = parentNode.querySelector('.details').innerText;
    parentNode.querySelector('.statuss').innerText = 'Interview'
    const cardInfo = {
        companyName,
        position,
        condition,
        status: 'Interview',
        details
    }

    const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);
    if(!companyExist){
        interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);
    if(currentStatus == 'rejected-filter-btn'){
        if(rejectedList.length == 0){
    noJobsSection.classList.remove('hidden')}
    }

    calculateCount();
    if(currentStatus == 'rejected-filter-btn'){
        renderRejected();
    }
    if(rejectedList.length == 0){
        rejectedNumOfJobs.classList.add('hidden');
    }
    // renderInterview();  
}


else if(event.target.classList.contains('rejected-btn')){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const condition = parentNode.querySelector('.condition').innerText;
    const status = parentNode.querySelector('.statuss').innerText;
    const details = parentNode.querySelector('.details').innerText;
    parentNode.querySelector('.statuss').innerText = 'Rejected'
    const cardInfo = {
        companyName,
        position,
        condition,
        status: 'Rejected',
        details
    }

    const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);
    if(!companyExist){
        rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);
    if(currentStatus == 'interview-filter-btn'){
         if(interviewList.length == 0){
    noJobsSection.classList.remove('hidden')}
    }

    calculateCount();
    if(currentStatus == 'interview-filter-btn'){
        renderInterview();
    }
    
   if(interviewList.length == 0){
      interviewNumOfJobs.classList.add('hidden')
    }
    // renderRejected();
}
// delete button 
else if(event.target.classList.contains('delete-btn')){
    const parentNode = event.target.parentNode.parentNode;
    parentNode.remove();
    calculateCount();
}

})

function renderInterview(){
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white rounded-xl overflow-hidden';
        div.innerHTML = `
         <div class="bg-white py-2 px-4 ">
            <p class="companyName  text-violet-950 text-xl font-semibold">${interview.companyName}</p>
            <p class="position   text-gray-500">${interview.position}</p> 
            
            <p class="condition  text-gray-500 text-sm pt-2 pb-3">${interview.condition}</p>
            <button class="statuss   bg-blue-200 px-2 py-1 text-sm ">${interview.status}</button>
            <p class="details   pt-3">${interview.details}</p>

            <!-- Button -->
            <div class="py-2">
                <button class="interview-btn   border rounded text-green-500 px-3 py-1 text-sm font-semibold">INTERVIEW</button>
                <button class="rejected-btn   border rounded text-red-500 px-3 py-1 text-sm font-semibold">REJECTED</button>
            </div>
        </div>
        <div class="">
            <button class="delete-btn p-2"> <img class="max-w-9 max-h-9 p-1  border rounded-full opacity-40" src="trash.png" alt=""> </button>
        </div>
        `

        filterSection.appendChild(div);
    }
    
}


function renderRejected(){
    filterSection.innerHTML = '';
    for(let reject of rejectedList){
        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white rounded-xl overflow-hidden';
        div.innerHTML = `
         <div class="bg-white py-2 px-4 ">
            <p class="companyName  text-violet-950 text-xl font-semibold">${reject.companyName}</p>
            <p class="position   text-gray-500">${reject.position}</p> 
            
            <p class="condition  text-gray-500 text-sm pt-2 pb-3">${reject.condition}</p>
            <button class="statuss   bg-blue-200 px-2 py-1 text-sm ">${reject.status}</button>
            <p class="details   pt-3">${reject.details}</p>

            <!-- Button -->
            <div class="py-2">
                <button class="interview-btn   border rounded text-green-500 px-3 py-1 text-sm font-semibold">INTERVIEW</button>
                <button class="rejected-btn   border rounded text-red-500 px-3 py-1 text-sm font-semibold">REJECTED</button>
            </div>
        </div>
        <div class="">
            <button class="delete-btn p-2"> <img class="max-w-9 max-h-9 p-1  border rounded-full opacity-40" src="trash.png" alt=""> </button>
        </div>
        `

        filterSection.appendChild(div);
    }
    
}