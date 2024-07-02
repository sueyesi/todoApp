//유저가 값을 입력한다.
// 버튼을 클릭하면 할일이 추가된다.
// 삭제 버튼을 누르면 할일이 삭제된다.
// 체크버튼을 누르면 할일이 끝나면서 밑줄
// 진행중 끝남 탭을 누르면 언더바가 이동한다
//끝남 탭은 끝난 아이템만, 진행중을 누르면 진행중인 할일만 나온다
// 전체탭을 누르면 다시 전체아이템으로 돌아온다


let taskInput = document.getElementById("taskInput");
//console.log(taskInput);
let addButton = document.getElementById("addButton");
let taskList =[];

addButton.addEventListener("click",addTask);
taskInput.addEventListener("focus", inputReset);

// input 초기화
function inputReset(){
    taskInput.value="";
}

function addTask(){
    //console.log("click")
    //버튼을 클릭하고 난 후 할일들
    let taskContent = taskInput.value
    taskList.push(taskContent);
    //console.log(taskList);
    render();
}

function render(){
    let resultHtml = '';
    
    for(let i=0;i<taskList.length;i++){
        resultHtml += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("taskBoard").innerHTML = resultHtml;
}

inputReset();