console.log('funguju!');

/*Zařiďte, aby minutka začala zvonit za pět vteřin
 po otevření stránky. Zvonění zařídíte tak, že k elementu
  budíku přídáte CSS třídu alarm--ring.
*/

/*
const timeIsUp = () => {
    document.querySelector('.alarm').classList.add('alarm--ring');
}
setTimeout(timeIsUp, 5000)

--> funguje
*/


/*Nechte uživatele skrze prompt zadat kolik vteřin má 
uplynout než minutka začne zvonit.*/


/*Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat 
audio element a zavolat na něm metodu play. Abyste zvuk 
slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč
Chrome totiž brání stránkam přehrávat audio či video dokud
uživatel se stránkou nějak neinteragoval.
*/

const odpocet = Number(prompt('Zadejte po kolika vterinach ma zvonit minutka'))
const audio = document.querySelector('audio')
const alarm = document.querySelector('.alarm')
const buttonOff = document.querySelector('.buttonOff')

const timeIsUp = setTimeout(() => {
    alarm.classList.add('alarm--ring')
    audio.play()
}, odpocet * 1000)


/*Přidejte na stránku tlačítko, které umožní odpočet 
minutky zrušit dřív, než začne zvonit.
*/


const vypniMinutku = () => {
    clearTimeout(timeIsUp)
    //alarm.classList.remove('alarm--ring') --> not needed
    //audio.pause() --> not needed
}
buttonOff.addEventListener('click', vypniMinutku)

