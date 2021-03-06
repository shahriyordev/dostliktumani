import React from 'react'
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css'
import Footer from './Footer';
import oliy from '../Img/oliy.png';
function Oliy() {
    return (
        <div>
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Олий таълим ташкилотларида таълим олиш имкониятларини янада кенгайтириш чора-тадбирлари тўғрисида</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={oliy} />
                    <h4 class="mt0" style={{ textAlign: "justify" }}>Ўзбекистон Республикаси Президентининг қарори</h4>
                    <p style={{ textAlign: "justify" }}>Олий таълим ташкилотларида таҳсил олиш истагидаги ёшларнинг таълим олиши учун кенг имкониятлар тақдим этиш, тўлов-контракт асосида ўқиётган ҳар бир талабага билим олиш учун қулай шароитлар яратиш, ёшларнинг илм-фанга бўлган интилишларини янада рағбатлантириш ва ёшларни молиявий қўллаб-қувватлаш мақсадида:</p>
                    <p style={{ textAlign: "justify" }}>1.<span> </span><strong>2021/2022 ўқув йилидан бошлаб<span> </span></strong>республикадаги барча олий таълим ташкилотлари бакалавриатининг кундузги таълим шаклида ҳамда магистратура босқичида тўлов-контракт асосида таҳсил олиш учун таълим кредити ажратишнинг янги тизими йўлга қўйилсин.</p>
                    <p style={{ textAlign: "justify" }}>Белгилансинки:</p>
                    <p style={{ textAlign: "justify" }}>тижорат банклари Молия вазирлиги томонидан жойлаштириладиган ресурслар ҳисобидан таълим кредитларини<span> </span><strong>Марказий банкнинг асосий ставкасида</strong><span> </span>ажратади;</p>
                    <p style={{ textAlign: "justify" }}>таълим кредитининг асосий қисми талабанинг расмий ўқиш муддати тугагандан сўнг<span> </span><strong>еттинчи ойдан бошлаб 7 йил давомида қайтарилади</strong>;</p>
                    <p style={{ textAlign: "justify" }}>таълим кредитини расмийлаштиришда ва унинг қайтарилишида талабанинг доимий даромад манбаига эга бўлган оила аъзолари<span> </span><strong>биргаликда қарз олувчи</strong><span> </span>сифатида қатнашишига рухсат этилади;</p>
                    <p style={{ textAlign: "justify" }}><strong>“Ижтимоий ҳимоя ягона реестри”га</strong><span> </span>кирган оилалар фарзандларидан таълим кредити учун<span> </span><strong>гаров</strong><span> </span><strong>ва кафилликлар</strong><span> </span><strong>талаб этилмайди.</strong></p>
                    <p style={{ textAlign: "justify" }}>2. Таълим кредитлари бўйича тижорат банкларини молиявий ресурслар билан таъминлаш учун<span> </span><strong>Молия вазирлиги ҳузурида Таълим кредитини молиялаштириш жамғармаси</strong><span> </span>(кейинги ўринларда – Жамғарма) ташкил этилсин.</p>
                    <p style={{ textAlign: "justify" }}>Жамғармага Давлат бюджетидан<span> </span><strong>2021 йилда камида 1 триллион сўм</strong>, кейинги йилларда<span> </span><strong>ҳақиқий талабдан келиб чиқиб</strong><span> </span>маблағлар ажратилсин.</p>
                    <p style={{ textAlign: "justify" }}>Жамғарма маблағларини шакллантириш манбалари этиб қуйидагилар белгилансин:</p>
                    <p style={{ textAlign: "justify" }}><strong>Давлат бюджетидан ажратиладиган</strong><span> </span>маблағлар;</p>
                    <p style={{ textAlign: "justify" }}>Жамғарма томонидан<span> </span><strong>аввал ажратилган ресурсларнинг қайтишидан тушадиган маблағлар</strong><span> </span>ва улардан олинадиган фоиз тўловлари;</p>
                    <p style={{ textAlign: "justify" }}>Жамғарманинг<span> </span><strong>вақтинча бўш маблағларини</strong><span> </span>тижорат банкларига жойлаштириш ҳисобига фоизли тушумлар;</p>
                    <p style={{ textAlign: "justify" }}><strong>Халқаро молия институтларининг имтиёзли кредитлари, ҳомийлик, грант маблағлари</strong><span> </span>ва қонунчилик ҳужжатларида тақиқланмаган бошқа манбалар.</p>
                    <p style={{ textAlign: "justify" }}>3. Белгилаб қўйилсинки:</p>
                    <p style={{ textAlign: "justify" }}>Жамғарма<span> </span><strong>юридик шахс мақомига эга бўлмаган</strong><span> </span>ҳолда Молия вазирлигида алоҳида очиладиган шахсий ғазна ҳисобварағи шаклида ташкил этилади;</p>
                    <p style={{ textAlign: "justify" }}>Жамғарма фаолияти Молия вазирлиги марказий аппаратига ажратиладиган<span> </span><strong>3 та штат бирлигидан иборат бўлинма</strong><span> </span>томонидан амалга оширилади;</p>
                    <p style={{ textAlign: "justify" }}>Жамғарма маблағлари ҳисобига тижорат банкларининг сўровларига асосан уларга<span> </span><strong>Марказий банкнинг асосий ставкасида</strong><span> </span>таълим кредити ажратиш учун мазкур ставкадан<span> </span><strong>4 фоиз бандга паст бўлган ставкада</strong><span> </span>ресурслар ажратилади;</p>
                    <p style={{ textAlign: "justify" }}>Марказий банкнинг асосий ставкаси пасайтирилган тақдирда, ресурс маблағлари ва таълим кредити бўйича<span> </span><strong>фоиз ставкаси мутаносиб равишда пасайтирилади</strong>, оширилган тақдирда эса<span> </span><strong>ўзгаришсиз қолади</strong>.</p>
                    <p style={{ textAlign: "justify" }}>4. Вазирлар Маҳкамаси<span> </span><strong>икки ҳафта муддатда</strong><span> </span>қуйидагиларни назарда тутувчи<span> </span><strong>Молия вазирлиги ҳузурида Таълим кредитини молиялаштириш жамғармаси ҳисобидан олий таълим ташкилотларида тўлов-контракт асосида ўқиш учун таълим кредитларини ажратиш тўғрисидаги<span> </span></strong>низомни тасдиқласин:</p>
                    <p style={{ textAlign: "justify" }}>таълим кредитлари бўйича юзага келадиган кредит таваккалчилигини<span> </span><strong>Молия вазирлиги ва тижорат банклари ўртасида тақсимлаш</strong><span> </span>ҳамда Жамғармадан ажратилган маблағларнинг бир қисмини тижорат банклари томонидан<span> </span><strong>гаров депозити сифатида қабул қилиш</strong>;</p>
                    <p style={{ textAlign: "justify" }}>республикадаги<span> </span><strong>давлат олий таълим муассасалари, хусусий ва хорижий олий таълим ташкилотлари</strong><span> </span>ҳамда уларнинг филиаллари талабаларига контракт тўловлари учун кредит ажратиш;</p>
                    <p style={{ textAlign: "justify" }}>Жамғарма томонидан таълим кредитлари учун маблағлар ажратишда тижорат банкларига қўйиладиган<span> </span><strong>мувофиқлик мезонларини ўрнатиш</strong>.</p>
                    <p style={{ textAlign: "justify" }}>5. Молия вазирлиги Жамғармага<span> </span><strong>2021 йилда</strong><span> </span>маблағларнинг Давлат бюджети ва давлат мақсадли жамғармалари маблағлари, бюджетни қўллаб-қувватлаш учун жалб қилинадиган халқаро молия институтлари<br />ва хорижий ҳукумат молия ташкилотларининг кредитлари, суверен халқаро облигацияларни чиқариш ва қонунчилик ҳужжатлари билан тақиқланмаган бошқа манбалар ҳисобидан ажратилишини,<span> </span><strong>2022 йилдан бошлаб</strong><span> </span>эса Давлат бюджети параметрларида назарда тутилишини таъминласин.</p>
                    <p style={{ textAlign: "justify" }}>6. Олий ва ўрта махсус таълим вазирлиги манфаатдор вазирлик ва идоралар билан биргаликда бир ой муддатда қонунчилик ҳужжатларига ушбу қарордан келиб чиқадиган ўзгартириш ва қўшимчалар тўғрисида Вазирлар Маҳкамасига таклифлар киритсин.</p>
                    <p style={{ textAlign: "justify" }}>7. Мазкур қарорнинг ижросини назорат қилиш Ўзбекистон Республикаси Бош вазирининг ўринбосари Б.А.Мусаев, олий ва ўрта махсус таълим вазири А.Х.Тошкулов ҳамда молия вазири Т.А.Ишметов зиммасига юклансин.</p>
                    <p style={{ textAlign: "justify" }}></p>
                    <p style={{ textAlign: "justify" }}><strong>Ўзбекистон Республикаси</strong></p>
                    <p style={{ textAlign: "justify" }}><strong>        Президенти                              Ш.МИРЗИЁЕВ</strong></p>
                    <p style={{ textAlign: "justify" }}><i>Тошкент шаҳри,</i></p>
                    <p style={{ textAlign: "justify" }}><i>2021 йил 30 июль,</i></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Oliy
