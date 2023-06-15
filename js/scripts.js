// Data source
const dataSource = "https://assets.codepen.io/16425/spring23web3.json";

// fetch
fetch( dataSource )
.then( response => response.json())
.then( data  => {

    // get container for data
    const roster = document.querySelector(".roster");
 
    // for each RECORD, insert into parent
    data.forEach( (student) => { 
      
      // template to reuse
      const template = `
        <figure style="background: ${student.Color}">
         <figcaption> ${student.Name} </figcaption>
            <img src="${student.Image}" alt="Student Name">
         </figure>
      `
    
      roster.insertAdjacentHTML('afterbegin', template );
      
    });
  
});

    // console.log(data);
    // console.log(data[9].Superpower);
    // console.log(data[2].Emoji);
    // console.log(data[1].Quote);