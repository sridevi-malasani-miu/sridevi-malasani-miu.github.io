let frontDoor = {
    id: 1, name: "Front Door Sensor", type: 34, manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }, { time: "101", name: "Door Opened" }]
};
let motionSensor = {
    id: 2, name: "Motion Sensor", type: 43, manufacturer: "NYCE",
    events: [{ time: "100", name: "Motion Detected" }]
};
let porticoLight = {
    id: 3, name: "Portico Light", type: 54, manufacturer: "Osram",
    events: [{ time: "100", name: "Light off" }]
};
let mainEntrance = {
    id: 4, name: "Main Entrance", type: 34, manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }]
};
let list = [frontDoor, motionSensor, porticoLight, mainEntrance];

function groupSensorsByManufacturer() {
    let finalObj = {};
    for (let ele of list) {
        if (finalObj[ele.manufacturer])
            finalObj[ele.manufacturer]++;
        else
            finalObj[ele.manufacturer] = 1;
    }
    return finalObj

}
console.log(groupSensorsByManufacturer(list));

function getLatestEventofSensor(list, id) {
    let maxEvent=0,maxEventObj;
    for(let ele of list){
        if(ele.id==id){
            for(let event of ele.events){
                if(event.time>maxEvent){
                    maxEvent = event.time;
                    maxEventObj= event;
                }
            }
        }
    }
    return maxEventObj;
}
console.log(getLatestEventofSensor(list, 1));
function findMostPopularManufacturer(list) {
    let manufacturers = groupSensorsByManufacturer(list);
    let count = 0;
    let popularManufacturer = "";
    for (let prop in manufacturers) {
        if (manufacturers[prop] > count) {
            count = manufacturers[prop];
            popularManufacturer = prop;
        }
    }
    return popularManufacturer;
}


console.log("expect Climax:", findMostPopularManufacturer(list));
