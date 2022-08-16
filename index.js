// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,name){
    return drivers.filter(driver=>driver.toLowerCase()===name.toLowerCase())
        
    

}
console.log (findMatching(drivers, 'Bobby'))

function fuzzyMatch(drivers,name){
    return drivers.filter(driver=>driver.substring(0,3).match(name))

}
console.log (fuzzyMatch(drivers, 'Sa'))

const drive = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (drive,name){
    return drive.filter(driver=>driver.name.toLowerCase()===name.toLowerCase())
        
}
console.log(matchName(drive,'Bobby'))