import { defineStore } from 'pinia';

// shoes
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
import BALEN_1 from '@/assets/images/BALEN/BALEN_1.png';
import BALEN_2 from '@/assets/images/BALEN/BALEN_2.png';
import BALEN_3 from '@/assets/images/BALEN/BALEN_3.png';
import BALEN_4 from '@/assets/images/BALEN/BALEN_4.png';
import NAJ1_1 from '@/assets/images/NAJ1/NAJ1_1.png';
import NAJ1_2 from '@/assets/images/NAJ1/NAJ1_2.png';
import NAJ1_3 from '@/assets/images/NAJ1/NAJ1_3.png';
import NAJ1_4 from '@/assets/images/NAJ1/NAJ1_4.png';
import CAMPUS_1 from '@/assets/images/CAMPUS/CAMPUS_1.png';
import CAMPUS_2 from '@/assets/images/CAMPUS/CAMPUS_2.png';
import ULTRA_1 from '@/assets/images/ULTRA/ULTRA_1.png';
import ULTRA_2 from '@/assets/images/ULTRA/ULTRA_2.png';
import ULTRA_3 from '@/assets/images/ULTRA/ULTRA_3.png';
import ULTRA_4 from '@/assets/images/ULTRA/ULTRA_4.png';

// accessories
import SOCKS_S1 from '@/assets/images/SOCKS/SOCKS_S1.png';
import SOCKS_S2 from '@/assets/images/SOCKS/SOCKS_S2.png';
import SOCKS_L1 from '@/assets/images/SOCKS/SOCKS_L1.png';
import SOCKS_L2 from '@/assets/images/SOCKS/SOCKS_L2.png';
import CLEAN_1 from '@/assets/images/SHOECARE/CLEAN_1.png';
import CLEAN_2 from '@/assets/images/SHOECARE/CLEAN_2.png';
import SPRAY_1 from '@/assets/images/SHOECARE/SPRAY_1.png';
import SPRAY_2 from '@/assets/images/SHOECARE/SPRAY_2.png';
import FOAM_1 from '@/assets/images/SHOECARE/FOAM_1.png';
import TRAVEL_1 from '@/assets/images/SHOECARE/TRAVEL_1.png';
import TRAVEL_2 from '@/assets/images/SHOECARE/TRAVEL_2.png';
import CREASE_1 from '@/assets/images/SHOECARE/CREASE_1.png';
import CREASE_2 from '@/assets/images/SHOECARE/CREASE_2.png';

