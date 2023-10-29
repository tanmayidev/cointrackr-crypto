import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinMarket } from "../../types/Interface";
import { COINS_MARKETS_API_URL } from "../../config/constants";
const Btc = require("../../images/hero/bitcoin.png");
const Eth = require("../../images/hero/ethereum.png");

function Hero() {
  const [data, setData] = useState<CoinMarket[]>([]);
  const [coinsLoad, setCoinsLoad] = useState(true);

  const url = COINS_MARKETS_API_URL;

  function numberWithCommas(x: string | undefined) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <img className="btc-float" src={Btc} alt="floating-el" />
              <h1>
                Track and Trade
                <br /> <span>Crypto currencies</span>
              </h1>
              <img className="eth-float" src={Eth} alt="floating-el" />
            </div>

            {/* mobile btn */}
            <a className="mobile-btn-hero" href="#market">
              See Prices <i className="fa-solid fa-angle-down"></i>
            </a>

            <div onLoad={() => setCoinsLoad(false)} className="coin-slider">
              {coinsLoad && <span className="loader"></span>}
              {data.map((item) => (
                <Link
                  to={`cointrackr-crypto/coin/${item.id}`}
                  key={item.id}
                  className="slider-coin"
                >
                  <img src={item?.image} alt={item?.name} />
                  <p className="slider-coin__name">
                    {item?.name}{" "}
                    <span
                      className={
                        "slider-coin__price " +
                        (Number(item.price_change_percentage_24h) <= 0
                          ? "red-text"
                          : "green-text")
                      }
                    >
                      {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                    </span>
                  </p>
                  <p className="slider-coin__price">
                    {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
