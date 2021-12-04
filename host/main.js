const _getCatImg = () => {
  const randomNum = () => {
    return Math.floor(Math.random() * 100000);
  };
  const url = "https://source.unsplash.com/collection/139386/100x100/?sig=";
  return url + randomNum();
};

let topSentinelPreviousY = 0;
let topSentinelPreviousRatio = 0;
let bottomSentinelPreviousY = 0;
let bottomSentinelPreviousRatio = 0;

let listSize = 20;
let DBSize = 200;

const initDB = num => {
	const db = [];
  // for (let i = 0; i < num; i++) {
  // 	db.push({
  //   	catCounter: i,
  //     title: `cat image number ${i}`,
  //     imgSrc: _getCatImg()
  //   })
  // }
  var text = "If there’s one thing the human species craves more than anything else, it’s certainty. The ability to rely and trust on something (or someone) is the cornerstone to a functioning society."
  db.push({fileCount:'21', title: 'Risky Business',articleSrc: 'articles/2021/11/pt2/the_energy_dilemma.html',preview: text, date: "November 15, 2021"});

  var text = "There are many ways to check the pulse of the economy. Consumer spending. Unemployment rate. Is Inflation above or below expectations? A popular metric is to look to the stock market benchmarks like the S&P 500..."
  db.push({fileCount:'20', title: 'The Energy Dilemma',articleSrc: 'articles/2021/11/pt2/the_energy_dilemma.html',preview: text, date: "November 15, 2021"});

  var text = "America is a relatively  young country that's rich in innovation. History books are filled with industrialists and innovators from Eli Whitney to Robert Noyce. But, One giant of industrial America has fallen..."
  db.push({fileCount:'19', title: 'Neo-Tech',articleSrc: 'articles/2021/11/pt1/neo_tech.html',preview: text, date: "November 1, 2021"});

  var text = "The labor shift hasn't just been for employers. There's a counter-balancing shift for employees as well. From the employee's perspective, professional success has become strategic. Rather than deciding what career..."
  db.push({fileCount:'18', title: 'Good Help Pt2',articleSrc: 'articles/2021/10/pt2/good_help_pt2.html',preview: text, date: "October 15, 2021"});

  var text = "We've all heard that good help is hard to find. I don't believe that. Good help is easy to find but hard to keep. The labor market has changed faster than many expected. A wave of resignations has taken the country by storm..."
  db.push({fileCount:'17', title: 'Good Help is Hard To Keep',articleSrc: 'articles/2021/10/pt1/good_help.html',preview: text, date: "October 1, 2021"});

  var text = "Four days ago, marked the 20-year anniversary since the September 11 attacks, almost 3000 lives lost in a single day. American politics and strategic goals shifted in a fraction of a second. 45 days after the..."
  db.push({fileCount:'16', title: 'A New Sherriff',articleSrc: 'articles/2021/09/pt2/a_new_sherriff.html',preview: text, date: "September 15, 2021"});

  var text = "A serious problem has been unfolding at the feet of American politicians. All the signs have been here for quite a while now. Soon, I'm concerned, the problem will become too big to contain..."
  db.push({fileCount:'15', title: 'Dis-Trust',articleSrc: 'articles/2021/09/pt1/dis_trust.html',preview: text, date: "September 1, 2021"});

  var text = "The Fed has deep pockets. The Federal Reserve ('The Fed') is now powerful enough to be considered the fourth branch of the American Government...."
  db.push({fileCount:'14', title: 'The Fourth Branch',articleSrc: 'articles/2021/08/pt2/the_fourth_branch.html',preview: text, date: "August 15, 2021"});

  var text = "As in, if it'ss only a year old, you could sell it for more than you paid for it. Naturally as a scavenger for a good deal, I went to find out. The rumors were true. After some back and forth haggling, I was looking at... "// beast. Capable of sucking the emotional and financial resources from even the most pre"//, and this list goes on.
  db.push({fileCount:'13', title: 'Volume XII',articleSrc: 'articles/2021/08/pt1/inflation.html',preview: text, date: "August 1, 2021"});

  var text = "I recently returned from Europe. My first trip outside of the country, and an eye opening experience.Many Europeans view America with such optimism... It's admirable..."// beast. Capable of sucking the emotional and financial resources from even the most pre"//, and this list goes on.
  db.push({fileCount:'12', title: 'Volume XI',articleSrc: 'articles/2021/07/pt2/the_american_reality.html',preview: text, date: "July 15, 2021"});

  var text = "The past year and a half has been the most mentally and financially challenging in recent memory. But, the end is near...."// beast. Capable of sucking the emotional and financial resources from even the most pre"//, and this list goes on.
  db.push({fileCount:'11', title: 'A brief interlude...',articleSrc: 'articles/2021/07/pt1_1/interlude.html',preview: text, date: "July 1, 2021"});

  var text = "No matter how prepared you are, there's one thing that can still send your life into a financial spiral: the diagnosis of a chronic medical condition. The American health care industry is seemingly an unconquerable..."// beast. Capable of sucking the emotional and financial resources from even the most pre"//, and this list goes on.
  db.push({fileCount:'10', title: 'Volume X',articleSrc: 'articles/2021/06/pt2/healthcare.html',preview: text, date: "June 15, 2021"});

  var text = "Humanity's ability to agree on a set of rules, principles, and values is unique within the animal kingdom. We’ve shared common beliefs surrounding gods, morals, values, social hierarchies, corporations, governments..."//, and this list goes on.
  db.push({fileCount:'9', title: 'Volume IX',articleSrc: 'articles/2021/06/pt1/going_digital.html',preview: text, date: "June 1, 2021"});

  var text = "On May 7th 2021, a group of hackers thought to be Russia linked known as DarkSide shut down a pipeline that supplies fuel from Texas to New Jersey. DarkSide operates as a hack-for-fire, loaning out their ransomware..."// But, great leaders will always be empathetic. No matter how great of a leader"
  db.push({fileCount:'8', title: 'Volume VIII',articleSrc: 'articles/2021/05/pt2/panic.html',preview: text, date: "May 15, 2021"});

  var text = "In 2008, America was experiencing a financial crisis and the collapse of the United States housing market. Flash forward 13 years, and America is experiencing another housing..."// But, great leaders will always be empathetic. No matter how great of a leader"
  db.push({fileCount:'7', title: 'Volume VII',articleSrc: 'articles/2021/05/pt1/housing.html',preview: text, date: "May 1, 2021"});

  var text = "There's something captivating about amazing leaders. They're courageous but considerate. They're forceful but respectful. Being charismatic is a balancing act, and it comes in many forms..."// But, great leaders will always be empathetic. No matter how great of a leader"
  db.push({fileCount:'6', title: 'Volume VI',articleSrc: 'articles/2021/04/pt2/empathy.html',preview: text, date: "April 15, 2021"});

  var text = "The US relationship with China is transforming from frenemies to full-blown adversaries. This has been bubbling beneath the surface for a while, Donald Trump kicked it into the spotlight..."// J. Trump in the U.S. and similar ideologues stretching across Europe within the U.K., Poland, and Hungary."
  db.push({fileCount:'5', title: 'Volume V',articleSrc: 'articles/2021/04/pt1/china.html',preview: text, date: "April 1, 2021"});

  var text = "Short term trading and capital markets are the new reality TV. There's been a flood of capital to crypto currencies and alternative assets like NFT, that is really reminiscent of Tulip Mania..."// J. Trump in the U.S. and similar ideologues stretching across Europe within the U.K., Poland, and Hungary."
  db.push({fileCount:'4', title: 'Volume IV',articleSrc: 'articles/2021/03/pt2/invest.html',preview: text, date: "March 15, 2021"});

  var text3 = "2021 has been cold. Literally. Texas faced record low temperatures that devolved into an utter catastrophe. Many Texans were without electricity and water for days. Others faced rolling blackouts and some navigated the storm only to..."
  db.push({fileCount:'3', title: 'Volume III',articleSrc: 'articles/2021/03/cold.html',preview: text3, date: "March 1, 2021"});

  var text2 = "America has experienced a riot, an attempted coup d'etat, and drawn articles of impeachment for the second time all within the first two weeks. To some, this may seem as a complete and total surprise...";
  db.push({fileCount:'2', title: 'Volume II',articleSrc: 'articles/2021/02/Diversity.html',preview: text2, date: "February 1, 2021"});

  var text = "Geo-politics, like modern societies, are becoming more isolated. In the wake of Bretton-Woods, globalism boomed. That time has come to an end. Anti-immigration and nationalism have taken root across the West, iconized by President Donald..."// J. Trump in the U.S. and similar ideologues stretching across Europe within the U.K., Poland, and Hungary."
  db.push({fileCount:'1', title: 'Volume I',articleSrc: 'articles/2021/01/Brexit.html',preview: text, date: "January 1, 2021"});

  return db;
}

