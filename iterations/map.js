let map=new Map();

map.set("name","Supriya")
map.set('age',22)
map.set('email',"sg@gg.com")

for(const [key,value] of map){
    console.log(`${key}: ${value}`);
}

for(const entry in map){
    console.log(entry);
}


