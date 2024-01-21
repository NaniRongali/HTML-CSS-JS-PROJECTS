ul.onclick = function(event) {
  if (event.target.tagName != "LI") 
  return;
  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }

}

ul.onmousedown = function() {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for(let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}




