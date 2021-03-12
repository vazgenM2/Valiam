// =========================================================== ELements
const startBtn = document.querySelector('.start')
const toGameTableBtn = document.querySelector('.go-to-game')
const toThemsBtn = document.querySelectorAll('.go-to-them')
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

const someThem = document.querySelectorAll('.some-them')


// =========================================================== Variables
let nowTeam = [] 
let currentTeam = 0
let t1_count = 0
let t2_count = 0
let words = {}

// =========================================================== Workds
words = {
    names: ['Հովհաննես Թումանյան','Գեւորգ Էմին','Ակսել Բակունց','Վահան Տերյան','Նաիրի Զարյան','Րաֆֆի','Պերճ Պռոշյան','Սահակ Պարթեւ',
    'Դերենիկ Դեմիրճյան','Հովհաննես Շիրազ','Նար Դոս','Ռուբեն Սեւակ','Լեւոն Շանթ','Խնկո Ապեր','Գուրգեն Մահարի','Միսակ Մեծարենց',
    'Սիամանթո','Մուրացան','Դանիել Վարուժան','Պետրոս Դուրյան','Սայաթ-Նովա','Եղիշե Չարենց','Շիրվանզադե','Պարույր Սեւակ','Խաչատուր Աբովյան',
    'Ավետիկ Իսահակյան','Ստեփան Զորյան','Արտաշես Ա Բարի','Սարդուրի Ա','Իշպուինի','Արգիշտի Ա','Տիգրան Բ Մեծ','Արտավազդ Ա','Տրդատ Ա',
    'Խոսրով Գ Կոտակ','Տրդատ Գ Մեծ','Պապ թագավոր','Վռամշապուհ թագավոր','Աշոտ Ա','Աշոտ Երկաթ','Աշոտ Գ Ողորմած','Սմբատ Բ Տիեզերակալ',
    'Գագիկ Ա Շահնաշահ','Արամ mp3','Միհրան Ծառուկյան','Արփի Գաբրիելյան','Գոռ Հակոբյան','Բեն Ավետիսյան','Գրիգոր Դանիելյան','Գոռ Եփրեմյան',
    'Անդրե','Անդրանիկ Օզանյան','Անի Երանյան','Արկադի Դումիկյան','Բիլ Գեյթս','Լեո Մեսսի','Ռոնալդու','Պելե','Մառադոննա','Ռոբերտ Լեվանդովսկի',
    'Ռոնալդինյո','Նիկոլ Փաշինյան','Սերժ Սարգսյան','Ռոբերտ Քոչարյան','Վլադիմիռ Պուտին','Դոնալդ Թռամպ','Ջորջ Վաշինգթոն','Նապոլեոն Բոնապարտ',
    'Ստալին','Վանգա','Նաստրադամուս','Ալբերտ Էնշտեյն','Նյուտոն','Չարլզ Դարվին','Չառլի Չապլին','Քրիստինա Եղոյան','Վահե Զիրոյան','Կարեն Ասլանյան',
    'Լիլի Մորտո','Գարիկ Պապոյան','Գրիգ Գեւորգյան','Սոնա Ռուբինյան','Լուիզա Ներսիսյան','Լեբռոն Ջեյմս','Կոբի Բռեյնտ','Ռաֆայել Երանոսյան',
    'Քիմ Քարդաշյան','Գագիկ Ծառուկյան','Գալուստ Սահակյան','Լեոնարդո Դիկաբրիո','Սթիվ Թփիլբերգ','Հովհաննես Ադամյան','Դմիտրի Մենդելեեւ',
    'Արիստոտել','Դավիթ Անհաղթ','Սասունցի Դավիթ','Մսրա Մելիք','Մեսրոպ Մաշտոց','Գրիգոր Լուսավորիչ','Եղիշե պատմիչ','Ագաթանգեղոս','Փավստոս Բյուզանդ',
    'Վիլյամ Սարոյան','Պյոտր Ա','Հիտլեռ','Նազենի Հովհաննիսյան','Արմո','Արմենչիկ','Էրիկ Կարապետյան','Վաչե Թովմասյան','Ալեքսանդր Թամանյան',
    'Գաբրիել Սունդուկյան'],
    items: ['աթոռ','սեղան','պահարան','ծաղկաման','բազկաթոռ','բազմոց','մահճակալ','լուսամփոփ','աստիճան','գիրք','տետր','մատիտ',
    'կազմ','սրիչ','ծաղիկ','մոխրաման','ծխախոտ','ձեռք','մատ','շախմատ','շաշկի','մազ','վարս','նկար','պատկեր','տուփ','արկղ',
    'անձեռոցիկ','ծունկ','ոտք','կոճակ','զգեստ','տաբատ','կոշիկ','հող','աչք','հոնք','ճակատ','շրթունք','քիթ','ականջ','հիմք','արմատ',
    'կոդ','ցողուն','տանձ','դեղձ','ծիրան','բանան','արքայախնձոր','կիվի','կատու','շուն','փիղ','ձի','արքա','թագուհի','կայսր','տնկի',
    'հեռուստացույց','հեռախոս','պլանշետ','նոութբուք','տանկ','ինքնաթիռ','ուղղաթիռ','հյութ','սուրճ','զինանշան','դրոշ','հաշվիչ',
    'կրիա','վագր','առյուծ','ճանճ','աղվես','նավ','մեքենա','բույս','նապաստակ','բանալի','ուղի','ճանապարհ','մայրամուտ',
    'կարճատեւ','թեւ','հզոր','ուժ','ուշ','վաղ','առավոտ','երեկո','սիրտ','կյանք','ստամոքս','վարդ','մանուշակ','զարդ',
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
    'երամ','իրոք','սպիրտ','կակաո','փոշի','փշոտ','հերթապահ','կենտրոն','բաժին','նռնակ','պայթյուն','ատամնաշար','սագ','թռչուն',
    'ծիածան','ձյուն','անձրեւ','կայծակ','տոնական','ոսկե','մատանի','հարսանիք','նշանդրեք','փոխանակվել','մեկմեկու','շինել','օլորել',
    'կոտրել','կոտորել','այլայլված','անճանաչելի','մշակել','դաղել','դեղ','հաբ','մաշվել','փչանալ','դեռահաս','փուչիկ','ամպ','ամպամած',
    'ուղղահայաց','հորիզոնական','հորիզոն','կատար','լեռնալանջ','գագաթ','ծայր','ծորալ','թափվել','քաշել','գնել','պարտք','չափահաս',
    'հիվանդություն','բազմաստված','կրոն','դավանել','պաշտել','կուռք','կեղծ','ստոր','դարբին','թուր','սուր','կացին','վառելափայտ','դանակ',
    'պտուտակիչ','սղոց','սրբել','բալ','բազմել','գրավել','պարտության մատնել','մատնել','առաքյալ','աշակերտ','ուսանող','դասախոս','դասատու',
    'լսարան','դասարան','լուսամփոփ','առաստաղ','մետաղ','քիմիական տարր','տառ','զույգ','եռյակ','ծնունդ','ուրախություն','առիթ','խմիչք',
    'ոգի','հոգի','հեծանիվ','սայլակ','սայլ','անուղղակի','ուղղել','ճշտել','պարզել','չափել','գումարել','լոգարան','իրավունք','պարտականություն',
    'պատվեր','առաքիչ','երփներանգ','գույնզգույն','յուրահատուկ','հատուկ','հասարակ','սակավ','սողալ','սողուն','սլանալ','հավելված',
    'ծրագիր','ծրագրել','շնչել','խորհուրդ','կողմնակի','երկրորդական','տալ','տնտեսություն','հողագործություն','գյուղացի','աշխատունակ',
    'տնակ','քաղցած','շտապել','հրշեջ','առեւանգել','փրկագին','ֆտոր','թենիս','լող','լողալ','լեզվակ','հայ','համառ','հստակ','ներս','դուրս',
    'դատարկ','դիմել','բողոքել','քաղաքապետ','քաղաքապետարան','գյուղապետ','գյուղապետարան','պատգամավոր','պատգամ','աշխատավարձ',
    'տրամադրել','տրամադրվել','ծնկի գալ','ցնդել','ցածր','վերնագիր','նախաբան','համառոտ','կոնկրետ','բեռ','բեռնատար','մեծածախ',
    'մանրածախ','բավարատվող','հավատարիմ','կանգուն','կանգնել','պատվավոր','կոլեգա','գարծընկեր','միջանցք','կարոտ','կարոտել','կախել',
    'վատնել','ծրար','ձնառատ','ծագում','անձրեւոտ','շաքար','շաքարավազ','ամենայն','նահանգ','մարզ','հրատապ','հսկա','հսկել','բազմել',
    'պղպեղ','դադարել','դողալ','հանգստանալ','կեղծել','կոտրվածք','ավտովթար','դեմ դիմաց','երկրաշարժ','ցելսուս','մագնիտուդ','բորբոքվել',
    'կարմրել','ջրծաղիկ','կարմրուկ','ի ծնե','ի սկզբանե','տատիկ','պապիկ','սիրելիս','հնազանդ','տեր','տանուտեր','տիրել','հնազանդվել',
    'հեռանկար','ապագա','անկաշկանդ','նպատակասլաց','սխրանք','հերոսություն','անմահություն','ցմահ','ցտեսություն','ցայտուն','լեցուն',
    'իրավացի','դանդաղաշարժ','սլացիկ','թոռնուհի','թելադրել','թելադրություն','շարադրել','շարադրութուն','փոխադրել','փոխադրվել',
    'փոխադրություն','վարժություն','համեմատություն','վարժել','համեմատել','պարապել','պարապունք','անգործ','գործազուրկ','հեռացնել',
    'բարիք','խաղաղություն','համաշխարհային պատերազմ','պատերազմ','ճակատամարտ','մարտ','մարտնչել','մասուր','կոմպոտ','մալինա','ելակ',
    'թանաք','մոխիր','քարածուխ','փայտածուխ','թունավոր','փաթեթ','տնային աշխատանք','փաթեթավորել','սրտանց','դամբարան',
    'գերեզման','կառավարում','կառավարիչ','վարչապետ','նախագահ','հանրային','հռետոր','խոսնակ','բացատրել','քննիչ','ոստիկանություն',
    'ձերբակալել','մահապատիժ','դատարան','դատել','դատավոր','գերարագ','փաստաբան','վաճառված','կիսվել','վանկ','տողադարձ','տապան',
    'տիեզերք','հումոր','տարբերակ','այո','կռահել','օծանելիք','ամուսին','ծեծել','թվալ','երեւակայել','պահել','կերպար','անձնագիր','ծափահարություն',
    'տիկին','հասկանալ','տող','հասմիկ','աստղ','հեռադիտակ','դեպք','հարց','խնամի','բաժանվել','թագ','թանկարժեք քար','ակ','ռետին',
    'ճկուն','փոքրիկ','կույր','խուլ','հարստանալ','հայտնի','ծրագրավորող',],
    football: ['Ռեալ Մադրիդ','Բարսելոնա','Ատլետիկո Մադրիդ','Վալենսիա','Վիլիառեալ','Սեվիլիա','Էլչե','Խետաֆե','Ատլետիկ Բ','Լեվանտե',
    'Ռեալ Բետիս','Լա Լիգա','Էսպանյոլ','Սեգունդա','Դեպորտիվո','Պրիմիեռ Լիգա','Լիվեռպուլ','Ման Սիթի','Ման Յունայթեդ','Չելսի','Արսենալ',
    'Տոտենհեմ','Վեստ հեմ','Շեֆիլդ','Վեստ Բռոմ','Էվերտոն','Ֆուլհեմ','Սելտա Վիգո','Գռանադա','Ռեալ Բետիս','Օսասունա','Էիբառ','Հուեսկա',
    'Լեսթեռ Սիթի','Աստոն Վիլլա','Քրիստալ Փելաս','Նյուքասլ','Բառնլի','Վուլվերհեմպտոն','Բռայթոն','Լիդս Յունայթեդ','Ինտեռ','Միլան','Յուվենտուս',
    'Լացիո','Ռոմա','Նապոլի','Ատալանտա','Վեռոնա','Սամպդորիա','Սասուոլո','Ուդինեզե','Սպեցիա','Բենեվենտո','Պառմա','Բռոնտե',
    'Բոլոնիա','Ֆիորենտինա','Բավարիա','Լեյպցիգ','Վոլսբուրգ','Բայեռ 04','Բորուսիա Դորտմունդ','Այնտռախտ','Ֆռայբուրգ','Հոֆենհայմ','Գեռտա',
    'Կյոլն','Մայնց','Շալկե 04','Շտուտգարդ','Բորուսիա Մյունխենգլադբախ','ՊՍԺ','Լիոն','Մոնակո','Օլիմպիկ Մարսել','Նիցա','Այաքս',
    'ՊՍՎ','Ֆռայբուրգ','Փյունիկ','Ալաշկերտ','Նոահ','Արարատ Արմենիա','Սերիա Ա','Լիգա 1','Բունդեսլիգա','Լեո ՄԵսսի','Ռոնալդու','Նեյմառ',
    'Մուհամեդ Սալահ','Սադիո Մանե','Տեր Շտեգեն','Նորբերտու Նետու','Ժորդի Ալբա','Ժունիոր Ֆիրպո','Պիկե','Կլեման Լենգլե','Ումտիտի',
    'Սերժինիո Դեստ','Սերխիո Ռոբերտո','Պեդրի','Բուսկետս','Միռալեմ Պյանիչ','Ֆռենկի Դե Յոնգ','Ֆիլիպե Կոուտիյո','Անտուան Գրիզման','Օսման Դեմբելե',
    'Անսու Ֆատի','Բռեյտվեյտ','Տիբո Կուրտուա','Դանիել Կարվախալ','Սերխիո Ռամոս','Ռաֆաել Վառան','Մարսելո','Ֆեռլան Մենդի','Տոնի Կռոս',
    'Մոդրիչ','Կազեմիռո','Իսկո','Էդեն Ազար','Բենզեմա','Մարկո Ասենսիո','Յան Օբլակ','Խիմենեզ','Կիռան Տրիպիե','Կոկե','Սաուլ','Կառասկո',
    'Լլորենտե','Ժոաո Ֆելիշ','Լուիս Սուառեզ','Անխել Կոռեա','Խեսուս Նավաս','Ռակիտիչ','Ալեխանդրո Գոմեզ','Իվան Ռակիտիչ','Լուկաս Օկամպոս',
    'Էն Նեսիրի','Յագո Ասպաս','Ինյակի Վիլիամս','Դավիդ Սկիլվա','Միկել Օյարզաբալ','Նաբիլ Ֆեկիր','Ռաուլ Գարսիա','Դանիել Պառեխո','Կեյլոռ Նավաս',
    'Մարկինյոս','Կուրզավա','Մարկո Վեռռատի','Լեանդրո Պառեդես','Անդրե Էռեիռա','Յուլիան Դրակսլեռ','Մբապպե','Մաուռո Իկարդի','Անխել Դի Մարիա',
    'Մոյզե Կին','Նեյմառ','Կամավինգա','Մեմֆիս Դեպայ','Ալեքսանդր Գոլովին','Սամիր Հանդանովիչ','Ստեֆան Դե Վռեյ','Միլան Սկռինյառ',
    'Ալեքսանդր Կոլոռով','Աշռաֆ Հակիմի','Էշլի Յանգ','Արտուրո Վիդալ','Իվան Պերիշիչ','Կրիստիան Էրիկսեն','Բռոզովիչ','Բառելլա','Ալքսիս Սանչես',
    'Ռոմելու Լուկակու','Լաուտառո Մարտինեզ','Անտոնյո Կոնտե','Ռոնալդ Կուման','Էռնեստո Վալվերդե','Կիկե Սետյեն','Զիդան','Լոպեդեգի',
    'Դիեգո Սիմեոնե','Ստեֆան Պիոլի','Դոննառումմա','Ռոմանյոլե','Տեո Էռնանդեզ','Կեսյե','Մանջուկիչ','Ռաֆել Լեաու','Զլատան Իբռահիմովիչ',
    'Անդե Ռեբիչ','Չականողլու','Անդրեա Պիռլո','Բուֆֆոն','Վոյցեվ Սշեստնի','Ջորջո Կելինի','Բոնուչի','Դե Լիգտ','Ալեքս Սանդրո','Արթուր Մելո',
    'Անդիեն Ռաբիո','Բենտանկուռ','Առոն Ռեմզի','Պաուլո Դիբալա','Ալվառո Մոռատա','Ֆեդերիկո Կիեզա','Բեռնառդեսկի','Պաուլո Ֆոնսեկա','Պաու Լոպես',
    'Քրիս Սմոլլինգ','Ջանլուկո Մանչինի','Բռայան Կրիստանտե','Նիկոլո Զանիոլա','Հենրիխ Մխիթարյան','Ջորդան Վերետու','Լորենզո Պելոգրինի','Էդին Ջեկո',
    'Պեդռո Ռոդրիգես','Բորխա Մայոռալ','Ստեֆան Էլ-Շառավի','Ջան Պիեռո Գասպերինի','Ռուսլան Մալինովսկի','Ալեկսեյ Միռանչուկ','Մարիո Պաշալիչ',
    'Լուիս Մուրիել','Յոսեպ Իլիչիչ','Դուվան Զապատա','Ջենառո Գատուզո','Կալիդու Կուլիբալի','Կոստաս Մանոլաս','Ֆաբիան Ռուիզ','Վիկտոր Օսիմխեն',
    'Իռլինգ Լոզանո','Դրիս Մեռտենս','Լորենցիո Ինսինյե','Սիմիոն Ինզագի','Ֆռանչեսկո Աչեռբի','Լուիս Ալբերտո','Չիռո Իմոբիլե','Րիբերի','Արյեն Ռոբեն',
    'Հանսի Ֆլիկ','Մանուել Նոյեռ','Նիկոլաս Զյուլե','Բենժամին Պավառ','Բոատենգ','Ալֆոնսո Դեյվիս','Լյուկա Էռնանդես','Դավիդ Ալաբա','Յոզուա Կիմիխ',
    'Լեոն Գորետզկա','Տոլիսսո','Սերժ Գնաբրի','Ռոբերտ Լեվանդովսկի','Լեռոյ Սանե','Դուգլաս Կոստա','Տոմաս Մյուլլեռ','Կինգսլի Կոման','Յուլյան Նագելսման',
    'Պետեր Գուլաչի','Անխելինյո','Դայոտ Ուպամեկանո','Զաբիտսեռ','Կրիստոֆեռ Նկուկու','Կեվին Կամպլ','Յուսուֆ Պոուլսեն','Էմիլ Ֆորսբերգ',
    'Ջաստին Կլյուվերտ','Լուկա Յովիչ','Ֆիլիպ Կոստիչ','Անդրե Սիլվա','Մարկո Ռոզե','Ռոման Բյուռկի','Նիկո Շուլց','Մատս Հումելլս','Լուկաշ Պիշես',
    'Մանուել Ականջի','Մարկո Ռոես','Ջովանի Ռեյնա','Ակսել Վիտսել','Ռաֆաել Գեռեյռո','Ջեյդոն Սանչո','Էռլինգ Հոլլանդ','Տորգան Ազառ','Յան Զոմեռ',
    'Լարս Շտինդել','Ալոսանե Պլեա','Յուրգեն Կլոպպ','Ալիսսոն Բեկեռ','Ադրիան','Վիրջիլ Վան Դեյկ','Էնդրյու Ռոբերտսոն','Օզան Կաբակ','Ժոել Մատիպ',
    'Տռենտ Առնոլդ','Ջո Գոմեզ','Ֆաբինյո','Ջեյմս Միլնեռ','Վեյնալդում','Տիագո Ալկանտարա','Նաբի Կեյտա','Ջորդան Հենդերսոն','Կյոռտիս Ջոնս',
    'Ռոբերտո Ֆիլռմինո','Դիեգո Ժոտա','Տակումի Մինամինո','Ջերդան Շակիրի','Դիվոգ Օրիգի','Պեպ Գվարդիոլա','Էդեռսոն','Կայլ Ովոլկեր','Ջոն Ստոունս',
    'Նատան Ակե','Էմերիկ Լապորտ','Զինչենկո','Ժոաու Կանսելու','Իլկայ Գյունդոգան','Ռոդրի Էռնանդեզ','Կեվին Դե Բրույնե','Ֆեռնանդինյո','Ֆիլ Ֆոդեն',
    'Ռահիմ Սթեռլինգ','Գաբրիել Ժեզուս','Սերխիո Ագուեռո','Ռիադ Մառեզ','Ֆեռռան Տոռռես','Բեռնառդու Սիլվա','Օլե Գունառ Սուլշեռ','Դավիդ Դե Խեա',
    'Լինդելոֆ','Հարի Մագուաեռ','Ալեքս Տելլեշ','Առոն Վան-Բիսակա','Լյուկ Շոու','Պոլ Պոգբա','Խուան Մատա','Դոնյ Վան Դե Բեկ','Սկոտ Մակտոմինեյ',
    'Բռունո Ֆեռնանդեշ','Նեմանյա Մատիչ','Էդինսոն Կավանի','Անտոնի Մարսիալ','Մարկուս Ռեշֆորդ','Դենիել Ջեյմս','Գրինվուդ','Բռենդան Ռոջերդս',
    'Սոյունջու','Ռիկարդո Պեռեյռա','Յուրի Տիլիմանս','Հարվի Բառնս','Ջեյմս Մեդիսոն','Մարկ Օլբռայթոն','Վիլֆրիդ Նդիդի','Ջեյմի Վարդի','Այոզե Պեռզ',
    'Տոմաս Տուխել','Ֆռենկ Լեմպառդ','Ստիվեն Ջեռառդ','Ռենջերս','Արիզաբալագա','Էդուարդո Մենդի','Րյուդիգեռ','Մարկոս Ալոնսո','Տիագո Սիլվա',
    'Կուրտ Զումա','Բեն Չիլվել','Ժորժինյո','Նգոլո Կանտե','Կովաչիչ','Կայ Խավերտզ','Մեյսն Մաունտ','Տեմի Աբռահամ','Կրիստիան Պուլիշիչ',
    'Տիմո Վեռնեռ','Օլիվե Ժիռու','Հակիմ Զիեյշ','Կալում Հադսոն-Օդոի','Դեվիդ Մոյզ','Ջեսի Լինգարդ','Անդրեյ Յառմոլենկո','Կառլո Անչելոտտի',
    'Պիկֆորդ','Մայքլ Կին','Լյուկա Դին','Ալլան','Խամես Ռոդրիգես','Անդրե Գոմեշ','Ռիշառլիսոն','Կալվերտ-Լյուին','Ժոզե Մոուրինյո','Հուգո Լյորիս',
    'Սերխիո Ռեգիլոն','Տօբի Ալդերվեյրելդ','Էրիկ Դայեռ','Սերժ Օրյե','Խյոբեռգ','Մուսա Սիսսոկո','Դելլե Ալլի','Նդոմբելե','Խյո Մին Սոն','Հարի Քեյն',
    'Էրիկ Լամելա','Լուկաս Մոուռա','Ջեկ Գրիլիշ','Վոտկինս','Ռոս Բառկլի','Միկել Արտետա','Բեռնտ Լենո','Բելլերին','Դավիդ Լուիզ','Բուկայո Սակա',
    'Գրանիտ Ջակա','Ալեքսանդր Լակազետ','Վիլլիան','Օբամեյանգ','Նիկոլաս Պեպե','Գաբրիել Մարտինելլի','Մարսելո Բյելսա','Ադամա Տռաոռե',
    'Նելսոն Սեմեդու','Ժոաու Մոուտինյո','Ռաուլ Խիմենեզ','Պելե','Ռոնալդո','Ռոնալդինյո','Գարինչա','Կակա','Իկեր Կասիլյաս','Կռոյֆ','Լեվ Յաշին',
    'Պաուլո Մալդինի','Նեստա','Պուշկաշ','Վան Բաստեն','Տիերի Անրի','Ռուտ Գուլիտ','Կանտոնա','Ջորջ Բեսթ','Էսեյբիո','Չավի','Ինիեստա','Դալգլիշ',
    'Կասպեռ Շմեյխել','Պետեր Շմեյխել','Զանետտի','Լուիշ Ֆիգու','Ռիվալդո','Էդոո','Դել Պիեռո','Վիկտոր Վալդես','Գիգս','Ռաուլ','Վիեիռա',
    'Ֆեռնանդո Տոռես','Մայքլ Օվեն','Պավել Նեդվիդ','Պետր Չեխ','Շվայշտայգեռ','Բալլակ','Ռոբերտո Կառլոս','Ֆիլիպ Լահմ','Դիդյե Դռոգբա',
    'Պոլ Սքոլս','Անդրեյ Շեվչենկո','Վիդիչ','Ռիո Ֆերդինանդ','Ռայկարդ','Մարզիչ','Մեկնաբան','գնդակ','խոտածածկ','ստադիոն','դիմային գիծ',
    'եզրային գիծ','տրիբունա','դարպաս','հարվածել','դիպուկ','խաղից դուրս','խախտում','տուգանային հարված','11 մետրանոց','տուգանային հրապարակ',
    'սիմուլացիա','շրջադարձ հարված','կարիճ հարված','ՎԱՌ համակարգ','կրկնապատկեր','չեղարկում','ազատ հարված','Կամպ Նոու',
    'Սանտյագո Բեռնաբեու','Վանդա Մետրոպոլիտանո','Էնֆիլդ Դոադ','Քինգ Պավեռ Ստադիոն','Էդիխադ Սռադիոն','Օլդ Տրաֆորդ','Գուդիսոն Պառկ',
    'Յոհան Կռոյֆ Ստադիոն','Պուշկաշ Արենա','Էմիրեյթս Ստադիոն','Ուեմբլի','Ստեմֆորդ Բրիջ','Պառկ դե Պրենս','Ալիանզ Արենա',
    'Վազգեն Սարգսյանի անվան Ստադիոն','Սան Պաուլո Ստադիոն','Յուվենտուս Ստադիոն','Պիչիչի','Ոսկե գնդակ','Ոսկե խաղակոշիկ','Ոսկե ձեռնոց',
    'The Best մրցանակ','UEFA','FIFA','Չեմպիոնների Լիգա','ԵՎրոպա Լիգա','Կոպա դել Ռեյ','Անգլիայի գավաթ','Լիգայի գավաթ','դեռբի','Էլ կլասիկո',
    'Դեռ կլասիկեռ'],
    geography: ['Հայաստան','Վրաստան','Երեւան','Թբիլիսի','Իջեւան','Վայոց ձոր','Սյունիք','Արմավիր','Արարատ','Արմավիր','Արտաշատ','Կոտայք',
    'Լոռի','Շիրակ','Գեղարքունիք','Կապան','Եղեգնաձոր','Վայք','Ջերմուկ','Արտաշատ','Հրազդան','Գյումրի','Վանաձոր','Սեւանա լիճ','Պարզ լիճ',
    'Արաքս գետ','Ախուրյան գետ','Արցախ','Տավուշ','Նոյեմբերյան','Աղավնաձոր','Ագարակաձոր','Մալիշկա','Եղեգիս','Գետափ','Ելփին','Արփա',
    'Գառնի','Բագարան','Տիգրանակերտ','Անի քաղաք','Վան քաղաք','Թալին','Բյուրական','Արենի','Ծաղկաձոր','Հանքավան','Արթիկ','Աշոցք',
    'Տաշիր','Ալավերդի','Գավառ','Վարդենիս','Նախիջեւան','Ջավախք','Երկիր մոլորակ','Մերկուրի','Վեներա','Մարս','Յուպիտեր','Նեպտուն',
    'Պլուտոն','գալակտիկա','ծով','ծոց','գետ','լիճ','վտակ','մայրցամաք','աշխարհամաս','օվկիանոս','Թուրքիա','Անկարա','Ադրբեջան','Բաքու',
    'Կաբուլետի','Ռուսաստան','Մոսկվա','Սանկտ Պետերբուրգ','Նովոսիբիրսկ','Եկատիրինբուրգ','Յակուտսկ','Վոլգա','Օբ գետ','Բայկալ լիճ','Ենիսեյ',
    'Լենա գետ','Ասիա','Եվրասիա','Եվրոպա','Աֆրիկա','Ղազախստան','Նուր Սուլթան','Մոնղոլիա','Ուլան Բատոր','Հյուսիսային Կորեա','Փհենյան',
    'Հարավային Կորեա','Սեուլ','Ճապոնիա','Տոկիո','Հոկայդո կղզի','Չինաստան','Պեկին','Յանցզի','Նեպալ','Հնդկաստան','Դելլի','Մումբայ','Շանհայ',
    'Շրի Լանկա','Կոլոմբո','Մալդիվներ','Բութան','Բանգլադեշ','Դաքա','Մյանմար','Վիետնամ','Կամբոջա','Թաիլանդ','Մալազիա','Ինդոնեզիա',
    'Ջակարտա','Պակիստան','Իսլամաբադ','Աֆղանստան','Քաբուլ','Ղրղստան','Բիշքեկ','Ուզբեկստան','Աստանա','Թուրքմենստան','Աշխաբադ','Տջիկստան',
    'Իրան','Թեհրան','Լիբանան','Իսրայել','Հորդանան','Քատար','Արաբական Միացյալ Էմիրություններ','Իրաք','Բաղդադ','Սաոիդյան Արաբիա',
    'Էր Ռիադ','Եմեն','Օման','Աբու Դաբի','Դուբայ','Կիպրոս','Նիկոսիա','Նորվեգիա','Օսլո','Շվեդիա','Ստոկհոլմ','Ֆինլանդիա','Հելսիննկի',
    'Վոլգոգրադ','Դոնի Ռոստով','Դանիա','Կոպենհագեն','Էստոնիա','Տալլին','Լատվիա','Լիտվա','Ռիգա','Վիլնյուս','Իռլանդիա','Դուբլին','Իսլանդիա',
    'Ռեյկյավիկ','Մեծ Բրիտանիա','Լոնդոն','Լիվեռպուլ','Մանչեստեր','Շոտլանդիա','Անգլիա','Ուելս','Բելառուս','Մինսկ','Ուկրաինա','Կիեւ','Լեհաստան',
    'Վարշավա','Շեխիա','Պրահա','Սլովակիա','Սոֆիա','Ռումինիա','Բուլղարիա','Հունաստան','Աթենք','Իտալիա','Հռոմ','Թուրին','Միլան',
    'Սան Մարինո','Վատիկան','Խորվաթիա','Մակեդոնիա','Գերմանիա','Բեռն','Բեռլին','Ֆրանսիա','Փարիզ','Բելգիա','Բրյուսել','Հոլանդիա',
    'Իսպանիա','Մադրիդ','Բարսելոնա','Պորտուգալիա','Լիսաբոն','Ավստրիա','Շվեցարիա','Ալժիր','Եգիպտոս','Կահիրե','7 հրաշալիք','Նիգեր',
    'Եթովպիա','կլիմա','կղզի','օգտակար հանածոներ','լանդշաֆտ','լեռ','ձոր','իջվածք','Ավստրալիա','Նոր Գվինեա','Նոր Զելանդիա','',
    'Կանբեռա','Բրազիլիա','Արգենտինա','Ուրուգվայ','Պարագվայ','Շիլի','Բոլիվիա','Պերու','Էկվադոր','Կոլումբիա','Վենեսուելլա','Մոնտեվիդեո',
    'Բուենոս Այրես','Սանտյագո','Լիմա','Բոգոտա','Կարակաս','ԱՄՆ','Կանադա','Մեքսիկա','Կուբա','Օտտավա','Վաշինգտոն','Լոս Անջելես',
    'Նյու Յորք','Մեխիկո','Անտարկտիդա','Պիրենեյան թերակղզի','Գրենլադիո կղզի','Սկանդինավյան լեռներ','Արաբական թերակղզի','Կարպատներ',
    'Ուրալյան Լեռներ','Միջագետք','Բալկանյան թերակղզի','Ապենինյան թերակղզի','Դեկանի սարահարթ','Կամչատկա թերակղզի','Ֆուձիամա հրաբուխ',
    'Հնդկաչին թերակղզի','Կիլիմանջարո','Ջոմոլունգմա','Էվերեստ','Ճայա կղզի','Յանցզի գետ','Հուանհե գետ','Ամուր գետ','Բերինգի նեղուց','նեղուց',
    'Օխոտի ծով','Կասպից ծով','Սեւ ծով','Պարսից ծոց','Կարմիր ծով','Դանուբ գետ','Ջիբլարթարի նեղուց','Ատլանտյան օվկիանոս','Խաղաղ օվկիանոս',
    'Հնդկական օվկիանոս','Հյուսիսային Սառուցյալ օվկիանոս','Վանա լիճ','Ուրմիա լիճ','Արաբական ծով','Սահարա անապատ','Ատլասի լեռներ',
    'Դրակոնյան լեռներ','Նեղոս գետ','Կոնգո գետ','Պարանա գետ','Ամազոն գետ','Անդեր','Տիտիկական լիճ','Միսիսիպի գետ','Բոսֆորի նեղուց','Ապալանչներ',
    'Մեքսիկական ծոց','Կարիբյան ծով','հարթավայր','սարահարթ','քարտեզ','գլոբուս','Աշխարհագրություն',],
}


