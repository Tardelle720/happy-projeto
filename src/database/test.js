const database = require('./db');
const saveOrphanage = require('./saveOrphanage');

database.then(async db => {
    //inserir dados na tabela 
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6535874",
    name: "Adote minha irmã",
    about: "\testete.",
    whatsapp: "959595959",
images: [
"https://images.unsplash.com/photo-1603138461768-be254fb9a9ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

"https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
].toString(),
instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
opening_hours: "dasfasdf",
open_on_weekends: "1"
})
    
  
  //consultar dados da tabela
  //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  //console.log(selectedOrphanages)

   //consultar somente um  orphanato, pelo id
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  //console.log(orphanage)

  // deletar dados da tabela
//console.log(await db.run('DELETE FROM orphanages WHERE id = "14"'))
//console.log(await db.run('DELETE FROM orphanages WHERE id = "14"'))
}) 