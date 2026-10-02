'use client'; // จำเป็นต้องใช้เพราะมีการใช้ State และ Event Listener ใน Client Side

import { useState } from 'react';
import './style.css'; // นำเข้าไฟล์ CSS ที่แยกไว้

// ==================================================
// ข้อมูลอัลบั้ม (ลอกมาจากโค้ดเดิม)
// ==================================================
const bandAlbums = [
    {
        title: "โล โซไซตี้", english: "Lo Society", year: "2539", artist: "LOSO", cover: "001.jpg",
        songs: [
            { name: "คุณเธอ", image: "songs/kunther.jpg" },
            { name: "I Wanna Love You", image: "songs/iwannaloveyou.jpg" },
            { name: "อยากบอกว่าเสียใจ", image: "songs/yakbokwasejai.jpg" },
            { name: "ฉันหรือเธอ (ที่เปลี่ยนไป)", image: "songs/chanruether.jpg" },
            { name: "อยากลอง", image: "songs/yaklong.jpg" },
            { name: "ไม่ต้องห่วงฉัน", image: "songs/maitonghuang.jpg" },
            { name: "คุณหรือใคร?", image: "songs/khunruekhrai.jpg" },
            { name: "ดาว", image: "songs/dao.jpg" },
            { name: "เราและนาย", image: "songs/raolainai.jpg" },
            { name: "ขับรถให้มันตามกฎ", image: "songs/khaprot.jpg" },
            { name: "คน (2)", image: "songs/khon2.jpg" },
            { name: "ไม่ต้องห่วงฉัน (โดด Version)", image: "songs/maitonghuang_dod.jpg" },
            { name: "ไม่ตายหรอกเธอ", image: "songs/maitaai.jpg" },
            { name: "ฉันหรือเธอ (ที่เปลี่ยนไป) (Acoustic Version)", image: "songs/chanruether_acoustic.jpg" }
        ]
    },
    {
        title: "เอ็นเตอร์เทนเม้นท์", english: "Entertainment", year: "2541", artist: "LOSO", cover: "002.jpg",
        songs: [
            { name: "อยากเห็นหน้าคุณ", image: "songs/yaakhenna.jpg" },
            { name: "คนไม่ดี", image: "songs/khonmaidee.jpg" },
            { name: "อะไรก็ยอม", image: "songs/araikoryom.jpg" },
            { name: "ซมซาน", images: ["songs/somsan.jpg", "songs/somsan2.jpg"] },
            { name: "เงิน", image: "songs/ngern.jpg" },
            { name: "เลิกแล้วต่อกัน", image: "songs/loeklaewtorkan.jpg" },
            { name: "ด้วยตัวเราเอง", image: "songs/duaytawraoeng.jpg" },
            { name: "สบายอยู่แล้ว", image: "songs/sabairulaew.jpg" },
            { name: "รักเมืองไทย", image: "songs/rakmuangthai.jpg" },
            { name: "แม่", image: "songs/mae.jpg" },
            { name: "หนีเมือง หนีเธอ", image: "songs/neemuang_neether.jpg" }
        ]
    },
    {
        title: "Rock & Roll", english: "Rock & Roll", year: "2542", artist: "LOSO", cover: "003.jpg",
        songs: [
            { name: "Rock & Roll", image: "songs/rockandroll.jpg" },
            { name: "ไปเลย", image: "songs/pailei.jpg" },
            { name: "ใจสั่งมา", image: "songs/jaisangma.jpg" },
            { name: "สาหัส", image: "songs/sahas.jpg" },
            { name: "ครึ่งทาง", image: "songs/khruengthang.jpg" },
            { name: "ท้าวสุรนารี", image: "songs/thaosuranaari.jpg" },
            { name: "ดีไหมเอ่ย?", image: "songs/deemai.jpg" },
            { name: "เพื่อนใจ", image: "songs/peueanjai.jpg" },
            { name: "เจ็บใจ", image: "songs/jepjai.jpg" },
            { name: "คืนจันทร์", image: "songs/kuenjan.jpg" },
            { name: "เส้นทางชีวิต", image: "songs/sen_thang_chiwit.jpg" },
            { name: "ประเสริฐ", image: "songs/prasert.jpg" }
        ]
    },
    {
        title: "Losoland", english: "Losoland", year: "2544", artist: "LOSO", cover: "004.jpg",
        songs: [
            { name: "เข้ามาเลย", image: "songs/khaamaalei.jpg" },
            { name: "ไม่ว่าง", image: "songs/maiwang.jpg" },
            { name: "หมาเห่าเครื่องบิน", image: "songs/mahaokhrueangbin.jpg" },
            { name: "ให้รู้ว่ายังรักกัน", image: "songs/hairuwayrakkan.jpg" },
            { name: "คนบ้า", image: "songs/khonba.jpg" },
            { name: "มอ'ไซค์รับจ้าง", image: "songs/mosai_rabjang.jpg" },
            { name: "อิสระเสรี", image: "songs/israseri.jpg" },
            { name: "Baby I Love You", image: "songs/babyiloveyou.jpg" },
            { name: "หมูในอวย", image: "songs/muinuay.jpg" },
            { name: "รอยยิ้มนนักสู้", image: "songs/roiyimnaksoo.jpg" },
            { name: "อย่าเห็นแก่ตัว", image: "songs/yahenkatu.jpg" }
        ]
    },
    {
        title: "ปกแดง", english: "The Red Album", year: "2544", artist: "LOSO", cover: "005.jpg",
        songs: [
            { name: "พันธ์ทิพย์", image: "songs/pantip.jpg" },
            { name: "5 นาที", image: "songs/5natee.jpg" },
            { name: "เคยรักฉันบ้างไหม", image: "songs/koeyrakchanbangmai.jpg" },
            { name: "ฝนตกที่หน้าต่าง", image: "songs/fontok.jpg" },
            { name: "ไม่คิดนอกใจ", image: "songs/maikidnokjai.jpg" },
            { name: "เธอชอบนาย", image: "songs/therchopnai.jpg" },
            { name: "อยากเปลี่ยนใจเธอ", image: "songs/yaakplianjaither.jpg" },
            { name: "ทุกลมหายใจ", image: "songs/thuklomhaijai.jpg" },
            { name: "ลาจากเธอ", image: "songs/lajakther.jpg" },
            { name: "โชคดี", image: "songs/chokdee.jpg" }
        ]
    }
];

