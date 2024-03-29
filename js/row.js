const rows =document.querySelectorAll('.row');
const Colors = [
    'teal',
  'cadetblue',
  'steelblue',
  'lightskyblue',
  'powderblue'
  ];

const onDragOver = (event) => {
    event.preventDefault();
  }
  
  const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);
    event.target.appendChild(draggedCard);
    console.log('dropped the element');
  }
  

rows.forEach((row,table)=>{
    const label = row.querySelector('.label');
    label.style.backgroundColor = Colors[table];
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
})