let thems = []

// =========================================================== Functions

startBtn.addEventListener('click',function() {
    document.querySelector('.start-part').style.display = 'none'
    document.querySelector('.choose-team').style.display = 'flex'
})

for(let i = 0; i < toThemsBtn.length; i++ ) {
    toThemsBtn[i].addEventListener('click',function() {
        if(inpT1Value.value && inpT2Value.value && gameValue.value >= 10 && gameValue.value <= 200 && 
            gameTime.value >= 20 && gameTime.value <= 120 ) {
        
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.thems').style.display = 'flex'
        document.querySelector('.choose-team').style.display = 'none'
        
        if(this.classList.contains('r1')) startGameBtn.classList.add('r1')
        else if(this.classList.contains('r2')) startGameBtn.classList.add('r2')
        }
        else {
            document.querySelector('.error').style.display = 'block'
        }
    })
}

toGameTableBtn.addEventListener('click',function(){
    
    
    for(let i = 0; i < document.querySelectorAll('.some-them.chosen').length; i++) {
        thems.push(document.querySelectorAll('.some-them.chosen')[i].getAttribute('data-value'))
    }
    
    if(thems.length > 0) {
        
        nowTeam = [inpT1Value.value,inpT2Value.value]
        document.querySelector('.thems').style.display = 'none'
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.game-table').style.display = 'flex'

        whatTeam.innerHTML = nowTeam[currentTeam]
        t1.innerHTML = inpT1Value.value
        t2.innerHTML = inpT2Value.value
    
        t1_value.innerHTML = t1_count
        t2_value.innerHTML = t2_count
    }
})

for(let i = 0; i < someThem.length; i++) {
    someThem[i].addEventListener('click',function() {
        this.classList.toggle('chosen')
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