const specialAlbums = [
    {
        title: "จักรยานสีแดง", english: "Loso Special", year: "2540", artist: "LOSO", cover: "006.jpg",
        songs: [
            { name: "จักรยานสีแดง", image: "songs/jakrayanseedaeng.jpg" },
            { name: "โลกใบใหม่", image: "songs/lokbaiemai.jpg" },
            { name: "แทบขาดใจ", image: "songs/thaepkhatjai.jpg" },
            { name: "เคยบอกว่ารักกัน", image: "songs/koeybokwarakkan.jpg" },
            { name: "เด็กเอ๋ยเด็กน้อย", image: "songs/dekeydeknoi.jpg" }
        ]
    }
];

const soloAlbums = [
    {
        title: "7 สิงหา", english: "7 Singha", year: "2546", artist: "SEK LOSO", cover: "007.jpg",
        songs: [
            { name: "Happy Birthday", image: "songs/happybirthday.jpg" },
            { name: "เกลียดตัวเอง", image: "songs/kliattuaeng.jpg" },
            { name: "พรุ่งนี้", image: "songs/phrungnee.jpg" },
            { name: "คู่เธอ", image: "songs/kuther.jpg" },
            { name: "7 สิงหา", image: "songs/7singha.jpg" },
            { name: "ผู้ชนะ", image: "songs/phuchana.jpg" },
            { name: "เธอจะรู้บ้างไหม", image: "songs/therjarubangmai.jpg" },
            { name: "หยุดสงคราม", image: "songs/yut_songkhram.jpg" },
            { name: "จงทำดี", image: "songs/jongthamdee.jpg" }
        ]
    },
    {
        title: "เบิร์ด - เสก", english: "Bird - Sek", year: "2547", artist: "BIRD & SEK LOSO", cover: "017.jpg",
        songs: [
            { name: "อมพระมาพูด", image: "songs/omphramaphut.jpg" },
            { name: "คุณรู้ไหมครับ", image: "songs/khunrumaikhrab.jpg" },
            { name: "คอนฟิวส์ (Confused) ซะ", image: "songs/confused.jpg" },
            { name: "รับ (แฟนเธอ) ไม่ได้", image: "songs/rabfanthermai_dai.jpg" },
            { name: "นานเท่าไรก็รอ", image: "songs/nantaoraikoror.jpg" },
            { name: "สองเป็นหนึ่ง", image: "songs/songpenneung.jpg" },
            { name: "ซมซาน", image: "songs/somsan_birdsek.jpg" },
            { name: "สวยไม่เกรงใจใคร", image: "songs/suaymaikrengjai.jpg" },
            { name: "ขอบใจจริง ๆ", image: "songs/khopjaichingching_birdsek.jpg" },
            { name: "ใจสั่งมา", image: "songs/jaisangma_birdsek.jpg" },
            { name: "สบาย สบาย", image: "songs/sabaisabai_birdsek.jpg" }
        ]
    },
    {
        title: "The Collection", english: "Sek Loso The Collection", year: "2548", artist: "SEK LOSO", cover: "008.jpg",
        songs: [
            { name: "ฉันไม่สำออย", image: "songs/collection_chanmai_samoi.jpg" },
            { name: "โคราชบูลส์ (ไม่น้อยกว่าใคร)", image: "songs/collection_koratblues.jpg" },
            { name: "แม้ว่า", image: "songs/collection_maewa.jpg" },
            { name: "อมพระมาพูด", image: "songs/collection_omphramaphut.jpg" },
            { name: "ข้ามฉันไปก่อน", image: "songs/collection_khamchanpaikon.jpg" },
            { name: "พันธ์ทิพย์ (Punk Rock Version)", image: "songs/collection_pantip_punk.jpg" },
            { name: "ซมซาน", image: "songs/somsan.jpg" },
            { name: "คุณรู้ไหมครับ", image: "songs/khunrumaikhrab.jpg" },
            { name: "คอนฟิวส์ซะ", image: "songs/confused.jpg" },
            { name: "เคยรักฉันบ้างไหม", image: "songs/koeyrakchanbangmai.jpg" },
            { name: "ฝนตกที่หน้าต่าง", image: "songs/fontok.jpg" },
            { name: "เท่อย่างไทย", image: "songs/collection_theoyangthai.jpg" },
            { name: "คืนจันทร์", image: "songs/kuenjan.jpg" },
            { name: "ใจสั่งมา", image: "songs/jaisangma.jpg" },
            { name: "ผู้ชนะ", image: "songs/phuchana.jpg" }
        ]
    },
    {
        title: "For God's Sake", english: "For God's Sake", year: "2550", artist: "SEK LOSO", cover: "018.jpg",
        songs: [
            { name: "Eat You", image: "songs/forgodsake_eatyou.jpg" },
            { name: "I Wish I Could", image: "songs/forgodsake_regency.jpg" },
            { name: "In The Air", image: "songs/forgodsake_intheair.jpg" },
            { name: "Regency", image: "songs/forgodsake_regency.jpg" },
            { name: "Exactly", image: "songs/forgodsake_regency.jpg" },
            { name: "Tiger", image: "songs/forgodsake_tiger.jpg" },
            { name: "Just Wonder", image: "songs/forgodsake_regency.jpg" },
            { name: "She's So Sexy", image: "songs/forgodsake_regency.jpg" },
            { name: "English School", image: "songs/forgodsake_regency.jpg" },
            { name: "All I Need Is You", image: "songs/forgodsake_regency.jpg" },
            { name: "Love Is My Religion", image: "songs/forgodsake_regency.jpg" }
        ]
    },
    {
        title: "Black & White", english: "Black & White", year: "2549", artist: "SEK LOSO", cover: "009.jpg",
        songs: [
            { name: "แอน (Do you know what I mean?)", image: "songs/blackwhite_ann.jpg" },
            { name: "คืนวันเสาร์", image: "songs/blackwhite_kuenwansao.jpg" },
            { name: "คิดได้ยังไง", image: "songs/blackwhite_kidlaeyangngai.jpg" },
            { name: "14 อีกครั้ง", image: "songs/blackwhite_14aikkhrang.jpg" },
            { name: "เอาใจไม่เป็น", image: "songs/blackwhite_aojai.jpg" },
            { name: "ทนไม่ไหว (บ้า)", image: "songs/blackwhite_thonmaiwai.jpg" },
            { name: "9:40", image: "songs/blackwhite_940.jpg" },
            { name: "เหงา คิดถึง รอ", image: "songs/blackwhite_ngaokidthuengro.jpg" },
            { name: "อย่างนั้นหรือ", image: "songs/blackwhite_yangnanrue.jpg" },
            { name: "ต้องทำได้", image: "songs/blackwhite_tongthamdaai.jpg" },
            { name: "เมืองกาญจน์", image: "songs/blackwhite_mueangkarn.jpg" }
        ]
    },
    {
        title: "SEK LOSO", english: "เสก โลโซ", year: "2552", artist: "SEK LOSO", cover: "010.jpg",
        songs: [
            { name: "Missed call", image: "songs/sekloso_missedcall.jpg" },
            { name: "รักกันต้องอดทน", image: "songs/sekloso_rakkanthodthon.jpg" },
            { name: "ไม่ยอมตัดใจ", image: "songs/sekloso_maiyomtatjai.jpg" },
            { name: "เจ็บหัวใจ", image: "songs/sekloso_jephuajai.jpg" },
            { name: "เพื่อเธอคนเดียว", image: "songs/sekloso_phuetherkondeaw.jpg" },
            { name: "โลภะ โทสะ โมหะ", image: "songs/sekloso_lobhatosa.jpg" },
            { name: "London", image: "songs/forgodsake_regency.jpg" },
            { name: "หากมันทำให้เธอเป็นสุข", image: "songs/sekloso_hakmanthamhaetherpensuk.jpg" },
            { name: "เก็บดาวมาให้เธอ", image: "songs/sekloso_kepdaomahaether.jpg" },
            { name: "อย่ายอมแพ้ (โดยที่ยังไม่ต่อสู้)", image: "songs/sekloso_yayomphae.jpg" },
            { name: "ต้องมนตร์", image: "songs/sekloso_tongmon.jpg" },
            { name: "น้องเค้าไม่เกี่ยว", image: "songs/sekloso_nongkhaomaikiao.jpg" },
            { name: "คิดถึงบ้านเกิด", image: "songs/sekloso_kidthuengbankerd.jpg" }
        ]
    },
    {
        title: "Plus", english: "Plus", year: "2553", artist: "SEK LOSO", cover: "011.jpg",
        songs: [
            { name: "จ๋า Feat. ขัน ไทยเทเนี่ยม", image: "songs/plus_jaa.jpg" },
            { name: "เจ้าชู้", image: "songs/plus_jaochu.jpg" },
            { name: "ไม่ใช่ฉันใช่ไหม Feat. ดา เอ็นโดรฟิน", image: "songs/plus_maichaichan.jpg" },
            { name: "คนไทยหัวใจเดียวกัน", image: "songs/plus_khonthaihuajaidieokan.jpg" },
            { name: "รวมเป็นไทย", image: "songs/plus_ruampenthai.jpg" },
            { name: "ฝันที่อยู่ไกล (Live Version)", image: "songs/plus_fanthiuyulai_live.jpg" },
            { name: "ซมซาน (Live Version)", image: "songs/somsan.jpg" },
            { name: "คืนจันทร์ (Live Version)", image: "songs/kuenjan.jpg" },
            { name: "อมพระมาพูด", image: "songs/collection_omphramaphut.jpg" },
            { name: "ไม่ยอมตัดใจ (Acoustic Version)", image: "songs/sekloso_maiyomtatjai.jpg" },
            { name: "ขอบใจจริง ๆ", image: "songs/khopjaichingching_birdsek.jpg" }
        ]
    },
    {
        title: "ใหม่", english: "Mai", year: "2553", artist: "SEK LOSO", cover: "012.jpg",
        songs: [
            { name: "โลโซ 3 ช่า", image: "songs/mai_loso3cha.jpg" },
            { name: "หน้าแตก Feat. มาช่า วัฒนพานิช & ไซริล", image: "songs/mai_naatek.jpg" },
            { name: "หัวใจขี้กลัว", image: "songs/mai_huajaikiklua.jpg" },
            { name: "ก้อนเนื้อข้างซ้าย", image: "songs/mai_konnuakhoangsai.jpg" },
            { name: "ควบคุมหัวใจตัวเองไม่ได้", image: "songs/mai_khuabkhumhuajai.jpg" },
            { name: "เว้นฉันไว้สักคน", image: "songs/mai_wenchanwaisakkhon.jpg" },
            { name: "นิพพาน", image: "songs/forgodsake_regency.jpg" },
            { name: "เด็ก ตจว.", image: "songs/mai_dektorjorwor.jpg" },
            { name: "พ่อแม่กลับบ้านหน่อย Feat. เล็ก คาราบาว", image: "songs/mai_phormaeklapbaan.jpg" },
            { name: "ฉันรักประเทศไทย", image: "songs/mai_chanrakprathetthai.jpg" },
            { name: "(ฉันคิดฯ) ฐานะอะไร", image: "songs/mai_thanaarai.jpg" },
            { name: "Sexy...โคตร", image: "songs/mai_sexykot.jpg" },
            { name: "ผ่านมาผ่านไป", image: "songs/mai_phanmaphanpai.jpg" }
        ]
    },
    {
        title: "Love Songs Acoustic Live", english: "@ Yess Records Vol.1", year: "2554", artist: "SEK LOSO", cover: "013.jpg",
        songs: [
            { name: "ซมซาน", image: "songs/lovesongs_somzan.jpg" },
            { name: "อยากให้รู้ว่าเหงา", image: "songs/lovesongs_yakruwanga.jpg" },
            { name: "แพ้ใจ", image: "songs/lovesongs_paejai.jpg" },
            { name: "Woman", image: "songs/lovesongs_woman.jpg" },
            { name: "ใจนักเลง", image: "songs/lovesongs_jainakleng.jpg" },
            { name: "ห่วงใย", image: "songs/lovesongs_huanghai.jpg" },
            { name: "สุดใจ", image: "songs/lovesongs_sudjai.jpg" },
            { name: "เสือร้องไห้", image: "songs/lovesongs_suearonghai.jpg" },
            { name: "เพียงชายคนนี้ (ไม่ใช่ผู้วิเศษ)", image: "songs/lovesongs_phiangchaikhonnee.jpg" },
            { name: "ทะเลใจ", image: "songs/lovesongs_thalejai.jpg" },
            { name: "คืนรัง", image: "songs/lovesongs_kuenrang.jpg" },
            { name: "ขอเวลาก่อนได้ไหม", image: "songs/lovesongs_korweela.jpg" },
            { name: "Love Song", image: "songs/forgodsake_regency.jpg" },
            { name: "ใจโทรมๆ", image: "songs/lovesongs_jaitrom.jpg" },
            { name: "กลับคำเสีย", image: "songs/lovesongs_klapkhamsia.jpg" }
        ]
    },
    {
        title: "I'm Back", english: "I'm Back", year: "2556", artist: "SEK LOSO", cover: "014.jpg",
        songs: [
            { name: "Rock n' Roll star", image: "songs/imback_rocknrollstar.jpg" },
            { name: "แรงส์กว่าเธอก็เจอมาแล้ว", image: "songs/imback_raengkwa.jpg" },
            { name: "หาก", image: "songs/imback_hak.jpg" },
            { name: "ขอตายในอ้อมกอดเธอ", image: "songs/imback_kortai.jpg" },
            { name: "พ่อฉันเป็นตำรวจ", image: "songs/imback_phochan.jpg" },
            { name: "ผู้นำอยู่ที่ใจ", image: "songs/imback_phunam.jpg" },
            { name: "ไม่อาจปฏิเสธ", image: "songs/imback_maiat.jpg" },
            { name: "เอาอยู่", image: "songs/imback_aooyu.jpg" },
            { name: "หลอน", image: "songs/imback_lon.jpg" },
            { name: "เยอะ", image: "songs/imback_yoe.jpg" }
        ]
    },
    {
        title: "Part 2", english: "Part 2", year: "2558", artist: "SEK LOSO", cover: "015.jpg",
        songs: [
            { name: "โสดตอน 40", image: "songs/part2_sodton40.jpg" },
            { name: "แท๊กซี่", image: "songs/part2_taxi.jpg" },
            { name: "เธอเคยเป็นที่หนึ่ง", image: "songs/part2_terkoei.jpg" },
            { name: "แม้เราต้องจากกัน", image: "songs/part2_mairao.jpg" },
            { name: "ยอดดวงใจดวงน้อย ๆ ของพ่อ", image: "songs/part2_yodduangjai.jpg" },
            { name: "อย่าถอยแม้แต่ก้าวเดียว", image: "songs/part2_yathoi.jpg" },
            { name: "แอ๊ด คาราบาว", image: "songs/part2_addcarabao.jpg" },
            { name: "ออกจากชีวิตฉันไปเสียที", image: "songs/part2_okjaakchiwit.jpg" },
            { name: "อยู่ตลอดไป", image: "songs/part2_yuutalodpai.jpg" },
            { name: "แม้เราต้องจากกัน (Acoustic guitar version)", image: "songs/part2_mairao.jpg" }
        ]
    }
];

