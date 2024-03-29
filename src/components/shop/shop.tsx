import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { MyContext } from "../../App";
import { IProduct } from "../../models/IProduct";
import { Categories } from "./categories/categories";
import "./shop.scss";

export type ProductList = {
  products: IProduct[];
  addProductToCart(p: IProduct): void;
};

export const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      name: "Advanced Snail 92 All In One Cream",
      brandName: "COSRX",
      category: 1,
      subCategory: 101,
      description:
        "Denna fuktkräm skyddar huden mot fuktförlust och förbättrar hudens elasticitet.Innehåller hela 92% snigelsekret som effektivt hjälper till att reparera och lugna röd, irriterad hud genom att fylla på huden med fukt. Den är djupt återfuktande och förebygger hudens åldrande genom att plumpa huden inifrån.",
      price: 339,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3b%2F58%2F3b585186a478a4a363174df9ff6478ed2c34ceea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 1,
    },
    {
      name: "Full Fit Propolis Light Cream",
      brandName: "COSRX",
      category: 1,
      subCategory: 101,
      description:
        "Detta är en fuktgivande kräm med hög andel black bee propolis komplex och antioxidanter.Innehåller hela 65,69% av svart bi-propoliskomplex som består av svarta bi-propolisextrakt, honungsextrakt och royal geléextrakt som alla är kända för dess antiinflammatoriska och antibakteriella egenskaper.",
      price: 499,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe1%2F78%2Fe178533c5deed41a2d2b8b4f4862bfdcb129219f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 2,
    },
    {
      name: "Pore Refining Serum",
      brandName: "No Make Up",
      category: 1,
      subCategory: 101,
      description:
        "Vitamin-C Lotion är en återfuktande dagkräm som ger en klarare hudton. Formulan innehåller den kraftfulla antioxidanten C-vitamin som stimulerar kollagenproduktionen och är känd för boosta huden med en fantastisk vitalitet och lyster. Vegansk.",
      price: 379,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2Ff8%2F19f8a281cdafc8896c6d149b3f6d5968bfe36b61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 3,
    },
    {
      name: "BioHydrate Moisture Day Lotion",
      brandName: "Estelle & Thild",
      category: 1,
      subCategory: 101,
      description:
        "En lätt dagkräm full med fukt och vitaminer som ger huden helt ny lyster och mjukhet. Hyaluronsyra har en unik förmåga att absorbera fukt och bygga upp hudens skyddsbarriär. Laddad med en närande blandning av rosa pomelo och lakritsextrakt för en återfuktad och fräsch hy.",
      price: 279,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2F8a%2F158a0462685fd9936d8da7a3e204a4a7d0be4877.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 4,
    },
    {
      name: "Serum",
      brandName: "No Make Up",
      category: 1,
      subCategory: 101,
      description:
        "En fuktgivande ansiktskräm som ger huden spänst och lyster. Naturliga ingredienser. Doftfri",
      price: 179,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F76%2F77%2F767787a01f863350442d7ccdb8fa457675185cfc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 5,
    },
    {
      name: "Zero Shine Hydrator",
      brandName: "POP",
      category: 1,
      subCategory: 101,
      description:
        "Skippa blotting papers och håll din hud återfuktad med Zero Shine Hydrator, en tunn oljefri ansiktskräm som innehåller bl a kokosvatten som återfuktar och kaktusextrakt som lugnar. Funkar även att använda som en primer. Vegansk.",
      price: 149,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2Fa2%2Fe5a2d9ed9799a9f6701ce823080ac5c091a2c705.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 6,
    },
    {
      name: "Supreme C-Creme",
      brandName: "POP",
      category: 1,
      subCategory: 101,
      description:
        "Supreme C-Creme är den ultimata dagkrämen som återfuktar, piggar upp och återupplivar glåmig hud med vitamin-c. Innehåller bl a ceramider och squalene som djupt återfuktar och bibehåller hudens optimala fuktnivå. Vegansk.",
      price: 149,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2F3b%2F7f3bdce1564610817273c12873ddf6f1e446a128.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 7,
    },
    {
      name: "Nordic-c Valo Day Cream Spf 15",
      brandName: "Lumene",
      category: 1,
      subCategory: 101,
      description:
        "Nordic-C Day Cream SPF 15 är en lystergivande dagcreme som ger huden intensiv återfuktning och skyddar den från de skadliga effekterna av UVA- och UVB-strålning. Sammansättningen innehåller fröolja och fröextrakt från antioxidantrika nordiska hjortron, vitamin B5, C och E samt ljusreflekterande pigment.",
      price: 269,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3c%2F0f%2F3c0feaa7d0d0f7124f99af908bb83d71728e90f3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 8,
    },
    {
      name: "BioCalm Soothing Day Cream",
      brandName: "Estelle & Thild",
      category: 1,
      subCategory: 101,
      description:
        "En mild, återfuktande dagkräm anpassad för känslig hud i behov av extra vård. Ingredienser av högsta kvalitet ger lindring och återställer hudens naturliga balans och skyddande barriärer.",
      price: 269,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F06%2Ffa%2F06faca44e148844b547853d6f6f11b8685902920.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 9,
    },
    {
      name: "The No-brainer Set",
      brandName: "The Ordinary",
      category: 1,
      subCategory: 101,
      description:
        "Med tre hjälteprodukter, är denna hudvårdsregim utformad för att rikta in sig på viktiga problem som uttorkning, matthet och tecken på åldrande. Buffet - Ett vattenbaserat serum som kombinerar ett omfattande utbud av studerade teknologier för att rikta in sig på flera tecken på åldrande samtidigt.",
      price: 369,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2F67%2F69674db2c0946ae00627786ecdd6c35b1cf5ba7b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 10,
    },
    {
      name: "Lait Creme Sensitive",
      brandName: "Embryolisse",
      category: 1,
      subCategory: 101,
      description:
        "Lait Créme Sensitive är en ny Lait-Créme för känslig och ömtålig hud. Alla fördelarna från Lait-Créme Concentré i en ny formula: utan parfymer och allergivänlig med sina 98% naturliga ingredienser. Har en härligt, krämig konsistens som gör huden behaglig, återfuktad och silkeslen - utan att kladda. Särskilt lämplig för känslig och ömtålig hud. Kan även användas till bebisar och barn.",
      price: 285,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc4%2F9d%2Fc49dc7e06f8f093f6c48caee824b93d1611d540b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 11,
    },
    {
      name: "Smooth Radiant Complexion",
      brandName: "Embryolisse",
      category: 1,
      subCategory: 101,
      description:
        "Smooth Radiant Complexion är en uppfriskande och lätt lotion som direkt motverkar trötthet i huden, så att huden känns både fylligare och slätare. Hyaluronsyra återfuktar på djupet, och naturligt, utvunnet socker från havre lägger en hinna över huden så att den ser slät och mer frisk ut, fina linjer reduceras samtidigt som pärlemorspigment ger en naturlig lyster och förstärker hudens utstrålning.",
      price: 319,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3d%2Ff3%2F3df35e0f8787b711da0816a9732d065c5bc1f6e6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 12,
    },
    {
      name: "Salicylic Acid 2% Solution",
      brandName: "The Ordinary",
      category: 1,
      subCategory: 102,
      description:
        "Detta serum återfuktar ända ner till cellnivå, lugnar huden och ger en optimal fuktbalans. Har du problem med hud som lätt blir irriterad och är svår att lugna ner? Känner du att din hud aldrig får tillräckligt med fukt? Då är det här serumet för dig. Om du ger din hud tillräckligt med fukt producerar den mindre olja vilket gör att till exempel makeup sitter bättre. Fungerar för alla hudtyper och särskilt för känslig hud.",
      price: 89,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa1%2Fb4%2Fa1b4a6b0828f4fbd2fa6f43733f4e0b1da1e89ed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 13,
    },
    {
      name: "Zinc Pca Facial Serum",
      brandName: "Q+A",
      category: 1,
      subCategory: 102,
      description:
        "Ett ansiktsserum med Zinc som minskar porerna och förebygger uppkomsten av finnar utan at verka uttorkande. Naturliga ingredienser. Doftfri.",
      price: 129,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd6%2F57%2Fd6571d5a890be2bbf78f4abcc961342627205f25.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 14,
    },
    {
      name: "Hyaluronic Acid Facial Serum",
      brandName: "Q+A",
      category: 1,
      subCategory: 102,
      description:
        "Ett ansiktsserum med hyaluronsyra som är intensivt återfuktande. Naturliga ingredienser. Doftfri.",
      price: 89,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F41%2F9a%2F419a51d7c55e36151a01cee54827eee7e08a8af3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 15,
    },
    {
      name: "Advanced Snail 96 Mucin Essence",
      brandName: "COSRX",
      category: 1,
      subCategory: 102,
      description:
        "Med hela 96,3% snigelsekret skyddar denne essence huden mot fuktförlust samtidigt som den förbättrar hudens elasticitet. Den hjälper till att reparera och lugna röd och känslig hud efter acneutbrott eller andra hudskador genom att effektivt fylla på med fukt. ",
      price: 299,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F43%2Fc3%2F43c3c2e6c22ec63f51a23db266795ee68942c0b0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 16,
    },
    {
      name: "Full Fit Propolis Light Ampoule",
      brandName: "COSRX",
      category: 1,
      subCategory: 102,
      description:
        "En intensivt, lystergivande ampull som bistår med hälsosam näring och passar året om.Innehåller 83 % av Black Bee Propolis Extract som verkar för att ge din hud glow.Denna produkt har en kort ingredienslista med endast 11 ingredienser, där alla onödiga ingredienser uteslutits, för att säkerställa bästa effekt.",
      price: 439,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2Fd5%2F73d5db7edf89426cccfc1f543d443083fb86a1cb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 49,
    },
    {
      name: "Glow Tonic Serum",
      brandName: "Pixi",
      category: 1,
      subCategory: 102,
      description:
        "Glow Tonic Serum exfolierar huden samtidigt som den återfuktar, mjukgör och vårdar huden. Du får en jämn och balanserad hud med strålande lyster. Vegansk.",
      price: 389,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2F3a%2F773aa824804add549c8457f077d911277a4afe54.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 17,
    },
    {
      name: "Vitamin-C Serum",
      brandName: "Pixi",
      category: 1,
      subCategory: 102,
      description:
        "Vitamin-C serum är utjämnande och fullt av antioxidanter. Det ger direkt lyster men även succesivt över tid. Formulan innehåller C-vitamin och ferulinsyra som motverkar fria radikaler och reducerar synligheten av pigmenteringar. Du får en jämnare hud och klarare hudton. Vegansk.",
      price: 379,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2F38%2F7d38b1bbdc106438ceda016672e9c5aaf2704b4f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 18,
    },
    {
      name: "BioHydrate Thirst Relief Serum",
      brandName: "Estelle & Thild",
      category: 1,
      subCategory: 102,
      description:
        "Ett vitaminrikt serum som mjukgör, balanserar och ger huden en helt ny lyster. Hyaluronsyra tillför huden optimalt med fukt medan ekologiskt. Lakritsextrakt ger huden ny energi.",
      price: 349,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe0%2F4d%2Fe04df084b7bec6ba5c93bd0d7e6917490b41afac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 19,
    },
    {
      name: "Extra Aqua Shot",
      brandName: "POP",
      category: 1,
      subCategory: 102,
      description:
        "Extra Aqua Shot är ett fuktserum som innehåller återfuktande kokosvatten, kaktusextrakt som lugnar, ceramider som mjukgör och tång som verkar anti-inflammatoriskt. Vegansk.",
      price: 179,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2Fcd%2Fc2cd1eadb9dfb2da05f2b40b4acfd79be118026d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 20,
    },
    {
      name: "Extra Zing-C Shot",
      brandName: "POP",
      category: 1,
      subCategory: 102,
      description:
        "Extra Zing-C Shot är POPs antioxidantrika vitamin-c serum som ljusar upp och återupplivar trött hud. Innehåller bl a havtornsolja som motverkar rodnad och solrosfrön som bibehåller hudens fuktnivå. Vegansk.",
      price: 179,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F07%2F0d%2F070d44ef94c7ccd1c1ae0e86e900ae5d1d7b6762.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 21,
    },
    {
      name: "Extra LIT-B Shot",
      brandName: "POP",
      category: 1,
      subCategory: 102,
      description:
        "Extra Lit-B Shot är ett supereffektivt exfolierande serum som innehåller AHA-syra, kokosvatten och panthenol som verkar anti-inflammatoriskt och ger en klarare hy. Vegansk.",
      price: 179,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2Fdb%2F80db7ea371181285abc5ce0ddf4d0c50041717cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 22,
    },
    {
      name: "Granactive Retinoid 5% In Squalane",
      brandName: "The Ordinary",
      category: 1,
      subCategory: 102,
      description:
        "En lösning med 5% Granactive Retinoid. Stabil, vattenfri lösning med 0.5% esteravA-Vitaminsyra. Denna vattenfria lösning innehåller en koncentration av 5% av ett avancerat retinoid aktivt komplex kallat Granactive Retinoid som har visat sig ge bättre resultat mot flera ålderstecken utan att orsaka den irritation som ibland kan uppstå med retinol .",
      price: 189,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8c%2F28%2F8c28fc953f37f0e76b1ef8d14eb0e67593731a22.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 23,
    },
    {
      name: "Vitalizing Body Serum",
      brandName: "IDA WARG",
      category: 2,
      subCategory: 201,
      description:
        "Ett lätt serum för hela kroppen med vitaliserande kråkbärsextrakt. Ger huden extra mycket fukt med hjälp av hyaluronsyra, glycerin, xylitol och glucosider Går utmärkt att använda ensamt eller som bas under en vanlig body lotion.",
      price: 199,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F37%2Fff377dbe365dd8072bed08bff943db4696db38bc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 24,
    },
    {
      name: "Mango & Coconut Body Butter",
      brandName: "Sunday Rain",
      category: 2,
      subCategory: 201,
      description:
        "En rik kräm infunderad med närande mangosmör och kokosolja för extra återfuktning och skydd. Låt den mjuka konsistensen och den oemotståndliga doften lugna din hud och höja ditt humör. Mango smör: Fullpackad med essentiella fettsyror som absorberar lätt och ger näring till torr hud. Kokosolja: Kokosolja är ett naturligt mjukgörande medel som lindrar flingor och klåda.",
      price: 89,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2F2c%2F812c995a0bc27d0b479cb83bdafbb37535815c16.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 25,
    },
    {
      name: "Body Cream",
      brandName: "Glöd Sophie Elise",
      category: 2,
      subCategory: 201,
      description:
        "En rik och fuktgivande kroppskräm med kokosnötolja och sheasmör för en silkeslen mjuk hy. 95% av ingredienserna kommer från naturligt upprinnelse och formulan är vegansk. Den underbara formulan ger näring och skyddar huden mot torrhet. Den unika formulan absorberar snabbt in i huden och ökar hudens elasticitet.",
      price: 189,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2Fa4%2F32a45452037b81ce159f8d329fbcff57972af961.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bbeauty_bodybath_bodymoisturizers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 26,
    },
    {
      name: "Ultra Nourishing Body Butter",
      brandName: "Camilla Pihl",
      category: 2,
      subCategory: 201,
      description:
        "Närande body butter som tillför intensiv fukt till huden, samtidigt som det snabbt absorberas i huden. Berikad med mjukgörande jojobaolja och sheasmör för en mjuk och återfuktad hud. Med delikat doft.",
      price: 249,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F90%2F9e%2F909e34b51228b5e74bb73f681115fbe4ab333cc8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 27,
    },
    {
      name: "Biocare Baby Comforting Body Oil",
      brandName: "Estelle & Thild",
      category: 2,
      subCategory: 201,
      description:
        "En lugnande och vårdande babyolja är baserad på ekologiska oljor av högsta kvalitet. Ringblomma och Havreolja lugnar och vårdar känslig babyhud medan Jojoba och Mandelolja tillför naturliga vitaminer och essentiella fettsyror som återfuktar, skyddar och håller huden mjuk och smidig. Fri från konserveringsmedel.",
      price: 169,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2F52%2F405217aa25d09c9e04c20b4c513602b2d100fdf3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 28,
    },
    {
      name: "Vanilla Tangerine Body Lotion",
      brandName: "Estelle & Thild",
      category: 2,
      subCategory: 201,
      description:
        "Silkeslen kroppslotion med lättabsorberad formula som förser huden med optimal fukt för en balanserad hud. Naturligt mjukgörande egenskaper från Sheasmör och Aloe Vera lämnar huden len och naturligt återfuktad.",
      price: 189,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe4%2F72%2Fe472e224001d1c407e6bf07d9d263a619a12ac1e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 29,
    },
    {
      name: "Vanilla Tangerine Body Butter",
      brandName: "Estelle & Thild",
      category: 2,
      subCategory: 201,
      description:
        "En rik kroppskräm med en lyxig formula som omedelbart tillför näring och återfuktar huden på djupet. Sheasmör har mjukgörande egenskaper och Jojobafröolja återfuktar och lämnar huden silkeslen.",
      price: 239,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F06%2Fd4%2F06d4aeecefc4a78372b20e83a86a65dd27a0d621.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 30,
    },
    {
      name: "Biocare Baby All Weather Cream",
      brandName: "Estelle & Thild",
      category: 2,
      subCategory: 201,
      description:
        "En rik universalkräm som skyddar känslig hud från kallavindar och hårt väder samtidigt den lindrar irriterad hudoch vårdar torra fläckar. Formulerad med ekologisktSheasmör och Bivax för maximalt skydd samtidigt somHavreextrakt lugnar och lindrar.",
      price: 139,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F92%2F97%2F92975db62860138618c8916657c5cb7c76d00d71.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 31,
    },
    {
      name: "Niacinamide Body Lotion",
      brandName: "Camilla Pihl",
      category: 2,
      subCategory: 201,
      description:
        "Skin Camilla Pihl Body Lotion Niacinamide är en rik och närande fuktkräm som tillför djup fukt till huden. Berikad med Niacinamid som är en effektiv ingrediens som bidrar till mjukare hudstruktur och hudton. Dessutom hjälper det till att förebygga och förebygga torrhet, samt att föryngra huden.",
      price: 229,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F72%2F1f%2F721fdea6a7ece7883cf257dba39119d09581b9ae.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 32,
    },
    {
      name: "Ananas Exfolierande Fotmask",
      brandName: "Oh K!",
      category: 2,
      subCategory: 202,
      description:
        "Fräscha upp dina fötter omedelbart med denna skonsamt exfolierande ananasfotmask. Ananas har blivit en populär ingrediens i hudvårdsspelet på grund av dess superfoodfördelar. Den är rik på antioxidanter och hjälper till att bekämpa skador på fria radikaler och enzymet bromelain som hjälper till att ljusna upp hyn.",
      price: 89,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2F51%2Fd5515fd313068d9aeda4ec4bc7d35671209ed115.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 33,
    },
    {
      name: "Exfoliation Foot Peel",
      brandName: "Baby Foot",
      category: 2,
      subCategory: 202,
      description:
        "Fotpeeling för hemmabruk som ger mjuka och lena fötter. Förpackningen består av ett par engångssockor i plast (strl. 36-45) innehållande gel med naturliga extrakt och fruktsyror. Baby Foot är det enklaste sättet att få välskötta fötter. Baby Foot är en fotpeeling som tar bort döda hudceller på fötterna så att torr och hård hud på fötter och hälar försvinner utan att använda fil eller hyvel.",
      price: 189,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2Fb9%2F19b99dc60521d863af86f0536dca1423cc9645c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 34,
    },
    {
      name: "Foot Soak Watermelon",
      brandName: "Sunday Rain",
      category: 2,
      subCategory: 202,
      description:
        "Detta ultrauppfriskande fotbad gör att du kan skapa en lyxig spaupplevelse i bekvämligheten av ditt eget hem. Luta dig tillbaka och slappna av medan trötta fötter fräschas upp, svalnas och stärks för att sätta en fjäder tillbaka i steget.",
      price: 59,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F39%2Fbe%2F39bee54fd32904129bc63a5e154c90415ce2118e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 35,
    },
    {
      name: "Protect Dry Spray Oil SPF15",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        "En torr olja som snabbt tränger in i huden och som inte efterlämnar en oljig yta som traditionella oljor gör. Med sprayfunktion samt en utsökt formula som skyddar huden mot uttorkning och ger fukt. Oljan innehåller exotiska ingredienser som återfuktar och mjukgör huden. Med den klassiska tropiska doften som för tankarna till Hawaii. Rekommenderas av Skin Cancer Foundation. Hypoallergenisk. Alkoholfri.",
      price: 129,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F49%2Fc1491aca3b12faede176186cbfa2a7b2bd265af7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 36,
    },
    {
      name: "Silk Hydration Dry Oil Mist",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        "En extremt fuktgivande kroppsolja i mist som skyddar mot solen och gör huden mjuk som silke. Den genomskinliga formulan ger huden en fantastisk lyster samtidigt som den snabbt absorberas av huden utan att kännas kladdig. En ultralätt solskyddsmist med en blandning av kokos, argan och druvkärnor som återfuktar på djupet. En återfuktande torrolja med UVA-/UVB-skydd.",
      price: 169,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F87%2Fcd%2F87cdf7c39c907ac70167f47291e9508afec7b2da.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 37,
    },
    {
      name: "Protect Dry Spray Oil SPF20",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        "En torr olja som snabbt tränger in i huden och som inte efterlämnar en oljig yta som traditionella oljor gör. Med sprayfunktion samt en utsökt formula som skyddar huden mot uttorkning och ger fukt. Oljan innehåller exotiska ingredienser som återfuktar och mjukgör huden. Med den klassiska tropiska doften som för tankarna till Hawaii. Rekommenderas av Skin Cancer Foundation. Hypoallergenisk. Alkoholfri.",
      price: 139,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2Fcf%2F51cf2c0c8f2f708715c430215b2cc4914e9b5b83.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 38,
    },
    {
      name: "Silk Hydration Lotion SPF30",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        " En idealisk kombination av solskydd och fuktboostande hudvård som snabbt absorberas av huden. Innehåller silkesprotein som vårdar och återfuktar huden upp till 12 timmar. Dermatologisk testad med UVA- och UVB skydd. Med den klassiska doften som för tankarna till Hawaii. Rekommenderas av Skin Cancer Foundation.",
      price: 149,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc7%2F99%2Fc7998e8862b115bdfded11486f21e191e4136c72.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 39,
    },
    {
      name: "Dry Oil Spray SPF30",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        "En torr olja som snabbt tränger in i huden och som inte efterlämnar en oljig yta som traditionella oljor gör. Med sprayfunktion för enklare applicering samt med en utsökt formula som skyddar huden mot uttorkning och ger fukt. Med UVA- och UVB-skydd. Rekommenderad av Skin Cancer Foundation.",
      price: 159,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F04%2Fd0%2F04d063f8c45c996d24fe6c07d2034c9d0f00e673.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 40,
    },
    {
      name: "Daily UV Face Mousse SPF 30",
      brandName: "EVY TECHNOLOGY",
      category: 3,
      subCategory: 301,
      description:
        "Ett dagligt skydd mot sol och yttre föroreningar. En anti-age ansiktsmousse som förstärker hudens skyddsbarriär och förebygger tidiga ålderstecken. Produkten är berikad med bl.aC- och E vitamin, hyaluronsyra och kollagen samt flera vårdande ingredienser som hjälper till att förebygga pigmentfläckar och förtida åldrande orsakat av solen.",
      price: 189,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2Fcb%2F4acbeb8a3f9a7042e81da79d7addb475d85bebf6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 41,
    },
    {
      name: "Sunscreen Mousse SPF 30",
      brandName: "EVY TECHNOLOGY",
      category: 3,
      subCategory: 301,
      description:
        "EVY är en svensk medicinteknisk uppfinning inom solskydd som är speciellt anpassad för känslig hud och överkänslig hud men passar för alla hudtyper. EVY lägger sig i hela det översta hudlagret istället för att lägga sig på ytan. EVY försvinner därför inte lika lätt vid bad, svett eller handdukstorkning och ger ett effektivt skydd mot UVA- och UVB-strålar.",
      price: 229,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2F8a%2F978ac7667b2523594d878f16db2ccf2bb8d918ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 42,
    },
    {
      name: "Silk Hydration Dry Oil Mist",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        "En extremt fuktgivande kroppsolja i mist som skyddar mot solen och gör huden mjuk som silke. Den genomskinliga formulan ger huden en fantastisk lyster samtidigt som den snabbt absorberas av huden utan att kännas kladdig. En ultralätt solskyddsmist med en blandning av kokos, argan och druvkärnor som återfuktar på djupet.",
      price: 169,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F10%2Fb5%2F10b52aaf3820921b774c87f9f4dcc95121732546.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 43,
    },
    {
      name: "Silk Hydration Face Spf30",
      brandName: "Hawaiian Tropic",
      category: 3,
      subCategory: 301,
      description:
        "Denna milda face lotion har en lätt, silkeslen formula som snabbt absorberas av huden. Den kan med fördel användas under makeup och täpper inte till porerna. Parfymen är särskilt anpassad för ansiktets tunna, mer känsliga hud. Förpackningen är kosmetisk för att förstärka kopplingen till kosmetik och ansiktsvård.",
      price: 139,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F58%2Fbb%2F58bb65bc73f29fd2c71707867d48a47e5b6eccf2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 44,
    },
    {
      name: "Clean Screen Mineral Spf 30 Face Sunscreen",
      brandName: "REN",
      category: 3,
      subCategory: 301,
      description:
        "Clean Screen Mineral Spf 30 Face Sunscreen är en vegansk solkräm med SPF30 som är formulerad med naturligt icke-nano zinkoxid. Ett omfattande UV-skydd som hjälper till att skydda huden mot för tidigt åldrande,förorsakat av solens strålar.",
      price: 435,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F5f%2Fda5fe6141ef6a8580e8fb5156e1ba1fa1f08ffbd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 45,
    },
    {
      name: "Ambre Solaire Anti-dark Spots & Anti-pollution",
      brandName: "Garnier",
      category: 3,
      subCategory: 302,
      description:
        "För ansiktet och det känsliga området runt ögonen. Ultralätt och omedelbart absorberas av huden. Innehåller hyaluronsyra, återfuktar i 24 timmar. Avancerat filtersystem med mycket högt solskydd som skyddar huden mot UVB + UVA och långa UVA-strålar vilket hjälper till att motverka mörka fläckar och rynkor.",
      price: 129,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F2d%2F0d2dd5018f45a6f5da123b0d6d473a679f97fe6a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      id: 46,
    },
  ]);
  const { addProductToCart } = useOutletContext<MyContext>();

  return (
    <div className="shop">
      <div className="shop__menucontainer">
        <Categories />
      </div>
      <div className="shop__productcontainer">
        <Outlet context={{ products, addProductToCart }} />
      </div>
    </div>
  );
};
