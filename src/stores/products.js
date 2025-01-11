import { defineStore } from 'pinia';

import AF1_W1 from '@/assets/images/NAF1/AF1_W1.png';
import AF1_W2 from '@/assets/images/NAF1/AF1_W2.png';
import AF1_W3 from '@/assets/images/NAF1/AF1_W3.png';
import AF1_W4 from '@/assets/images/NAF1/AF1_W4.png';
import AF1_B1 from '@/assets/images/NAF1/AF1_B1.png';
import AF1_B2 from '@/assets/images/NAF1/AF1_B2.png';
import AF1_B3 from '@/assets/images/NAF1/AF1_B3.png';
import AF1_B4 from '@/assets/images/NAF1/AF1_B4.png';
import AJ4_1 from '@/assets/images/NAJ4/NAJ4_1.png';
import AJ4_2 from '@/assets/images/NAJ4/NAJ4_2.png';
import AJ4_3 from '@/assets/images/NAJ4/NAJ4_3.png';
import AJ4_4 from '@/assets/images/NAJ4/NAJ4_4.png';
import YZY_W1 from '@/assets/images/YZY/YZY_W1.png';
import YZY_W2 from '@/assets/images/YZY/YZY_W2.png';
import YZY_W3 from '@/assets/images/YZY/YZY_W3.png';
import YZY_B1 from '@/assets/images/YZY/YZY_B1.png';
import YZY_B2 from '@/assets/images/YZY/YZY_B2.png';
import YZY_B3 from '@/assets/images/YZY/YZY_B3.png';
import ONIT_1 from '@/assets/images/ONIT/ONIT_1.png';
import ONIT_2 from '@/assets/images/ONIT/ONIT_2.png';
import ONIT_3 from '@/assets/images/ONIT/ONIT_3.png';
import ONIT_4 from '@/assets/images/ONIT/ONIT_4.png';
import CONVRS_1 from '@/assets/images/Converse/CONVRS_1.png';
import CONVRS_2 from '@/assets/images/Converse/CONVRS_2.png';
import CONVRS_3 from '@/assets/images/Converse/CONVRS_3.png';
import CONVRS_4 from '@/assets/images/Converse/CONVRS_4.png';
import SAMBA_1 from '@/assets/images/SAMBA/SAMBA_1.png';
import SAMBA_2 from '@/assets/images/SAMBA/SAMBA_2.png';
import SAMBA_3 from '@/assets/images/SAMBA/SAMBA_3.png';
import NB530_1 from '@/assets/images/NB530/NB530_1.png';
import NB530_2 from '@/assets/images/NB530/NB530_2.png';
import NB530_3 from '@/assets/images/NB530/NB530_3.png';
import NB530_4 from '@/assets/images/NB530/NB530_4.png';
import NB550_1 from '@/assets/images/NB550/NB550_1.png';
import NB550_2 from '@/assets/images/NB550/NB550_2.png';
import NB550_3 from '@/assets/images/NB550/NB550_3.png';
import NB550_4 from '@/assets/images/NB550/NB550_4.png';
import NB9060_1 from '@/assets/images/NB9060/NB9060_1.png';
import NB9060_2 from '@/assets/images/NB9060/NB9060_2.png';
import NB9060_3 from '@/assets/images/NB9060/NB9060_3.png';
import NB9060_4 from '@/assets/images/NB9060/NB9060_4.png';
import YELLOW_1 from '@/assets/images/YELLOW/YELLOW_1.png';
import YELLOW_2 from '@/assets/images/YELLOW/YELLOW_2.png';
import YELLOW_3 from '@/assets/images/YELLOW/YELLOW_3.png';
import YELLOW_4 from '@/assets/images/YELLOW/YELLOW_4.png';
import AJ11_1 from '@/assets/images/AJ11/AJ11_1.png';
import AJ11_2 from '@/assets/images/AJ11/AJ11_2.png';
import AJ11_3 from '@/assets/images/AJ11/AJ11_3.png';
import AJ11_4 from '@/assets/images/AJ11/AJ11_4.png';
import REDRUN_1 from '@/assets/images/REDRUN/REDRUN_1.png';
import REDRUN_2 from '@/assets/images/REDRUN/REDRUN_2.png';
import REDRUN_3 from '@/assets/images/REDRUN/REDRUN_3.png';
import REDRUN_4 from '@/assets/images/REDRUN/REDRUN_4.png';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Nike Air Force 1',
        price: '$115',
        color: 'white',
        colors: ['white', 'black'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        description: 'The Nike Air Force 1 Low White ‘07 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole complete the design. The Nike Air Force 1 Low White ‘07 originally released in 2007, but since it is an essential colorway to the brand, it consistently restocks.',
        sizeFit: 'Fits large; we recommend ordering a size down',
        review: 'Can be used for casual or dress shoes. The leather and sole hold up extremely well. The only weak point would be the side lining inside wearing out after seventeen months of use.',
        reviewer: 'Mark Cuban',
        images: {
          white: [AF1_W1, AF1_W2, AF1_W3, AF1_W4],
          black: [AF1_B1, AF1_B2, AF1_B3, AF1_B4],
        },
      },
      {
        id: 2,
        name: 'Nike Air Jordan 4',
        price: '$150',
        color: 'white',
        colors: ['white'],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        description: 'The Air Jordan 4, Michael Jordan’s fourth signature shoe, debuted in 1989 in February during the 1989 NBA All-Star Game in Houston. The Jordan 4 was the second Jordan model designed by legend Tinker Hatfield. It felt like the perfect evolution of the Air Jordan 3. The shoe also featured a visible Air Max cushioning unit, the iconic netting on the upper, and plastic lace eyelet wings.',
        sizeFit: 'Fits true to size.',
        review: 'The Jordan 4 holds up surprisingly well as an on-court performer. There are of course better performance models nowadays, but, if you are looking for a pair of retro Jordans to hoop in, and you love the Air Jordan 4, go right ahead.',
        reviewer: 'Mab Sengthai',
        images: {
          white: [AJ4_1, AJ4_2, AJ4_3, AJ4_4],
        },
      },
      {
        id: 3,
        name: 'adidas YEEZY Boost 350',
        price: '$230',
        color: 'white',
        colors: ['white', 'black'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
        description: 'YEEZY Boost 350 V2 sneakers from adidas YEEZY featuring white and black, round toe, front lace-up fastening, pull-tab at the heel and rubber sole.',
        sizeFit: 'Fits true to size.',
        review: 'The boost is also very easy to feel and super comfortable. Even though it is caged, the material is a bit softer that most other boost models that Adidas puts out.',
        reviewer: 'Mao Tongkheang',
        images: {
          white: [YZY_W1, YZY_W2, YZY_W3],
          black: [YZY_B1, YZY_B2, YZY_B3],
        },
      },
      {
        id: 4,
        name: 'Onitsuka Tiger Tokuten "White Blue Gem"',
        price: '$90',
        color: 'white',
        colors: ['white'],
        sizes: [39, 40, 41, 42, 43],
        description: 'The Onitsuka Tiger Tokuten is a stylish sneaker that effortlessly blends fashion and performance. With its clean white color accented by subtle blue details, this shoe appeals to both men and women. The design features a classic silhouette, making it versatile for various occasions. Crafted with attention to detail, the Tokuten offers comfort and durability. Whether you’re strolling through the city streets or adding a sporty touch to your outfit, these sneakers are a reliable choice.',
        sizeFit: 'Fits true to size.',
        review: 'These are very stylish shoes. I have gotten several compliments since I started wearing mine. The material is a little stiff at first and takes some breaking in, but it will happen. Same with the cushioning. It will take a little while to conform to your foot, but it becomes very comfortable. I have higher than average arches, and even though the shoes are naturally fairly flat, the padding has conformed to the shape of my foot.',
        reviewer: 'Khut Sorphorn',
        images: {
          white: [ONIT_1, ONIT_2, ONIT_3, ONIT_4],
        },
      },
      {
        id: 5,
        name: 'Converse Chuck 70 Classic',
        price: '$70',
        color: 'black',
        colors: ['black'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        description: 'Chuck 70 classic high-top sneakers black/white canvas round toe contrasting toecap contrast stitching front lace-up fastening logo patch to the side flat rubber sole.',
        sizeFit: 'Fits smaller; we recommend ordering a size up',
        review: 'There’s nothing particularly great about the Chuck Taylor All Star Classic, but it’s stylish, solid, and comfortable. I love my pair and wear them often. Considering the price, the quality is good, but the main reason to get these sneakers is for the style.',
        reviewer: 'Dave Portnoy',
        images: {
          black: [CONVRS_1, CONVRS_2, CONVRS_3, CONVRS_4],
        },
      },
      {
        id: 6,
        name: 'adidas Samba OG "White/Black"',
        price: '$75',
        color: 'white',
        colors: ['white'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        description: 'A step in the right direction. The adidas Samba shoes are no stranger to covering expansive ground. With the same look and feel as the original style, this version advocates for a better future with an entirely vegan design. The signature T-toe keeps them rooted in the football pitches of the past.',
        sizeFit: 'Fits true to size.',
        review: 'They’re also, in my opinion, a great price for what you’re getting. Featuring a soft leather upper, suede overlays and gum soles, they’re a high-quality, durable shoe that I know, from years of wearing them, will last.',
        reviewer: 'Josh Hart',
        images: {
          white: [SAMBA_1, SAMBA_2, SAMBA_3],
        },
      },
      {
        id: 7,
        name: 'New Balance 530',
        price: '$80',
        color: 'white',
        colors: ['white'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        description: "New Balance's 530 sneakers are back - this time, in a white hue with navy blue and silver accents. This pair has a low-top silhouette, constructed with mesh panels for breathability, and is enhanced with an 'N' logo on the sides. Underneath, a signature ABZORB® midsole brings it better cushioning.",
        sizeFit: 'Fits true to size.',
        review: 'The New Balance 530 sneakers are the most comfortable, stylish walking shoes, perfect for everyday wear as well as travel.',
        reviewer: 'Mark Calaway',
        images: {
          white: [NB530_1, NB530_2, NB530_3, NB530_4],
        },
      },
      {
        id: 8,
        name: 'New Balance 550 "Winter Frog"',
        price: '$90',
        color: 'white',
        colors: ['white'],
        sizes: [36, 37, 40, 41, 42, 43],
        description: "New Balance reimagines its classic 550 silhouette in a muted white, blue and grey colourway: inspired by basketball styles, the model first debuted in the '80s. They’re grounded atop a durable rubber cupsole and fitted with an EVA wedge for lightweight cushioning underfoot.",
        sizeFit: 'Fits true to size.',
        review: 'The New Balance 550 offers great materials and surprisingly good comfort for a retro sneaker.',
        reviewer: 'Randle Keith',
        images: {
          white: [NB550_1, NB550_2, NB550_3, NB550_4],
        },
      },
      {
        id: 9,
        name: 'New Balance 9060 "Black Phantom/Charcoal"',
        price: '$120',
        color: 'grey',
        colors: ['grey'],
        sizes: [36, 37, 38, 40, 41, 42, 43, 45],
        description: "The 9060 is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconic models in New Balance history. The 9060 reinterprets familiar elements sourced from classic 99X models with a warped sensibility inspired by the proudly futuristic, visible tech aesthetic of the Y2K era.",
        sizeFit: 'Fits true to size.',
        review: 'THEY’RE SOOOOOO FIRE!!!! and they’re comfortable. I got a size 42 and they’re true to size. Definitely recommend this shoe.',
        reviewer: 'Jesse Pinkman',
        images: {
          grey: [NB9060_1, NB9060_2, NB9060_3, NB9060_4],
        },
      },
      {
        id: 10,
        name: 'MSCHF x Crocs Big Yellow Boot',
        price: '$650',
        color: 'yellow',
        colors: ['yellow'],
        sizes: [38, 41, 43],
        description: "The MSCHF x Crocs Big Yellow Boot is a sequel to the highly viral Big Red Boot from the Brooklyn design studio. Drenched in a bright and cheerful shade, this whimsical boot showcases a TPU rubber shell that incorporates design elements inspired by Crocs' signature clogs.",
        sizeFit: 'Fits small; we recommend ordering a size up',
        review: "The Crocs x MSCHF Big Yellow Boots are an audacious collaboration that stands out in an industry often known for its conformity. Their unique design, comfort, and attention to detail make them an intriguing addition to any fashion enthusiast's collection. However, the boots may not be practical for everyday wear or for those seeking a more conventional look.",
        reviewer: 'Mike Ross',
        images: {
          yellow: [YELLOW_1, YELLOW_2, YELLOW_3, YELLOW_4],
        },
      },
      {
        id: 11,
        name: 'Nike Air Jordan 11 Retro',
        price: '$160',
        color: 'grey',
        colors: ['grey'],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        description: "Reimagining the original 1995 silhouette, the Air Jordan 11 Retro boasts a classic sports-style aesthetic. The supportive high-top upper on this pair is presented in a medium grey, cool grey and white colourway, supported underfoot by the signature Air cushioning.",
        sizeFit: 'Fits large; we recommend ordering a size down.',
        review: "The Air Jordan XI is a straight beast on-court. They look good, feel good and they play well on top of that. I hoped the quality wouldn’t obstruct my opinion on their performance and it honestly hasn’t. These are still one of my personal favorite on-court options of all time.",
        reviewer: 'Harvey Spector',
        images: {
          grey: [AJ11_1, AJ11_2, AJ11_3, AJ11_4],
        },
      },
      {
        id: 12,
        name: 'YEEZY Foam Runner "Vermillion"',
        price: '$100',
        color: 'red',
        colors: ['red'],
        sizes: [36, 37, 38, 40, 41, 42, 43, 45],
        description: "The adidas Yeezy Foam Runner Vermillion features an all-red one piece EVA foam construction with oval cut-outs to provide ventilation. At the base, a cushioned footbed offers support and stability.",
        sizeFit: 'Fits true to size.',
        review: 'The Yeezy Foam Runner is a polarizing shoe. Some will hate it; some will be loyal to it. For what it is, it’s a comfortable adidas version of Crocs.',
        reviewer: 'Walter White',
        images: {
          red: [REDRUN_1, REDRUN_2, REDRUN_3, REDRUN_4],
        },
      },
      // Add other products here...
    ],
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
});