const epAlbums = [
    {
        title: "Love & Peace", english: "Love & Peace", year: "2557", artist: "SEK LOSO", cover: "016.jpg",
        songs: [
            { name: "Harley Thailand", image: "songs/lovepeace_harleythailand.jpg" },
            { name: "I Love You (feat. ติ๊ก ชิโร่)", image: "songs/lovepeace_iloveyou.jpg" },
            { name: "เธอยังมีฉัน", image: "songs/lovepeace_teryangmichan.jpg" },
            { name: "คิดถึงจัง", image: "songs/lovepeace_kidthuengjang.jpg" },
            { name: "รักและสันติ", image: "songs/lovepeace_raklaesanti.jpg" }
        ]
    }
];

const anniversaryAlbums = [
    {
        title: "20 ปี โลโซ เราและนาย", english: "20 Pee Loso Rao Lae Nai", year: "2559", artist: "Various Artists", cover: "019.jpg",
        songs: [
            { name: "ซาตาน — เสก โลโซ feat. กรีน อัษฎาพร", image: "songs/20year_satarn.jpg" },
            { name: "อ้อนวอน — เสก โลโซ", image: "songs/20year_onwon.jpg" },
            { name: "ใจสั่งมา — แอ๊ด คาราบาว", image: "songs/jaisangma_birdsek.jpg" },
            { name: "คืนจันทร์ — อ.ไข่ มาลีฮวนน่า", image: "songs/kuenjan.jpg" },
            { name: "ฉันหรือเธอ (ที่เปลี่ยนไป) — Blackhead", image: "songs/chanruether.jpg" },
            { name: "I Wanna Love You — โป่ง หิน เหล็ก ไฟ & The Sun", image: "songs/iwannaloveyou.jpg" },
            { name: "เลิกแล้วต่อกัน — แสตมป์ อภิวัชร์", image: "songs/loeklaewtorkan.jpg" },
            { name: "เคยรักฉันบ้างไหม — ติ๊ก ชิโร่", image: "songs/koeyrakchanbangmai.jpg" },
            { name: "ซมซาน — หงา คาราวาน", image: "songs/somsan.jpg" },
            { name: "มอ'ไซค์รับจ้าง — หมู พงษ์เทพ", image: "songs/mosai_rabjang.jpg" },
            { name: "แม่ — เทียรี่ คาราบาว", image: "songs/mae.jpg" },
            { name: "รักเธอจนวันตาย — เสก โลโซ", image: "songs/20year_rakterjonwantai.jpg" },
            { name: "อาจเป็นเพราะรักเธอ — เสก โลโซ", image: "songs/20year_atpenphrorak.jpg" },
            { name: "อะไรก็ยอม — สิงโต นำโชค", image: "songs/araikoryom.jpg" },
            { name: "14 อีกครั้ง — เล็ก คาราบาว", image: "songs/blackwhite_14aikkhrang.jpg" },
            { name: "หมาเห่าเครื่องบิน — ปุ๊ อัญชลี", image: "songs/mahaokhrueangbin.jpg" },
            { name: "ผู้ชนะ — อินคา", image: "songs/phuchana.jpg" },
            { name: "ฝนตกที่หน้าต่าง — ฝน ธนสุนทร & หลิว อาจารียา", image: "songs/fontok.jpg" },
            { name: "จักรยานสีแดง — แสน นากา", image: "songs/jakrayanseedaeng.jpg" },
            { name: "ไม่ตายหรอกเธอ — The Skipper", image: "songs/maitaai.jpg" },
            { name: "เราและนาย — มอส ปฏิภาณ & แท่ง ศักดิ์สิทธิ์", image: "songs/raolainai.jpg" },
            { name: "รักเธอจนวันตาย (Acoustic Version) — เสก โลโซ", image: "songs/20year_rakterjonwantai.jpg" }
        ]
    }
];

