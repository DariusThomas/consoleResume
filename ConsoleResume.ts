interface resume  {
    Name:string,
    Career:string,
    Description:string,
    "My Interests":Array<String>,
    "Previous Experience":Array<string>
    Company:Array<string>,
    "Job Title": Array<string>,
    "My Skills":Array<string>,
    "Cool Skill?":Array<boolean>
}
let Resume:resume = {
    Name: "Darius Thomas".toUpperCase(),
    Career: "Full-Stack Developer",
    Description: "Ready to learn!",
    "My Interests": ["Software Development","Exercising", "Going Out", "Music","Art","Food"],
    "Previous Experience": ["Two semesters worth of coding experience with MATLAB ","I've dabbled in FreeCodeCamps front-end tutorial work","I've registered for and am currently completing the drills for Covalence full-stack course prepwork"," 3 years experience as a Mechanical engineering student at FAU","4 years experience as a restaurant waiter/Bartender"],
    Company:['Florida Atlantic University','FreeCodeCamp','Covalence','Florida Atlantic University',"TGI Fridays/Duffy's"],
    "Job Title": ['Student','Student','Student','Student', "Waiter/Bartender"],
    "My Skills": ["Introductory HTML", "Introductory CSS","Introductory JavaScript","Introductory JQuery","Introductory Bootstrap","Introductory React and Redux","Intermediate MATLAB"],
    "Cool Skill?":[true, true, true, true, true, true, false]
};

console.log("Name : " + Resume['Name']);
console.log("Career: " + Resume['Career']);
console.log("Description: " + Resume['Description']);
console.log("Previous Expereince:");
console.log(displayPosition(Resume["Company"],Resume["Job Title"],Resume["Previous Experience"]));

function displayPosition(companyName:Array<string>, jobTitle:Array<string>, description:Array<string>){
    for(let i = 0; i < description.length; i++){
        console.log("Company Name: " + companyName[i]);
        console.log("Job Title: " + jobTitle[i]);
        console.log("Description: " + description[i]);
        console.log("_________________")
    };
    console.log("Skills:")
    console.log(displaySkill(Resume["My Skills"],Resume["Cool Skill?"]))
    }

    function displaySkill(skill:Array<string>, cool:Array<boolean>){
        for(let i = 0; i < skill.length; i++){
            if(cool[i] == true){
                console.log("Bam: " + skill[i]);
            }else{
                console.log(skill[i]);
            }
        }
    }
    