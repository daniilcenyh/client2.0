// import { useGetAllProductsQuery } from "../../store/productSlice/productsAPI";
import { RiSearchLine } from "react-icons/ri";

import Card from "../../components/card/Card";

import "./home.css"
import { useState } from "react";
import Modal from "../../components/modal/Modal";


const data = [
    {
        id: 1,
        img: 'https://led-36.ru/image/cache/catalog/import_files/bc/bca2c7f63fee11e9e59c00505689c633_1115f9bc467911e9889d00505689c633-900x900.jpg',
        title: "Светодиодная лента WS2812",
        rate: 4.7,
        price: 315,
        category: "Диодные ленты",
        discription: "Светодиодная лента WS2812: Входное напряжение: DC5V Мощность: 30 светодиодов/м ---- 9 Вт/метр 60 светодиодов/м ---- 18 Вт/метр 144 светодиода/м ---- 43,2 Вт/метр Светодиод: каждый светодиод управляется отдельно. Тип микросхемы: улучшенная версия микросхемы WS2812 (встроенная в светодиод 5050SMD RGB) IC: 1 IC управляет 1 светодиодным чипом Пиксели: 30/60/144/метры Шаг: 16,6 мм (1000/64) Серая шкала: 256 Биты/Цвет: 8 бит/Цвет Ширина ФПК: 30 светодиодов/м ---- 10 мм 60 светодиодов/м ---- 10 мм 144 светодиода/м ---- 12 мм Цвет FPC: черный/белый Степень защиты: IP30/ IP65 /IP67 Цвет: полноцветный RGB Режущий: каждый светодиод режется Упаковка: в антистатическом пакете, IP30 IP65 с липкой лентой 3M на спине (IP67 без клея 3M)"
    },
    {
        id: 2,
        img: "https://avatars.mds.yandex.net/i?id=bcd2022aa8e9e163da915d626bb62a79_l-5253253-images-thumbs&n=13",
        title: "Модуль драйвера L298N",
        rate: 4.2,
        price: 130,
        category: "Модуль",
        discription: "Размер модуля - 24x20x7 мм.Встроенный переключатель MOS с низким сопротивлением, низкое тепловыделение, радиатор не требуется, низкое энергопотребление, подходит для питания от батареи.Встроенная схема тепловой защиты (автоматически восстанавливается падение температуры).Каждый канал обеспечивает ток в 1,5 А, а пиковый до 2,5 А. "
    },

{
        id: 5,
        img: "https://avatars.mds.yandex.net/i?id=9ef239b43d21d988080d2b3047fc306b_l-9065979-images-thumbs&n=13",
        title: "Ардуино нано type-C",
        rate: 5.0,
        price: 60,
        category: "Ардуино нано",
        discription: "Рабочее напряжение (логическая уровень)  5 В Входное напряжение (рекомендуемое)  7-12 В Входное напряжение (предельное)  6-20 В Цифровые Входы/Выходы  14 (6 из которых могут использоваться как выходы ШИМ) Аналоговые входы  8 Постоянный ток через вход/выход  40 mAh с одного вывода и 500 mAh со всех выводов Флеш-память  16 Кб (ATmega168) или 32 Кб (ATmega328) при этом 2 Кб используются для загрузчика ОЗУ  1 Кб (ATmega168) или 2 Кб (ATmega328) EEPROM  512 байт (ATmega168) или 1 Кб (ATmega328) Тактовая частота  16 МГц Размеры  1.85 см x 4.2 см"
    },
{
        id: 6,
        img: "https://avatars.mds.yandex.net/get-mpic/6321906/img_id7338983604405953317.jpeg/orig",
        title: "Ардуино нано micro-USB",
        rate: 4.9,
        price: 65,
        category: "Ардуино нано",
        discription: "Рабочее напряжение (логическая уровень)  5 В Входное напряжение (рекомендуемое)  7-12 В Входное напряжение (предельное)  6-20 В Цифровые Входы/Выходы  14 (6 из которых могут использоваться как выходы ШИМ) Аналоговые входы  8 Постоянный ток через вход/выход  40 mAh с одного вывода и 500 mAh со всех выводов Флеш-память  16 Кб (ATmega168) или 32 Кб (ATmega328) при этом 2 Кб используются для загрузчика ОЗУ  1 Кб (ATmega168) или 2 Кб (ATmega328) EEPROM  512 байт (ATmega168) или 1 Кб (ATmega328) Тактовая частота  16 МГц Размеры  1.85 см x 4.2 см"
    }
    ,
    {
        id: 7,
        img: "https://avatars.mds.yandex.net/i?id=ff78efa1829fbdf7c9b766b36b813c92_l-5628812-images-thumbs&n=13",
        title: "Ардуино нано mini-USB",
        rate: 4.7,
        price: 62,
        category: "Ардуино нано",
        discription: "Рабочее напряжение (логическая уровень)  5 В Входное напряжение (рекомендуемое)  7-12 В Входное напряжение (предельное)  6-20 В Цифровые Входы/Выходы  14 (6 из которых могут использоваться как выходы ШИМ) Аналоговые входы  8 Постоянный ток через вход/выход  40 mAh с одного вывода и 500 mAh со всех выводов Флеш-память  16 Кб (ATmega168) или 32 Кб (ATmega328) при этом 2 Кб используются для загрузчика ОЗУ  1 Кб (ATmega168) или 2 Кб (ATmega328) EEPROM  512 байт (ATmega168) или 1 Кб (ATmega328) Тактовая частота  16 МГц Размеры  1.85 см x 4.2 см"
    },
{
        id: 8,
        img: "https://avatars.mds.yandex.net/i?id=e3f0f1503473f7cb8f24736cfda72c5eee6efb00-9042386-images-thumbs&n=13",
        title: "Bluetooth HC-06",
        rate: 4.9,
        price: 90,
        category: "Bluetooth модуль",
        discription: "Питание: 3,3В – 6 В Максимальный ток: 45 мА Скорость передачи данных: 1200–1382400 бод Рабочие частоты: 2,40 ГГц – 2,48ГГц Поддержка спецификации bluetooth: версия 2.1 Дальность связи: до 30 м"
    },
{
        id: 9,
        img: "https://static.chipdip.ru/lib/330/DOC005330167.jpg",
        title: "ATMEGA32A-AU",
        rate: 4.8,
        price: 125,
        category: "Микроконтроллер",
        discription: "8-битная архитектура megaAVR. Тактовая частота до 16 МГц, поддержка внешнего генератора импульсов. Производительность 16 MIPS при 16 МГц. 135 инструкций, большинство из которых выполняется за 1 такт. 2,5 КБ SRAM, 32 КБ Flash и 1 КБ EEPROM-памяти. Напряжение питания от 2,7 до 5,5 В."
    },
{
        id: 10,
        img: "https://a.allegroimg.com/original/11daa9/bc12d7c2409cb9ba0d646cc1cf7a/021-Modul-czujnika-wilgotnosci-i-temperatury-DHT11",
        title: "DHT11",
        rate: 4.2,
        price: 70,
        category: "Датчик",
        discription: "Питание: DC 3,5 – 5,5 В Ток питания: в режиме измерения 0.3mA. В режиме ожидания 60μA определение влажности 20–80 % с точностью 5 % определение температуры 0–50 °С с точностью 2 % частота опроса не более 1 Гц (не более одного раза в 1 сек.) размеры 15,5´12´5,5 мм"
    },
{
        id: 11,
        img: "https://avatars.mds.yandex.net/i?id=46d822daf5b8672b0aa4815267ea0825_l-9096591-images-thumbs&n=13",
        title: "Digispark",
        rate: 4,
        price: 98,
        category: "Микроконтроллер",
        discription: "Память программ (FLASH) — 8КБ, из них около 2КБ занимает загрузчик ОЗУ (SRAM) — 512 байт Энергонезависимая память (EEPROM) — 512 байт Тактовая частота 16МГц/16,5МГц (существуют и другие версии) USI (Universal Serial Interface) — универсальный последовательный интерфейс. ... 4-х канальный 10-разрядный АЦП"
    },
{
        id: 12,
        img: "https://avatars.mds.yandex.net/i?id=7e354be82d065b84c2611b78adafdc80_l-5232923-images-thumbs&n=13",
        title: "LCD1602",
        rate: 4.1,
        price: 300,
        category: "Дисплей",
        discription: "Символьный дисплей LCD1602 (Синяя подсветка) Контроллер: HD44780. Матрица: жидкокристаллическая LCD. Подсветка: светодиодная LED. Индикация: 2 строки по 16 символов Цвет символов: белый Цвет подсветки: синий Напряжение питания: 5 В"
    },
{
        id: 13,
        img: "https://avatars.mds.yandex.net/get-mpic/1808939/img_id1784853152419371980.jpeg/orig",
        title: "RFID-модуль RC522",
        rate: 4.8,
        price: 734,
        category: "Модуль",
        discription: "Основан на микросхеме MFRC522; Напряжение питания: 3.3V; Потребляемый ток :13-26mA Рабочая частота: 13.56MHz Дальность считывания: 0 ~ 60 мм Интерфейс: SPI, максимальная скорость передачи 10МБит/с Размер: 40мм х 60мм Чтение и запись RFID-меток."
    },
{
        id: 14,
        img: "https://avatars.mds.yandex.net/i?id=876b7f84bbd2648d8bd73b6a00d63c14_l-5542693-images-thumbs&n=13",
        title: "ATmega2560",
        rate: 4.6,
        price: 1700,
        category: "Микроконтроллер",
        discription: "Микроконтроллер  ATmega2560Рабочее напряжение  5ВВходное напряжение (рекомендуемое)  7-12В Входное напряжение (предельное)  6-20В Цифровые Входы/Выходы  54  (14 из которых могут работат также как выходы ШИМ) Аналоговые входы  16 Постоянный ток через вход/выход     40 mA Постоянный ток для вывода 3.3 В  50 mA Флеш-память  256 KB  (из которых 8 КB используются для загрузчика) ОЗУ  8 KB Энергонезависимая память  4 KB Тактовая частота  16 MHz"
    },
    {
        id: 15,
        img: "https://static.chipdip.ru/lib/708/DOC022708580.jpg",
        title: "Микросхема 74HC595",
        rate: 4,
        price: 76,
        category: "Микросхема",
        discription: "Разрядность параллельного входа (выхода) - 8 бит Фактор и количество пинов - DIP-16 и SO-16. Количество сигнальных линий для передачи данных - 3. Время установки - 20 нс Максимальная частота - 100 МГц Напряжение питания - 5 В Ток потребления - 40 мА"
    },
{
        id: 16,
        img: "https://avatars.mds.yandex.net/i?id=a18f6cffb88ca74bc7ac8a2e09b9d010_l-9151250-images-thumbs&n=13",
        title: "Модуль светодиодной матрицы 8*8",
        rate: 4.3,
        price: 370,
        category: "Дисплей",
        discription: "Рабочее напряжение: 5В Размер матрицы: 32мм * 32мм"
    },
{
        id: 17,
        img: "https://avatars.mds.yandex.net/i?id=07110acce2f7f62bcf235990191ee016_l-5211479-images-thumbs&n=13",
        title: "Подстроечный резистор",
        rate: 3.3,
        price: 22.6,
        category: "Резистор",
        discription: "Рабочее напряжение  5В Входное напряжение (рекомендуемое)  7-12В"
    },
{
        id: 18,
        img: "https://avatars.mds.yandex.net/i?id=4a61c0177ae80c3a66080538b59ab400_l-5070492-images-thumbs&n=13",
        title: "Фоторезистор 5516",
        rate: 3.9,
        price: 8,
        category: "Резистор",
        discription: "Размер: 5,0 мм х 2,0 мм Сопротивление освещенности: 5K - 10k Ом Сопротивление темноты: 0.5M Ohm. Максимальное напряжение (DC): 150V. Максимальная потребляемая мощность: 100 мВт Рабочая температура: от-30С ° до + 70С °"
    },
{
        id: 19,
        img: "https://ae04.alicdn.com/kf/HTB1MpAOXELrK1Rjy1zbq6AenFXaN.jpg",
        title: "Цифровой дисплей TM1637",
        rate: 4.1,
        price: 388,
        category: "Дисплей",
        discription: "Напряжение питания – 3.3 – 5.5 В; Ток потребления – 0.2 – 80 мА; Количество сегментов – 4 с десятичной точкой в каждом разряде; Размер индикаторов – 0.36 или 0.56 Наличие разделительных точек; Интерфейс – двухпроводной последовательный"
    },
{
        id: 20,
        img: "https://avatars.mds.yandex.net/i?id=c74df9de21730c6d53f68a42b82be670-3844047-images-thumbs&n=13",
        title: "EK-1674Module ",
        rate: 4.4,
        price: 800,
        category: "Источник питания",
        discription: "Рабочее напряжение 1,1…5В Минимальное рабочее напряжение 0,7В Допустимые напряжения на вх. -0,3…+6В Максимальный выходной ток (при вых. 3,3В) 420мА Максимальный выходной ток (при вых. 5В) 285мА Максимальный КПД 94% Диапазон рабочих температур -40°C ... +85°C Размер Д, Ш, В 17мм, 12мм, 5мм "
    },
{
        id: 21,
        img: "https://avatars.mds.yandex.net/i?id=d1c521bb0ed1aae7d1c057d2e3251019_l-8280929-images-thumbs&n=13",
        title: "Konnwei KW 310 ",
        rate: 4.9,
        price: 2200,
        category: "Автомобильная электроника",
        discription: " Дисплей: Монохромный ЖК экран (128х64 точек) - Рабочая температура: от 0 до 60 ℃ - Температура хранения: от -20 до 70 ℃ - Напряжение питания: от 8 до 18 В (от колодки OBDII) - Поддерживаемые протоколы: J1859-41.6, J1850-10.4, ISO9141, KWP2000 (ISO 14230) и CAN (ISO 11898) "
    },
{
        id: 22,
        img: "https://avatars.mds.yandex.net/i?id=474dd226e9be06bce205129ecfd421b7e3568255-10385933-images-thumbs&n=13",
        title: "MP323TX1 ",
        rate: 4,
        price: 340,
        category: "Пульт",
        discription: "Дополнительный однокнопочный передатчик (брелок) диапазона 433 МГц. Пульт дистанционного управления предназначен для совместной работы с беспроводными универсальными приемниками серии MP323RX диапазона 433 МГц "
    },
    {
        id: 3,
        img: "https://static.chipdip.ru/lib/770/DOC034770099.jpg",
        title: "Макетная плата 5*7 см",
        rate: 4.6,
        price: 90,
        category: "Макетная плата",
        discription: "Размер - 5х7 см. Количество точек - 432 точки."
    },
    {
        id: 23,
        img: "https://avatars.mds.yandex.net/i?id=0dace2c3aacc58a8828ef19bf7c68541799525a9-10595928-images-thumbs&n=13",
        title: "RDCH2-1 12V ",
        rate: 4.7,
        price: 1170,
        category: "Пульт",
        discription: "Напряжение питания: 12 вольт постоянного тока Нагрузка: до 220 вольт, до 10 ампер, 2 канала"
    },
{
        id: 24,
        img: "https://avatars.mds.yandex.net/i?id=7832ccfddceb0ef2df99dfe55f1420aa_l-4283343-images-thumbs&n=13",
        title: "STK0045-12-0.9A ",
        rate: 0,
        price: 300,
        category: "Устройство автоматики",
        discription: " Коммутируемое переменное напряжение: до 600 В; - Максимальный коммутируемый ток: 0.9 А; - Входной ток: 5 мА; - Напряжение изоляции: 5 КВ; - Температура модуля при токе 0.9 А (tокр 25°С): 85°C; - Ключ открыт при напряжении на входе: 11..15 В; "
    },
    {
        id: 4,
        img: "https://static.chipdip.ru/lib/840/DOC020840222.jpg",
        title: "ИК модуль препятствия",
        rate: 4,
        price: 370,
        category: "Приемник сигнала",
        discription: "Напряжение - 3.3-5 вольт.Тип излучателя - инфракрасный.Тип приемника - фотоэлектрический.Рабочая температура -40-+85."
    },
{
        id: 25,
        img: "https://elim.ru/images/detailed/1083/2850293-40.jpg",
        title: "OV10640CSP-S32V NXP ",
        rate: 3.3,
        price: 22314,
        category: "Устройство обработки видеосигнала",
        discription: "Дочерняя плата, модуль камеры OmniVision 10640 с сериализатором, для SBC-S32V234  "
    },
{
        id: 26,
        img: "https://static.chipdip.ru/lib/009/DOC004009996.jpg",
        title: "DUS2000-01-121001 ",
        rate: 2.5,
        price: 7200,
        category: "ЖК панель",
        discription: "Сенсорные экраны для LCD ( Touch Screen) for 9.0 wide -15.0"
    },
{
        id: 27,
        img: "https://static.chipdip.ru/lib/628/DOC040628813.jpg",
        title: "IM6101 ",
        rate: 4.2,
        price: 280,
        category: "Измерительная техника",
    },
{
        id: 28,
        img: "https://avatars.mds.yandex.net/i?id=8d721f286130aacd36240c4f3c9ee154_l-4452151-images-thumbs&n=13",
        title: "ARDUINO Pro Mini ",
        rate: 0,
        price: 490,
        category: "Микроконтроллер",
        discription: "ЭЛЕКТРОННЫЕ УСТРОЙСТВА\Электронные модули (ARDUINO) "
    },
{
        id: 29,
        img: "https://avatars.mds.yandex.net/get-mpic/5253277/img_id744280228108951869.jpeg/orig",
        title: "BM2037M ",
        rate: 3,
        price: 620,
        category: "Модуль",
        discription: "Усилители НЧ Простой и надежный усилитель НЧ класса Hi-Fi. Представляет собой одноканальный усилитель звука на микросхеме TDA2030. Воспроизводит весь спектр частот (ВЧ, СЧ, НЧ). Обладает минимальным коэффициентом нелинейных искажений и уровнем собственных шумов "
    },
{
        id: 30,
        img: "https://avatars.mds.yandex.net/i?id=87dab3334fc6e20db6c3ec49958ea97a_l-10981924-images-thumbs&n=13",
        title: "EM-102 ",
        rate: 0,
        price: 320,
        category: "Модуль",
        discription: "Плата расширения "
    },
{
        id: 31,
        img: "https://avatars.mds.yandex.net/i?id=eba19920825ae81fdb4df8642480cf59c669e4e0-5352988-images-thumbs&n=13",
        title: "EM-823 ",
        rate: 1.9,
        price: 70,
        category: "Модуль",
        discription: "ЭЛЕКТРОННЫЕ УСТРОЙСТВА\Электронные модули (ARDUINO) "
    },
{
        id: 32,
        img: "https://avatars.mds.yandex.net/get-mpic/5220597/img_id2035210105054070983.jpeg/orig",
        title: "EM-848 ",
        rate: 0,
        price: 90,
        category: "Модуль",
        discription: "ЭЛЕКТРОННЫЕ УСТРОЙСТВА\Электронные модули (ARDUINO) "
    },
{
        id: 33,
        img: "https://avatars.mds.yandex.net/i?id=a75e9ffb5ada917e999e26b184a80321_l-4969887-images-thumbs&n=13",
        title: "KY-028 ",
        rate: 4,
        price: 12500,
        category: "Модуль",
        discription: "ЭЛЕКТРОННЫЕ УСТРОЙСТВА\Электронные модули (ARDUINO)"
    },


    {id: 34,
        img: "https://static.chipdip.ru/lib/666/DOC038666633.jpg",
        title: "NM0105 ",
        rate: 4,
        price: 4890,
        category: "Модуль",
        discription: "Контроллер домашнего кинотеатра включает в себя: 5 аудиовходов - 4 стерео и один 6-канальный, регулировки громкости, тембров НЧ, ВЧ и СЧ одновременно для всех каналов, 3 предустановленных эквалайзера, 3D эффект. "
    },
{
        id: 35,
        img: "https://static.chipdip.ru/lib/615/DOC004615422.jpg",
        title: "NM7039box ",
        rate: 4.8,
        price: 2500,
        category: "Модуль",
        discription: "Этот кит-набор часов позволяет собрать настольные электронные часы-будильник на светодиодах своими руками. "
    },
{
        id: 36,
        img: "https://avatars.mds.yandex.net/i?id=5ad74875fc9b78c170648c1f66a13a6d_l-12684404-images-thumbs&n=13",
        title: "RS232 To TTL ",
        rate: 3.1,
        price: 140,
        category: "Модуль",
        discription: "ЭЛЕКТРОННЫЕ УСТРОЙСТВА\Электронные модули (ARDUINO) "
    },
{
        id: 37,
        img: "https://avatars.mds.yandex.net/i?id=c989561c6a9b01f0033b5b2dfd4f00c737c41f25-8496930-images-thumbs&n=13",
        title: "2305 ",
        rate: 3.7,
        price: 3400,
        category: "Модуль",
        discription: "This tiny little board is designed for controlling haptic motors. "
    },
{
        id: 38,
        img: "https://avatars.mds.yandex.net/i?id=439cbebef8a22d293fffec4a524a2c74_l-5229540-images-thumbs&n=13",
        title: "ШИМ регулятор ",
        rate: 5.0,
        price: 400,
        category: "Модуль",
        discription: "Напряжение: 5 В-16 В постоянного тока Непрерывный ток: 10A Максимальный ток: 20А (не более 10 секунд) Режим работы: ШИМ "
    },
{
        id: 39,
        img: "https://static.chipdip.ru/lib/076/DOC021076676.jpg",
        title: "Grove-White LED  ",
        rate: 4.0,
        price: 1000,
        category: "Световой индикатор",
        discription: "Raspberry Pi, Arduino, ROCK, STEM Education & Development Tools\Development Tools & Single Board Computers\LED Development Tools "
    },
{
        id: 40,
        img: "https://avatars.mds.yandex.net/i?id=5f886b8cac5429133c0b46440f8d36d85d8cb024c37ac87c-12484740-images-thumbs&n=13",
        title: "Блок СИД ",
        rate: 4.3,
        price: 370,
        category: "Световой индикатор",
        discription: "SA-LDYM Светодиодный блок 12-24VDC/AC, цвет желтый "
    },
{
        id: 41,
        img: "https://static.chipdip.ru/lib/296/DOC053296575.jpg",
        title: "MIKROE-4977 ",
        rate: 3.3,
        price: 7200,
        category: "Световой идентификатор",
        discription: "Raspberry Pi, Arduino, ROCK, STEM Education & Development Tools\Development Tools & Single Board Computers\LED Development Tools "
    },
{
        id: 42,
        img: "https://static.chipdip.ru/lib/426/DOC016426486.jpg",
        title: "MP3116nano ",
        rate: 4.9,
        price: 1700,
        category: "Модуль",
        discription: "Усилители НЧ D-класса MP3116nano простой и надежный высококачественный усилитель низкой частоты (НЧ) класса D. Модуль представляет собой универсальный усилитель звука малых габаритов, изготовленный на надежной интегральной микросхеме TPA3116. "
    },
{
        id: 43,
        img: "https://static.chipdip.ru/lib/098/DOC006098714.jpg",
        title: "TPA3116D2 (XH-M422) ",
        rate: 4.2,
        price: 1200,
        category: "Модуль",
        discription: "Аудио стерео усилитель XH-M422 с встроенным Bluetooth V4.0 интерфейсом Читает c карт памяти и USB накопителей. Выходная мощность: 2*50 Вт "
    },

    {
        id: 44,
        img: "https://static.chipdip.ru/lib/488/DOC007488261.jpg",
        title: "TLV320DAC3202EVM ",
        rate: 4.1,
        price: 14247,
        category: "Усилитель НЧ",
        discription: "Development Boards, Kits, Programmers\Evaluation Boards "
            },
        {
                id: 45,
                img: "https://static.chipdip.ru/lib/488/DOC007488031.jpg",
                title: "TPA301EVM ",
                rate: 4.0,
                price: 15200,
                category: "Усилитель НЧ",
                discription: "Development Boards, Kits, Programmers\Evaluation Boards "
            },
        {
                id: 46,
                img: "https://static.chipdip.ru/lib/488/DOC007488241.jpg",
                title: "XPCB-12BT, TDA7492P ",
                rate: 3.9,
                price: 4320,
                category: "Усилитель НЧ",
                discription: "Development Boards, Kits, Programmers\Evaluation Boards "
            },
        {
                id: 47,
                img: "https://elron.tech/wp-content/uploads/2024/03/elbear-ace-uno-1.png",
                title: "MK103 ",
                rate: 3.8,
                price: 2500,
                category: "Звуковой эффект",
                discription: "Светозвуковой блок. Четыре светодиода высокой интенсивности реагируют на любой звук, например, телефона или дверного звонка. Это устройство Вы можете использовать как звуковой индикатор, простой светозвуковой блок для музыки и т.д. "
            },
        {
                id: 48,
                img: "https://static.chipdip.ru/lib/973/DOC002973207.jpg",
                title: "Grove - Digital Light Sensor ",
                rate: 4.6,
                price: 1000,
                category: "Датчик",
                discription: "Это световой датчик использует фоторезистор GL5528 для обнаружения света окружающей среды. "
            },
        {
                id: 49,
                img: "https://static.chipdip.ru/lib/839/DOC003839268.jpg",
                title: "Grove - Temperature&Humidity Sensor Pro ",
                rate: 4.0,
                price: 2500,
                category: "Датчик",
                discription: "Grove – Temperature & Humidity Sensor Pro - это калиброванный цифровой модуль измерения температуры и влажности на основе датчика AM2302, который имеет более высокую точность и широкий диапазон измерения, чем DHT11. Он может быть использован для детектирования температуры т влажности окружающей среды, по средствам Grove интерфейса. "
            },
        {
                id: 50,
                img: "https://avatars.mds.yandex.net/i?id=ecef295b28be8bc8096df1fe3bd7a629_l-10653027-images-thumbs&n=13",
                title: "Flame Sensor ",
                rate: 3.6,
                price: 240,
                category: "Датчик ",
                discription: "Flame Sensor - это простой в использование датчик обнаружения пламени, широко применяются в робототехнике и системах автоматизации, подходит для Arduino проектов. "
            },
        {
                id: 51,
                img: "https://avatars.mds.yandex.net/i?id=cff8369b986054326da19f35f02a5e10_l-5440253-images-thumbs&n=13",
                title: "WS2812 8x32",
                rate: 4.2,
                price: 1500,
                category: "Дисплей",
                discription: "WS2811 SMD5050 RGB светодиодный, каждый светодиодный встроенный (встроенный) IC WS2811, поэтому каждый светодиодный эффект lignting можно контролировать, каждый rgb светодиодный является цифровым адресуемым."
            },
        {
                id: 52,
                img: "https://avatars.mds.yandex.net/i?id=7574681fc7ece206e90caef5e663e576d6a786fa-4902787-images-thumbs&n=13",
                title: "WS2812B 8x8",
                rate: 4.9,
                price: 427.9,
                category: "Дисплей",
                discription: "WS2811 SMD5050 RGB светодиодный, каждый светодиодный встроенный (встроенный) IC WS2811, поэтому каждый светодиодный эффект lignting можно контролировать, каждый rgb светодиодный является цифровым адресуемым."
            },
        {
                id: 53,
                img: "https://ae04.alicdn.com/kf/Sb78cea869b8340b28262f82774663a5ed.jpg_480x480.jpg",
                title: "WS2812B 8x8 16x16",
                rate: 4.6,
                price: 1470,
                category: "Дисплей",
                discription: "WS2811 SMD5050 RGB светодиодный, каждый светодиодный встроенный (встроенный) IC WS2811, поэтому каждый светодиодный эффект lignting можно контролировать, каждый rgb светодиодный является цифровым адресуемым."
            },
        {
        id: 54,
                img: "https://mcustore.ru/img/site/modul-svyazi-nrf24l01_s4.jpg",
                title: "NRF24L01",
                rate: 4.7,
                price: 57.55,
                category: "Модуль",
                discription: "Радиомодуль приемник/передатчик Напряжение питания: 1,9 - 3. Скорость передачи данных до 2 МБи Рабочая частота 2.4 ГГц"
            },
        {
                id: 55,
                img: "https://ir.ozone.ru/s3/multimedia-v/c1000/6070741003.jpg",
                title: "Батарейный отсек 1×18650",
                rate: 4.9,
                price: 40,
                category: "Аккумуляторы",
                discription: "Модель: Батарейный отсек 1×18650 Форм-фактор ячеек: 18650 Количество ячеек: 1 Выходное напряжение: 3,7 В Длина выходных проводов: 10 см Материал: ABS-пластик Цвет: чёрный"
            },
        {
                id: 56,
                img: "https://tixer.ru/upload/iblock/e11/346a22d3c32411e8a5fc0014d1164418_57162f6e6ad44789a159bdf00d5dcec5.jpg",
                title: "Батарейный отсек 2×18650",
                rate: 4.9,
                price: 70,
                category: "Аккумуляторы",
                discription: "Модель: Батарейный отсек 2×18650 Форм-фактор ячеек: 18650 Количество ячеек: 1 Выходное напряжение: 3,7 В Длина выходных проводов: 10 см Материал: ABS-пластик Цвет: чёрный"
            },
        {
                id: 57,
                img: "https://avatars.mds.yandex.net/i?id=83282b6c1c4618fd60372c1998c885b4_l-8283357-images-thumbs&n=13",
                title: "Батарейный отсек 3×18650",
                rate: 4,
                price: 100,
                category: "Аккумуляторы",
                discription: "Модель: Батарейный отсек 3×18650 Форм-фактор ячеек: 18650 Количество ячеек: 1 Выходное напряжение: 3,7 В Длина выходных проводов: 10 см Материал: ABS-пластик Цвет: чёрный"
            },
        
        {
                id: 58,
                img: "https://avatars.mds.yandex.net/i?id=eb50fea81b44509e2d4a6e1722124e88_l-4054754-images-thumbs&n=13",
                title: "Arduino совместимый Uno R3",
                rate: 5.0,
                price: 440,
                category: "Модуль",
                discription: "ЭЛЕКТРОННЫЕ УСТРОЙСТВА\Электронные модули (ARDUINO) "
            },
        {
                id: 59,
                img: "https://avatars.mds.yandex.net/i?id=15b38fb80113c9ae51cdc6718177258a_l-11908484-images-thumbs&n=13",
                title: "MT3608",
                rate: 3.9,
                price: 12500,
                category: "Модуль",
                discription: "MT3608 – миниатюрный модуль повышающего преобразователя постоянного тока. Выходное напряжение на модуле MT3608 подстраивается триммером. Выходное напряжение не может быть меньше входного."
            },
        {
                id: 60,
                img: "https://cdn1.ozone.ru/s3/multimedia-s/6480083284.jpg",
                title: "JJX-KG06",
                rate: 4.1,
                price: 600,
                category: "Модуль",
                discription: "Комплектация Реле двух канальный на частоте 433Мгц 12В 1 шт. Корпус 1 шт. Пульт управления 1 шт. "
            }
]

