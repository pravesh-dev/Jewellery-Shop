import React, { useState, useEffect } from 'react';
import star from "../../assets/Landing_page_imgs/star.svg";

function FeedbackSlider() {
  const clients = [
    {
      img: reviewImg4,
      startsCount: 5,
      para: {
        english: `fantastic location, clean, comfortable with all the comforts. Really an oasis of peace and relaxation, excellent to relax and have privacy. We will definitely return several times. Thank you for everything ❤️`,
        italy: `fantastica location, pulita, confortevole con tutti i comfort. Davvero un'oasi di pace e relax, ottima per rilassarsi e avere privacy. Torneremo sicuramente diverse volte. Grazie per tutto ❤️`,
      },
      name: "Roberto",
      date: "November 2024",
    },
    {
      img: reviewImg1,
      startsCount: 5,
      para: {
        english: `A haven of peace as there are few, one of the best experiences we've had
Angelica is responsive and attentive which is very nice
Highly recommended
Unforgettable joy and happiness
Thanks!`,
        italy: `Un rifugio di pace come ce ne sono pochi, una delle migliori esperienze che abbiamo avuto
Angelica è reattiva e attenta, che è molto bello
Altamente raccomandato
Gioia e felicità indimenticabili
Grazie!`,
      },
      name: "Maël",
      date: "October 2024",
    },
    {
      img: reviewImg5,
      startsCount: 4,
      para: {
        english: "We had a great time at Angelica's place. We highly recommend this place for a quiet and relaxing time.",
        italy: "Abbiamo avuto un ottimo tempo al posto di Angelica. Consigliamo vivamente questo posto per un tempo tranquillo e rilassante.",
      },
      name: "Thomas",
      date: "September 2024",
    },
    {
      img: reviewImg6,
      startsCount: 5,
      para: {
        english: "Thank you so much for hosting my parents who were very happy and so relaxed for their 30th wedding anniversary. Angelica is very courteous and kind, she also wrote a nice note for our parents. We will be back. Great location to visit local places.",
        italy: "Grazie mille per aver ospitato i miei genitori che erano molto felici e così rilassati per il loro 30° anniversario di matrimonio. Angelica è molto cortese e gentile, ha anche scritto una bella nota per i nostri genitori. Torneremo. Ottima location per visitare i luoghi locali.",
      },
      name: "Francesco",
      date: "September 2024",
    },
    {
      img: reviewImg7,
      startsCount: 5,
      para: {
        english: `The Trullo is a beautiful property with stunning outdoor space, perfect for exploring Puglia. Its prime location near Alberobello, Grotte Castellane, and other key spots is ideal for sightseeing. A 2-night stay wasn’t enough to fully enjoy all it offers!`,
        italy: `Il Trullo è una splendida proprietà con uno splendido spazio esterno, perfetto per esplorare la Puglia. La sua posizione privilegiata vicino ad Alberobello, Grotte Castellane e altri punti chiave è ideale per visitare la città. Un soggiorno di 2 notti non è stato sufficiente per godere appieno di tutto ciò che offre!`,
      },
      name: "Giovannina Rosina",
      date: "november 2024",
    },
    {
      img: reviewImg2,
      startsCount: 5,
      para: {
        english: `Angelica's place is a peaceful gem in the Apulian countryside, beautifully detailed and true to the photos. While the Wi-Fi and lack of a refrigerator were minor drawbacks, Angelica's prompt support made our stay enjoyable. We loved the serene atmosphere and can’t wait to return!`,
        italy: `La casa di Angelica è un gioiello di pace nella campagna pugliese, splendidamente dettagliata e fedele alle foto. Mentre il Wi-Fi e la mancanza di un frigorifero sono stati piccoli inconvenienti, il pronto supporto di Angelica ha reso il nostro soggiorno piacevole. Abbiamo adorato l'atmosfera serena e non vediamo l'ora di tornarci!`,
      },
      name: "Sara",
      date: "August 2024",
    },
    {
      img: reviewImg3,
      startsCount: 5,
      para: {
        english: `Thanks to the super helpful host - she also made us find a little surprise when we arrived. The SPA with the indoor pool and illuminated cone creates a magical atmosphere, making your stay unforgettable. Perfect for a love escape in a charming location!`,
        italy: `Grazie all'ospite super disponibile - ha anche fatto in modo che trovassimo una piccola sorpresa quando siamo arrivati. Lo SPA con la piscina interna e il cono illuminato crea un'atmosfera magica, rendendo il tuo soggiorno indimenticabile. Perfetto per una fuga d'amore in una location incantevole!`,
      },
      name: "Angelica",
      date: "August 2024",
    },
  ];


  const language = useSelector((state) => state.language.language);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="feedback-slider w-full relative md:mt-10 md:w-[40rem] lg:mt-20 lg:w-[60rem]">
      <div className="slider-content w-full flex items-center justify-center transition-opacity duration-1000">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`slide w-full flex items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            style={{ display: index === currentIndex ? 'flex' : 'none' }}
          >
            <div className="text-center bg-[#2c2b2a] text-white p-4 rounded-lg md:flex md:items-center md:py-2 md:px-3 lg:p-0 overflow-hidden">
              <div className="w-16 h-16 mx-auto rounded-full mb-4 md:w-40 md:h-40 md:rounded-none md:mb-0 flex-shrink-0 overflow-hidden lg:w-60 lg:h-full">
                <img
                  src={client.img}
                  alt={`Feedback from ${client.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:py-4 md:px-6">
                <div className="flex justify-center mb-2 md:justify-start">
                  {Array(client.startsCount)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        src={star}
                        alt="star"
                        className="w-4 md:w-5"
                      />
                    ))}
                </div>
                <p className="text-sm mb-2 font-poppins md:text-left">{client.para[language]}</p>
                <p className="font-bellefair text-primary text-xl md:w-full md:text-right">{client.name}</p>
                <p className="text-sm font-mulish italic md:w-full md:text-right">{client.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSlider;