let DB = [];

let currentIndex = 0;

const initList = num => {
	const container = document.querySelector(".cat-list");

  for (let i = 0; i < num; i++) {
  	const tile = document.createElement("LI");
    console.log(DB[i].articleSrc)
    tile.setAttribute("class", "cat-tile");
    tile.setAttribute("id", "cat-tile-" + i);
    const title = document.createElement("a");
    title.setAttribute('href', DB[i].articleSrc);
    const t = document.createTextNode(DB[i].title);
    title.appendChild(t);
    tile.appendChild(title);
    const prev = document.createElement("p")
    // const p = document.createTextNode(DB[i].preview)
    prev.textContent = DB[i].preview
    // prev.appendChild(p)
    tile.appendChild(prev)
    // const img = document.createElement("IMG");
    // img.setAttribute("src", DB[i].imgSrc);
    // tile.appendChild(img);
    const date = document.createElement("h3");
    date.textContent = DB[i].date
    // const d = document.createTextNode(DB[i].date);
    // date.appendChild(d);
    tile.appendChild(date);

  	container.appendChild(tile);
  }

}

const getSlidingWindow = isScrollDown => {
	const increment = listSize / 2;
	let firstIndex;

  if (isScrollDown) {
  	firstIndex = currentIndex + increment;
  } else {
    firstIndex = currentIndex - increment;
  }

  if (firstIndex < 0) {
  	firstIndex = 0;
  }

  return firstIndex;
}

