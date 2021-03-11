// =========================================================== ELements
const startBtn = document.querySelector('.start')
const toGameTableBtn = document.querySelectorAll('.go-to-game')
const whatTeam = document.querySelector('.what-team')
const t1 = document.querySelector('.team1')
const t2 = document.querySelector('.team2')
const t1_value = document.querySelector('.team1-value')
const t2_value = document.querySelector('.team2-value')

const inpT1Value = document.querySelector('.inp-team1-value')
const inpT2Value = document.querySelector('.inp-team2-value')
const gameTime = document.querySelector('.game-time')
const gameValue = document.querySelector('.values')
const startGameBtn = document.querySelector('.in-game-table-btn')

const timer = document.querySelectorAll('.timer')
const trueAnswer = document.querySelector('.true-btn')
const falseAnswer = document.querySelector('.false-btn')
const word = document.querySelector('.word')
const r1Words = document.querySelectorAll('.word-r1')

const winMess = document.querySelector('.win-mess')
const winner = document.querySelector('.winner')



// =========================================================== Variables
let nowTeam = [] 
let currentTeam = 0
let t1_count = 0
let t2_count = 0
let words = {}

// =========================================================== Workds
words = {
    // names: ['Հովհաննես Թումանյան'],
    items: ['աթոռ','սեղան','պահարան','ծաղկաման','բազկաթոռ','բազմոց','մահճակալ','լուսամփոփ','աստիճան','գիրք','տետր','մատիտ',
    'կազմ','սրիչ','ծաղիկ','մոխրաման','ծխախոտ','ձեռք','մատ','շախմատ','շաշկի','մազ','վարս','նկար','պատկեր','տուփ','արկղ',
    'անձեռոցիկ','ծունկ','ոտք','կոճակ','զգես','տաբատ','կոշիկ','հող','աչք','հոնք','ճակատ','շրթունք','քիթ','ականջ','հիմք','արմատ',
    'կոդ','ցողուն','տանձ','դեղձ','ծիրան','բանան','արքայախնձոր','կիվի','կատու','շուն','փիղ','ձի','արքա','թագուհի','կայսր','տնկի',
    'հեռուստացույց','հեռախոս','պլանշետ','նոութբուք','տանկ','ինքնաթիռ','ուղղաթիռ','հյութ','սուրճ','զինանշան','դրոշ','հաշվիչ',
    'կրիա','վագր','առյուծ','ճանճ','աղվես','նավ','մեքենա','բույս','նապաստակ','բանալի','ուղի','ճանապարհ','մայրամուտ',
    'կորճատեւ','թեւ','հզոր','ուժ','ուշ','վաղ','առավոտ','երեկո','սիրտ','կյանք','ստամոքս','վարդ','մանուշակ','զարդ',
    'թեւնոց','վզնոց','վազել','կռահել','կլոր','ուղղանկյուն','քառակուսի','շրջան','շրջանակ','կող','կողակից','կից','վարորդ','հեռու','մոտակա',
    'թխկի','խնձորենի','երիցուկ','պատուհան','երաշտ','երգ','երաժշտություն','երգիչ','երգահան','պարել','պարուհի','հեծանիվ','այրուձի',
    'ժպիտ','Աստված','նվեր','պարգեւ','հասցե','հասցնել','կազմել','պլանավորել','ժամացույց','վերնաշապիկ','շապիկ','սիրուն','տգեղ',
    'բռնակ','կոտրել','թողնել','ազատ','ասել','բացատրել','թիմ','խաղ','ուշանալ','քաշել','թիվ','թվանշան','լեզու','եռալ','վոլեյբոլ','ֆուտբոլ',
    'առաջ','ընկեր','դուրս գալ','բացել','գերան','ինչ','պարզ','բարձ','գնալ','զբաղվել','հառաչել','թալիսման','խոհանոց','աշխատել','մայր',
    'հայր','ճամբար','մտածել','ավարտել','բարեւ','իհարկե','կներես','շահել','հաղթել','առավելություն','դիետա','գյուղ','հանել','համ',
    'հոտ','գույն','թոռ','ծոռ','երազ','կիրակի','շաբաթ','ուրբաթ','չորեքշաբթի','երեքշաբթի','երկուշաբթի','հինգշաբթի','ծեծել','մոռանալ',
    'իմանալ','սկիզբ','խառնել','հավ','աքլոր','ապացույց','մեղադրանք','հեռանալ','րոպե','ժամ','գրամ','կիլոգրամ','տարի','դար','վայրկյան',
    'մեղադրանք','դասամիջոց','սերիա','եթերաշրջան','լսել','ճիշտ','չեմպիոն','հարուստ','աղքատ','համեստ','ձու','ձվածեղ','ֆոն',
    'վատ','մանկապարտեզ','երեխա','շփվել','մատուցող','հիանալ','կանչել','ջուր','բաժակ','բռնել','կախիչ','ինքնասպան','ակնոց',
    'կնճիռ','հետաքրքիր','սենյակ','գովազդ','կաթ','կով','կերակուր','շենք','գնդակ','գորշ','մութ','մռայլ','մուկ','մկնիկ','ականջակալ',
    'մաստակ','դիմակ','գալ','փախնել','անտառ','ձողիկ','զբոսնել','մեջտեղ','միջավայր','արջ','գլուխ','ուտել','ատամ','լյարդ','կավիճ',
    'ֆիդայի','հայտարարել','կանգառ','ոստիկանություն','հիվանդանոց','կիրք','ցանկանալ','կանգնած','նստած','թաքուն','գաղտնի',
    'երկինք','երկիր','Մերկուրի','Սատուրն','արեւ','ոսկի','արծաթ','ալմաստ','զմրուխտ','մարգար','գոհար','Սատուրն','Յուպիտեր','Նեպտուն',
    'Պլուտոն','գալակտիկա','սեւ','կանաչ','կապույտ','կարմիր','վարդագույն','սպիտակ','փայլ','փայլուն','շարք','պատժել','կոմպոզիտոր',
    'երկնիշ','հետհաշվարկ','հերոս','յոգուրտ','դուռ','դռնապահ','զեյթուն','բարձրախոս','մեծահոգի','հոգի','ոգի','գլխարկ','օգնություն',
    'դելֆին','շնաձուկ','կետ','ստորակետ','բազմակետ','վերջակետ','միջակետ','փայտ','արշավ','նստարան','բարձր','կիսատ','լրիվ',
    'սպորտ','հարված','ծով','գետ','գետափ','լիճ','օվկիանոս','չակերտ','քարտեզ','խաչ','ուտելիք','անապատ','եվրոպա','ասիա','աֆրիկա',
    'կղզի','թերակղզի','թանաք','թշնամի','թերի','թույն','թուլացնել','թաց','մածուն','թթվասեր','սեր','հարգանք','պատիվ','հմայք','գրական',
    'պայմանագիր','հաստատել','կնիք','պատճե','պատճենել','խաբել','շփոթվել','կտրել','կոտրել','լցնել','շարժել','մոտեցնել','տեղափոխել',
    'ուտել','շնչել','թողնել','ծածկել','տեղադրել','համացանց','ինֆորմացիա','հանրագիտարան','այգի','վարկ','շքանշան','պաշտոն','կապվել',
    'գրել','հիանալ','ծանոթանալ','շփվել','խանդել','տարվել','շոգել','շոգ','տոթ','սառը','սառը','դառը','կծու','թթու','հով','զով','հովիվ',
    'դերասան','մանուկ','պատանի','հանդիսատես','կցել','կեղծել','կավ','տոն','օր','ամիս','գին','արժեք','պողպատ','ալյումին','քերել',
    'հավաքել','լցնել','քար','քոր','սար','ձոր','ոզնի','ռետին','սրբիչ','սազել','բռնել','կռահել','կրկնօրինակ','եղնիկ','գոհ','դժգոհ','բակ',
    'ետնաբակ','երկիր','համերգ','մենահամերգ','քարոզ','աղբ','ակտ','հաշիվ','տուֆ','բազալտ','աղ','ուղտ','ուխտ','ընձուղտ','կենդանի',
    'հովազ','որդի','դուստր','ծեր','տարեց','մեծահասակ','արագաչափ','հապավում','կիրճ','բլուր','նրբերշիկ','պանիր','կարագ','հաց',
    'հակառակ','հակադիր','համով','հոլով','եղանակ','ձմեռ','ամառ','աշուն','գարուն','գլան','պրիզմա','զանգված','զինվել','հագուստ','լող',
    'նկար','նկարչություն','կատակ','հումոր','արվեստ','արհեստ','պատրվակ','պատանդ','վճար','դոլլար','արժույթ','գդալ','գթալ','խղճալ',
    'հասկանալ','ստեղծել','քամել','անգիր','թուղթ','հնար','հիվանդ','գրավել','պաշտպանել','հպարտ','ընկերասեր','ընկեր','ընկերուհի',
    'լսել','քնել','ոսկոր','կապիկ','վիշապ','դինոզավռ','բառ','բարդ','պարզ','միջնեկ','ավագ','ամենափոքր','գլորվել','սառել','պաղպաղակ',
    'քլոր','թթվածին','ածխաթթու գազ','կրակ','օդ','օդաչու','նավաստի','ջրածին','ցինկ','կապար','քիմիա','ֆիզիկա','կենսաբանություն','ածանց',
    'աշխարհագրություն','ձեւ','ընդհանուր','կեղտոտ','ստոր','ստրուկ','սպանել','սնվել','սպասել','չհամբերել','սառույց','գոլորշի','բու',
    'մասնագետ','վարսահարդար','հարդարել','հարս','փեսա','նորանշանակ','նորեկ','նա','ես','մենք','դու','յուրաքանչյուր','նրանք','դուք',
    'հյուր','բարեկամ','անդամ','քանակ','օճառ','հեղուկ','պինդ','գազ','դարպաս','լույս','լուսավոր','անշունչ','շնչավոր','կեղեւ',
    'պատճառ','անձրեւ','ծիածան','արցունք','արդյունք','քրտինք','մահ','ծնունդ','վառ','վառել','վազք','ոսպնյակ','կարճատես','հեռատես',
    'բազում','շատ','ավելի','ավել','ասպարեզ','բեմ','վերմակ','էներգիա','հոսանք','չնչին','չվել','տաք','հարմար','հորդորել','բարկանալ',
    'գոռալ','երազել','երգել','կանչել','առեւանգել','անհամբեր','համբերատար','երիկամ','երիցուկ','եզր','եզրագիծ','կենտրոն','մաս','հազար',
    'ներել','անփորձ','լոլիկ','ձմերուկ','սեխ','կարտոֆիլ','նարինջ','պնդուկ','պոպոք','միջուկ','ստել','լալ','կաղամբ','թուփ','տոլմա','ամանոր',
    'հուր','պայծառ','շող','հրեշտակ','դեւ','դդում','ցորեն','բրինձ','կախարդ','հրաշք','աճպարար','անհնար','արթւն','ուլ','անիմաստ','զոհ',
    'անմեղ','մեղավոր','հարկավոր','մարտկոց','հորինել','գործակից','տախտակ','դժողք','դրախտ','հատակ','երկհարկանի','լողավազան',
    'թռիչք','դհոլ','ճյուղ','ճրագ','ճիծտ','լուր','սցենար','պայմանավորվել','ուրախանալ','վայելել','սահմանափակ','անսահման','սունկ',
    'վերջացնել','գուցե','ման գալ','կին','ամուսին','երկրաչափություն','տեղ','փնտրել','եռանկյուն','բարենպաստ','քավոր','ներողություն','սուտ',
    'ճանաչել','ֆանտազիա','գլխավոր','նորմալ','մարդ','մարդիկ','այլմոլորակային','բնական','վերլուծել','մոդել','խնդրել','կասկած','դրամարկղ',
    'պնդել','դեկտեմբեր','սիրելի','տաքսի','նստել','կարմրել','երանգ','սարդ','խանութ','սուպերմարկետ','կոտորակ','ընտրել','կերպար','սազել',
    'հիանալ','ռազմագետ','մաղթել','հաջողություն','շնորհակալ','հանդիպել','իրավունք','ոչնչացնել','իրավաբան','կարեւոր','վայր','սիրելի',
    'խելք','ուղեղ','գործազուրկ','արտագաղթ','խորհուրդ','հարվածել','սնվել','մագնիս','բիբ','տանել','խղճալ','կրկնություն','շոկի գալ','զարմանալ',
    'մոռանալ','տղա','աղջիկ','մեծանալ','փոքրանալ','մենյու','վրեժ','ռեստորան','սրճարան','հայրություն','հրապարակ','տոկոս','զեղչ','նման',
    'շարժում','տարբերություն','համամատել','խոսք','փնտրել','առաքել','տեղյակ','շփվել','կոշտ','պայքարել','լիովին','ծնողներ','չար','ընտանիք',
    'խելոք','դիմել','եղբայր','քույր','դիմաց','առաստաղ','տուն','տնակ','աջլիկ','ձախլիկ','ձայն','ականջօղ','վեր կենալ','ավիրել','թղթապանակ',
    'հոտավետ','ասույթ','բանաստեղծություն','պահակ','դիակ','ոհմակ','ալիք','խմիչք','կոնյակ','գինի','օղի','մութ','նկատել','ապտակել','լուսին',
    'հույս ունենալ','դիմանալ','ֆունկցիա','բանաձեւ','անհոգ','տպագիր','ձեռագիր','կանգառ','արծիվ','ծողկեփունջ',,'ճախրել','միլիոն','միլիարդ',
    'մարգարե','նվագախումբ','վահանագեղձ','թոնիր','հետք','ոտնահետք','որոշել','շահագործել','այբբենարան','հույս','յասաման',
    'հոգեվարք','կերակրափող','խղճալ','խարույկ','բանտարկյալ','բանտ','նյութ','մանրէ','էակ','կոպիտ','լուսանկարիչ','սկավառակ','նկարազարդում',
    'պաշտոնական','պահեստային','լքել','ածուխ','ենթադրել','տնային տնտեսուհի','լիցքավորում','սպառել','սպորտ','վրան','վտակ',
    'երգահան','բառատետր','դիմանալ','դիմակահանդես','տարակուսանք','աստղագիտություն','աստղադիտարան','խայտառակ','հարեւան','լաց',
    'ճաշասենյակ','աշտարակ','ժամագործ','ներգաղթ','տատանում','թիրախ','նիզակ','աղեղ','լար','թել','զենք','հրացան','քլոր','մկրտութուն',
    'գրողների միություն','ավելորդ','կակտուս','կրիա','նամականիշ','ուլտրամանուշակագույն','չքավոր','պատրանք','անհեթեթություն','ամպրոպ',
    'ակցիա','լարել','դրամարկղ','տպիչ','սնկապուր','հոգալ','վախենալ','մարդահամար','լի','երկրորդ','երրորդ','առաջին','կաթողիկոս','տալ',
    'դասադուլ','փոխարժեք','գործադուլ','եպիսկոպոս','հարսնաքույր','փարավոն','գանգատ','ցավ','ցեխ','ծննդավայր','քաղց','առաջադիմություն',
    'խրթին','գլխատել','ջենտլմեն','աղմկել','մողես','կառավարություն','ծոծրակ','համր','դիզել','չղջիկ','ազգական','թնդանոթ','աններելի','կարիճ',
    'ընդհանրացնել','լրացուցիչ','ներկ','ծախս','տեսանելի','փոքրաթիվ','գրանիտ','պարունակել','հերթ','օրիգինալ','որովայն','պարկեշտ','ալյուր',
    'հետմահու','արտադրել','դահլիճ','ցանք','գրքույկ','գարի','նամակ','պատվեր','անհավատ','բազե','սուր','բութ','արագաշարժ','դայակ',
    'դղյակ','շքեղ','խորհրդանիշ','մոլորվել','պահապան','վերջնական','հեռախոսազրույց','ցունամի','ներդրում','օձիք','շրթունք','համբույր',
    'հարցաթերթիկ','մաքրել','հարմարություն','գանձ','օպերա','ուսուցանել','ամեոբա','անկախություն','վնասակար','օրենսգիրք','խավիար',
    'քքարայծ','երբեք','միշտ','առմիշտ','հնարավոր','աղբաման','սրամիտ','ջրաներկ','անտանելի','արտակարգ','սրբագրել','մատրիցա',
    'օբյեկտ','սուբյեկտ','մուլտֆիլմ','փեթակ','մենեջեր','անմիտ','ձիթայուղ','կանաչապատել','միջակետ','խխունջ','զանգակ','աճ','քարտուղարուհի',
    'թերի','ջնթերցասրահ','կրակայրիչ','արտասվել','հուզվել','հույզ','վակում','իշխել','ըմպելիք','ամփոփել','փորձություն','կեռ','մետր','անգինա',
    'երամ','իրոք','սպիրտ','կակաո','փոշի','փշոտ','հերթապահ','կենտրոն','բաժին','նռնակ','պայթյուն',],
    // football: ['Ռեալ Մադրիդ','Բարսելոնա','Ատլետիկո Մադրիդ','Վալենսիա','Վիլիառեալ','Սեվիլիա','Էլչե','Խետաֆե','Ատլետիկ Բ','Լեվանտե',
    // 'Ռեալ Բետիս','Լա Լիգա','Էսպանյոլ','Սեգունդա','Դեպորտիվո','Պրիմիեռ Լիգա','Լիվեռպուլ','Ման Սիթի','Ման Յունայթեդ','Չելսի','Արսենալ',
    // 'Տոտենհեմ','Վեստ հեմ','Շեֆիլդ','Վեստ Բռոմ','Էվերտոն','Ֆուլհեմ','Սելտա Վիգո','Գռանադա','Ռեալ Բետիս','Օսասունա','Էիբառ','Հուեսկա',
    // 'Լեսթեռ Սիթի','Աստոն Վիլլա','Քրիստալ Փելաս','Նյուքասլ','Բառնլի','Վուլվերհեմպտոն','Բռայթոն','Լիդս Յունայթեդ','Ինտեռ','Միլան','Յուվենտուս',
    // 'Լացիո','Ռոմա','Նապոլի','Ատալանտա','Վեռոնա','Սամպդորիա','Սասուոլո','Ուդինեզե','Սպեցիա','Բենեվենտո','Պառմա','Բռոնտե',
    // 'Բոլոնիա','Ֆիորենտինա','Բավարիա','Լեյպցիգ','Վոլսբուրգ','Բայեռ 04','Բորուսիա Դորտմունդ','Այնտռախտ','Ֆռայբուրգ','Հոֆենհայմ','Գեռտա',
    // 'Կյոլն','Մայնց','Շալկե 04','Շտուտգարդ','Բորուսիա Մյունխենգլադբախ','ՊՍԺ','Լիոն','Մոնակո','Օլիմպիկ Մարսել','Նիցա','Այաքս',
    // 'ՊՍՎ','Ֆռայբուրգ','Փյունիկ','Ալաշկերտ','Նոահ','Արարատ Արմենիա','Սերիա Ա','Լիգա 1','Բունդեսլիգա','Լեո ՄԵսսի','Ռոնալդու','Նեյմառ',
    // 'Մ. Սալահ','Ս. Մանե'],
    // random: [],
}

