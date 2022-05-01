console.log('***** Music Collection *****')

console.log('********* add to collection function');

let collection= [];

function addTooCollection(title, artist, yearPublished) {
    console.log('in addToCollection:', title, artist, yearPublished);
    let record ={
    title: title, 
    artist: artist, 
    yearPublished: yearPublished
    } // end 
    collection.push(record);
    return console.log ('added new record to collection', record)
} // end the addtoCollection 

addTooCollection('7220', 'lil durk', 2022)
addTooCollection('The Voice of the Heros', 'Lil Durk & Lil Baby', 2021)
addTooCollection('Beam me up Scotty', 'Nicki Minaj', 2021)
addTooCollection('Future Hndrxx Presents: The WIZRD', 'Future', 2019)
addTooCollection('Better Together- EP', 'Fifth Harmony', 2013)
addTooCollection('Die Lit', 'Playboii Carti', 2018)

console.log('*****  Record Collection *****' ) // end of records 

function showCollection(array){
    console.log('in the showCollection:', array);
    console.log('How big is this collection?:', array.length);
    for(let item of array){
        console.log(item.title +' by ' + item.artist  +' ,  published in  +', item.yearPublished);
    } //end of loop n collection
}

showCollection(collection);

console.log('****************** find my artist function');
function FindByArtist(artist){
    console.log('in findByArtist', artist);
    let array= [];
    for(let item of collection){
        if(artist === item.artist){
            array.push(item);
        } //end if
    } return array; //the end of the lopp array
}

console.log(FindByArtist('Fifth Harmony'));
console.log(FindByArtist('Lil Durk'));
console.log(FindByArtist('Nicki Minaj'));

console.table(collection);

// end of homework part 3
