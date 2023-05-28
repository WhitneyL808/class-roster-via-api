// // My Scripts


// // Data source from AirTable API
// // Note: We're using NoCode API to make connecting to AirTable easier
// const url = "https://v1.nocodeapi.com/pmanikoth/airtable/rsqhQzAAKcMyyPPW?tableName=Roster";

// // Get data
// fetch(url)
//   .then( response  => response.json())
//   .then( data  => {
//     // check-check: get one image
//     // Note: Webflow returns data in array called `items`
//     console.log(data.records);
//     console.log(data.records[0].fields);
//     console.log(data.records[0].fields.Name);
//     console.log(data.records[0].fields.Emoji);
//     console.log(data.records[0].fields.Color);
//     console.log(data.records[0].fields.Image[0].url);

//     // get container for data
//     const gallery = document.querySelector(".gallery");

//     // loop through data
//     data.records.forEach( student => {
      
//       // template
//       const template = `
//           <figure>
//             <figcaption>${student.fields.Name}</figcaption>
//             <p>${student.fields.Emoji}</p>
//             <img src="${student.fields.Image[0].url}" alt="${student.fields.Name}">
//           </figure>
//        `;

//       // insert EACH `student` record into container
//       gallery.insertAdjacentHTML("afterbegin", template);
//     });
//   });

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

      <figure>
      <ul>
      <li>
           <figcaption>${student.Name}</figcaption>
           <img src="${student.Image}" alt="Student Name">
           <p>${student.Quote}</p>
      </li>
      </ul>
      </figure>

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
