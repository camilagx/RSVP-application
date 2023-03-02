const form = document.getElementById('registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.querySelector('#invitedList');

const div = document.createElement('div');
const filterLabel = createElement("label","textContent", "Hide those who haven't responded");


console.log(filterLabel);
const filterCheckBox = createInput('checkbox');

div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);

filterCheckBox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;

  if(isChecked){
    for(let i = 0; i < lis.length; i++){
      let li = lis[i];
      if(li.className === 'responded'){
        li.style.display = '';
      }else{
        li.style.display = 'none';
      }
    }
  }else{
      for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        li.style.display = '';
    }
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const li = createLi(input.value);
  ul.appendChild(li);
  input.value = '';
});

ul.addEventListener('click', (e) => {
  const btn = e.target;
  const li = btn.parentNode;
  let span = '';
  if(btn.textContent === 'remove'){
      li.remove();
  }else if(btn.textContent === 'edit'){
    btn.textContent = 'save';
    let inputEdit = createInput('text');
    span = li.firstElementChild;
    inputEdit.value = span.textContent;
    li.replaceChild(inputEdit, span);
    console.log(inputEdit);
  }else if(btn.textContent === 'save'){
    btn.textContent = 'edit';
    let inputEdit = li.firstElementChild;
    span = document.createElement('span');
    span.textContent = inputEdit.value;
    li.replaceChild(span, inputEdit);
  }
 
});

ul.addEventListener('change', (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const parent = checkbox.parentNode.parentNode;
  
  if(checked){
   parent.className = 'responded'; 
  }else{
    parent.className = '';
  }
});

function createInput(type, id){
   const inputElement = document.createElement('input');
   inputElement.type = type;
  
   if(id){
     inputElement.id = id;
   }
  
   return inputElement;
}

function createLi(text){
  const label = createElement('label', 'textContent', 'Confirmed');
  const checkbox = createElement('input','type','checkbox');
  label.appendChild(checkbox);
  const editBtn = createElement('button','textContent', 'edit');
  const removeBtn = createElement('button','textContent', 'remove');

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  
  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  
  return li;
}

function createElement(elementName, property, value){
  const element = document.createElement(elementName);
  element[property] = value;

  return element;
}