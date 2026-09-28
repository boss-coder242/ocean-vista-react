import freshRedOnion from '../assets/produce/fresh-red-onion.jpg';
import pomegranateBhagwa from '../assets/produce/pomegranate-bhagwa.jpg';
import tableGrapes from '../assets/produce/table-grapes.jpg';
import alphonsoKesarMango from '../assets/produce/alphonso-kesar-mango.jpg';
import cavendishBanana from '../assets/produce/cavendish-banana.jpg';
import freshVegetables from '../assets/produce/fresh-vegetables.jpg';

import turmericFingersPowder from '../assets/produce/turmeric-fingers-powder.jpg';
import dryRedChilli from '../assets/produce/dry-red-chilli.jpg';
import wholeSpices from '../assets/produce/whole-spices.jpg';
import oilseedsKernels from '../assets/produce/oilseeds-kernels.jpg';
import kashmiriSaffron from '../assets/produce/kashmiri-saffron.jpg';
import basmatiRice from '../assets/produce/basmati-rice.jpg';
import nonBasmatiRice from '../assets/produce/non-basmati-rice.jpg';
import wheatMaize from '../assets/produce/wheat-maize.jpg';
import pulsesLentils from '../assets/produce/pulses-lentils.jpg';
import almondImg from '../assets/produce/almond.jpg';
import cashewImg from '../assets/produce/cashew.jpg';
import raisinImg from '../assets/produce/raisin.jpg';
import apricotImg from '../assets/produce/apricot.jpg';
import seafoodsImg from '../assets/produce/seafoods.jpg';
import tableEggs from '../assets/produce/table-eggs.jpg';
import surgicalInstruments from '../assets/produce/surgical-instruments.jpg';
import yogaMats from '../assets/produce/yoga-mats.jpg';
import bananaLeaves from '../assets/produce/banana-leaves.jpg';
import coconutImg from '../assets/produce/coconut.jpg';