let thems = Object.keys(words)
let randomThem = Math.floor(Math.random()*thems.length) 
let randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)

// =========================================================== Functions

startBtn.addEventListener('click',function() {
    document.querySelector('.start-part').style.display = 'none'
    document.querySelector('.choose-team').style.display = 'flex'
})

for(let i = 0; i < toGameTableBtn.length; i++ ) {
    toGameTableBtn[i].addEventListener('click',function() {
        if(inpT1Value.value && inpT2Value.value && gameValue.value >= 10 && gameValue.value <= 200 && 
            gameTime.value >= 20 && gameTime.value <= 120 ) {
        
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.game-table').style.display = 'flex'
        document.querySelector('.choose-team').style.display = 'none'
        nowTeam = [inpT1Value.value,inpT2Value.value]
        
        whatTeam.innerHTML = nowTeam[currentTeam]
        t1.innerHTML = inpT1Value.value
        t2.innerHTML = inpT2Value.value
        
        t1_value.innerHTML = t1_count
        t2_value.innerHTML = t2_count
        
        if(this.classList.contains('r1')) startGameBtn.classList.add('r1')
        else if(this.classList.contains('r2')) startGameBtn.classList.add('r2')
        }
        else {
            document.querySelector('.error').style.display = 'block'
        }
    })
}
    