// health & fitness
import CHARGE_O1 from '@/assets/images/FITBIT/CHARGE_O1.png';
import CHARGE_O2 from '@/assets/images/FITBIT/CHARGE_O2.png';
import CHARGE_O3 from '@/assets/images/FITBIT/CHARGE_O3.png';
import CHARGE_B1 from '@/assets/images/FITBIT/CHARGE_B1.png';
import CHARGE_B2 from '@/assets/images/FITBIT/CHARGE_B2.png';
import CHARGE_B3 from '@/assets/images/FITBIT/CHARGE_B3.png';
import INSPIRE_B1 from '@/assets/images/FITBIT/INSPIRE_B1.png';
import INSPIRE_B2 from '@/assets/images/FITBIT/INSPIRE_B2.png';
import INSPIRE_B3 from '@/assets/images/FITBIT/INSPIRE_B3.png';
import INSPIRE_P1 from '@/assets/images/FITBIT/INSPIRE_P1.png';
import INSPIRE_P2 from '@/assets/images/FITBIT/INSPIRE_P2.png';
import INSPIRE_P3 from '@/assets/images/FITBIT/INSPIRE_P3.png';
import LUXE_1 from '@/assets/images/FITBIT/LUXE_1.png';
import LUXE_2 from '@/assets/images/FITBIT/LUXE_2.png';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      // Shoes
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
      {
        id: 13,
        name: 'Balenciaga Speed Sneaker',
        price: '$350',
        color: 'black',
        colors: ['black'],
        sizes: [36, 37, 41, 42, 43],
        description: "These are most comfortable designer shoes I’ve bought so far!",
        sizeFit: 'Fits true to size; Order your normal size.',
        review: 'These are most comfortable designer shoes I’ve bought so far!',
        reviewer: 'John Wicked',
        images: {
          black: [BALEN_1, BALEN_2, BALEN_3, BALEN_4],
        },
      },
      {
        id: 14,
        name: 'Nike Air Jordan 1 High "University Blue"',
        price: '$240',
        color: 'blue',
        colors: ['blue'],
        sizes: [36, 37, 40, 41, 42, 43],
        description: "Be careful: there are many reasons to be obsessed with these Air Jordan 1 Retro High 'University Blue' sneakers from Jordan, like their contrasting light blue panels to the iconic high-top silhouette that was first debuted by Michael Jordan in 1985. You've been warned, they're a retro classic with a modern edge. ",
        sizeFit: 'Fits true to size.',
        review: 'As someone who has been in the sneaker game for a while, I can confidently say that the Air Jordan 1 High "University Blue / UNC" is a marvel of craftsmanship. The premium leather and suede construction gives the sneaker a luxurious feel, while the high-top design ensures a secure and comfortable fit.',
        reviewer: 'Gustavo Fring',
        images: {
          blue: [NAJ1_1, NAJ1_2, NAJ1_3, NAJ1_4],
        },
      },
      {
        id: 15,
        name: 'adidas x Bad Bunny Campus',
        price: '$120',
        color: 'brown',
        colors: ['brown'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        description: "Simple yet timeless, the adidas Originals Bad Bunny Campus fuses nostalgia and modern style for versatile, everyday wear. Featuring a double-tongue and double-heel construction, these sneakers bring back the iconic Campus silhouette with a twist. Offering a familiar fit and feel, these trainers have been rolled out in a dark brown hairy suede material detailed by chalk white and pink accents to provide a distinctive look and eye-catching style. Completed with the Bad Bunny all-seeing eye on the tongue and an adidas x Bad Bunny logo on the sockliner, the adidas Originals Bad Bunny Campus blends fashion and function to make you stand out in every fit.",
        sizeFit: 'Fits large; we recommend ordering a size up.',
        review: "It's a very nice shoe. I have one other. The lighter brown colorway and I bought that true to size. I went a half size down and this fits very well. It looks good too.",
        reviewer: 'Karl Anthony Towns',
        images: {
          brown: [CAMPUS_1, CAMPUS_2],
        },
      },
      {
        id: 16,
        name: 'adidas Ultraboost DNA',
        price: '$100',
        color: 'yellow',
        colors: ['yellow'],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        description: "The adidas x LEGO Ultra Boost in Yellow and Black has an upper with a base of black Primeknit for lightweight breathability. Black and yellow synthetic overlays give the shoe style as well as support for your foot while running. The bright yellow heel and three side-panel stripes have raised circular lugs as a nod to LEGO. Yellow laces crisscross over a black tongue with dual branding.",
        sizeFit: 'Fits true to size.',
        review: 'Adidas Ultraboost DNA shoes is good looking and comfortable (especially if you have a narrow foot).',
        reviewer: 'Jon Snow',
        images: {
          yellow: [ULTRA_1, ULTRA_2, ULTRA_3, ULTRA_4],
        },
      },
      // Accessories
      {
        id: 17,
        name: 'Nike 6 Pack Dri-FIT Plus Quarter Socks',
        price: '$10',
        color: 'white',
        colors: ['white', 'black'],
        sizes: ['M', 'L'],
        description: 'Power through your workout with the Nike Everyday Plus Cushion Ankle Training Socks (6 Pair). Dri-FIT technology helps you stay dry and comfortable. Breathable mesh at the top of the foot for enhanced ventilation. 1/4-length silhouette provides comfortable coverage around the ankle and calf. Arch band contours around the foot for a locked in fit. 66% cotton/31% polyester/2% spandex/1% nylon.',
        sizeFit: 'M size for shoe size 35-39; L size for shoe size 40-45',
        review: 'I was satisfied with everything about the process. The app is amazing, from the ordering to the checkout options. Next, the delivery time is superb. And lastly, the product is A-1 quality at the price point.',
        reviewer: 'Benjamin Franklin',
        images: {
          white: [SOCKS_S1],
          black: [SOCKS_S2],
        },
      },
      {
        id: 18,
        name: 'Nike 6 Pack Everyday Plus Cushioned Socks',
        price: '$12',
        color: 'white',
        colors: ['white', 'black'],
        sizes: ['M', 'L'],
        description: 'Power through your workout with the Nike Everyday Plus Cushion Crew Training Socks (6 Pair). Dri-FIT technology helps you stay dry and comfortable. Breathable mesh at the top of the foot for enhanced ventilation. Crew silhouette provides comfortable coverage around the ankle and calf. Arch band contours around the foot for a locked in fit. 66% cotton/31% polyester/2% spandex/1% nylon.',
        sizeFit: 'M size for shoe size 35-39; L size for shoe size 40-45',
        review: 'Absolutely love these socks, super comfortable and absorb any sweat from a long day. Look great on the foot and hug the leg nicely too.',
        reviewer: 'Ronaldo Nazario',
        images: {
          white: [SOCKS_L1],
          black: [SOCKS_L2],
        },
      },
      {
        id: 19,
        name: 'Jason Markk Mini Starter Kit',
        price: '$8',
        color: 'white',
        colors: ['white'],
        sizes: ['S'],
        description: "The Jason Markk Mini Starter Kit always lets you put your best foot forward. Featuring a deep cleaning solution and standard cleaning brush, this cleaning kit is safe to use on all colors and materials including suede, nubuck, canvas, cotton, knit, and more. The standard cleaning brush fitted with stiff bristles is tough on stubborn stains and keeps your shoes shining bright no matter what, while the cleaning solution takes care of delicate materials and conditions your shoes so they always look like they’re fresh out of the box. Clean your sneakers and keep them looking brand new with the Jason Markk Mini Starter Kit.",
        sizeFit: 'Fits true to size.',
        review: 'Very happy with my purchase, the product is excellent and with a small amount you can clean the entire tennis shoe, I have been using it for many years and I recommend it.',
        reviewer: 'Zlatan',
        images: {
          white: [CLEAN_1, CLEAN_2],
        },
      },
      {
        id: 20,
        name: 'Jason Markk Repel Spray Full Size',
        price: '$10',
        color: 'white',
        colors: ['white'],
        sizes: ['L'],
        description: "No one likes dirty sneakers. Keep your favorite pair of sneakers fresh as new with the Jason Markk Repel Spray Full Size. Creating a durable, breathable barrier that effectively repels liquids and stains, this ultimate sneaker accessory helps you keep your shoes looking pristine in the long run. The PFOA-free water-based formula is safe to use on all materials, including suede, nubuck, cotton, canvas, nylon, knit, and more. Protect your favorite sneakers from stains with the Jason Markk Repel Spray Full Size.",
        sizeFit: 'Fits true to size.',
        review: 'Got this product for fall for all my new boots. It has done a great job at protecting the boots. I have got them wet and the water marks didn’t stain the boots. It is easy to apply and sprays a good amount at a time!',
        reviewer: 'Kyrie Irving',
        images: {
          white: [SPRAY_1, SPRAY_2],
        },
      },
      {
        id: 21,
        name: 'Crep Protect Foam x Cleaner',
        price: '$10',
        color: 'white',
        colors: ['white'],
        sizes: ['M'],
        description: "Say goodbye to dirt and grime with the Crep Protect FoamX Cleaner. Designed to be your sneakers' new best friend, this cleaner comes with an innovative built-in pump applicator to transform cleaning into a breeze. Perfect for leather, canvas, and nylon sneakers, the FoamX features an eco-friendly, water-based formula to ensure that both your sneakers and the environment stay protected. Say hello to a new era of sneaker care with the Crep Protect FoamX Cleaner.",
        sizeFit: 'Fits true to size.',
        review: 'Love Crep protect for our shoes and boots. Have the cleaner kits as well. Always have this one on hand! Does what it says, protects long term, doesn’t damage.',
        reviewer: 'James Harden',
        images: {
          white: [FOAM_1],
        },
      },
      {
        id: 22,
        name: 'Force Field Crease Protector',
        price: '$6',
        color: 'white',
        colors: ['white'],
        sizes: ['M'],
        description: "Keep your kicks looking clean and sharp with the Crease Preventers. Designed to fit comfortably inside the toebox of your shoes to help prevent creasing, the Crease Preventers are designed to protect the shape of your sneakers. Each Crease Preventer includes two adhesive strips on top for easy placement, and they're designed to stay in place during movement.",
        sizeFit: 'Fits true to size.',
        review: 'I bought this awhile ago and it works amazingly, I have airfoces and they keep them nice looking.',
        reviewer: 'Long Sovichet',
        images: {
          white: [CREASE_1, CREASE_2],
        },
      },
      // Health & Fitness
      {
        id: 23,
        name: 'Fitbit Charge 6',
        price: '$130',
        color: 'orange',
        colors: ['orange', 'black'],
        sizes: ['M'],
        description: "Give your routine a boost with Fitbit Charge 6*, the only fitness tracker with Google built in. Charge 6 has your essentials—like YouTube Music, Google Maps and Google Wallet**—plus the fitness tools you need to crush your goals. From staying motivated and tracking your daily progress to tuning in and taking care, running your day and your routine has never been easier.",
        sizeFit: 'Fits true to size.',
        review: "The Fitbit Charge 6 brings a physical side button and new exercise modes to the company's popular midrange line. And, thanks to Google's acquisition of Fitbit, the Charge 6 has Google Maps, Google Wallet and YouTube Music built-in. It's a brilliant tracker, but it's still annoying many of its best features are locked behind the Fitbit Premium paywall.",
        reviewer: 'Tom Cruise',
        images: {
          orange: [CHARGE_O1, CHARGE_O2, CHARGE_O3],
          black: [CHARGE_B1, CHARGE_B2, CHARGE_B3],
        },
      },
      {
        id: 24,
        name: 'Fitbit Inspire 3',
        price: '$100',
        color: 'black',
        colors: ['black', 'pink'],
        sizes: ['M'],
        description: "Do what you love and feel your best with Inspire 3. This little health hack on your wrist helps you stay on top of your stress, fitness and sleep--all you have to do is wear it. Track Health Metrics1 like skin temperature & blood oxygen, plus get daily scores that show how ready you are to work out or how well you're managing stress. Fitbit is part of the Google family.",
        sizeFit: 'Fits true to size.',
        review: 'If you’re looking for an affordable fitness tracker to keep track of everything from your steps to your sleep, the Fitbit Inspire 3 is the best tracker for most people. With a bright, color screen, and an excellent battery life, you can’t go wrong.',
        reviewer: 'Tom Holland',
        images: {
          black: [INSPIRE_B1, INSPIRE_B2, INSPIRE_B3],
          pink: [INSPIRE_P1, INSPIRE_P2, INSPIRE_P3],
        },
      },
      {
        id: 25,
        name: 'Firbit Luxe',
        price: '$170',
        color: 'gold',
        colors: ['gold'],
        sizes: ['M'],
        description: "The Fitbit Luxe is looking to make fitness tracking a fashion statement. While we've seen smartwatches offer lifestyle models as alternatives to their sporty counterparts, the Fitbit Luxe is the first activity band we’ve seen in a long while that’ll pass as jewelery.",
        sizeFit: 'Fits true to size.',
        review: 'The Fitbit Luxe is equal parts activity band and wrist candy, elevated by a jewelry-inspired design and color touchscreen. For the price, we wish it offered GPS, but it still gets the fitness-tracking basics right.',
        reviewer: 'Tom Clancy',
        images: {
          gold: [LUXE_1, LUXE_2],
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