export const DIVISIONS = [
  {
    id: 'spices',
    num: '01',
    title: 'Spices & Oilseeds',
    blurb: 'Cleaned, graded and milled to buyer-specified purity — from Sangli turmeric to Kashmiri saffron.',
    items: [
      {
        name: 'Turmeric Fingers & Powder',
        image: turmericFingersPowder,
        desc: 'Sangli and Erode turmeric with strong natural colour, supplied as polished fingers or milled powder.',
        specs: [['Curcumin', '3–5%'], ['Form', 'Fingers, bulbs, powder'], ['Packing', '25/50 kg bags, 1 kg retail']],
      },
      {
        name: 'Dry Red Chilli',
        image: dryRedChilli,
        desc: 'Guntur S4 and Byadgi chillies selected for pungency or colour value, stemless on request.',
        specs: [['Varieties', 'Guntur S4, Teja, Byadgi'], ['Form', 'Whole, stemless, powder, flakes'], ['Packing', '10/25 kg cartons & bags']],
      },
      {
        name: 'Whole Spices',
        image: wholeSpices,
        desc: 'Cumin, coriander, mustard and fenugreek — cleaned, sortex-graded and moisture-controlled.',
        specs: [['Range', 'Cumin, coriander, mustard, fenugreek'], ['Purity', '99 / 99.5% machine cleaned'], ['Packing', '25/50 kg bags']],
      },
      {
        name: 'Oilseeds & Kernels',
        image: oilseedsKernels,
        desc: 'Hulled and natural sesame seed plus Bold and Java groundnut kernels for food and crushing use.',
        specs: [['Range', 'Sesame seed, groundnut kernels'], ['Grades', 'Hulled/natural; Bold 50-60, Java 40-50'], ['Packing', '25/50 kg bags, jumbo']],
      },
      {
        name: 'Kashmiri Saffron',
        image: kashmiriSaffron,
        desc: 'Hand-picked Kashmiri saffron, graded by strand quality and colour, sold in small retail tins or bulk on request.',
        specs: [['Form', 'Whole strand'], ['Packing', '1g–10g retail tins, bulk on request']],
      },
    ],
  },
  {
    id: 'grains',
    num: '02',
    title: 'Grains, Pulses & Rice',
    blurb: 'Milling-grade wheat and maize, sortex-clean basmati, and machine-cleaned pulses for volume buyers.',
    items: [
      {
        name: 'Basmati Rice',
        image: basmatiRice,
        desc: 'Long-grain basmati in raw, steam and sella forms, milled to buyer-specified length and sortex purity.',
        specs: [['Varieties', '1121, 1509, Pusa, Traditional'], ['Purity', 'Sortex clean, up to 99.5%'], ['Packing', '5/10/25/50 kg PP & jute']],
      },
      {
        name: 'Non-Basmati Rice',
        image: nonBasmatiRice,
        desc: 'IR64, Sona Masoori, Swarna and parboiled rice for volume buyers and institutional supply.',
        specs: [['Varieties', 'IR64, Sona Masoori, Swarna'], ['Broken', '5% / 25% / 100% options'], ['Packing', '25/50 kg PP bags']],
      },
      {
        name: 'Wheat & Maize',
        image: wheatMaize,
        desc: 'Milling-grade wheat and yellow maize for flour mills, feed compounders and starch units.',
        specs: [['Grades', 'Sharbati, Lokwan, milling wheat'], ['Maize', 'Yellow, feed & food grade'], ['Packing', '25/50 kg bags, bulk']],
      },
      {
        name: 'Pulses & Lentils',
        image: pulsesLentils,
        desc: 'Machine-cleaned pulses in whole and split form, double-polished on request.',
        specs: [['Range', 'Chana, toor, moong, urad, masoor'], ['Form', 'Whole, split, polished'], ['Packing', '25/50 kg bags']],
      },
    ],
  },
  {
    id: 'fresh',
    num: '03',
    title: 'Fresh Produce',
    blurb: 'Pre-cooled and cold-chain handled — onions, stone fruit and a mixed-vegetable programme, in season.',
    items: [
      {
        name: 'Fresh Red Onion',
        image: freshRedOnion,
        desc: "Nashik-belt red onions with tight, dry skin and low moisture — the workhorse of the fresh export programme.",
        specs: [['Grades', '40-60 / 50-70 / 60-80 mm'], ['Packing', '5/10/20/25 kg mesh bags'], ['Season', 'November – May']],
      },
      {
        name: 'Pomegranate (Bhagwa)',
        image: pomegranateBhagwa,
        desc: 'Deep ruby Bhagwa (Sindhuri) pomegranates, hand-graded for colour uniformity and crack-free skin.',
        specs: [['Counts', '200–750 g per fruit'], ['Packing', '3.5/4 kg CFB boxes'], ['Season', 'September – February']],
      },
      {
        name: 'Table Grapes',
        image: tableGrapes,
        desc: 'Thompson Seedless and Sonaka bunches, pre-cooled and shipped under controlled temperature.',
        specs: [['Varieties', 'Thompson Seedless, Sonaka'], ['Packing', '4.5 kg boxes / punnets'], ['Season', 'January – April']],
      },
      {
        name: 'Alphonso & Kesar Mango',
        image: alphonsoKesarMango,
        desc: 'Ratnagiri–Devgad Alphonso and Kesar mangoes, matured on tree and packed by count.',
        specs: [['Varieties', 'Alphonso, Kesar, Totapuri'], ['Packing', '3/5 kg boxes, 6–12 count'], ['Season', 'March – June']],
      },
      {
        name: 'Cavendish Banana',
        image: cavendishBanana,
        desc: 'Grand Naine (G9) bananas at export maturity, with consistent finger length and crown quality.',
        specs: [['Grade', 'Finger length 6"–9"'], ['Packing', '13/13.5 kg cartons'], ['Season', 'Year-round']],
      },
      {
        name: 'Fresh Vegetables',
        image: freshVegetables,
        desc: 'A mixed-vegetable programme built around consolidated LCL and air shipments for wholesale buyers.',
        specs: [['Range', 'Potato, tomato, green chilli, okra, drumstick'], ['Packing', '5/10 kg cartons, crates'], ['Season', 'Year-round']],
      },
    ],
  },
  {
    id: 'dryfruits',
    num: '04',
    title: 'Dry Fruits',
    blurb: 'Whole and processed dry fruit lines, packed to export sizing.',
    items: [
      { name: 'Almond', image: almondImg, desc: 'Whole almonds, export sizing and grading available on request.', specs: [['Packing', 'Custom bulk & retail sizes']] },
      { name: 'Cashew', image: cashewImg, desc: 'Cashew kernels, grade options available on request.', specs: [['Packing', 'Custom bulk & retail sizes']] },
      { name: 'Raisin', image: raisinImg, desc: 'Dried grape raisins, natural and golden varieties.', specs: [['Packing', 'Custom bulk & retail sizes']] },
      { name: 'Apricot', image: apricotImg, desc: 'Dried apricot, whole and halved.', specs: [['Packing', 'Custom bulk & retail sizes']] },
    ],
  },
  {
    id: 'marine',
    num: '05',
    title: 'Marine & Farm',
    blurb: 'Cold-chain handled from processing to port.',
    items: [
      { name: 'Seafoods', image: seafoodsImg, desc: 'Frozen and chilled seafood exports, cold-chain handled from processing through to loading.', specs: [['Handling', 'Cold-chain, port to port']] },
      { name: 'Table Eggs', image: tableEggs, desc: 'Fresh table eggs, graded by weight and packed for export-standard cold-chain transit.', specs: [['Grading', 'By weight'], ['Handling', 'Cold-chain packed']] },
    ],
  },
  {
    id: 'specialty',
    num: '06',
    title: 'Specialty & Trade Goods',
    blurb: 'Non-food export lines carried alongside the agricultural programme.',
    items: [
      { name: 'Surgical Instruments', image: surgicalInstruments, desc: 'Stainless steel surgical and medical instruments, sourced from established manufacturing clusters.', specs: [['Material', 'Stainless steel']] },
      { name: 'Yoga Mats', image: yogaMats, desc: 'Yoga and fitness mats in a range of materials and thicknesses.', specs: [['Range', 'Multiple materials & thicknesses']] },
      { name: 'Banana Leaves', image: bananaLeaves, desc: 'Fresh banana leaves for food service and ceremonial use, air-freighted to order.', specs: [['Shipping', 'Air-freighted, made to order']] },
      { name: 'Coconut', image: coconutImg, desc: 'Fresh and semi-husked coconut, with coconut derivatives available on request.', specs: [['Form', 'Fresh, semi-husked, derivatives on request']] },
    ],
  },
];
