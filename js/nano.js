(() => {
"use strict";
const PHONE = "34647306534";
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================= i18n ================= */
const STR = {
  es:{skip:"Saltar al contenido",nav_formas:"Especialidades",nav_menu:"Carta",nav_book:"Reservar",nav_find:"Dónde estamos",call:"Llamar",call_aria:"Llamar al 647 306 534",order:"Pedido",menu:"Menú",
    hero_lead:"Pizza de horno de leña en Reus.",hero_sub:"Masa hecha cada día, veinte pizzas en carta y cuatro especialidades de la casa. Ven a comer, reserva mesa o pídela para recoger.",
    cta_order:"Pedir para recoger",cta_book:"Reservar mesa",
    open_until:"Abierto ahora, hasta las {t}",closed_next:"Ahora cerrado. Abrimos {w} a las {t}",today:"hoy",tomorrow:"mañana",on_day:"el {d}",
    formas_t:"Más allá de la pizza redonda",formas_sub:"La misma masa, en cuatro formas de la casa.",
    menu_t:"La carta",menu_sub:"Añade lo que te apetezca y envíanos el pedido por WhatsApp. Lo tendrás listo para recoger en C/ Josep Carner 4.",
    c_pizzas:"Pizzas",c_especiales:"Especialidades",c_pasta:"Pasta fresca",c_ensaladas:"Ensaladas",c_tapas:"Tapas",c_postres:"Postres",
    add:"Añadir",added:"Añadido",base:"Base",opt_tomate:"Tomate",opt_nata:"Nata",opt_carne:"Carne",opt_pollo:"Pollo",opt_cocido:"Jamón cocido",opt_curado:"Jamón curado",meat:"Carne",ham:"Jamón",choose_pizza:"Elige tu pizza",
    pasta_t:"Pasta fresca casera",pasta_desc:"Elige la pasta y la salsa. Si quieres, te la servimos dentro de un bol de masa de pizza.",pick_pasta:"Elige tu pasta",pick_sauce:"Elige tu salsa",bowl:"En bol de masa de pizza (+3 €)",
    tapas_note:"Todas las tapas a 7,50 €.",desserts:"Postres caseros del momento, preparados con producto fresco. Pregúntanos qué hay hoy.",salads_note:"Ensaladas a 11 €.",
    
    book_t:"Reserva tu mesa",book_sub:"Elige día y hora. Se abrirá WhatsApp con la reserva escrita; envíala y te confirmamos la mesa.",big_group:"Grupos de más de 12 personas: llámanos.",
    f_name:"Nombre",f_phone:"Teléfono",f_date:"Fecha",f_time:"Hora",f_people:"Personas",f_notes:"Comentarios",optional:"(opcional)",notes_ph:"Alergias, trona para bebé, una celebración…",
    pick_date_first:"Elige primero la fecha.",closed_day:"Ese día cerramos. Elige otra fecha.",pick_time:"Elige una hora",people_n:"{n} personas",people_1:"1 persona",
    book_submit:"Enviar reserva por WhatsApp",book_ok:"Hemos abierto WhatsApp con tu reserva. Envía el mensaje y te confirmamos la mesa.",
    err_name:"Escribe tu nombre.",err_phone:"Escribe un teléfono de al menos 9 cifras para poder confirmarte.",err_date:"Elige una fecha a partir de hoy.",err_time:"Elige una hora.",
    find_t:"Dónde estamos",directions:"Cómo llegar",hours_t:"Horario",closed:"Cerrado",today_tag:"Hoy",
    d_mt:"Lunes a jueves",d_fs:"Viernes y sábado",d_su:"Domingo",
    cart_t:"Tu pedido",close:"Cerrar",empty_t:"Tu pedido está vacío",empty_p:"Añade lo que te apetezca desde la carta.",see_in_menu:"Elegir en la carta",see_menu:"Ver la carta",
    pickup_where:"Para recoger en C/ Josep Carner 4, Reus.",pickup_time:"Hora de recogida",asap:"Lo antes posible",total:"Total",cart_send:"Enviar pedido por WhatsApp",
    closed_pickup:"Ahora estamos cerrados: elige una hora de la próxima apertura.",cart_ok:"Hemos abierto WhatsApp con tu pedido. Envíalo y te confirmamos la hora de recogida.",
    remove:"Quitar",hero_alt:"Pizza margherita napolitana recién salida del horno, con el borde hinchado y tostado",rv4:"«El Calzone llega cerrado y humeante; dentro, la pizza entera. Repetiremos.»",rv5:"«La pasta en bol de masa de pizza es un acierto. Gnocchis con gorgonzola, de diez.»",rv6:"«Pedido por WhatsApp en un minuto y listo a la hora que nos dijeron.»",rv7:"«Borde con manchas de horno de leña, como en Nápoles. La Margherita, sencilla y perfecta.»",rv8:"«Buen precio para la calidad. La Top, con parmesano y jamón curado, es mi favorita.»",rv_pause:"Pausar",rv_play:"Reanudar",foot_desc:"Pizzería con horno de leña en Reus. Ven a comer, reserva mesa o pídela para recoger.",foot_all_menu:"Ver toda la carta",foot_reviews:"Opiniones",aria_foot:"Pie de página",casa_t:"Del fuego a la mesa",casa_sub:"Un horno de leña, tres pasos y ningún atajo.",casa_h1:"Encendemos el horno",casa_p1:"Cada día empieza igual: leña, fuego y paciencia hasta que el horno coge temperatura.",casa_h2:"Horneamos junto a las llamas",casa_p2:"La pizza entra directa sobre la piedra, al lado del fuego, y se hace en pocos minutos.",casa_h3:"Sale al punto",casa_p3:"Con el borde hinchado y tostado. De la pala a tu mesa, o a tu caja para llevar.",casa_alt1:"Boca de un horno de ladrillo con la leña ardiendo",casa_alt2:"Llamas dentro del horno de leña con dos pizzas cociéndose",casa_alt3:"Pizza horneándose junto a las brasas",credit:"Fotos de demostración vía Wikimedia Commons:",rv_t:"Lo que dicen en Reus",rv_note:"Opiniones de ejemplo para la demo. Antes de publicar se sustituirán por reseñas reales de Google.",sample:"Ejemplo",rv1:"«La Seguin, con miel y queso de cabra, es otra cosa. Masa fina en el centro y el borde bien tostado.»",rv2:"«Pedimos para recoger un viernes y en veinte minutos estaba lista. El Pipo fue un descubrimiento.»",rv3:"«Fuimos a cenar con niños y nos atendieron genial. La burrata, imprescindible.»",meta_title:"Nano Pizza | Pizzería en Reus",meta_desc:"Nano Pizza, pizzería con horno de leña en C/ Josep Carner 4, Reus. Carta, pedidos para recoger y reservas por WhatsApp.",aria_nav:"Principal",aria_lang:"Idioma",map_title:"Mapa: Nano Pizza, C/ Josep Carner 4, Reus",foot_visit:"Visítanos",foot_contact:"Contacto",foot_wa:"Escríbenos por WhatsApp",foot_top:"Volver arriba",err_pick_pizza:"Elige primero qué pizza quieres.",added_sr:"Añadido al pedido: {n}. Llevas {c} en total.",less:"Quitar uno",more:"Añadir uno",bar_empty:"Ver la carta",bar_items:"Ver pedido ({n}): {p}",
    pay_note:"El pago se hace en el local, al recoger.",pick_time:"Elige una hora",err_time_pick:"Elige a qué hora pasarás a recoger.",clear_cart:"Vaciar pedido",cleared:"Pedido vaciado.",undo:"Deshacer",sent_t:"¿Has enviado el pedido?",sent_p:"Lo abrimos en WhatsApp: {n}, {p}, recogida {w}. Si ya lo has enviado, te confirmamos la hora por WhatsApp.",sent_yes:"Sí, ya lo he enviado",sent_again:"Abrir WhatsApp otra vez",sent_edit:"Cambiar el pedido",done_t:"Pedido enviado",done_p:"Te confirmamos la hora por WhatsApp. ¡Hasta ahora!",art_1:"1 artículo",art_n:"{n} artículos",meta_title_carta:"Carta | Nano Pizza, pizzería en Reus",meta_desc_carta:"Carta de Nano Pizza: veinte pizzas de horno de leña, especialidades, pasta fresca, ensaladas y tapas, con los alérgenos de cada plato. Pide para recoger por WhatsApp.",meta_title_reservar:"Reservar mesa | Nano Pizza, Reus",meta_desc_reservar:"Reserva mesa en Nano Pizza, C/ Josep Carner 4, Reus. Elige día y hora y te confirmamos por WhatsApp.",diet_info:"Alérgenos y sin gluten",menu_sub_mesa:"Elige con calma: cuando lo tengas claro, díselo a tu camarero.",mesa_out:"Ver la web completa: pedidos para recoger y reservas",credit_menu:"Fotos de las pizzas: de demostración vía Wikimedia Commons, no son de Nano Pizza.",diet_l:"Ver solo",f_veg:"Vegetariano",f_hot:"Picante",f_gf:"Sin gluten",clear_f:"Quitar filtros",diet_n:"{n} platos",diet_n1:"1 plato",
    no_match:"Nada en esta sección con estos filtros.",al_l:"Alérgenos:",al_none:"ninguno de los 14 principales",al_pick:"y los de la pizza que elijas",
    diet_note:"Cada plato indica sus alérgenos. «Sin gluten» son platos sin gluten en la receta, pero en la cocina usamos harina de trigo y puede haber trazas: si eres celíaco o tienes una alergia, dínoslo al pedir.",
    al:{gluten:"gluten",crustaceos:"crustáceos",huevo:"huevo",pescado:"pescado",cacahuetes:"cacahuetes",soja:"soja",lacteos:"lácteos",frutos:"frutos de cáscara",apio:"apio",mostaza:"mostaza",sesamo:"sésamo",sulfitos:"sulfitos",altramuces:"altramuces",moluscos:"moluscos"},
    days:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},
  ca:{skip:"Salta al contingut",nav_formas:"Especialitats",nav_menu:"Carta",nav_book:"Reservar",nav_find:"On som",call:"Trucar",call_aria:"Truca al 647 306 534",order:"Comanda",menu:"Menú",
    hero_lead:"Pizza al forn de llenya a Reus.",hero_sub:"Massa feta cada dia, vint pizzes a la carta i quatre especialitats de la casa. Vine a menjar, reserva taula o demana-la per emportar.",
    cta_order:"Demanar per emportar",cta_book:"Reservar taula",
    open_until:"Obert ara, fins a les {t}",closed_next:"Ara tancat. Obrim {w} a les {t}",today:"avui",tomorrow:"demà",on_day:"{d}",
    formas_t:"Més enllà de la pizza rodona",formas_sub:"La mateixa massa, en quatre formes de la casa.",
    menu_t:"La carta",menu_sub:"Afegeix el que et vingui de gust i envia'ns la comanda per WhatsApp. La tindràs a punt per recollir al C/ Josep Carner 4.",
    c_pizzas:"Pizzes",c_especiales:"Especialitats",c_pasta:"Pasta fresca",c_ensaladas:"Amanides",c_tapas:"Tapes",c_postres:"Postres",
    add:"Afegir",added:"Afegit",base:"Base",opt_tomate:"Tomàquet",opt_nata:"Nata",opt_carne:"Carn",opt_pollo:"Pollastre",opt_cocido:"Pernil dolç",opt_curado:"Pernil curat",meat:"Carn",ham:"Pernil",choose_pizza:"Tria la teva pizza",
    pasta_t:"Pasta fresca casolana",pasta_desc:"Tria la pasta i la salsa. Si vols, te la servim dins d'un bol de massa de pizza.",pick_pasta:"Tria la pasta",pick_sauce:"Tria la salsa",bowl:"En bol de massa de pizza (+3 €)",
    tapas_note:"Totes les tapes a 7,50 €.",desserts:"Postres casolanes del dia, fetes amb producte fresc. Pregunta'ns què hi ha avui.",salads_note:"Amanides a 11 €.",
    
    book_t:"Reserva taula",book_sub:"Tria dia i hora. S'obrirà WhatsApp amb la reserva escrita; envia-la i et confirmem la taula.",big_group:"Grups de més de 12 persones: truca'ns.",
    f_name:"Nom",f_phone:"Telèfon",f_date:"Data",f_time:"Hora",f_people:"Persones",f_notes:"Comentaris",optional:"(opcional)",notes_ph:"Al·lèrgies, trona per al nadó, una celebració…",
    pick_date_first:"Tria primer la data.",closed_day:"Aquest dia tanquem. Tria una altra data.",pick_time:"Tria una hora",people_n:"{n} persones",people_1:"1 persona",
    book_submit:"Enviar reserva per WhatsApp",book_ok:"Hem obert WhatsApp amb la reserva. Envia el missatge i et confirmem la taula.",
    err_name:"Escriu el teu nom.",err_phone:"Escriu un telèfon d'almenys 9 xifres perquè et puguem confirmar.",err_date:"Tria una data a partir d'avui.",err_time:"Tria una hora.",
    find_t:"On som",directions:"Com arribar-hi",hours_t:"Horari",closed:"Tancat",today_tag:"Avui",
    d_mt:"Dilluns a dijous",d_fs:"Divendres i dissabte",d_su:"Diumenge",
    cart_t:"La teva comanda",close:"Tancar",empty_t:"La comanda és buida",empty_p:"Afegeix el que et vingui de gust des de la carta.",see_in_menu:"Triar a la carta",see_menu:"Veure la carta",
    pickup_where:"Per recollir al C/ Josep Carner 4, Reus.",pickup_time:"Hora de recollida",asap:"Com més aviat millor",total:"Total",cart_send:"Enviar comanda per WhatsApp",
    closed_pickup:"Ara som tancats: tria una hora de la propera obertura.",cart_ok:"Hem obert WhatsApp amb la comanda. Envia-la i et confirmem l'hora de recollida.",
    remove:"Treure",hero_alt:"Pizza margherita napolitana acabada de sortir del forn, amb la vora inflada i torrada",rv4:"«El Calzone arriba tancat i fumejant; a dins, la pizza sencera. Hi tornarem.»",rv5:"«La pasta en bol de massa de pizza és un encert. Gnocchis amb gorgonzola, de deu.»",rv6:"«Comanda per WhatsApp en un minut i a punt a l\'hora que ens van dir.»",rv7:"«Vora amb taques de forn de llenya, com a Nàpols. La Margherita, senzilla i perfecta.»",rv8:"«Bon preu per la qualitat. La Top, amb parmesà i pernil curat, és la meva preferida.»",rv_pause:"Pausar",rv_play:"Reprendre",foot_desc:"Pizzeria amb forn de llenya a Reus. Vine a menjar, reserva taula o demana-la per emportar.",foot_all_menu:"Veure tota la carta",foot_reviews:"Opinions",aria_foot:"Peu de pàgina",casa_t:"Del foc a la taula",casa_sub:"Un forn de llenya, tres passos i cap drecera.",casa_h1:"Encenem el forn",casa_p1:"Cada dia comença igual: llenya, foc i paciència fins que el forn agafa temperatura.",casa_h2:"Coem al costat de les flames",casa_p2:"La pizza entra directa sobre la pedra, al costat del foc, i es fa en pocs minuts.",casa_h3:"Surt al punt",casa_p3:"Amb la vora inflada i torrada. De la pala a la teva taula, o a la caixa per emportar.",casa_alt1:"Boca d'un forn de maó amb la llenya cremant",casa_alt2:"Flames dins del forn de llenya amb dues pizzes coent-se",casa_alt3:"Pizza coent-se al costat de les brases",credit:"Fotos de demostració via Wikimedia Commons:",rv_t:"El que diuen a Reus",rv_note:"Opinions d'exemple per a la demo. Abans de publicar se substituiran per ressenyes reals de Google.",sample:"Exemple",rv1:"«La Seguin, amb mel i formatge de cabra, és una altra cosa. Massa fina al centre i la vora ben torrada.»",rv2:"«Vam demanar per emportar un divendres i en vint minuts era a punt. El Pipo va ser un descobriment.»",rv3:"«Vam anar a sopar amb nens i ens van atendre de meravella. La burrata, imprescindible.»",meta_title:"Nano Pizza | Pizzeria a Reus",meta_desc:"Nano Pizza, pizzeria amb forn de llenya al C/ Josep Carner 4, Reus. Carta, comandes per emportar i reserves per WhatsApp.",aria_nav:"Principal",aria_lang:"Idioma",map_title:"Mapa: Nano Pizza, C/ Josep Carner 4, Reus",foot_visit:"Visita'ns",foot_contact:"Contacte",foot_wa:"Escriu-nos per WhatsApp",foot_top:"Torna a dalt",err_pick_pizza:"Tria primer quina pizza vols.",added_sr:"Afegit a la comanda: {n}. En portes {c} en total.",less:"Treure'n un",more:"Afegir-ne un",bar_empty:"Veure la carta",bar_items:"Veure comanda ({n}): {p}",
    pay_note:"El pagament es fa al local, en recollir.",pick_time:"Tria una hora",err_time_pick:"Tria a quina hora passaràs a recollir.",clear_cart:"Buidar la comanda",cleared:"Comanda buidada.",undo:"Desfer",sent_t:"Has enviat la comanda?",sent_p:"L'hem obert a WhatsApp: {n}, {p}, recollida {w}. Si ja l'has enviada, et confirmem l'hora per WhatsApp.",sent_yes:"Sí, ja l'he enviada",sent_again:"Tornar a obrir WhatsApp",sent_edit:"Canviar la comanda",done_t:"Comanda enviada",done_p:"Et confirmem l'hora per WhatsApp. Fins ara!",art_1:"1 article",art_n:"{n} articles",meta_title_carta:"Carta | Nano Pizza, pizzeria a Reus",meta_desc_carta:"Carta de Nano Pizza: vint pizzes al forn de llenya, especialitats, pasta fresca, amanides i tapes, amb els al·lèrgens de cada plat. Demana per recollir per WhatsApp.",meta_title_reservar:"Reservar taula | Nano Pizza, Reus",meta_desc_reservar:"Reserva taula a Nano Pizza, C/ Josep Carner 4, Reus. Tria dia i hora i et confirmem per WhatsApp.",diet_info:"Al·lèrgens i sense gluten",menu_sub_mesa:"Tria amb calma: quan ho tinguis clar, digues-ho al cambrer.",mesa_out:"Veure la web completa: comandes per recollir i reserves",credit_menu:"Fotos de les pizzes: de demostració via Wikimedia Commons, no són de Nano Pizza.",diet_l:"Mostra només",f_veg:"Vegetarià",f_hot:"Picant",f_gf:"Sense gluten",clear_f:"Treure filtres",diet_n:"{n} plats",diet_n1:"1 plat",
    no_match:"Res d'aquesta secció amb aquests filtres.",al_l:"Al·lèrgens:",al_none:"cap dels 14 principals",al_pick:"i els de la pizza que triïs",
    diet_note:"Cada plat indica els seus al·lèrgens. «Sense gluten» són plats sense gluten a la recepta, però a la cuina fem servir farina de blat i hi pot haver traces: si ets celíac o tens una al·lèrgia, digues-nos-ho en demanar.",
    al:{gluten:"gluten",crustaceos:"crustacis",huevo:"ou",pescado:"peix",cacahuetes:"cacauets",soja:"soja",lacteos:"lactis",frutos:"fruits de closca",apio:"api",mostaza:"mostassa",sesamo:"sèsam",sulfitos:"sulfits",altramuces:"tramussos",moluscos:"mol·luscs"},
    days:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},
  en:{skip:"Skip to content",nav_formas:"Specialities",nav_menu:"Menu",nav_book:"Book",nav_find:"Find us",call:"Call",call_aria:"Call 647 306 534",order:"Order",menu:"Menu",
    hero_lead:"Wood-fired pizza in Reus.",hero_sub:"Dough made every day, twenty pizzas on the menu and four house specialities. Eat in, book a table or order for pickup.",
    cta_order:"Order for pickup",cta_book:"Book a table",
    open_until:"Open now until {t}",closed_next:"Closed now. We open {w} at {t}",today:"today",tomorrow:"tomorrow",on_day:"on {d}",
    formas_t:"Beyond the round pizza",formas_sub:"The same dough, baked into four house shapes.",
    menu_t:"The menu",menu_sub:"Add what you fancy and send us the order on WhatsApp. It'll be ready to pick up at C/ Josep Carner 4.",
    c_pizzas:"Pizzas",c_especiales:"Specialities",c_pasta:"Fresh pasta",c_ensaladas:"Salads",c_tapas:"Tapas",c_postres:"Desserts",
    add:"Add",added:"Added",base:"Base",opt_tomate:"Tomato",opt_nata:"Cream",opt_carne:"Beef",opt_pollo:"Chicken",opt_cocido:"Cooked ham",opt_curado:"Cured ham",meat:"Meat",ham:"Ham",choose_pizza:"Choose your pizza",
    pasta_t:"Homemade fresh pasta",pasta_desc:"Pick your pasta and sauce. We can also serve it inside a pizza-dough bowl.",pick_pasta:"Choose your pasta",pick_sauce:"Choose your sauce",bowl:"In a pizza-dough bowl (+€3)",
    tapas_note:"All tapas €7.50.",desserts:"Homemade desserts of the day, made with fresh produce. Ask us what's on today.",salads_note:"Salads €11.",
    
    book_t:"Book a table",book_sub:"Pick a day and time. WhatsApp opens with your booking written out; send it and we'll confirm your table.",big_group:"Groups of more than 12: please call us.",
    f_name:"Name",f_phone:"Phone",f_date:"Date",f_time:"Time",f_people:"Guests",f_notes:"Notes",optional:"(optional)",notes_ph:"Allergies, a high chair, a celebration…",
    pick_date_first:"Pick a date first.",closed_day:"We're closed that day. Pick another date.",pick_time:"Choose a time",people_n:"{n} guests",people_1:"1 guest",
    book_submit:"Send booking via WhatsApp",book_ok:"WhatsApp is open with your booking. Send the message and we'll confirm your table.",
    err_name:"Enter your name.",err_phone:"Enter a phone number of at least 9 digits so we can confirm.",err_date:"Choose a date from today onwards.",err_time:"Choose a time.",
    find_t:"Find us",directions:"Get directions",hours_t:"Opening hours",closed:"Closed",today_tag:"Today",
    d_mt:"Monday to Thursday",d_fs:"Friday and Saturday",d_su:"Sunday",
    cart_t:"Your order",close:"Close",empty_t:"Your order is empty",empty_p:"Add what you fancy from the menu.",see_in_menu:"Choose it on the menu",see_menu:"See the menu",
    pickup_where:"For pickup at C/ Josep Carner 4, Reus.",pickup_time:"Pickup time",asap:"As soon as possible",total:"Total",cart_send:"Send order via WhatsApp",
    closed_pickup:"We're closed right now: choose a time from our next opening.",cart_ok:"WhatsApp is open with your order. Send it and we'll confirm the pickup time.",
    remove:"Remove",hero_alt:"Neapolitan margherita pizza fresh from the oven, with a puffed, charred crust",rv4:"“The Calzone arrives sealed and steaming, a whole pizza inside. We\'ll be back.”",rv5:"“Pasta in a pizza-dough bowl is a great idea. Gnocchi with gorgonzola, spot on.”",rv6:"“Ordered on WhatsApp in a minute, ready exactly when they said.”",rv7:"“Leopard-spotted crust, like in Naples. The Margherita is simple and perfect.”",rv8:"“Good value for the quality. La Top, with parmesan and cured ham, is my favourite.”",rv_pause:"Pause",rv_play:"Play",foot_desc:"Wood-fired pizzeria in Reus. Eat in, book a table or order for pickup.",foot_all_menu:"See the full menu",foot_reviews:"Reviews",aria_foot:"Footer",casa_t:"From the fire to your table",casa_sub:"A wood-fired oven, three steps and no shortcuts.",casa_h1:"We light the oven",casa_p1:"Every day starts the same way: wood, fire and patience until the oven is up to heat.",casa_h2:"We bake beside the flames",casa_p2:"The pizza goes straight onto the stone, next to the fire, and is ready in a few minutes.",casa_h3:"Out at its best",casa_p3:"Puffed, toasted crust. From the peel to your table, or into a box to take away.",casa_alt1:"Mouth of a brick oven with wood burning",casa_alt2:"Flames inside the wood-fired oven with two pizzas baking",casa_alt3:"Pizza baking beside the embers",credit:"Demo photos via Wikimedia Commons:",rv_t:"What Reus is saying",rv_note:"Sample reviews for the demo. They will be replaced with real Google reviews before launch.",sample:"Sample",rv1:"“The Seguin, with honey and goat's cheese, is something else. Thin in the middle, nicely charred crust.”",rv2:"“We ordered for pickup on a Friday and it was ready in twenty minutes. The Pipo was a discovery.”",rv3:"“We went for dinner with the kids and the service was lovely. Don't skip the burrata.”",meta_title:"Nano Pizza | Pizzeria in Reus",meta_desc:"Nano Pizza, wood-fired pizzeria at C/ Josep Carner 4, Reus. Menu, pickup orders and table bookings via WhatsApp.",aria_nav:"Main",aria_lang:"Language",map_title:"Map: Nano Pizza, C/ Josep Carner 4, Reus",foot_visit:"Visit us",foot_contact:"Contact",foot_wa:"Message us on WhatsApp",foot_top:"Back to top",err_pick_pizza:"Choose which pizza you want first.",added_sr:"Added to your order: {n}. {c} items in total.",less:"Remove one",more:"Add one",bar_empty:"See the menu",bar_items:"View order ({n}): {p}",
    pay_note:"You pay at the restaurant when you pick up.",pick_time:"Choose a time",err_time_pick:"Choose when you'll pick it up.",clear_cart:"Empty order",cleared:"Order emptied.",undo:"Undo",sent_t:"Did you send the order?",sent_p:"We opened it in WhatsApp: {n}, {p}, pickup {w}. Once you've sent it, we'll confirm the time on WhatsApp.",sent_yes:"Yes, I've sent it",sent_again:"Open WhatsApp again",sent_edit:"Change the order",done_t:"Order sent",done_p:"We'll confirm the time on WhatsApp. See you soon!",art_1:"1 item",art_n:"{n} items",meta_title_carta:"Menu | Nano Pizza, pizzeria in Reus",meta_desc_carta:"Nano Pizza's menu: twenty wood-fired pizzas, specialities, fresh pasta, salads and tapas, with the allergens of every dish. Order for pickup via WhatsApp.",meta_title_reservar:"Book a table | Nano Pizza, Reus",meta_desc_reservar:"Book a table at Nano Pizza, C/ Josep Carner 4, Reus. Pick a day and time and we'll confirm on WhatsApp.",diet_info:"Allergens and gluten-free",menu_sub_mesa:"Take your time: when you're ready, just tell your server.",mesa_out:"See the full site: pickup orders and bookings",credit_menu:"Pizza photos: demo images via Wikimedia Commons, not Nano Pizza's own.",diet_l:"Show only",f_veg:"Vegetarian",f_hot:"Spicy",f_gf:"Gluten-free",clear_f:"Clear filters",diet_n:"{n} dishes",diet_n1:"1 dish",
    no_match:"Nothing in this section matches these filters.",al_l:"Allergens:",al_none:"none of the main 14",al_pick:"plus those of your chosen pizza",
    diet_note:"Every dish lists its allergens. “Gluten-free” means no gluten in the recipe, but we use wheat flour in the kitchen and traces are possible: if you're coeliac or have an allergy, tell us when you order.",
    al:{gluten:"gluten",crustaceos:"crustaceans",huevo:"egg",pescado:"fish",cacahuetes:"peanuts",soja:"soy",lacteos:"milk",frutos:"tree nuts",apio:"celery",mostaza:"mustard",sesamo:"sesame",sulfitos:"sulphites",altramuces:"lupin",moluscos:"molluscs"},
    days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}
};
/* Idioma: el que eligió el cliente; si no eligió, el de su móvil.
   Castellano para las otras lenguas de la península, inglés para el resto (turistas). */
function deviceLang(){
  for (const l of navigator.languages || [navigator.language || ""]){
    const b = l.slice(0, 2).toLowerCase();
    if (STR[b]) return b;
    if (["gl","eu","pt"].includes(b)) return "es";
  }
  return "en";
}
/* Página actual (<html data-page>): inicio, carta, reservar o mesa */
const PAGE = document.documentElement.dataset.page || "inicio";
const MESA = PAGE === "mesa";
// Enlace a la carta: dentro de una página con carta, salto; desde las demás, a carta.html
const menuHref = () => $("#panels") ? "#carta" : "carta.html";
let lang = "es";
try{ const s = localStorage.getItem("nano-lang"); lang = STR[s] ? s : deviceLang(); }catch(e){ lang = deviceLang(); }
const t = (k, v={}) => (STR[lang][k] ?? STR.es[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? "");
const L = o => typeof o === "string" ? o : (o[lang] ?? o.es);

/* ================= Data (carta real) ================= */
const ING = {
  tomate:{es:"tomate",ca:"tomàquet",en:"tomato"}, mozzarella:{es:"mozzarella",ca:"mozzarella",en:"mozzarella"}, aceitunas:{es:"aceitunas",ca:"olives",en:"olives"},
  atun:{es:"atún",ca:"tonyina",en:"tuna"}, jcocido:{es:"jamón cocido",ca:"pernil dolç",en:"cooked ham"}, champi:{es:"champiñones",ca:"xampinyons",en:"mushrooms"},
  tomnata:{es:"tomate o nata",ca:"tomàquet o nata",en:"tomato or cream"}, gorgonzola:{es:"gorgonzola",ca:"gorgonzola",en:"gorgonzola"},
  cabra:{es:"queso de cabra",ca:"formatge de cabra",en:"goat's cheese"}, nata:{es:"nata",ca:"nata",en:"cream"}, salmon:{es:"salmón",ca:"salmó",en:"salmon"},
  limon:{es:"limón",ca:"llimona",en:"lemon"}, chorizo:{es:"chorizo",ca:"xoriço",en:"chorizo"}, pimientos:{es:"pimientos",ca:"pebrots",en:"peppers"},
  berenjena:{es:"berenjenas",ca:"albergínies",en:"aubergine"}, cebolla:{es:"cebolla",ca:"ceba",en:"onion"}, picada:{es:"carne picada",ca:"carn picada",en:"minced beef"},
  cheddar:{es:"cheddar",ca:"cheddar",en:"cheddar"}, sburger:{es:"salsa burger",ca:"salsa burger",en:"burger sauce"},
  picpollo:{es:"carne picada o pollo",ca:"carn picada o pollastre",en:"minced beef or chicken"}, sbbq:{es:"salsa barbacoa",ca:"salsa barbacoa",en:"BBQ sauce"},
  pesto:{es:"pesto",ca:"pesto",en:"pesto"}, jcurado:{es:"jamón curado",ca:"pernil curat",en:"cured ham"}, rucula:{es:"rúcula",ca:"ruca",en:"rocket"},
  tfrescos:{es:"tomates frescos",ca:"tomàquets frescos",en:"fresh tomatoes"}, parmesano:{es:"lascas de parmesano",ca:"encenalls de parmesà",en:"parmesan shavings"},
  burrata:{es:"burrata",ca:"burrata",en:"burrata"}, miel:{es:"miel",ca:"mel",en:"honey"}, bacon:{es:"bacon",ca:"bacó",en:"bacon"}, huevo:{es:"huevo",ca:"ou",en:"egg"},
  pollo:{es:"pollo",ca:"pollastre",en:"chicken"}, scurry:{es:"salsa curry",ca:"salsa de curri",en:"curry sauce"}
};
const PIZZAS = [
  ["margherita","Margherita",12,"tomate mozzarella aceitunas"],
  ["atun","Atún",12,"tomate atun mozzarella aceitunas"],
  ["jamon-cocido","Jamón Cocido",12,"tomate jcocido mozzarella aceitunas"],
  ["royale","Royale",13,"tomate jcocido champi mozzarella aceitunas"],
  ["gorgonzola","Gorgonzola",12,"tomnata gorgonzola mozzarella aceitunas"],
  ["queso-cabra","Queso de Cabra",12,"tomnata cabra mozzarella aceitunas"],
  ["noruega","Noruega",13,"nata salmon limon mozzarella aceitunas"],
  ["bergere","Bergère",13,"tomnata gorgonzola cabra mozzarella aceitunas"],
  ["catalana","Catalana",12,"tomate chorizo mozzarella aceitunas"],
  ["vegetariana","Vegetariana",13,"tomate pimientos champi berenjena cebolla mozzarella aceitunas"],
  ["burger","Burger",14,"tomate picada cheddar mozzarella sburger aceitunas"],
  ["armenia","Armenia",14,"tomate picada pimientos cebolla mozzarella aceitunas"],
  ["barbacoa","Barbacoa",14,"tomate picpollo pimientos cebolla mozzarella aceitunas sbbq"],
  ["pesto","Pesto",14,"pesto jcurado rucula tfrescos"],
  ["la-top","La Top",14,"tomate jcurado parmesano mozzarella aceitunas"],
  ["burrata","Burrata",14,"tomate jcurado burrata mozzarella aceitunas"],
  ["seguin","Seguin",14,"nata cabra miel jcurado mozzarella aceitunas"],
  ["carbonara","Carbonara",14,"nata bacon cebolla mozzarella aceitunas huevo"],
  ["pollo-curry","Pollo Curry",14,"nata pollo pimientos mozzarella aceitunas scurry"],
  ["espanola","Española",14,"tomate chorizo pimientos mozzarella aceitunas"]
].map(([id,n,p,i]) => {
  const ing = i.split(" ");
  const opt = ing.includes("tomnata") ? "base" : ing.includes("picpollo") ? "meat" : null;
  return {id, n, p, ing, opt};
});
const SPECIALS = [
  {id:"panuzzo",n:"Panuzzo",p:7,opt:"ham",icon:"panuzzo",d:{es:"Sándwich de masa de pizza relleno de rúcula, aceite de oliva, burrata, tomates frescos y jamón cocido o curado.",ca:"Entrepà de massa de pizza farcit de ruca, oli d'oliva, burrata, tomàquets frescos i pernil dolç o curat.",en:"A pizza-dough sandwich filled with rocket, olive oil, burrata, fresh tomatoes and cooked or cured ham."}},
  {id:"baguette",n:"Baguette Pizza",p:7,opt:"pizza",icon:"baguette",d:{es:"Tu pizza favorita en forma de baguette.",ca:"La teva pizza preferida en forma de baguet.",en:"Your favourite pizza, shaped like a baguette."}},
  {id:"pipo",n:"Pipo",p:13,opt:"pizza",icon:"pipo",d:{es:"Tu pizza favorita enrollada en forma de croissant.",ca:"La teva pizza preferida enrotllada en forma de croissant.",en:"Your favourite pizza, rolled up like a croissant."}},
  {id:"calzone",n:"Calzone",p:13,opt:"pizza",icon:"calzone",d:{es:"Tu pizza favorita cerrada en forma de empanada.",ca:"La teva pizza preferida tancada en forma d'empanada.",en:"Your favourite pizza, folded and sealed like a pasty."}}
];
const SALADS = [
  {id:"cesar",n:{es:"Ensalada César de pollo",ca:"Amanida César de pollastre",en:"Chicken Caesar salad"},p:11,d:{es:"Lechuga, pollo frito, tomates, cebolla frita, lascas de parmesano y picatostes.",ca:"Enciam, pollastre fregit, tomàquets, ceba fregida, encenalls de parmesà i crostons.",en:"Lettuce, fried chicken, tomatoes, crispy onion, parmesan shavings and croutons."}},
  {id:"italiana",n:{es:"La Italiana",ca:"La Italiana",en:"La Italiana"},p:11,d:{es:"Tomates frescos y burrata.",ca:"Tomàquets frescos i burrata.",en:"Fresh tomatoes and burrata."}}
];
const TAPAS = [
  {id:"croquetas",n:{es:"Croquetas del momento",ca:"Croquetes del dia",en:"Croquettes of the day"},p:7.5},
  {id:"bravas",n:{es:"Patatas bravas",ca:"Patates braves",en:"Patatas bravas"},p:7.5,d:{es:"",ca:"",en:"Fried potatoes with spicy sauce."}},
  {id:"calamares",n:{es:"Calamares a la romana",ca:"Calamars a la romana",en:"Fried squid rings"},p:7.5},
  {id:"alitas",n:{es:"Alitas de pollo",ca:"Aletes de pollastre",en:"Chicken wings"},p:7.5}
];
const PASTA = {p:13, bowl:3,
  pastas:[["gnocchi",{es:"Gnocchis",ca:"Gnocchis",en:"Gnocchi"}],["tagliatelle",{es:"Tagliatelle",ca:"Tagliatelle",en:"Tagliatelle"}],["spaghetti",{es:"Spaghetti",ca:"Spaghetti",en:"Spaghetti"}]],
  sauces:[["pesto",{es:"Pesto",ca:"Pesto",en:"Pesto"}],["bolonesa",{es:"Boloñesa",ca:"Bolonyesa",en:"Bolognese"}],["carbonara",{es:"Carbonara",ca:"Carbonara",en:"Carbonara"}],["gorgonzola",{es:"Gorgonzola",ca:"Gorgonzola",en:"Gorgonzola"}],["tresquesos",{es:"Tres quesos",ca:"Tres formatges",en:"Three cheeses"}]]
};
const OPTV = {
  base:{tomate:"opt_tomate",nata:"opt_nata"},
  meat:{carne:"opt_carne",pollo:"opt_pollo"},
  ham:{cocido:"opt_cocido",curado:"opt_curado"}
};
const OPTLABEL = {base:"base",meat:"meat",ham:"ham"};

/* Fotos de las pizzas: DEMOSTRACIÓN, de Wikimedia Commons (no son las de Nano Pizza).
   Se cambiarán por fotos reales del restaurante. [archivo en Commons, autor, licencia] */
const PHOTOS = {
  "margherita":["Margherita Originale.JPG","Mario56","CC BY-SA 3.0"],
  "atun":["Tuna and Olive Pizza (9674876578).jpg","Rusty Clark","CC BY 2.0"],
  "jamon-cocido":["Pizza prosciutto e funghi, Edingen.jpg","Gerda Arendt","CC BY-SA 4.0"],
  "royale":["2014 Pizza con funghi e prosciutto cotto e mozzarella di bufala.jpg","Takeaway","CC BY-SA 3.0"],
  "gorgonzola":["Gorgonzola pizza.jpg","La yeon Kim","CC BY 2.0"],
  "queso-cabra":["Pizza with goat cheese and roasted tomatoes.jpg","jeffreyw","CC BY 2.0"],
  "noruega":["Salmon Pizza (5986639731).jpg","Erik Drost","CC BY 2.0"],
  "bergere":["Италия 4 сыр пиццасы.jpg","Aiyanakk","CC BY-SA 4.0"],
  "catalana":["Pizza calabresa argentina (con longaniza calabresa o chorizo picante).jpg","Horacio Cambeiro","CC BY-SA 4.0"],
  "vegetariana":["Vegetarian pizza.jpg","Food Recipes","CC BY 2.0"],
  "burger":["Cheeseburger pizza with onions - Massachusetts.jpg","Daderot","CC0"],
  "armenia":["Kotipizza Kolmen chilin beef.jpg","JIP","CC BY-SA 4.0"],
  "barbacoa":["Pieology Hickory BBQ Chicken Pizza (31965598124).jpg","Willis Lam","CC BY-SA 2.0"],
  "pesto":["Pesto pizza (3145524285).jpg","Karen and Brad Emerson","CC BY 2.0"],
  "la-top":["Italian Pizza - 2018-06-17 - Davide Marzorati.jpg","Davide Marzorati","CC BY-SA 4.0"],
  "burrata":["Pizza burrata.jpg","إيان","CC BY-SA 4.0"],
  "seguin":["Pizza with prosciutto, nectarine, goat cheese, and walnut pesto - San Francisco, CA.jpg","Daderot","CC0"],
  "carbonara":["20240105 Carbonara Pizza Pizza Arale Tel Aviv anagoria.jpg","Anagoria","CC BY-SA 4.0"],
  "pollo-curry":["Chicken Pizza made in Uganda.jpg","James Moore200","CC BY-SA 4.0"],
  "espanola":["Supreme pizza.jpg","Scott Bauer","dominio público"]
};

/* ================= Alérgenos y dieta =================
   ESTIMADOS a partir de los ingredientes de la carta: antes de publicar, el restaurante
   tiene que revisarlos con sus recetas y las fichas de sus proveedores.
   Los 14 alérgenos de declaración obligatoria (Reglamento UE 1169/2011). */
const ALG = ["gluten","crustaceos","huevo","pescado","cacahuetes","soja","lacteos","frutos","apio","mostaza","sesamo","sulfitos","altramuces","moluscos"];
/* Pizzas: la masa lleva gluten; el resto sale de sus ingredientes */
const ING_AL = {
  mozzarella:"lacteos", tomnata:"lacteos", gorgonzola:"lacteos", cabra:"lacteos", nata:"lacteos", cheddar:"lacteos", parmesano:"lacteos", burrata:"lacteos",
  atun:"pescado", salmon:"pescado", huevo:"huevo", sburger:"huevo mostaza", sbbq:"mostaza", pesto:"lacteos frutos", scurry:"apio mostaza"
};
const NOT_VEG = new Set("atun jcocido salmon chorizo picada picpollo jcurado bacon pollo".split(" "));
/* Resto de la carta. al: alérgenos · veg: vegetariano · hot: picante · pizza: se suman los de la pizza que elija el cliente */
const DIET = {
  "pizza:pollo-curry":{hot:1},
  "special:panuzzo":{al:"gluten lacteos"},
  "special:baguette":{al:"gluten",veg:1,pizza:1}, "special:pipo":{al:"gluten",veg:1,pizza:1}, "special:calzone":{al:"gluten",veg:1,pizza:1},
  "salad:cesar":{al:"gluten huevo lacteos pescado mostaza"}, "salad:italiana":{al:"lacteos",veg:1},
  "tapa:croquetas":{al:"gluten huevo lacteos"}, "tapa:bravas":{al:"",veg:1,hot:1}, "tapa:calamares":{al:"gluten huevo moluscos"}, "tapa:alitas":{al:""},
  "pasta:gnocchi":{al:"gluten huevo",veg:1}, "pasta:tagliatelle":{al:"gluten huevo",veg:1}, "pasta:spaghetti":{al:"gluten",veg:1},
  "sauce:pesto":{al:"lacteos frutos",veg:1}, "sauce:bolonesa":{al:"apio"}, "sauce:carbonara":{al:"huevo lacteos"}, "sauce:gorgonzola":{al:"lacteos",veg:1}, "sauce:tresquesos":{al:"lacteos",veg:1}
};

/* Hours: 0=Sun … 6=Sat. Domingo no figura en la carta: se asume cerrado. */
const HOURS = {0:[],1:[["12:30","15:30"],["19:30","22:30"]],2:[["12:30","15:30"],["19:30","22:30"]],3:[["12:30","15:30"],["19:30","22:30"]],4:[["12:30","15:30"],["19:30","22:30"]],5:[["12:30","15:30"],["19:30","23:30"]],6:[["12:30","15:30"],["19:30","23:30"]]};
const toMin = s => { const [h,m] = s.split(":").map(Number); return h*60+m; };
const fromMin = m => String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0");

/* ================= Helpers ================= */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money = (n, short=true) => {
  const loc = lang === "en" ? "en-IE" : "es-ES";
  const o = {style:"currency",currency:"EUR"};
  if (short && Number.isInteger(n)) o.minimumFractionDigits = o.maximumFractionDigits = 0;
  return new Intl.NumberFormat(loc, o).format(n);
};
const moneyEs = n => new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(n);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const ingText = (ing, l=lang) => cap(ing.map(k => ING[k][l]).join(", "));
const plusIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
const addIcon = '<svg class="add-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="ic-plus" d="M12 5v14M5 12h14"/><path class="ic-check" pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

/* ================= Status / hours ================= */
function nextOpening(now){
  const nowM = now.getHours()*60 + now.getMinutes();
  const today = HOURS[now.getDay()];
  for (const [a,b] of today) if (nowM >= toMin(a) && nowM < toMin(b)) return {open:true, until:b};
  for (let off = 0; off < 8; off++){
    const d = (now.getDay()+off) % 7;
    for (const [a] of HOURS[d]) if (off > 0 || toMin(a) > nowM) return {open:false, off, day:d, at:a};
  }
  return {open:false};
}
function renderStatus(){
  const st = nextOpening(new Date()), el = $("[data-status]");
  if (!el) return;
  el.classList.toggle("is-open", st.open);
  let txt;
  if (st.open) txt = t("open_until", {t:st.until});
  else if (st.at){
    const w = st.off === 0 ? t("today") : st.off === 1 ? t("tomorrow") : t("on_day", {d:STR[lang].days[st.day]});
    txt = t("closed_next", {w, t:st.at});
  }
  $("span", el).textContent = txt || "";
}
function renderHours(){
  const d = new Date().getDay();
  const rows = [["d_mt",[1,2,3,4],HOURS[1]],["d_fs",[5,6],HOURS[5]],["d_su",[0],[]]];
  const hours = $("#hours");
  if (hours) hours.innerHTML = `<caption>${esc(t("hours_t"))}</caption><tbody>` + rows.map(([k,days,h]) => {
    const isT = days.includes(d);
    return `<tr class="${isT ? "is-today" : ""}"><th scope="row">${esc(t(k))}${isT ? `<span class="tag">${esc(t("today_tag"))}</span>` : ""}</th><td>${h.length ? h.map(([a,b]) => `${a} – ${b}`).join("<br>") : esc(t("closed"))}</td></tr>`;
  }).join("") + "</tbody>";
  const fh = $("#foot-hours");
  if (fh) fh.innerHTML = rows.map(([k,,h]) => `<div><dt>${esc(t(k))}</dt><dd>${h.length ? h.map(([a,b]) => `${a} – ${b}`).join(", ") : esc(t("closed"))}</dd></div>`).join("");
}

/* ================= Menu render ================= */
const CATS = ["pizzas","especiales","pasta","ensaladas","tapas","postres"];
let activeCat = "pizzas";
function segHTML(uid, kind, def){
  const vals = OPTV[kind];
  return `<fieldset class="seg"><legend>${esc(t(OPTLABEL[kind]))}</legend>` + Object.entries(vals).map(([v,k]) =>
    `<label><input type="radio" name="${uid}-${kind}" value="${v}" ${v===def?"checked":""} data-opt="${kind}"><span>${esc(t(k))}</span></label>`).join("") + `</fieldset>`;
}
function pizzaSelectHTML(uid){
  return `<label class="sr-only" for="${uid}-pz">${esc(t("choose_pizza"))}</label><select class="pick" id="${uid}-pz" data-opt="pizza" aria-describedby="${uid}-pz-err">` +
    `<option value="" disabled selected>${esc(t("choose_pizza"))}</option>` + PIZZAS.map(p => `<option value="${p.id}">${esc(p.n)}</option>`).join("") + `</select><p class="err" id="${uid}-pz-err" aria-live="polite"></p>`;
}
function optsHTML(uid, opt){
  if (opt === "base") return segHTML(uid, "base", "tomate");
  if (opt === "meat") return segHTML(uid, "meat", "carne");
  if (opt === "ham") return segHTML(uid, "ham", "cocido");
  if (opt === "pizza") return pizzaSelectHTML(uid);
  return "";
}
const addBtn = (key) => `<button class="add" type="button" data-add="${key}">${addIcon}<span>${esc(t("add"))}</span></button>`;

/* Alérgenos y etiquetas de cada plato */
const DIET_ICONS = {
  veg:'<path d="M5 19c0-8.5 5.5-14 14-14 0 8.5-5.5 14-14 14z"/><path d="M5 19l8.5-8.5"/>',
  hot:'<path d="M8.5 20C4.5 20 3 17 3 17c5 0 8-4 9.5-8.5a3.5 3.5 0 0 1 6.5 2.2C17.5 16 13 20 8.5 20z"/><path d="M16 7.5c0-2 1-3.5 3-4.5"/>',
  gf:'<path d="M12 21V8"/><path d="M12 13c-2.2 0-4-1.8-4-4 2.2 0 4 1.8 4 4zm0 0c2.2 0 4-1.8 4-4-2.2 0-4 1.8-4 4zm0-5c-1.7 0-3-1.6-3-3.5 1.7 0 3 1.6 3 3.5zm0 0c1.7 0 3-1.6 3-3.5-1.7 0-3 1.6-3 3.5z"/><path d="M4 4l16 16"/>'
};
const dietIcon = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${DIET_ICONS[k]}</svg>`;
/* Un icono por alérgeno, mismo trazo que el resto de iconos de la web */
const AL_ICONS = {
  gluten:'<path d="M12 21V10"/><path d="M12 14c-2.5 0-4-1.8-4-4 2.5 0 4 1.8 4 4zm0 0c2.5 0 4-1.8 4-4-2.5 0-4 1.8-4 4zm0-4c-2 0-3.2-1.6-3.2-3.6 2 0 3.2 1.6 3.2 3.6zm0 0c2 0 3.2-1.6 3.2-3.6-2 0-3.2 1.6-3.2 3.6zM12 6.4V3"/>',
  crustaceos:'<path d="M16.95 7.05A7 7 0 1 0 14.39 18.58l-1.19-3.29a3.5 3.5 0 1 1 1.27-5.76z"/><path d="M5 12h3.5M7.05 7.05l2.48 2.48M7.05 16.95l2.48-2.48"/><path d="M13.8 17l4 .5M13.8 17l2.5 3.5"/><path d="M17 7l2.5-3.5M17 7h3.5"/>',
  huevo:'<path d="M12 3c-3.6 0-6.5 5.4-6.5 10a6.5 6.5 0 0 0 13 0C18.5 8.4 15.6 3 12 3z"/>',
  pescado:'<path d="M2.5 7.5 6 12l-3.5 4.5"/><path d="M6 12c2.5-3.5 6-5 9-5s5.5 2.5 6.5 5c-1 2.5-3.5 5-6.5 5s-6.5-1.5-9-5z"/><path d="M17 11h.01"/>',
  cacahuetes:'<path d="M12 3c-2.8 0-4.5 2-4.5 4.5 0 1.6.8 2.6.8 4.5s-.8 2.8-.8 4.5C7.5 19 9.5 21 12 21s4.5-2 4.5-4.5c0-1.7-.8-2.6-.8-4.5s.8-2.9.8-4.5C16.5 5 14.8 3 12 3z"/><path d="M10.5 7h.01M13.5 9.5h.01M10.5 15h.01M13.5 17.5h.01"/>',
  soja:'<path d="M5 19C4 14 9 5 18 4.5c1 .5 1.5 1 1.5 2C19 15 10 20 5 19z"/><circle cx="9.3" cy="14.6" r="1.5"/><circle cx="12.4" cy="11.2" r="1.5"/><circle cx="15.5" cy="7.9" r="1.5"/>',
  lacteos:'<path d="M7 9.5 9.5 5h5L17 9.5V20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/><path d="M7 9.5h10M12 5 9.5 9.5M9.5 5V3h5v2"/>',
  frutos:'<path d="M4.5 10a7.5 4.5 0 0 1 15 0z"/><path d="M6 10c0 5 2.7 9 6 11 3.3-2 6-6 6-11"/><path d="M12 5.5V3"/>',
  apio:'<path d="M9 21V10M12 21V8M15 21V10"/><path d="M9 10c-2 0-3-1.5-3-3 1.5 0 3 1 3 3zm6 0c2 0 3-1.5 3-3-1.5 0-3 1-3 3zm-3-2c-1.5-1-1.5-3.5 0-5 1.5 1.5 1.5 4 0 5z"/>',
  mostaza:'<path d="M12 2l2 4h-4z"/><path d="M9 6h6l1 3v10.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 19.5V9z"/><path d="M10.5 12.5h.01M13.5 14h.01M11 16.5h.01"/>',
  sesamo:'<path d="M7 4c1.8 1.5 2 4.5 0 6.5-2-2-1.8-5 0-6.5zm9 2c1.8 1.5 2 4.5 0 6.5-2-2-1.8-5 0-6.5zm-5.5 6.5c1.8 1.5 2 4.5 0 6.5-2-2-1.8-5 0-6.5z"/>',
  sulfitos:'<path d="M7.5 3h9l-.5 5a4 4 0 0 1-8 0z"/><path d="M8 6.5h8M12 12v8M8.5 21h7"/>',
  altramuces:'<path d="M12 22V12"/><circle cx="12" cy="4" r="1.4"/><circle cx="9.8" cy="7" r="1.6"/><circle cx="14.2" cy="7" r="1.6"/><circle cx="9.6" cy="10.6" r="1.7"/><circle cx="14.4" cy="10.6" r="1.7"/><path d="M12 17c-2.5 0-4-1.5-4.5-3.5M12 17c2.5 0 4-1.5 4.5-3.5"/>',
  moluscos:'<path d="M12 20.5 3.8 11a9 9 0 0 1 16.4 0z"/><path d="M12 20.5V6M12 20.5 8.3 6.8M12 20.5l3.7-13.7M12 20.5 5.4 9M12 20.5 18.6 9"/><path d="M10 20.5h4"/>'
};
const alIcon = a => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${AL_ICONS[a]}</svg>`;
const words = s => s ? s.split(" ") : [];
const mkDiet = (al, veg, hot) => ({al:new Set(al), veg:!!veg, hot:!!hot});
const mergeDiet = (a, b) => mkDiet([...a.al, ...b.al], a.veg && b.veg, a.hot || b.hot);
function dietOf(key, o={}){
  const x = DIET[key] || {};
  if (key.startsWith("pizza:")){
    const p = PIZZAS.find(q => "pizza:"+q.id === key);
    return mkDiet(["gluten", ...p.ing.flatMap(i => words(ING_AL[i]))], !p.ing.some(i => NOT_VEG.has(i)), x.hot);
  }
  if (key === "pasta") return mergeDiet(dietOf("pasta:"+o.pasta), dietOf("sauce:"+o.sauce));
  const d = mkDiet(words(x.al), x.veg, x.hot);
  return x.pizza && o.pizza ? mergeDiet(d, dietOf("pizza:"+o.pizza)) : d;
}
function metaHTML(key, o={}){
  const pick = !!DIET[key]?.pizza && !o.pizza;     // Baguette, Pipo, Calzone: aún sin pizza elegida
  const d = dietOf(key, o);
  const tags = ["veg","hot"].filter(k => d[k] && !(pick && k === "veg")).map(k => `<span class="dtag dtag-${k}">${dietIcon(k)}${esc(t("f_"+k))}</span>`).join("");
  const al = ALG.filter(a => d.al.has(a)).map(a => `<li>${alIcon(a)}${esc(STR[lang].al[a])}</li>`);
  if (!al.length) al.push(`<li class="al-txt">${esc(t("al_none"))}</li>`);
  if (pick) al.push(`<li class="al-txt">${esc(t("al_pick"))}</li>`);
  return `${tags}<span class="al-l">${esc(t("al_l"))}</span><ul class="al-list" role="list">${al.join("")}</ul>`;
}
const metaBox = (key, o) => `<div class="dish-meta" data-meta>${metaHTML(key, o)}</div>`;
function updateMeta(scope){
  const box = scope && $("[data-meta]", scope);
  if (box) box.innerHTML = metaHTML(scope.dataset.key, readOpts(scope));
}

/* Foto decorativa (alt vacío): es de demostración y el nombre del plato ya está en el título */
const photoHTML = id => `<img class="dish-img" src="Imagenes/Carta/${id}-sq.webp" width="240" height="240" loading="lazy" decoding="async" alt="">`;
function dishHTML(key, name, price, desc, opt, photo){
  const uid = key.replace(/[^a-z0-9]/gi, "-");
  return `<li class="dish${photo ? " has-img" : ""}" data-key="${key}">${photo ? photoHTML(photo) : ""}<div class="dish-head"><h3 class="dish-name">${esc(name)}</h3><span class="dish-leader" aria-hidden="true"></span><span class="dish-price">${money(price)}</span></div>
    ${desc ? `<p class="dish-desc">${esc(desc)}</p>` : ""}${metaBox(key)}<div class="dish-foot">${optsHTML(uid, opt)}${addBtn(key)}</div></li>`;
}
function panelHTML(cat){
  if (cat === "pizzas") return `<ul class="dishes">${PIZZAS.map(p => dishHTML("pizza:"+p.id, p.n, p.p, ingText(p.ing), p.opt, PHOTOS[p.id] && p.id)).join("")}</ul>`;
  if (cat === "especiales") return `<ul class="dishes">${SPECIALS.map(p => dishHTML("special:"+p.id, p.n, p.p, L(p.d), p.opt)).join("")}</ul>`;
  if (cat === "ensaladas") return `<ul class="dishes">${SALADS.map(p => dishHTML("salad:"+p.id, L(p.n), p.p, L(p.d))).join("")}</ul>`;
  if (cat === "tapas") return `<p class="panel-note">${esc(t("tapas_note"))}</p><ul class="dishes">${TAPAS.map(p => dishHTML("tapa:"+p.id, L(p.n), p.p, p.d ? L(p.d) : "")).join("")}</ul>`;
  if (cat === "postres") return `<p class="desserts">${esc(t("desserts"))}</p>`;
  if (cat === "pasta") return `<div class="pasta" data-key="pasta">
    <div><h3>${esc(t("pasta_t"))}</h3><p class="pasta-price" data-pasta-price>${money(PASTA.p)}</p><p class="dish-desc pasta-desc">${esc(t("pasta_desc"))}</p>${metaBox("pasta", {pasta:PASTA.pastas[0][0], sauce:PASTA.sauces[0][0]})}</div>
    <div>
      <fieldset class="pasta-group"><legend>${esc(t("pick_pasta"))}</legend><div class="chips">${PASTA.pastas.map(([v,n],k) => `<label class="chip"><input type="radio" name="pasta-type" value="${v}" ${k===0?"checked":""} data-opt="pasta"><span>${esc(L(n))}</span></label>`).join("")}</div></fieldset>
      <fieldset class="pasta-group"><legend>${esc(t("pick_sauce"))}</legend><div class="chips">${PASTA.sauces.map(([v,n],k) => `<label class="chip"><input type="radio" name="pasta-sauce" value="${v}" ${k===0?"checked":""} data-opt="sauce"><span>${esc(L(n))}</span></label>`).join("")}</div></fieldset>
      <label class="check"><input type="checkbox" data-opt="bowl"><span>${esc(t("bowl"))}</span></label>
      ${addBtn("pasta")}
    </div></div>`;
}
function renderMenu(){
  if (!$("#panels")) return;
  $("#tabs").innerHTML = CATS.map(c => `<button class="tab" role="tab" id="tab-${c}" aria-controls="panel-${c}" aria-selected="${c===activeCat}" tabindex="${c===activeCat?0:-1}" data-cat="${c}">${esc(t("c_"+c))}</button>`).join("") + `<span class="tab-ink" aria-hidden="true"></span>`;
  requestAnimationFrame(() => moveInk(false));
  $("#panels").innerHTML = CATS.map(c => `<div class="panel" role="tabpanel" id="panel-${c}" aria-labelledby="tab-${c}" ${c===activeCat?"":"hidden"} tabindex="0">${panelHTML(c)}</div>`).join("");
  const credit = $("#carta-credit");
  if (credit) credit.innerHTML = `<span>${esc(t("credit_menu"))}</span> ` + PIZZAS.filter(p => PHOTOS[p.id]).map(p => {
    const [file, who, lic] = PHOTOS[p.id];
    return `<a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}" target="_blank" rel="noopener">${esc(p.n)}: ${esc(who)} (${esc(lic)})</a>`;
  }).join(", ");
  applyFilters();
}

function hydrateMenu(){
  $$("#panels .panel").forEach(p => p.hidden = p.id !== "panel-" + activeCat);
  requestAnimationFrame(() => moveInk(false));
  applyFilters();
}

/* Filtros de la carta: vegetariano, picante, sin gluten (se combinan) */
const F = {veg:false, hot:false, gf:false};
/* ?carta=<sección>&ver=veg,gf — se reemplaza la entrada del historial, no se añaden pasos */
function syncURL(){
  const q = new URLSearchParams(location.search);
  q.set("carta", activeCat);
  const on = Object.keys(F).filter(k => F[k]);
  if (on.length) q.set("ver", on.join(",")); else q.delete("ver");
  history.replaceState(null, "", "?" + q.toString().replace(/%2C/g, ","));
}
const anyF = () => F.veg || F.hot || F.gf;
const fits = d => (!F.veg || d.veg) && (!F.hot || d.hot) && (!F.gf || !d.al.has("gluten"));
function applyFilters(){
  if (!$("#panels")) return;
  const counts = {};
  let all = 0;
  $$("#panels .panel").forEach(panel => {
    const cat = panel.id.slice(6);
    let n = null;
    $$(".dish", panel).forEach(li => {
      const key = li.dataset.key, sel = $('select[data-opt="pizza"]', li);
      let ok;
      if (sel){
        // Baguette, Pipo, Calzone: solo se ofrecen las pizzas que cumplen los filtros
        const base = dietOf(key);
        [...sel.options].forEach(op => { if (op.value) op.hidden = op.disabled = !fits(mergeDiet(base, dietOf("pizza:"+op.value))); });
        if (sel.value && sel.selectedOptions[0].disabled){ sel.value = ""; updateMeta(li); }
        ok = [...sel.options].some(op => op.value && !op.disabled);
      } else ok = fits(dietOf(key));
      li.hidden = !ok;
      n = (n || 0) + (ok ? 1 : 0);
    });
    const pasta = $(".pasta", panel);
    if (pasta){
      const pastas = PASTA.pastas.map(x => x[0]), sauces = PASTA.sauces.map(x => x[0]);
      const okP = pastas.filter(p => sauces.some(s => fits(dietOf("pasta", {pasta:p, sauce:s}))));
      const okS = sauces.filter(s => pastas.some(p => fits(dietOf("pasta", {pasta:p, sauce:s}))));
      [["pasta", okP], ["sauce", okS]].forEach(([k, ok]) => {
        const inputs = $$(`input[data-opt="${k}"]`, pasta);
        inputs.forEach(i => i.disabled = !ok.includes(i.value));
        const first = inputs.find(i => !i.disabled);
        if (first && inputs.some(i => i.checked && i.disabled)) first.checked = true;
      });
      updateMeta(pasta);
      pasta.hidden = !okP.length;
      n = okP.length ? 1 : 0;
    }
    if (n !== null){ counts[cat] = n; all += n; }
  });
  // Sección vacía: lleva a las secciones que sí tienen platos (en móvil sus pestañas pueden quedar fuera de vista)
  const withHits = CATS.filter(c => counts[c] > 0);
  $$("#panels .panel").forEach(panel => {
    $(".no-match", panel)?.remove();
    if (counts[panel.id.slice(6)] !== 0) return;
    const go = withHits.map(c => `<button class="btn btn-ghost" type="button" data-goto-cat="${c}">${esc(t("c_"+c))} (${counts[c]})</button>`).join("");
    panel.insertAdjacentHTML("beforeend", `<div class="no-match"><p>${esc(t("no_match"))}</p><div class="no-match-go">${go}<button class="btn btn-ghost" type="button" data-clear-f>${esc(t("clear_f"))}</button></div></div>`);
  });
  $$(".tab").forEach(b => {
    let s = $(".tab-n", b);
    const n = counts[b.dataset.cat];
    if (!anyF() || n === undefined){ s?.remove(); return; }
    if (!s){ s = document.createElement("span"); s.className = "tab-n"; b.append(s); }
    s.textContent = n;
    b.classList.toggle("is-empty", n === 0);
  });
  if (!anyF()) $$(".tab.is-empty").forEach(b => b.classList.remove("is-empty"));
  $$("[data-f]").forEach(b => b.setAttribute("aria-pressed", F[b.dataset.f]));
  const on = Object.keys(F).filter(k => F[k]).map(k => t("f_" + k));
  const msg = on.length ? `${on.join(", ")}: ${t(all === 1 ? "diet_n1" : "diet_n", {n:all})}` : "";
  $("#diet-status").textContent = msg;
  $("#diet-live").textContent = msg;
  $("#active-f").hidden = !anyF();
}
/* Tinta de las pestañas: se desliza a la pestaña activa */
function moveInk(animate){
  const ink = $(".tab-ink"), tab = $(`.tab[aria-selected="true"]`);
  if (!ink || !tab) return;
  ink.classList.toggle("ready", !!animate && !REDUCED);
  ink.style.setProperty("--x", tab.offsetLeft + "px");
  ink.style.setProperty("--s", tab.offsetWidth / 100);
}
addEventListener("resize", () => moveInk(false));
document.fonts && document.fonts.ready.then(() => moveInk(false));
function selectCat(c, focus){
  if (c === activeCat) return;
  activeCat = c;
  $$(".tab").forEach(b => { const on = b.dataset.cat === c; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  $$(".panel").forEach(p => {
    const on = p.id === "panel-"+c; p.hidden = !on; p.classList.remove("enter");
    if (on){ $$(".dish,.pasta,.desserts", p).forEach((d, i) => d.style.setProperty("--d", Math.min(i, 10))); void p.offsetWidth; p.classList.add("enter"); }
  });
  moveInk(true);
  // En móvil la tira de pestañas se desplaza: la elegida queda a la vista
  const tb = $(`.tab[data-cat="${c}"]`), strip = $("#tabs");
  if (tb.offsetLeft < strip.scrollLeft || tb.offsetLeft + tb.offsetWidth > strip.scrollLeft + strip.clientWidth)
    strip.scrollTo({left: tb.offsetLeft - 8, behavior: REDUCED ? "instant" : "smooth"});
  syncURL();
  // Con las pestañas ya fijas arriba, la nueva sección empieza justo debajo de ellas (no a mitad de la anterior)
  // (se mide con la posición fija de la barra: al cambiar a una sección corta la página encoge y la barra puede haberse soltado)
  const tabs = $("#carta-bar"), barBottom = parseFloat(getComputedStyle(tabs).top) + tabs.offsetHeight, panelsTop = $("#panels").getBoundingClientRect().top;
  if (panelsTop < barBottom) scrollTo({top: scrollY + panelsTop - barBottom - 16, behavior: "instant"});
}
const FORM_ICONS = {
  panuzzo:'<path d="M8 26c0-9 10-15 24-15s24 6 24 15z"/><path d="M8 31c4 3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0"/><path d="M8 36h48c0 6-10 10-24 10S8 42 8 36z"/>',
  baguette:'<path d="M5 40c0-8 10-18 27-23s27-1 27 5-10 17-27 22S5 48 5 40z"/><path d="M19 33l6-8M30 29l6-8M41 25l5-7"/>',
  pipo:'<path d="M8 38c4-15 14-24 24-24s20 9 24 24c-6-3-11-2-13 2-2-6-6-9-11-9s-9 3-11 9c-2-4-7-5-13-2z"/><path d="M23 19l5 12M41 19l-5 12M32 14v13"/>',
  calzone:'<path d="M8 40a24 24 0 0 1 48 0z"/><path d="M8 40c3 4 5-4 8 0s5-4 8 0 5-4 8 0 5-4 8 0 5-4 8 0 5-4 8 0"/><path d="M26 24l2 3M34 22l1 4M42 26l-1 3"/>'
};
function renderFormas(){
  if (!$("#formas-list")) return;
  $("#formas-list").innerHTML = SPECIALS.map(p => {
    const key = "special:"+p.id, uid = "f-"+p.id;
    return `<li class="forma" data-key="${key}"><svg viewBox="0 0 64 56" aria-hidden="true">${FORM_ICONS[p.icon].replace(/<path /g, '<path pathLength="1" ')}</svg><h3>${esc(p.n)}</h3><p>${esc(L(p.d))}</p>
      <div class="forma-foot"><span class="forma-price">${money(p.p)}</span><a class="forma-go" href="carta.html?carta=especiales">${esc(t("see_in_menu"))}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div></li>`;
  }).join("");
}

/* ================= Cart ================= */
let cart = [];
try{ cart = JSON.parse(localStorage.getItem("nano-cart-v1")) || []; }catch(e){ cart = []; }
/* Pedido abierto en WhatsApp: se recuerda hasta que el cliente confirma que lo envió o lo cambia, para no mandarlo dos veces */
let sent = null, undoCart = null, cartNote = "";
try{ sent = JSON.parse(localStorage.getItem("nano-sent-v1")); }catch(e){}
const saveSent = () => { try{ sent ? localStorage.setItem("nano-sent-v1", JSON.stringify(sent)) : localStorage.removeItem("nano-sent-v1"); }catch(e){} };
// Cualquier cambio en el pedido lo convierte en uno nuevo, todavía sin enviar
const save = () => { sent = null; saveSent(); try{ localStorage.setItem("nano-cart-v1", JSON.stringify(cart)); }catch(e){} };
function itemInfo(line, l=lang){
  const [type, id] = line.k.split(":");
  const tl = (k) => STR[l][k];
  const o = line.o || {};
  let name, price, opts = [];
  if (type === "pizza"){ const p = PIZZAS.find(x => x.id === id); name = p.n; price = p.p; }
  else if (type === "special"){ const p = SPECIALS.find(x => x.id === id); name = p.n; price = p.p; }
  else if (type === "salad"){ const p = SALADS.find(x => x.id === id); name = p.n[l]; price = p.p; }
  else if (type === "tapa"){ const p = TAPAS.find(x => x.id === id); name = p.n[l]; price = p.p; }
  else if (type === "pasta"){
    name = tl("pasta_t"); price = PASTA.p + (o.bowl ? PASTA.bowl : 0);
    opts.push(PASTA.pastas.find(x => x[0] === o.pasta)[1][l], PASTA.sauces.find(x => x[0] === o.sauce)[1][l]);
    if (o.bowl) opts.push(tl("bowl").replace(/\s*\(.*\)/, ""));
  }
  if (o.base) opts.push(`${tl("base")}: ${tl(OPTV.base[o.base]).toLowerCase()}`);
  if (o.meat) opts.push(tl(OPTV.meat[o.meat]));
  if (o.ham) opts.push(tl(OPTV.ham[o.ham]));
  if (o.pizza) opts.push(PIZZAS.find(x => x.id === o.pizza).n);
  return {name, price, opts};
}
const lineKey = (k, o) => k + "|" + JSON.stringify(o);
function announce(name){
  const el = $("#announce");
  el.textContent = "";
  setTimeout(() => { el.textContent = t("added_sr", {n:name, c:count()}); }, 60);
}
function addToCart(k, o){
  const key = lineKey(k, o);
  const ex = cart.find(l => lineKey(l.k, l.o) === key);
  if (ex) ex.q++; else cart.push({k, o, q:1});
  save(); renderCart();
}
const count = () => cart.reduce((a,l) => a + l.q, 0);
const total = () => cart.reduce((a,l) => a + itemInfo(l).price * l.q, 0);
function slotsFor(date, lead, lastBefore){
  const day = HOURS[date.getDay()], out = [];
  const now = new Date();
  const sameDay = date.toDateString() === now.toDateString();
  const nowM = now.getHours()*60 + now.getMinutes();
  for (const [a,b] of day){
    for (let m = toMin(a); m <= toMin(b) - lastBefore; m += 15){
      if (!sameDay || m >= nowM + lead) out.push(fromMin(m));
    }
  }
  return out;
}
function pickupOptions(){
  const now = new Date();
  const st = nextOpening(now);
  let slots = slotsFor(now, 25, 0), closedNote = false, dayLabel = "", dayEs = "";
  if (!slots.length || !st.open){
    if (!st.open){
      closedNote = true;
      for (let off = 0; off < 8; off++){
        const d = new Date(now); d.setDate(d.getDate()+off);
        const s = slotsFor(d, 25, 0);
        if (s.length){ slots = s; dayLabel = off === 0 ? t("today") : off === 1 ? t("tomorrow") : STR[lang].days[d.getDay()]; dayEs = off === 0 ? "hoy" : off === 1 ? "mañana" : "el " + STR.es.days[d.getDay()]; break; }
      }
    }
  }
  return {slots, asap: st.open, closedNote, dayLabel, dayEs};
}
function renderCart(){
  const n = count();
  $$("[data-count]").forEach(b => { const el = $(".badge-n", b) || b; el.textContent = n; b.hidden = n === 0; });
  document.body.classList.toggle("has-order", n > 0);
  const lbl = $("[data-bar-label]");
  lbl.textContent = n ? t("bar_items", {n, p:money(total(), false)}) : t("bar_empty");
  const body = $("#cart-body"), foot = $("#cart-foot");
  if (!n){
    const done = cartNote === "done";
    body.innerHTML = (cartNote === "cleared" ? `<p class="notice" role="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>${esc(t("cleared"))} <button class="link-btn" type="button" data-undo-cart>${esc(t("undo"))}</button></span></p>` : "") +
      `<div class="empty">${done ? `<svg class="sent-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8z"/><path d="M8 9h8M8 12.5h5"/></svg>` : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.2 11.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`}<strong>${esc(t(done ? "done_t" : "empty_t"))}</strong><p>${esc(t(done ? "done_p" : "empty_p"))}</p><a class="btn btn-gold" href="${menuHref()}" data-close-cart>${esc(t("see_menu"))}</a></div>`;
    foot.innerHTML = ""; foot.hidden = true; return;
  }
  foot.hidden = false;
  if (sent){
    body.innerHTML = `<div class="sent"><svg class="sent-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8z"/><path d="M8 9h8M8 12.5h5"/></svg><h3 class="sent-t" tabindex="-1">${esc(t("sent_t"))}</h3><p>${esc(t("sent_p", {n: t(sent.n === 1 ? "art_1" : "art_n", {n: sent.n}), p: money(sent.total, false), w: sent.when}))}</p><p>${esc(t("pay_note"))}</p></div>`;
    foot.innerHTML = `<button class="btn btn-gold btn-block" type="button" data-sent-yes>${esc(t("sent_yes"))}</button>
      <div class="sent-more"><button class="btn btn-ghost" type="button" data-sent-again>${esc(t("sent_again"))}</button><button class="link-btn" type="button" data-sent-edit>${esc(t("sent_edit"))}</button></div>`;
    return;
  }
  const minus = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14"/></svg>';
  body.innerHTML = `<ul class="lines">` + cart.map((l, idx) => {
    const it = itemInfo(l);
    return `<li class="line"><span class="line-name">${esc(it.name)}</span><span class="line-price">${money(it.price*l.q, false)}</span>
      ${it.opts.length ? `<span class="line-opts">${esc(it.opts.join(", "))}</span>` : ""}
      <div class="line-ctrl"><button class="qty-btn" type="button" data-dec="${idx}" aria-label="${esc(t("less"))}: ${esc(it.name)}">${minus}</button><span class="qty" aria-live="polite">${l.q}</span><button class="qty-btn" type="button" data-inc="${idx}" aria-label="${esc(t("more"))}: ${esc(it.name)}">${plusIcon}</button><button class="rm" type="button" data-rm="${idx}">${esc(t("remove"))}</button></div></li>`;
  }).join("") + `</ul><button class="link-btn clear-cart" type="button" data-clear-cart>${esc(t("clear_cart"))}</button>`;
  const po = pickupOptions();
  const prev = { name: $("#c-name")?.value || "", time: $("#c-time")?.value || "", notes: $("#c-notes")?.value || "" };
  body.insertAdjacentHTML("beforeend", `<div class="pickup">
    <p class="pickup-where">${esc(t("pickup_where"))} ${esc(t("pay_note"))}</p>
    ${po.closedNote ? `<p class="help help-before">${esc(t("closed_pickup"))}</p>` : ""}
    <div class="field"><label for="c-name">${esc(t("f_name"))}</label><input class="input" id="c-name" name="name" autocomplete="name" aria-describedby="c-name-err"><p class="err" id="c-name-err" aria-live="polite"></p></div>
    <div class="field"><label for="c-time">${esc(t("pickup_time"))}${po.dayLabel ? ` (${esc(po.dayLabel)})` : ""}</label><select class="input" id="c-time" name="pickup_time" aria-describedby="c-time-err">${po.asap ? `<option value="asap">${esc(t("asap"))}</option>` : `<option value="" disabled selected>${esc(t("pick_time"))}</option>`}${po.slots.map(s => `<option value="${s}">${s}</option>`).join("")}</select><p class="err" id="c-time-err" aria-live="polite"></p></div>
    <div class="field"><label for="c-notes">${esc(t("f_notes"))} <span class="opt">${esc(t("optional"))}</span></label><textarea class="input" id="c-notes" name="notes" rows="2"></textarea></div>
  </div>`);
  $("#c-name").value = prev.name; $("#c-notes").value = prev.notes;
  if (prev.time && [...$("#c-time").options].some(o => o.value === prev.time)) $("#c-time").value = prev.time;
  $("#c-time").dataset.day = po.dayEs || "hoy";
  foot.innerHTML = `<div class="total"><span>${esc(t("total"))}</span><span>${money(total(), false)}</span></div>
    <button class="btn btn-gold btn-block" type="button" id="send-order">${esc(t("cart_send"))}</button>`;
}
function sendOrder(){
  const name = $("#c-name").value.trim();
  const err = $("#c-name-err");
  if (!name){ err.textContent = t("err_name"); $("#c-name").setAttribute("aria-invalid","true"); $("#c-name").focus(); return; }
  err.textContent = ""; $("#c-name").removeAttribute("aria-invalid");
  const time = $("#c-time").value, terr = $("#c-time-err");
  if (!time){ terr.textContent = t("err_time_pick"); $("#c-time").setAttribute("aria-invalid","true"); $("#c-time").focus(); return; }
  terr.textContent = ""; $("#c-time").removeAttribute("aria-invalid");
  const lines = cart.map(l => { const it = itemInfo(l, "es"); return `${l.q} × ${it.name}${it.opts.length ? ` (${it.opts.join(", ")})` : ""} = ${moneyEs(it.price*l.q)}`; });
  const day = $("#c-time").dataset.day;
  const when = time === "asap" ? "lo antes posible" : `${day} a las ${time}`;
  const notes = $("#c-notes").value.trim();
  const msg = `Hola Nano Pizza, quiero hacer un pedido para recoger:\n\n${lines.join("\n")}\n\nTotal: ${moneyEs(total())}\nNombre: ${name}\nRecogida: ${when}${notes ? `\nNotas: ${notes}` : ""}`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  const po = pickupOptions();
  sent = {at: Date.now(), msg, n: count(), total: total(), when: time === "asap" ? t("asap").toLowerCase() : `${(po.dayLabel || t("today")).toLowerCase()} ${time}`};
  saveSent(); renderCart();
  $(".sent-t")?.focus();
}

/* Drawer */
let lastFocus = null;
function openCart(){
  lastFocus = document.activeElement;
  $("#drawer").classList.add("is-open"); $("#scrim").classList.add("is-open");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#cart-close").focus(), 60);
}
function closeCart(){
  cartNote = ""; undoCart = null;
  $("#drawer").classList.remove("is-open"); $("#scrim").classList.remove("is-open");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
function fly(from){
  if (REDUCED) return Promise.resolve();
  const target = innerWidth <= 860 ? $("#bar .btn-gold") : $(".cart-btn");
  const a = from.getBoundingClientRect(), b = target.getBoundingClientRect();
  const x0 = a.left + a.width/2, y0 = a.top + a.height/2, x1 = b.left + b.width/2, y1 = b.top + b.height/2;
  const dot = document.createElement("div"); dot.className = "flyer"; document.body.appendChild(dot);
  const mx = (x0 + x1)/2, my = Math.min(y0, y1) - 120;
  const anim = dot.animate([
    {transform:`translate(${x0}px,${y0}px) scale(1)`, opacity:1},
    {transform:`translate(${mx}px,${my}px) scale(1.15)`, opacity:1, offset:.5},
    {transform:`translate(${x1}px,${y1}px) scale(.4)`, opacity:.2}
  ], {duration:620, easing:"cubic-bezier(.5,0,.3,1)"});
  dot.style.left = dot.style.top = "0px";
  return anim.finished.then(() => dot.remove());
}
function readOpts(scope){
  const o = {};
  $$("[data-opt]", scope).forEach(el => {
    const k = el.dataset.opt;
    if (el.type === "radio"){ if (el.checked) o[k] = el.value; }
    else if (el.type === "checkbox"){ if (el.checked) o[k] = true; }
    else if (el.tagName === "SELECT") o[k] = el.value;
  });
  return o;
}
function onAdd(btn){
  const key = btn.dataset.add, scope = btn.closest("[data-key]");
  const o = readOpts(scope);
  if ("pizza" in o && !o.pizza){
    const sel = $("select[data-opt=pizza]", scope);
    sel.setAttribute("aria-invalid", "true");
    $("#" + sel.getAttribute("aria-describedby")).textContent = t("err_pick_pizza");
    sel.focus();
    if (!REDUCED) sel.animate([{transform:"translateX(0)"},{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(0)"}], {duration:260});
    return;
  }
  addToCart(key, o);
  announce(itemInfo({k:key, o}).name);
  btn.classList.add("is-done"); $("span", btn).textContent = t("added");
  clearTimeout(btn._t); btn._t = setTimeout(() => { btn.classList.remove("is-done"); $("span", btn).textContent = t("add"); }, 1400);
  fly(btn).then(() => $$("[data-count]").forEach(b => { b.classList.remove("roll"); void b.offsetWidth; b.classList.add("roll"); }));
}

/* ================= Booking ================= */
function setupBooking(){
  if (!$("#book-form")) return () => {};
  const date = $("#b-date"), time = $("#b-time"), people = $("#b-people");
  const today = new Date(); const iso = d => new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,10);
  date.min = iso(today);
  const max = new Date(); max.setDate(max.getDate()+60); date.max = iso(max);
  people.innerHTML = Array.from({length:12}, (_, k) => `<option value="${k+1}" ${k===1?"selected":""}>${k===0 ? t("people_1") : t("people_n",{n:k+1})}</option>`).join("");
  const fillTimes = () => {
    const help = $("#b-time-help");
    if (!date.value){ time.disabled = true; time.innerHTML = ""; help.textContent = t("pick_date_first"); help.hidden = false; return; }
    const d = new Date(date.value + "T12:00");
    const slots = slotsFor(d, 60, 45);
    if (!slots.length){ time.disabled = true; time.innerHTML = ""; help.textContent = t("closed_day"); help.hidden = false; return; }
    const prev = time.value;
    time.innerHTML = `<option value="">${esc(t("pick_time"))}</option>` + slots.map(s => `<option ${s===prev?"selected":""}>${s}</option>`).join("");
    time.disabled = false; help.hidden = true;
  };
  date.addEventListener("change", () => { fillTimes(); validate("date"); });
  fillTimes();
  const rules = {
    name: () => $("#b-name").value.trim() ? "" : t("err_name"),
    phone: () => $("#b-phone").value.replace(/\D/g, "").length >= 9 ? "" : t("err_phone"),
    date: () => date.value && date.value >= date.min ? "" : t("err_date"),
    time: () => time.value ? "" : (date.value ? t("err_time") : "")
  };
  const inputOf = k => ({name:$("#b-name"), phone:$("#b-phone"), date, time}[k]);
  function validate(k){
    const msg = rules[k](), el = inputOf(k);
    $(`#b-${k}-err`).textContent = msg;
    if (msg) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
    return !msg;
  }
  ["name","phone"].forEach(k => inputOf(k).addEventListener("blur", () => { if (inputOf(k).value) validate(k); }));
  time.addEventListener("change", () => validate("time"));
  $("#book-form").addEventListener("submit", e => {
    e.preventDefault();
    const bad = Object.keys(rules).filter(k => !validate(k));
    if (bad.length){ inputOf(bad[0]).focus(); return; }
    const d = new Date(date.value + "T12:00");
    const fecha = `${STR.es.days[d.getDay()]} ${d.toLocaleDateString("es-ES")}`;
    const notes = $("#b-notes").value.trim();
    const msg = `Hola Nano Pizza, quiero reservar mesa:\n\nNombre: ${$("#b-name").value.trim()}\nTeléfono: ${$("#b-phone").value.trim()}\nFecha: ${fecha}\nHora: ${time.value}\nPersonas: ${people.value}${notes ? `\nComentarios: ${notes}` : ""}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    $("#book-ok").hidden = false;
  });
  return fillTimes;
}

/* ================= Language ================= */
let refillTimes = () => {};
function applyLang(l, initial){
  lang = l;
  document.documentElement.lang = l;
  $$("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  $$("[data-i18n-ph]").forEach(el => el.placeholder = t(el.dataset.i18nPh));
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  $$("[data-i18n-title]").forEach(el => el.title = t(el.dataset.i18nTitle));
  $$("[data-i18n-alt]").forEach(el => el.alt = t(el.dataset.i18nAlt));
  const sfx = PAGE === "inicio" ? "" : "_" + (MESA ? "carta" : PAGE);
  document.title = t("meta_title" + sfx);
  $('meta[name="description"]').content = t("meta_desc" + sfx);
  $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
  renderStatus(); renderHours();
  // Al cargar en castellano la carta y las especialidades ya vienen escritas en el HTML (prerender):
  // se activan tal cual en vez de volver a generar ~1.800 elementos
  const pre = initial && l === "es";
  if (pre && $("#panels")?.children.length) hydrateMenu(); else renderMenu();
  if (!(pre && $("#formas-list")?.children.length)) renderFormas();
  renderCart();
  const people = $("#b-people");
  if (people){
    const pv = people.value;
    people.innerHTML = Array.from({length:12}, (_, k) => `<option value="${k+1}">${k===0 ? t("people_1") : t("people_n",{n:k+1})}</option>`).join("");
    people.value = pv || "2";
  }
  refillTimes();
}

/* ================= Init ================= */
refillTimes = setupBooking();
if (MESA) $("#carta .lede").dataset.i18n = "menu_sub_mesa";
applyLang(lang, true);

/* Enlace directo a la carta (QR de mesa, redes): ?carta o #carta abren la página ya en la carta,
   y ?carta=tapas (o pizzas, especiales, pasta, ensaladas, postres) en esa sección */
(() => {
  const q = new URLSearchParams(location.search);
  if (!$("#panels") || (!q.has("carta") && !q.has("ver"))) return;
  (q.get("ver") || "").split(",").forEach(k => { if (k in F) F[k] = true; });
  applyFilters();
  const c = q.get("carta");
  if (CATS.includes(c)) selectCat(c);
})();


/* Events */
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]"); if (add) return onAdd(add);
  if (e.target.closest("[data-open-cart]")){ if (!count() && innerWidth <= 860 && e.target.closest(".bar")){ location.href = menuHref(); return; } return openCart(); }
  if (e.target.closest("[data-close-cart]")) return closeCart();
  const tab = e.target.closest(".tab"); if (tab) return selectCat(tab.dataset.cat);
  const fb = e.target.closest("[data-f]"); if (fb){ F[fb.dataset.f] = !F[fb.dataset.f]; applyFilters(); return syncURL(); }
  if (e.target.closest("[data-clear-f]")){
    const fromPanel = e.target.closest(".panel");
    F.veg = F.hot = F.gf = false; applyFilters(); syncURL();
    return fromPanel && fromPanel.focus();
  }
  const lb = e.target.closest("[data-lang]");
  if (lb){ try{ localStorage.setItem("nano-lang", lb.dataset.lang); }catch(e){} return applyLang(lb.dataset.lang); }
  const inc = e.target.closest("[data-inc]"); if (inc){ cart[+inc.dataset.inc].q++; save(); renderCart(); return $(`[data-inc="${inc.dataset.inc}"]`)?.focus(); }
  const dec = e.target.closest("[data-dec]"); if (dec){ const i = +dec.dataset.dec; if (--cart[i].q <= 0) cart.splice(i, 1); save(); renderCart(); return ($(`[data-dec="${i}"]`) || $("#cart-close")).focus(); }
  const rm = e.target.closest("[data-rm]"); if (rm){ cart.splice(+rm.dataset.rm, 1); save(); renderCart(); return $("#cart-close").focus(); }
  if (e.target.closest("#send-order")) return sendOrder();
  if (e.target.closest("[data-sent-yes]")){ cart = []; save(); cartNote = "done"; renderCart(); return $("#cart-close").focus(); }
  if (e.target.closest("[data-sent-again]")) return sent && window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(sent.msg)}`, "_blank", "noopener");
  if (e.target.closest("[data-sent-edit]")){ sent = null; saveSent(); renderCart(); return $("#c-name")?.focus(); }
  if (e.target.closest("[data-clear-cart]")){ undoCart = cart; cart = []; save(); cartNote = "cleared"; renderCart(); return $("[data-undo-cart]")?.focus(); }
  if (e.target.closest("[data-undo-cart]")){ cart = undoCart || []; undoCart = null; cartNote = ""; save(); renderCart(); return $("#cart-close").focus(); }
  if (e.target.closest(".mobile-menu a")) toggleMenu(false);
});
$("#scrim").addEventListener("click", closeCart);
$("#cart-close").addEventListener("click", closeCart);
document.addEventListener("change", e => {
  if (e.target.matches('select[data-opt="pizza"]')){ e.target.removeAttribute("aria-invalid"); $("#" + e.target.getAttribute("aria-describedby")).textContent = ""; }
  if (e.target.matches('[data-opt="bowl"]')) $("[data-pasta-price]").textContent = money(PASTA.p + (e.target.checked ? PASTA.bowl : 0));
  if (e.target.matches('#panels [data-opt="pizza"], #panels [data-opt="pasta"], #panels [data-opt="sauce"]')) updateMeta(e.target.closest("[data-key]"));
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape"){ if ($("#drawer").classList.contains("is-open")) closeCart(); else toggleMenu(false); }
  if (e.key === "Tab" && $("#drawer").classList.contains("is-open")){
    const f = $$('#drawer button:not([disabled]),#drawer a[href],#drawer input,#drawer select,#drawer textarea').filter(x => x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]){ e.preventDefault(); f[f.length-1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length-1]){ e.preventDefault(); f[0].focus(); }
  }
  const tab = e.target.closest?.(".tab");
  if (tab && (e.key === "ArrowRight" || e.key === "ArrowLeft")){
    const i = CATS.indexOf(tab.dataset.cat), n = CATS[(i + (e.key === "ArrowRight" ? 1 : CATS.length - 1)) % CATS.length];
    selectCat(n, true);
  }
});

/* Mobile menu */
const mt = $(".menu-toggle");
function toggleMenu(open){
  if (open === undefined) open = mt.getAttribute("aria-expanded") !== "true";
  mt.setAttribute("aria-expanded", open);
  $("#mobile-menu").classList.toggle("is-open", open);
}
mt.addEventListener("click", () => toggleMenu());

/* Opiniones: botón de pausa de la marquesina */
const rvBox = $("#rv-marquee"), rvBtn = $("#rv-toggle");
if (rvBtn && !document.documentElement.classList.contains("anim")) rvBtn.parentElement.hidden = true;
rvBtn?.addEventListener("click", () => {
  const paused = rvBtn.getAttribute("aria-pressed") !== "true";
  rvBtn.setAttribute("aria-pressed", paused);
  rvBox.classList.toggle("is-paused", paused);
  const label = $("span", rvBtn);
  label.dataset.i18n = paused ? "rv_play" : "rv_pause";
  label.textContent = t(label.dataset.i18n);
});

/* Revelados de sección (una sola vez): fotos del horno, iconos, marca del horario */
if ("IntersectionObserver" in window){
  const ro = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); ro.unobserve(en.target); } }), {threshold:.22});
  ["#casa", "#formas", "#donde"].map(sel => $(sel)).filter(Boolean).forEach(el => ro.observe(el));
} else ["#casa", "#formas", "#donde"].map(sel => $(sel)).filter(Boolean).forEach(el => el.classList.add("in"));

