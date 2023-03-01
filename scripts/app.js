const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');

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
  let inputEdit = '';
  if(btn.textContent === 'remove'){
      li.remove();
  }else if(btn.textContent === 'edit'){
    btn.textContent = 'save';
    inputEdit = createInput('text');
    span = li.firstElementChild;
    inputEdit.value = span.textContent;
    li.replaceChild(inputEdit, span);
    console.log(inputEdit);
  }else if(btn.textContent === 'save'){
    btn.textContent = 'edit';
    inputEdit = li.firstElementChild;
    span = document.createElement('span');
    span.textContent = inputEdit.value;
    li.replaceChild(span, inputEdit);
  }
 
});

ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const parent = checkbox.parentNode;
  
  if(checked){
   parent.className = 'responded'; 
  }else{
    parent.className = '';
  }
});

function createBtn(text, id, className){
  const btn = document.createElement('button');
  btn.textContent = text;
  
  if(id){
   btn.id = id;
  }
  if(className){
   btn.className = className; 
  }
  
  return btn;
}

function createLabel(text, forAttr){
 const label = document.createElement('label');
 label.setAttribute('for',forAttr);
 label.textContent = text;
  
 return label;
}

function createInput(type, id){
   const inputElement = document.createElement('input');
   inputElement.type = type;
  
   if(id){
     inputElement.id = id;
   }
  
   return inputElement;
}

function createLi(text){
  const label = createLabel('Confirmed','check'); 
  const checkbox = createInput('checkbox','check');
  const editBtn = createBtn('edit','edit-btn');
  const removeBtn = createBtn('remove','remove-btn');
  
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  
  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  
  return li;
}