// ==================================================
// Component ย่อยสำหรับแสดงการ์ดอัลบั้ม
// ==================================================
function AlbumCard({ album, onSongClick }) {
    const [imgError, setImgError] = useState(false);

    return (
        <article className="album-card">
            <div className="cover-box">
                {/* ถ้ารูปไม่ Error ให้แสดงรูปปกติไปเลย ถ้า Error ค่อยแสดงกล่องข้อความ */}
                {!imgError ? (
                    <img
                        src={`/covers/${album.cover}`} 
                        alt={album.title}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="cover-fallback" style={{ display: 'flex' }}>
                        {album.title}
                    </div>
                )}
            </div>

            <div className="album-info">
                <div className="album-year">{album.year || ""}</div>
                <div className="album-title">{album.title}</div>
                <div className="album-artist">{album.artist}</div>
            </div>

            <details className="track-details">
                <summary>ดูรายชื่อเพลง</summary>
                <ol className="track-list">
                    {album.songs && album.songs.length > 0 ? (
                        album.songs.map((song, index) => (
                            <li
                                key={index}
                                className="song-item"
                                style={{ cursor: "pointer" }}
                                onClick={() => onSongClick(song)}
                            >
                                <span className="track-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span>{song.name}</span>
                            </li>
                        ))
                    ) : (
                        <div className="empty">ยังไม่มีรายชื่อเพลง</div>
                    )}
                </ol>
            </details>
        </article>
    );
}

