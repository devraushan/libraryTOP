const myLib=[];
function book(title,author,pages,readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    
}



const book1 = new book("Wings Of Fire","APJ Abdul Kalam",144,0);

myLib.push(book1);


function clearElement(id){
    const nodes = document.getElementById(id);
    
    while(nodes.firstElementChild){
        nodes.firstElementChild.remove();
    }
    
    
}

function switchInterface(interfaceName){
    clearElement('panel');
    container = document.getElementById('panel');
    clearClassList(container);


    const showBookBtn = document.createElement("button");
    showBookBtn.setAttribute('onclick',"switchInterface('showBooks')");
    showBookBtn.innerText="Show Books";
    const addBookBtn = document.createElement("button");
    addBookBtn.setAttribute("onclick","switchInterface('addBooks')");
    addBookBtn.innerText="Add New Books";


    
    switch (interfaceName){
        case 'showBooks':
            container.classList.add('showBookInterface');
            const cardHolder = document.createElement("div");
            cardHolder.setAttribute("class","cardHolder");
            container.appendChild(cardHolder);
          for(let i=0;i<myLib.length;i++){
              //create html elements for cards and set attributes to those
              
              const card = document.createElement('div');
              card.setAttribute("class","bookCard");
              const title = document.createElement('p');
              title.setAttribute("class","bookTitle");
              const author = document.createElement('p');
              author.setAttribute('class','bookAuthor');
              const noOfPages = document.createElement('p');
              noOfPages.setAttribute('class','noOfPages');
              const readStatus = document.createElement('p');
              readStatus.setAttribute("class","readStatus");
              const switchReadStatusBtn = document.createElement('button');
              switchReadStatusBtn.addEventListener('click',() => toggleReadStatus(i));
              switchReadStatusBtn.innerText="Switch Read Status";
            
            //set appropriate values to be displayed on DOM
            title.innerText="Title :- "+myLib[i].title;
            author.innerText="Author :- "+myLib[i].author;
            noOfPages.innerText="Total Pages :- "+myLib[i].pages;
            readStatus.innerText=`Read Status :- ${myLib[i].readStatus? "Read" : "Not Read"}`;
            //append elememnts to DOM
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(noOfPages);
            card.appendChild(readStatus);
            card.appendChild(switchReadStatusBtn);
            cardHolder.appendChild(card);
            
            
            

          } 
          document.getElementById('panel').appendChild(addBookBtn);
          break;
          case 'addBooks':
              container.classList.add('addBookInterface');

              const fieldsetForAddBook = document.createElement('fieldset');
              const fieldsetForAddBookLegend = document.createElement('legend');
              fieldsetForAddBookLegend.innerText= "Enter Details Of The Books ";

              const titleIn = document.createElement('input');
              titleIn.setAttribute('id','title');
              titleIn.setAttribute('type','text');
              titleIn.setAttribute('placeholder',"Title");
              const titleLabel = document.createElement('label');
              titleLabel.setAttribute('for','title');
              titleLabel.innerText="Enter Title of The Book :-";
              
              const authorIn = document.createElement('input');
              authorIn.setAttribute('id','author');
              authorIn.setAttribute('type','text');
              authorIn.setAttribute('placeholder',"Author");
              const authorLabel = document.createElement('label');
              authorLabel.setAttribute('for','author');
              authorLabel.innerText ="Enter Name of Author of The Book :-";
                
              const noOfPagesIn = document.createElement('input');
              noOfPagesIn.setAttribute('id','noOfPages');
              noOfPagesIn.setAttribute('type','number');
              noOfPagesIn.setAttribute('placeholder',"Pages");
              const noOfPagesLabel = document.createElement('label');
              noOfPagesLabel.setAttribute('for','noOfPages');
              noOfPagesLabel.innerText = "Enter No Of Pages Of The Book :-";

              const fieldsetReadOrNot = document.createElement('fieldset');
              const fieldsetReadOrNotLabel = document.createElement('legend');
              fieldsetReadOrNotLabel.innerText = "Have You Read This Book :-"
              //radio button for true
              const radioTrue = document.createElement('input');
              radioTrue.setAttribute('type','radio');
              radioTrue.setAttribute('name','readOrNot');
              radioTrue.setAttribute('value',1);
              radioTrue.setAttribute('id',"radioTrue");
              const radioTrueLabel = document.createElement('label');
              radioTrueLabel.setAttribute('for','radioTrue');
              radioTrueLabel.innerText="Read";
              //radio button for not read
              const radioFalse = document.createElement('input');
              radioFalse.setAttribute('type','radio');
              radioFalse.setAttribute('name','readOrNot');
              radioFalse.setAttribute('value',0);
              radioFalse.setAttribute('id',"radioFalse");
              const radioFalseLabel = document.createElement('label');
              radioFalseLabel.setAttribute('for','radioFalse');
              radioFalseLabel.innerText="Not Read";
              //appending radio elements to fieldset
              fieldsetReadOrNot.appendChild(fieldsetReadOrNotLabel);
              fieldsetReadOrNot.appendChild(radioTrue);
              fieldsetReadOrNot.appendChild(radioTrueLabel);
              fieldsetReadOrNot.appendChild(radioFalse);
              fieldsetReadOrNot.appendChild(radioFalseLabel);
              
              //create submit button
              const submitBtn = document.createElement("button");
              submitBtn.setAttribute('onclick',"appendBooksToLib()");
              submitBtn.innerText="Add";
              


              //append all the Form Elements to DOM
              document.getElementById('panel').appendChild(fieldsetForAddBook);
              fieldsetForAddBook.appendChild(fieldsetForAddBookLegend);
              fieldsetForAddBook.appendChild(titleLabel);
              fieldsetForAddBook.appendChild(titleIn);
              fieldsetForAddBook.appendChild(authorLabel);
              fieldsetForAddBook.appendChild(authorIn);
              fieldsetForAddBook.appendChild(noOfPagesLabel);
              fieldsetForAddBook.appendChild(noOfPagesLabel);
              fieldsetForAddBook.appendChild(noOfPagesIn);
              fieldsetForAddBook.appendChild(fieldsetReadOrNot);
              fieldsetForAddBook.appendChild(submitBtn);
              fieldsetForAddBook.appendChild(showBookBtn);

              break;
        default: console.log("abc");


            
            

              

            
    }
    
}

function appendBooksToLib(){
    


    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const noOfPages = document.getElementById('noOfPages').value;
    const readOrNot = document.getElementById('radioTrue').checked ? 1 : 0;

    if(title && author && noOfPages &&(document.getElementById('radioFalse').checked||readOrNot)){
    const newBook = new book(title,author,noOfPages,readOrNot);

    myLib.push(newBook);
    
    document.getElementById('title').value= "";
    document.getElementById('author').value= "";
    document.getElementById('noOfPages').value = "";
    document.getElementById('radioTrue').checked=false;
    document.getElementById('radioFalse').checked=false;
    }
    else{
        alert('All The Fields Are Mandatory');
    }

    
}

function toggleReadStatus(bookIndex){
    
    myLib[bookIndex].readStatus = myLib[bookIndex].readStatus ? 0 :1;
    
    switchInterface('showBooks');
}

function clearClassList(element){
   while(element.classList.length!=0){
       element.classList.remove(element.classList[0]);
   }
    console.log(element.classList);
}