/* Pie: animación de entrada al llegar a él, y enlaces que abren su pestaña de la carta */
const foot = $("#foot");
if ("IntersectionObserver" in window){
  new IntersectionObserver((es, ob) => es.forEach(en => { if (en.isIntersecting){ foot.classList.add("in"); ob.disconnect(); } }), {threshold:.15}).observe(foot);
} else foot.classList.add("in");
document.addEventListener("click", e => {
  const g = e.target.closest("[data-goto-cat]");
  if (!g || !$("#panels")) return;
  e.preventDefault();
  selectCat(g.dataset.gotoCat, !!g.closest(".no-match"));
  if (g.closest(".foot")) $("#carta").scrollIntoView({behavior: REDUCED ? "instant" : "smooth"});
});


/* Nav background + mobile bar + parallax del hero */
const nav = $("#nav"), bar = $("#bar"), hero = $("#top");
let ticking = false;
function onScroll(){
  ticking = false;
  const y = scrollY;
  nav.classList.toggle("is-solid", y > 30);
  tabsBar?.classList.toggle("is-stuck", y >= stickAt);
  bar.classList.toggle("is-shown", y > innerHeight * .6);
  if (!REDUCED && hero && heroH && y <= heroH) hero.style.setProperty("--p", (y / heroH).toFixed(4));
}
let heroH = 0;
const measureHero = () => { heroH = hero ? hero.offsetHeight : 0; };
requestAnimationFrame(measureHero);
addEventListener("resize", measureHero);
/* Pestañas fijas: se guarda a qué scroll se pegan (marca de 1 px en su sitio natural) y solo se recalcula
   cuando cambia el tamaño de la página; en el scroll basta con comparar scrollY, sin medir nada */
const tabsBar = $("#carta-bar"), tabsMark = document.createElement("div");
tabsMark.className = "tabs-mark"; tabsMark.setAttribute("aria-hidden", "true"); tabsBar?.before(tabsMark);
let stickAt = Infinity;
function measureTabs(){
  if (!tabsBar) return;
  stickAt = tabsMark.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(tabsBar).top);
  document.documentElement.style.setProperty("--tabs-h", tabsBar.offsetHeight + "px");
  tabsBar.classList.toggle("is-stuck", scrollY >= stickAt);
}
requestAnimationFrame(measureTabs);
if ($("#carta") && "IntersectionObserver" in window) new IntersectionObserver(([e]) => document.body.classList.toggle("in-carta", e.isIntersecting)).observe($("#carta"));
"ResizeObserver" in window ? new ResizeObserver(measureTabs).observe(document.body) : addEventListener("resize", measureTabs);
addEventListener("scroll", () => { if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
onScroll();
setInterval(renderStatus, 60000);
})();