export default function Home() {
    // const {data, error, isLoading} = useGetAllProductsQuery();
    
    const [dataModal, setDataModal] = useState([]);
    const [openModal,setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    const handleDataModal = (product) => {
        setDataModal(product)
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(data);

    // Функция для поиска товара по имени
    function searchProductByName(productName) {
        return data.filter(product => 
            product.title.toLowerCase().includes(productName.toLowerCase())
        );
    }
    var tmp;
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        
        // Обновляем список отфильтрованных товаров
        setFilteredProducts(searchProductByName(value));
    };

    const handleReset = () => {
        setSearchTerm('');
        setFilteredProducts([]); // Сброс до изначального списка
    };

    tmp = searchTerm;

    console.log(tmp);
    
    return (
        <div className="home__container">
            <div>
                <div className="search__block">
                    <RiSearchLine />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Введите название товара"
                    />
                    <button onClick={handleReset}>Сбросить поиск</button>
                </div>
                
            
            <div className="catalog__block">
                {filteredProducts?.map((product,index) => (
                    <Card
                    title={product.title}
                    img={product.img}
                    price={product.price}
                    rate={product.rate}
                    key={index} 
                    id={product.id}
                    product={product}
                    handleDataModal={handleDataModal}
                    handleOpenModal={handleOpenModal}
                    openModal={openModal}
                /> 
                ))}
            </div>
            </div>
            {/* модальное окно */}
            
                {
                    openModal ?  
                        <div className="blur__block">
                            <Modal dataModal={dataModal} handleOpenModal={handleOpenModal}/>
                        </div>
                    : ""
                    
                }
            
            
            {
                      
                <div className="catalog__block">
                    
                    {
                        data?.map((product,index) => {
                            return (
                            // <div key={index} onClick={() => {
                            //     handleDataModal(product)
                            //     handleOpenModal(!openModal)
                            // }}>
                                <Card
                                     title={product.title}
                                     img={product.img}
                                     price={product.price}
                                     rate={product.rate}
                                     key={index} 
                                     id={product.id}
                                     product={product}
                                     handleDataModal={handleDataModal}
                                     handleOpenModal={handleOpenModal}
                                     openModal={openModal}
                                 /> 
                        // </div>
                        )})
                    }
                </div>
            }
        </div>
    );
}