// ==================================================
// Component หลัก
// ==================================================
export default function LosoDiscographyPage() {
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [modalImage, setModalImage] = useState(null);
    const [multipleImages, setMultipleImages] = useState([]);

    // ฟังก์ชันสำหรับกรองผลลัพธ์
    const searchFilter = (album) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        const combinedText = `${album.title} ${album.artist} ${album.year} ${album.songs?.map(s => s.name).join(" ")}`.toLowerCase();
        return combinedText.includes(query);
    };

    const bandFiltered = bandAlbums.filter(searchFilter);
    const specialFiltered = specialAlbums.filter(searchFilter);
    const soloFiltered = soloAlbums.filter(searchFilter);
    const epFiltered = epAlbums.filter(searchFilter);
    const anniversaryFiltered = anniversaryAlbums.filter(searchFilter);

    // คำนวณว่าไม่มีผลลัพธ์เลยหรือไม่
    const totalFound = bandFiltered.length + specialFiltered.length + soloFiltered.length + epFiltered.length + anniversaryFiltered.length;

    // การจัดการคลิกเพลง
    const handleSongClick = (song) => {
        if (song.images && song.images.length > 1) {
            setMultipleImages(song.images);
        } else if (song.image) {
            setModalImage(`/${song.image}`);
        } else {
            alert("เพลงนี้ยังไม่มีรูปภาพ");
        }
    };

    return (
        <div>
            {/* HERO */}
            <header className="hero">
                <div className="hero-content">
                    <div className="hero-small">MUSIC ARCHIVE</div>
                    <h1>LOSO</h1>
                    <h2>Discography Archive</h2>
                    <p>
                        รวมผลงานเพลง อัลบั้ม และรายชื่อเพลงของ LOSO
                        ตั้งแต่ยุคแรกจนถึงผลงานเดี่ยวของ SEK LOSO
                    </p>
                </div>
            </header>

            {/* NAVIGATION */}
            <nav className="navbar">
                <div className="nav-inner">
                    <a href="#" className="logo">LOSO</a>
                    <div className="nav-links">
                        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>ทั้งหมด</button>
                        <button className={`filter-btn ${filter === "band" ? "active" : ""}`} onClick={() => setFilter("band")}>LOSO</button>
                        <button className={`filter-btn ${filter === "special" ? "active" : ""}`} onClick={() => setFilter("special")}>Special</button>
                        <button className={`filter-btn ${filter === "solo" ? "active" : ""}`} onClick={() => setFilter("solo")}>SEK LOSO</button>
                        <button className={`filter-btn ${filter === "ep" ? "active" : ""}`} onClick={() => setFilter("ep")}>EP</button>
                        <button className={`filter-btn ${filter === "anniversary" ? "active" : ""}`} onClick={() => setFilter("anniversary")}>20 ปี โลโซ</button>
                    </div>
                    <input
                        type="text"
                        className="search"
                        placeholder="ค้นหาอัลบั้มหรือเพลง..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </nav>

            <main>
                {/* LOSO */}
                {(filter === "all" || filter === "band") && (
                    <section className="section">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">LOSO</h2>
                                <div className="section-subtitle">ผลงานของวง LOSO</div>
                            </div>
                        </div>
                        <div className="album-grid">
                            {bandFiltered.map((album, idx) => <AlbumCard key={`band-${idx}`} album={album} onSongClick={handleSongClick} />)}
                        </div>
                    </section>
                )}

                {/* SPECIAL */}
                {(filter === "all" || filter === "special") && (
                    <section className="section">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">Special</h2>
                                <div className="section-subtitle">ผลงานพิเศษ</div>
                            </div>
                        </div>
                        <div className="album-grid">
                            {specialFiltered.map((album, idx) => <AlbumCard key={`special-${idx}`} album={album} onSongClick={handleSongClick} />)}
                        </div>
                    </section>
                )}

                {/* SEK LOSO */}
                {(filter === "all" || filter === "solo") && (
                    <section className="section">
                        <div className="section-header">
                            <div>
                                <h2 className="section-title">SEK LOSO</h2>
                                <div className="section-subtitle">ผลงานเดี่ยวของ เสก โลโซ</div>
                            </div>
                        </div>
                        <div className="album-grid">
                            {soloFiltered.map((album, idx) => <AlbumCard key={`solo-${idx}`} album={album} onSongClick={handleSongClick} />)}
                        </div>
                    </section>
                )}

                {/* EP & ANNIVERSARY */}
                {(filter === "all" || filter === "ep" || filter === "anniversary") && (
                    <div className="split-sections">
                        {/* EP */}
                        {(filter === "all" || filter === "ep") && (
                            <section className="section">
                                <div className="section-header">
                                    <div>
                                        <h2 className="section-title">มินิอัลบั้มพิเศษ (EP)</h2>
                                        <div className="section-subtitle">Extended Play</div>
                                    </div>
                                </div>
                                <div className="album-grid">
                                    {epFiltered.map((album, idx) => <AlbumCard key={`ep-${idx}`} album={album} onSongClick={handleSongClick} />)}
                                </div>
                            </section>
                        )}

                        {/* ANNIVERSARY */}
                        {(filter === "all" || filter === "anniversary") && (
                            <section className="section">
                                <div className="section-header">
                                    <div>
                                        <h2 className="section-title">อัลบั้มพิเศษครบรอบ 20 ปี</h2>
                                        <div className="section-subtitle">20 Years Anniversary Album</div>
                                    </div>
                                </div>
                                <div className="album-grid">
                                    {anniversaryFiltered.map((album, idx) => <AlbumCard key={`anni-${idx}`} album={album} onSongClick={handleSongClick} />)}
                                </div>
                            </section>
                        )}
                    </div>
                )}

                {/* No Results Message */}
                {totalFound === 0 && searchQuery !== "" && (
                    <div className="no-result" style={{ display: 'block' }}>ไม่พบอัลบั้มหรือเพลงที่ค้นหา</div>
                )}
            </main>

            <footer>
                <p><strong>LOSO — Discography Archive</strong></p>
                <p>Fan-made music archive</p>
            </footer>

            {/* FULL IMAGE MODAL */}
            {modalImage && (
                <div className="modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setModalImage(null)}>
                    <button type="button" className="modal-close" onClick={() => setModalImage(null)} aria-label="ปิดรูป">&times;</button>
                    <img className="modal-content" src={modalImage} alt="Full Image" onClick={(e) => e.stopPropagation()} />
                </div>
            )}

            {/* MULTIPLE IMAGES SELECTION MODAL */}
            {multipleImages.length > 0 && (
                <div 
                    style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(0,0,0,.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px' }}
                    onClick={() => setMultipleImages([])}
                >
                    <button type="button" className="multiple-close" onClick={() => setMultipleImages([])} style={{ position: 'absolute', top: '15px', right: '25px', color: '#fff', fontSize: '35px', background: 'transparent', border: 'none', cursor: 'pointer' }}>&times;</button>
                    <div style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>เลือกรูปภาพ</div>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {multipleImages.map((imgSrc, idx) => (
                            <div key={idx} style={{ cursor: 'pointer', textAlign: 'center', color: '#fff' }} onClick={(e) => { e.stopPropagation(); setModalImage(`/${imgSrc}`); setMultipleImages([]); }}>
                                <img src={`/${imgSrc}`} alt={`รูปที่ ${idx + 1}`} style={{ maxWidth: '200px', borderRadius: '8px' }} />
                                <div style={{ marginTop: '10px' }}>รูปที่ {idx + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}