startGameBtn.addEventListener('click',function() {
    if(this.classList.contains('r1')) {
        document.querySelector('.alias2').style.display = 'flex'
        document.querySelector('.game-table').style.display = 'none'
        timer[0].innerHTML = gameTime.value
        newWords()
            
        let gameTimer = setInterval(()=>{
            if(Number(timer[0].innerHTML) > 0) timer[0].innerHTML = Number(timer[0].innerHTML) - 1
            else {
                clearInterval(gameTimer)
                endGame()
            }
        },1000)
    }
    if(this.classList.contains('r2')) {
        document.querySelector('.alias').style.display = 'flex'
        document.querySelector('.game-table').style.display = 'none'
        timer[1].innerHTML = gameTime.value
        randomThem = Math.floor(Math.random()*thems.length)
        randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
        word.innerHTML = words[thems[randomThem]][randomNum]

        let gameTimer = setInterval(()=>{
            if(Number(timer[1].innerHTML) > 0) timer[1].innerHTML = Number(timer[1].innerHTML) - 1
            else {
                clearInterval(gameTimer)
                endGame()
            }
        },1000)
    }


})
function newWords() {
    for(let i = 0; i < r1Words.length; i++) {
        r1Words[i].classList.remove('true')
        randomThem = Math.floor(Math.random()*thems.length)
        randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
        r1Words[i].innerHTML = words[thems[randomThem]][randomNum]    
    }
}
for(let i = 0; i < r1Words.length; i++) {
    r1Words[i].addEventListener('click', function() {
        this.classList.toggle('true')
        if(currentTeam == 0) {
            if(this.classList.contains('true')) t1_count++
            else t1_count--
        }
        else if(currentTeam == 1) {
            if(this.classList.contains('true')) t2_count++
            else t2_count--
        }
        for(let j = 0; j < r1Words.length; j++) {
            if(!r1Words[j].classList.contains('true')) return false
        }
        newWords()
    })
}

