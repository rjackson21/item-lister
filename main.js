var form = document.getElementById('addForm')
var itemList = document.getElementById('items')

//form submit event
form.addEventListener('submit', addItem)

//add item
function addItem(e){
    e.preventDefault()

    //get input value
    var newItem = document.getElementById('item').value

    //create new li element
    var li = document.createElement('li')
    //add class
    li.className = 'list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //create delete button 
    var deleteBtn = document.createElement('button')

    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //append button to li 
    li.appendChild(deleteBtn)
    //append li to list
    itemList.appendChild(li)
}