const recycleDOM = firstIndex => {
	for (let i = 0; i < listSize; i++) {
  	const tile = document.querySelector("#cat-tile-" + i);
    tile.firstElementChild.innerText = DB[i + firstIndex].title;
    tile.lastChild.setAttribute("src", DB[i + firstIndex].imgSrc);
  }
}

const getNumFromStyle = numStr => Number(numStr.substring(0, numStr.length - 2));

const adjustPaddings = isScrollDown => {
	const container = document.querySelector(".cat-list");
  const currentPaddingTop = getNumFromStyle(container.style.paddingTop);
  const currentPaddingBottom = getNumFromStyle(container.style.paddingBottom);
  const remPaddingsVal = 170 * (listSize / 2);
	if (isScrollDown) {
  	container.style.paddingTop = currentPaddingTop + remPaddingsVal + "px";
    container.style.paddingBottom = currentPaddingBottom === 0 ? "0px" : currentPaddingBottom - remPaddingsVal + "px";
  } else {
  	container.style.paddingBottom = currentPaddingBottom + remPaddingsVal + "px";
    container.style.paddingTop = currentPaddingTop === 0 ? "0px" : currentPaddingTop - remPaddingsVal + "px";

  }
}

const topSentCallback = entry => {
	if (currentIndex === 0) {
		const container = document.querySelector(".cat-list");
  	container.style.paddingTop = "0px";
  	container.style.paddingBottom = "0px";
  }

  const currentY = entry.boundingClientRect.top;
  const currentRatio = entry.intersectionRatio;
  const isIntersecting = entry.isIntersecting;

  // conditional check for Scrolling up
  if (
    currentY > topSentinelPreviousY &&
    isIntersecting &&
    currentRatio >= topSentinelPreviousRatio &&
    currentIndex !== 0
  ) {
    const firstIndex = getSlidingWindow(false);
    adjustPaddings(false);
    recycleDOM(firstIndex);
    currentIndex = firstIndex;
  }

  topSentinelPreviousY = currentY;
  topSentinelPreviousRatio = currentRatio;
}

const botSentCallback = entry => {
	if (currentIndex === DBSize - listSize) {
  	return;
  }
  const currentY = entry.boundingClientRect.top;
  const currentRatio = entry.intersectionRatio;
  const isIntersecting = entry.isIntersecting;

  // conditional check for Scrolling down
  if (
    currentY < bottomSentinelPreviousY &&
    currentRatio > bottomSentinelPreviousRatio &&
    isIntersecting
  ) {
    const firstIndex = getSlidingWindow(true);
    adjustPaddings(true);
    recycleDOM(firstIndex);
    currentIndex = firstIndex;
  }

  bottomSentinelPreviousY = currentY;
  bottomSentinelPreviousRatio = currentRatio;
}

const initIntersectionObserver = () => {
  const options = {
  	/* root: document.querySelector(".cat-list") */
  }

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.target.id === 'cat-tile-0') {
        topSentCallback(entry);
      } else if (entry.target.id === `cat-tile-${listSize - 1}`) {
        botSentCallback(entry);
      }
    });
  }

  var observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector("#cat-tile-0"));
  observer.observe(document.querySelector(`#cat-tile-${listSize - 1}`));
}

const start = () => {
	//const input1 = document.querySelector("#input1");
  //const input2 = document.querySelector("#input2");
  //if (!input1.value) {
  	DBSize = 21;
    //input1.value = DBSize;
  //} else {
  	//DBSize = input1.value;
  //}

  //if (input2.value < 20) {
  	listSize = 20;
    //input2.value = 20;
  //} else {
  	//listSize = input2.value;
  //}
  DB = initDB(DBSize);
	initList(listSize);
	initIntersectionObserver();

  //input1.style.display = "none";
  //input2.style.display = "none";
  //document.querySelector("#start-btn").style.display = "none";
}