trueAnswer.addEventListener('click',function() {
    randomThem = Math.floor(Math.random()*thems.length)
    randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
    word.innerHTML = words[thems[randomThem]][randomNum]
    if(currentTeam == 0) t1_count++
    else t2_count++ 
})

falseAnswer.addEventListener('click',function() {
    randomThem = Math.floor(Math.random()*thems.length)
    randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
    word.innerHTML = words[thems[randomThem]][randomNum]
    if(currentTeam == 0) t1_count--
    else t2_count-- 
})

function endGame() {
    document.querySelector('.game-table').style.display = 'flex'
    document.querySelector('.alias').style.display = 'none'   
    document.querySelector('.alias2').style.display = 'none'   
    
    t1_value.innerHTML = t1_count
    t2_value.innerHTML = t2_count

    if(t1_count >= gameValue.value || t2_count >= gameValue.value) {
        if(currentTeam == 0) winner.innerHTML = inpT1Value.value
        else if(currentTeam == 1) winner.innerHTML = inpT2Value.value

        winMess.style.display = 'block'
        winMess.style.animation = 'wining 1s ease-out forwards'
        startGameBtn.style.display = 'none'
    } 

    if(currentTeam == 0) currentTeam = 1
    else currentTeam = 0

    whatTeam.innerHTML = nowTeam[currentTeam]

}