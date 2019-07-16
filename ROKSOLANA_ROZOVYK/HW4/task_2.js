function Ninja(name, elements, skills){
   this.name = name;
   this.elements = elements;
   this.skills = skills;
}

Ninja.prototype.addElements = function(element)
{
    this.elements = this.elements.concat(element);
}

Ninja.prototype.addSkills = function(skill)
{
    this.skills = this.skills.concat(skill);
}

function Nukenin_traitor(name, elements, skills, targets, organization)
{
    this.name = name;
    this.elements = elements;
    this.skills = skills;
    this.targets = targets;
    this.organization = organization;
}

Nukenin_traitor.prototype = Object.create(new Ninja());

Nukenin_traitor.prototype.addTarget = function(target){
    this.targets = this.targets.concat(target);
}

function Ninja_villager(name, elements, skills, mission)
{
    this.name = name;
    this.elements = elements;
    this.skills = skills;
    this.mission = mission;
}

Ninja_villager.prototype = Object.create(new Ninja());

Ninja_villager.prototype.doMission = function(){
    console.log(this.name + ' on the mission: ' + this.mission);
}

let Sasuke = new Nukenin_traitor("Sasuke", ["Lightning"], ["Chidori", "Sharingan"], ["Itachi"], "Akatsuki");
Sasuke.addTarget("Danzo");
console.log(Sasuke.targets);

let Naruto = new Ninja_villager("Naruto", ["Wind"], ["Rasengan", "Multiply clones"], "Back Sasuke to Konoha");
Naruto.doMission();
Naruto.addSkills("Kurama Mode");
Naruto.addSkills("Sage Mode");
console.log(Naruto.skills);


