// // My Scripts
// Data source for roster of students
const dataSource = "https://assets.codepen.io/16425/spring23web3.json";

//get DOM elements
const figcaption = document.querySelector('figcaption');
const img = document.querySelector('figure img'); 
const grid = document.querySelector(".grid");

// fetch the data and set it 
fetch( dataSource )
  .then( response  => response.json())
  .then( data  => {
  
  const roster = document.querySelector(".roster");
  
      
    // console.log( data );
//   figcaption.textContent = data[4].name
//   img.src = data[4].Image;
  
   data.forEach((student) => {
     
       // template for js to create 
    const template = `
    <body>
    <main class="roster">
      <section>
      <nav class="grid">
      <ul>
      
      <li>
      
           <figcaption>${student.Name}</figcaption>
           <img src="${student.Image}" alt="Student Name"></img>
           <p>${student.Quote}</p>
           
      </li>
        
      
      </ul>
      </nav>
      </section>
      </main>
      </body>

    `; 
  
  // put template on page 
  roster.insertAdjacentHTML('afterbegin' , template); 
     
   });
    

});

// console.log( data );
    // console.log( data[4] );
    // console.log( data[4].Name );
    // console.log( data[4].Image );
    // console.log( data[4].Quote );
