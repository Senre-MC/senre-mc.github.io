var faqs = [
  {q:"How do I make a town?", a:"If you are already part of a nation and/or state, you type /t found <YourTownName>. If you have no land, and you want to create a new settlement in the wilderness, you will have to make a nation by typing /n new <YourNationName>"},
  {q:"How do I make a faction?", a:"As someone who is experienced with Factions you will find some things familiar, some things confusing. The equivalent of a faction in this plugin is the nation. So, to answer your question, you may make a faction through /n new"},
  {q:"How do I make a state?", a:"The solution is a bit misleading, but what you need to do is promote a player in your nation through /n appoint official <Player123_>. Once promoted, have the player stand in the desired chunk to start forming a state, and then type /n addstate <YourStateName> <player>."},
  {q:"What are states?", a:"A state is a subdivision of your nation. After a while of building a nation, you may want to delegate people to different parts of it. This is where a state comes in. A state can own towns just like a nation."},
  {q:"How do I report bugs?", a:"You may do so at https://github.com/Senre-MC/senre-mc.github.io/issues"},
  {q:"What is mandate?", a:"If you are familiar with Factions, mandate is basically faction power. If you are not familiar with Factions, mandate is your"},
  {q:"", a:""}
];

function onSearch({data}) {
  var p = 0;
  for(var i=0;i<faqs.length;i++) {
    if(faqs[i].q.includes(data))
      if(p <= 3) {
        document.getElementById("s"+p).innerText = faqs[i].q;
        document.getElementById("s"+p).result = faqs[i];
        p++;
      }
  }
  while(p <= 3) {
    document.getElementById("s"+p).innerText = "";
    document.getElementById("s"+p).result = undefined;
  }
};

function pickUp(result) {
  if(typeof result !== "undefined") {
    show(result);
  }
}

function show({q, a}) {
  document.getElementById("q").innerText = q;
  document.getElementById("a").innerText = a;
}
